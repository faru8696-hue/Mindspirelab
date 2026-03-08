-- ══════════════════════════════════════════════════════════════
-- MindSpire Lab — AP Chemistry Platform Database Schema
-- Run this in your Supabase SQL Editor
-- ══════════════════════════════════════════════════════════════

-- 1. PROFILES (extends Supabase auth.users)
create table if not exists public.profiles (
  id          uuid references auth.users(id) on delete cascade primary key,
  email       text not null,
  full_name   text,
  role        text not null default 'student' check (role in ('student','teacher')),
  is_paid     boolean not null default false,
  created_at  timestamptz default now()
);
alter table public.profiles enable row level security;
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Teachers can view all profiles" on public.profiles for select using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher')
);

-- 2. QUESTION ATTEMPTS (every Q a student answers)
create table if not exists public.attempts (
  id           bigserial primary key,
  student_id   uuid references public.profiles(id) on delete cascade,
  question_id  int not null,
  unit         int not null,
  topic        text,
  type         text,  -- MCQ / FRQ
  difficulty   text,
  correct      boolean,
  answer_given text,
  correct_ans  text,
  source       text default 'practice', -- 'practice' | 'test' | 'assignment'
  session_id   text,
  time_taken   int,  -- seconds
  created_at   timestamptz default now()
);
alter table public.attempts enable row level security;
create policy "Students own attempts" on public.attempts for all using (auth.uid() = student_id);
create policy "Teachers read all attempts" on public.attempts for select using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher')
);

-- 3. ASSIGNMENTS (teacher → student(s))
create table if not exists public.assignments (
  id           bigserial primary key,
  teacher_id   uuid references public.profiles(id),
  title        text not null,
  instructions text,
  units        int[] not null default '{}',
  question_ids int[] default '{}',
  q_count      int default 10,
  types        text[] default '{MCQ}',
  due_date     timestamptz,
  created_at   timestamptz default now()
);
alter table public.assignments enable row level security;
create policy "Teachers manage assignments" on public.assignments for all using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher')
);
create policy "Students read assignments" on public.assignments for select using (
  exists (
    select 1 from public.assignment_students as2
    where as2.assignment_id = id and as2.student_id = auth.uid()
  )
);

-- 4. ASSIGNMENT → STUDENT mapping
create table if not exists public.assignment_students (
  id             bigserial primary key,
  assignment_id  bigint references public.assignments(id) on delete cascade,
  student_id     uuid references public.profiles(id) on delete cascade,
  status         text default 'pending' check (status in ('pending','in_progress','completed')),
  score          int,
  total          int,
  pct            int,
  submitted_at   timestamptz,
  unique (assignment_id, student_id)
);
alter table public.assignment_students enable row level security;
create policy "Students own assignment_students" on public.assignment_students for all using (auth.uid() = student_id);
create policy "Teachers read all assignment_students" on public.assignment_students for select using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher')
);
create policy "Teachers update assignment_students" on public.assignment_students for update using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher')
);

-- 5. TESTS (teacher-created timed tests)
create table if not exists public.tests (
  id           bigserial primary key,
  teacher_id   uuid references public.profiles(id),
  title        text not null,
  instructions text,
  units        int[] not null default '{}',
  question_ids int[] default '{}',
  q_count      int default 20,
  types        text[] default '{MCQ}',
  time_limit   int default 30,  -- minutes, 0 = no limit
  due_date     timestamptz,
  created_at   timestamptz default now()
);
alter table public.tests enable row level security;
create policy "Teachers manage tests" on public.tests for all using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher')
);
create policy "Students read tests" on public.tests for select using (
  exists (
    select 1 from public.test_students ts
    where ts.test_id = id and ts.student_id = auth.uid()
  )
);

-- 6. TEST → STUDENT mapping
create table if not exists public.test_students (
  id           bigserial primary key,
  test_id      bigint references public.tests(id) on delete cascade,
  student_id   uuid references public.profiles(id) on delete cascade,
  status       text default 'pending' check (status in ('pending','in_progress','completed')),
  score        int,
  total        int,
  pct          int,
  started_at   timestamptz,
  submitted_at timestamptz,
  answers      jsonb,  -- store all answers for review
  unique (test_id, student_id)
);
alter table public.test_students enable row level security;
create policy "Students own test_students" on public.test_students for all using (auth.uid() = student_id);
create policy "Teachers read all test_students" on public.test_students for select using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher')
);
create policy "Teachers update test_students" on public.test_students for update using (
  exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher')
);

-- 7. AUTO-CREATE PROFILE ON SIGNUP (trigger)
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email,'@',1)),
    coalesce(new.raw_user_meta_data->>'role', 'student')
  );
  return new;
end;
$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
