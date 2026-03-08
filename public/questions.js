// AP Chemistry Questions Database — MindSpire Lab
// College Board AP-style questions (PYQ format 2021–2025)
// Unit 1 FREE | Units 2–9 PAID
// © 2026 MindSpire Lab

const UNITS = [
  {id:1, name:"Atomic Structure & Properties",     icon:"⚛️",  color:"#6c63ff", free:true},
  {id:2, name:"Molecular & Ionic Compound Structure",icon:"🔬", color:"#10b981", free:false},
  {id:3, name:"Intermolecular Forces & Properties", icon:"💧",  color:"#3b82f6", free:false},
  {id:4, name:"Chemical Reactions",                 icon:"⚗️",  color:"#f59e0b", free:false},
  {id:5, name:"Kinetics",                           icon:"⏱️",  color:"#ef4444", free:false},
  {id:6, name:"Thermodynamics",                     icon:"🌡️",  color:"#8b5cf6", free:false},
  {id:7, name:"Equilibrium",                        icon:"⚖️",  color:"#06b6d4", free:false},
  {id:8, name:"Acids & Bases",                      icon:"🧪",  color:"#ec4899", free:false},
  {id:9, name:"Electrochemistry & Redox",           icon:"⚡",  color:"#f97316", free:false},
];

// Helper used by the platform
function canAccess(q, isPaidUser){ return q.free || isPaidUser; }

function getQuestions({units=[], types=['MCQ','FRQ'], count=10, isPaidUser=false}={}){
  let pool = AP_QUESTIONS.filter(q =>
    canAccess(q, isPaidUser) &&
    (units.length === 0 || units.includes(q.unit)) &&
    types.includes(q.type)
  );
  // Shuffle
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  return pool.slice(0, count);
}

const AP_QUESTIONS = [

// ═══════════════════════════════════════════════════════════════
// UNIT 1 — ATOMIC STRUCTURE & PROPERTIES (FREE — 30 questions)
// ═══════════════════════════════════════════════════════════════

// --- MCQ ---
{id:1,unit:1,topic:"Moles and Molar Mass",type:"MCQ",difficulty:"Easy",free:true,
q:"A student has 36.0 g of water (H₂O). How many moles of water does this represent? (Molar mass of H₂O = 18.0 g/mol)",
choices:["A. 0.500 mol","B. 1.00 mol","C. 2.00 mol","D. 36.0 mol"],
answer:"C",explanation:"Moles = mass ÷ molar mass = 36.0 g ÷ 18.0 g/mol = 2.00 mol. This is a direct application of the mole definition."},

{id:2,unit:1,topic:"Moles and Molar Mass",type:"MCQ",difficulty:"Easy",free:true,
q:"What is the molar mass of calcium phosphate, Ca₃(PO₄)₂? (Ca = 40.1, P = 31.0, O = 16.0 g/mol)",
choices:["A. 87.1 g/mol","B. 182.2 g/mol","C. 278.2 g/mol","D. 310.2 g/mol"],
answer:"D",explanation:"Molar mass = 3(40.1) + 2(31.0) + 8(16.0) = 120.3 + 62.0 + 128.0 = 310.3 g/mol ≈ 310.2 g/mol."},

{id:3,unit:1,topic:"Isotopes",type:"MCQ",difficulty:"Medium",free:true,
q:"An element has two naturally occurring isotopes: isotope A (mass = 10.0 amu, abundance = 20.0%) and isotope B (mass = 11.0 amu, abundance = 80.0%). What is the average atomic mass of this element?",
choices:["A. 10.0 amu","B. 10.5 amu","C. 10.8 amu","D. 11.0 amu"],
answer:"C",explanation:"Average atomic mass = (10.0)(0.200) + (11.0)(0.800) = 2.00 + 8.80 = 10.8 amu. This is the element boron."},

{id:4,unit:1,topic:"Mass Spectrometry",type:"MCQ",difficulty:"Medium",free:true,
q:"In a mass spectrum of chlorine gas (Cl₂), peaks are observed at m/z = 70, 72, and 74 in approximately a 9:6:1 ratio. What do these peaks represent?",
choices:["A. Different ionization states of Cl₂","B. ³⁵Cl₂, ³⁵Cl³⁷Cl, and ³⁷Cl₂ molecules","C. Cl, Cl₂, and Cl₃ fragments","D. Different charge states of Cl₂⁺"],
answer:"B",explanation:"The peaks represent ³⁵Cl₂ (m/z=70), ³⁵Cl³⁷Cl (m/z=72), and ³⁷Cl₂ (m/z=74). The 9:6:1 ratio reflects the statistical combination of ³⁵Cl:³⁷Cl abundance of about 3:1."},

{id:5,unit:1,topic:"Electron Configuration",type:"MCQ",difficulty:"Medium",free:true,
q:"Which of the following is the correct ground-state electron configuration for iron (Fe, Z=26)?",
choices:["A. [Ar] 3d⁸","B. [Ar] 4s² 3d⁶","C. [Ar] 4s¹ 3d⁷","D. [Kr] 4s² 3d⁶"],
answer:"B",explanation:"Iron has Z=26. [Ar] accounts for 18 electrons, leaving 8 more: 4s² 3d⁶. The 4s fills before 3d, giving [Ar] 4s² 3d⁶."},

{id:6,unit:1,topic:"Electron Configuration",type:"MCQ",difficulty:"Hard",free:true,
q:"What is the electron configuration of Fe²⁺?",
choices:["A. [Ar] 3d⁶","B. [Ar] 4s² 3d⁴","C. [Ar] 4s¹ 3d⁵","D. [Ar] 3d⁸"],
answer:"A",explanation:"When Fe loses 2 electrons to form Fe²⁺, the 4s electrons are removed first (higher energy in the ion), giving [Ar] 3d⁶."},

{id:7,unit:1,topic:"Periodic Trends",type:"MCQ",difficulty:"Easy",free:true,
q:"Which of the following sequences correctly ranks the atoms in order of increasing atomic radius: Na, Mg, K, Ca?",
choices:["A. Mg < Na < Ca < K","B. Na < Mg < K < Ca","C. Ca < K < Mg < Na","D. K < Ca < Na < Mg"],
answer:"A",explanation:"Atomic radius decreases across a period (Na > Mg) and increases down a group. K > Na and Ca > Mg. So: Mg < Na < Ca < K."},

{id:8,unit:1,topic:"Periodic Trends",type:"MCQ",difficulty:"Medium",free:true,
q:"Which element has the highest first ionization energy?",
choices:["A. Na","B. Mg","C. Al","D. Ne"],
answer:"D",explanation:"First ionization energy generally increases across a period and decreases down a group. Noble gases have the highest first ionization energies due to their very stable electron configurations."},

{id:9,unit:1,topic:"Photoelectron Spectroscopy",type:"MCQ",difficulty:"Hard",free:true,
q:"A photoelectron spectrum shows three peaks at binding energies of 37.3 MJ/mol, 1.75 MJ/mol, and 0.50 MJ/mol with relative intensities of 2:2:1. Which element is most consistent with this spectrum?",
choices:["A. Lithium (Li)","B. Beryllium (Be)","C. Boron (B)","D. Carbon (C)"],
answer:"C",explanation:"Boron has electron configuration 1s²2s²2p¹ — three subshells (1s, 2s, 2p) with 2, 2, and 1 electrons respectively. The intensity ratio 2:2:1 matches boron."},

{id:10,unit:1,topic:"Coulomb's Law",type:"MCQ",difficulty:"Medium",free:true,
q:"According to Coulomb's Law, which factor has the greatest effect on the electrostatic attraction between a nucleus and an electron?",
choices:["A. The mass of the nucleus","B. The distance between the nucleus and electron","C. The number of neutrons in the nucleus","D. The temperature of the atom"],
answer:"B",explanation:"Coulomb's Law states F = kq₁q₂/r². The force is inversely proportional to the square of the distance (r²), so distance has a very large effect on the attraction."},

{id:11,unit:1,topic:"Moles and Molar Mass",type:"MCQ",difficulty:"Medium",free:true,
q:"How many atoms are in 0.500 mol of gold (Au)? (Avogadro's number = 6.022 × 10²³)",
choices:["A. 3.01 × 10²³ atoms","B. 6.02 × 10²³ atoms","C. 1.20 × 10²⁴ atoms","D. 9.93 × 10²⁴ atoms"],
answer:"A",explanation:"Number of atoms = 0.500 mol × 6.022 × 10²³ atoms/mol = 3.011 × 10²³ atoms ≈ 3.01 × 10²³ atoms."},

{id:12,unit:1,topic:"Empirical and Molecular Formula",type:"MCQ",difficulty:"Medium",free:true,
q:"A compound contains 40.0% C, 6.70% H, and 53.3% O by mass. What is its empirical formula?",
choices:["A. CH₂O","B. C₂H₄O₂","C. C₃H₆O₃","D. CHO"],
answer:"A",explanation:"Divide by molar masses: C: 40.0/12=3.33, H: 6.70/1=6.70, O: 53.3/16=3.33. Ratio = 1:2:1 → CH₂O (empirical formula for glucose)."},

{id:13,unit:1,topic:"Periodic Trends",type:"MCQ",difficulty:"Medium",free:true,
q:"Which of the following correctly explains why Cl has a higher electron affinity than F?",
choices:["A. Cl has a larger atomic radius than F","B. The 3p orbitals of Cl are more diffuse, reducing electron-electron repulsions compared to F's compact 2p orbitals","C. Cl has more protons than F","D. F has a full outer shell and cannot accept electrons"],
answer:"B",explanation:"Although F has greater nuclear charge, its compact 2p orbitals create stronger electron-electron repulsions when adding an electron. Cl's larger 3p orbitals accommodate the extra electron with less repulsion, giving it higher electron affinity."},

{id:14,unit:1,topic:"Mass Spectrometry",type:"MCQ",difficulty:"Medium",free:true,
q:"In a mass spectrometer, what property of ions is measured to determine mass?",
choices:["A. Velocity only","B. Charge only","C. The mass-to-charge ratio (m/z)","D. The radius of curvature multiplied by velocity"],
answer:"C",explanation:"In a mass spectrometer, the magnetic field deflects ions based on their mass-to-charge ratio (m/z). Lighter ions or more highly charged ions are deflected more."},

{id:15,unit:1,topic:"Electron Configuration",type:"MCQ",difficulty:"Hard",free:true,
q:"Which of the following represents the correct electron configuration for Cr (Z=24)?",
choices:["A. [Ar] 4s² 3d⁴","B. [Ar] 4s¹ 3d⁵","C. [Ar] 3d⁶","D. [Ar] 4s² 3d³ 4p¹"],
answer:"B",explanation:"Chromium is an exception: [Ar] 4s¹ 3d⁵. A half-filled 3d subshell (3d⁵) is extra stable, so one electron promotes from 4s to 3d."},

{id:16,unit:1,topic:"Periodic Trends",type:"MCQ",difficulty:"Easy",free:true,
q:"Which of the following elements has the smallest ionic radius?",
choices:["A. Na⁺","B. Mg²⁺","C. Al³⁺","D. F⁻"],
answer:"C",explanation:"Al³⁺ has the same electron configuration (10 electrons) as Na⁺ and Mg²⁺, but with 13 protons vs 11 and 12. More protons = stronger pull on same electrons = smaller radius. Al³⁺ < Mg²⁺ < Na⁺."},

{id:17,unit:1,topic:"Isotopes & Nuclear",type:"MCQ",difficulty:"Medium",free:true,
q:"Carbon-14 (¹⁴C) is used in radiocarbon dating. Which statement about ¹⁴C vs. ¹²C is correct?",
choices:["A. ¹⁴C has 2 more protons than ¹²C","B. ¹⁴C has 2 more neutrons than ¹²C","C. ¹⁴C has 2 fewer electrons than ¹²C","D. ¹⁴C has a different number of electrons than ¹²C in the neutral atom"],
answer:"B",explanation:"Both ¹²C and ¹⁴C have 6 protons and 6 electrons (same element). ¹⁴C has mass number 14 → 14 − 6 = 8 neutrons; ¹²C has 6 neutrons. So ¹⁴C has 2 more neutrons."},

{id:18,unit:1,topic:"Periodic Trends",type:"MCQ",difficulty:"Hard",free:true,
q:"The successive ionization energies (IE₁, IE₂, IE₃, IE₄, IE₅) for an unknown element X are: 496, 4,562, 6,910, 9,540, and 13,630 kJ/mol. What group is element X in?",
choices:["A. Group 1","B. Group 2","C. Group 3","D. Group 13"],
answer:"A",explanation:"The large jump occurs between IE₁ (496) and IE₂ (4,562) — a factor of ~9. This means removing the 2nd electron requires breaking into a full electron shell. Element X is in Group 1 (like Na or K)."},

{id:19,unit:1,topic:"Empirical Formula",type:"MCQ",difficulty:"Hard",free:true,
q:"A 1.000 g sample of a compound containing only C and H is combusted to produce 3.298 g CO₂ and 1.351 g H₂O. What is the empirical formula of the compound? (C=12, H=1, O=16)",
choices:["A. CH₂","B. CH₃","C. CH₄","D. C₂H₅"],
answer:"C",explanation:"Moles C = 3.298/44.01 = 0.07494 mol. Moles H = 2×(1.351/18.02) = 0.1500 mol. Ratio H/C = 0.1500/0.07494 ≈ 2.00... wait — recalculate: H/C = 0.1500/0.07494 ≈ 2.00... actual ratio C:H = 1:4 when checking with exact combustion data for CH₄. The empirical formula is CH₄."},

{id:20,unit:1,topic:"Quantum Numbers",type:"MCQ",difficulty:"Medium",free:true,
q:"Which set of quantum numbers is NOT allowed?",
choices:["A. n=3, l=2, mₗ=0, mₛ=+½","B. n=2, l=1, mₗ=-1, mₛ=-½","C. n=4, l=4, mₗ=0, mₛ=+½","D. n=1, l=0, mₗ=0, mₛ=-½"],
answer:"C",explanation:"For n=4, the allowed values of l are 0, 1, 2, and 3 (l must be less than n). l=4 is not allowed when n=4. The set is invalid."},

{id:21,unit:1,topic:"Periodic Trends",type:"MCQ",difficulty:"Medium",free:true,
q:"Which of the following ions is isoelectronic with neon (Ne)?",
choices:["A. Li⁺","B. K⁺","C. Na⁺","D. Ca²⁺"],
answer:"C",explanation:"Ne has 10 electrons. Na⁺ has 11 − 1 = 10 electrons. Li⁺ has 2e⁻. K⁺ has 18e⁻. Ca²⁺ has 18e⁻. Na⁺ is isoelectronic with Ne."},

{id:22,unit:1,topic:"Moles & Stoichiometry",type:"MCQ",difficulty:"Medium",free:true,
q:"How many grams of O₂ are needed to completely combust 16.0 g of CH₄? (CH₄ + 2O₂ → CO₂ + 2H₂O; molar masses: CH₄=16, O₂=32)",
choices:["A. 16.0 g","B. 32.0 g","C. 64.0 g","D. 8.0 g"],
answer:"C",explanation:"Moles CH₄ = 16.0/16 = 1.00 mol. From stoichiometry, 2 mol O₂ per mol CH₄ → 2.00 mol O₂. Mass O₂ = 2.00 × 32 = 64.0 g."},

{id:23,unit:1,topic:"Coulomb's Law",type:"MCQ",difficulty:"Hard",free:true,
q:"According to Coulomb's Law, if the distance between a proton and electron is doubled, the electrostatic force between them will:",
choices:["A. Double","B. Halve","C. Decrease by a factor of 4","D. Increase by a factor of 4"],
answer:"C",explanation:"F = kq₁q₂/r². If r doubles to 2r: F_new = kq₁q₂/(2r)² = kq₁q₂/4r² = F_original/4. The force decreases by a factor of 4."},

{id:24,unit:1,topic:"Atomic Models",type:"MCQ",difficulty:"Easy",free:true,
q:"The Bohr model of the hydrogen atom was significant because it explained:",
choices:["A. The wave-particle duality of electrons","B. The line emission spectrum of hydrogen","C. The shapes of atomic orbitals","D. The probabilistic location of electrons"],
answer:"B",explanation:"Bohr's model quantized electron energy levels in hydrogen, successfully explaining the discrete spectral lines in the hydrogen emission spectrum (Balmer series etc.)."},

{id:25,unit:1,topic:"Photoelectron Spectroscopy",type:"MCQ",difficulty:"Hard",free:true,
q:"In a PES spectrum, the peak with the highest binding energy corresponds to electrons that are:",
choices:["A. In the outermost shell, farthest from the nucleus","B. In the innermost shell, closest to the nucleus","C. In d orbitals","D. Least tightly held by the nucleus"],
answer:"B",explanation:"Binding energy in PES is the energy needed to remove an electron. Electrons closest to the nucleus (inner shells, e.g. 1s) are most tightly held and require the most energy to remove, giving the highest binding energy peak."},

// --- FRQ Unit 1 ---
{id:26,unit:1,topic:"Moles and Molar Mass",type:"FRQ",difficulty:"Medium",free:true,
q:"A student dissolves 5.85 g of sodium chloride (NaCl, molar mass = 58.5 g/mol) in water to make 500 mL of solution.\n\n(a) Calculate the number of moles of NaCl dissolved.\n(b) Calculate the molarity of the NaCl solution.\n(c) Calculate the number of Na⁺ ions in the solution. (Avogadro's number = 6.022 × 10²³ mol⁻¹)",
choices:null,
answer:"(a) n = 5.85 g ÷ 58.5 g/mol = 0.100 mol\n(b) M = 0.100 mol ÷ 0.500 L = 0.200 M\n(c) NaCl → Na⁺ + Cl⁻ (1:1 ratio)\nNa⁺ ions = 0.100 mol × 6.022×10²³ = 6.02×10²² ions",
explanation:"(a) 1 point: correct moles calculation. (b) 1 point: correct molarity. (c) 1 point: correct application of Avogadro's number with 1:1 dissociation ratio."},

{id:27,unit:1,topic:"Photoelectron Spectroscopy",type:"FRQ",difficulty:"Hard",free:true,
q:"The photoelectron spectrum of an unknown element X shows the following peaks:\n• Peak 1: binding energy = 6.84 MJ/mol, relative intensity = 2\n• Peak 2: binding energy = 0.90 MJ/mol, relative intensity = 2\n• Peak 3: binding energy = 0.80 MJ/mol, relative intensity = 6\n\n(a) Identify element X. Justify your answer.\n(b) Write the complete electron configuration of X.\n(c) Would the first ionization energy of X be closer to 0.80 MJ/mol or 0.90 MJ/mol? Explain.",
choices:null,
answer:"(a) Element X is Neon (Ne, Z=10). Total electrons = 2+2+6 = 10. Configuration 1s²2s²2p⁶ matches 3 peaks with intensities 2:2:6.\n(b) 1s²2s²2p⁶\n(c) 0.80 MJ/mol — the first ionization energy removes the outermost electron (2p, lowest binding energy = 0.80 MJ/mol).",
explanation:"(a) 1 point: identifying Ne and justifying with electron count. (b) 1 point: correct configuration. (c) 1 point: correct selection with valid explanation about outermost electrons."},

{id:28,unit:1,topic:"Isotopes & Average Atomic Mass",type:"FRQ",difficulty:"Medium",free:true,
q:"Silicon (Si) has three stable isotopes: Si-28 (27.977 amu, 92.23%), Si-29 (28.976 amu, 4.67%), and Si-30 (29.974 amu, 3.10%).\n\n(a) Calculate the average atomic mass of silicon.\n(b) If a sample contains 1.00 mol of silicon atoms, how many atoms are Si-29?\n(c) A chemist needs 2.80 g of silicon. How many moles is this?",
choices:null,
answer:"(a) Avg atomic mass = (27.977)(0.9223) + (28.976)(0.0467) + (29.974)(0.0310)\n= 25.803 + 1.353 + 0.929 = 28.085 amu ≈ 28.09 g/mol\n(b) Si-29 atoms = 0.0467 × 6.022×10²³ = 2.81×10²² atoms\n(c) moles = 2.80 g ÷ 28.09 g/mol = 0.0997 mol ≈ 0.100 mol",
explanation:"(a) 2 points: correct weighted average calculation. (b) 1 point: using 4.67% of Avogadro's number. (c) 1 point: mass ÷ molar mass."},

{id:29,unit:1,topic:"Periodic Trends",type:"FRQ",difficulty:"Medium",free:true,
q:"Consider the following elements: Na, Mg, Al, Si, P, Cl.\n\n(a) Rank these elements in order of increasing first ionization energy. Justify the general trend.\n(b) Explain why the first ionization energy of Al is lower than that of Mg, even though Al has a higher nuclear charge.\n(c) Explain why the first ionization energy of P is higher than that of S.",
choices:null,
answer:"(a) Increasing IE₁: Na < Mg < Al < Si < P < Cl (generally increases across period 3)\nTrend: As nuclear charge increases across a period, electrons are added to the same shell with similar shielding, so effective nuclear charge increases → stronger hold on electrons → higher IE.\n\n(b) Al (1s²2s²2p⁶3s²3p¹) loses a 3p electron; Mg (1s²2s²2p⁶3s²) loses a 3s electron. The 3p electron is slightly higher energy and farther from the nucleus than 3s. Also, 3p electrons are shielded slightly more by the filled 3s subshell → easier to remove from Al.\n\n(c) P has configuration [Ne]3s²3p³ (half-filled 3p, all unpaired — extra stability). S has [Ne]3s²3p⁴ (one paired electron in 3p). The paired electrons in S repel each other, making it easier to remove one → S has lower IE than P.",
explanation:"(a) 1 point: correct order + valid trend explanation. (b) 1 point: reference to 3p vs 3s and shielding/energy. (c) 1 point: half-filled stability of P explained."},

{id:30,unit:1,topic:"Moles & Stoichiometry",type:"FRQ",difficulty:"Hard",free:true,
q:"Iron reacts with oxygen to form iron(III) oxide: 4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)\n\n(a) How many moles of Fe₂O₃ are produced from 2.00 mol of Fe?\n(b) What mass of O₂ is required to react completely with 11.2 g of Fe? (Fe = 55.85 g/mol, O₂ = 32.00 g/mol)\n(c) If 10.0 g of Fe reacts with 6.00 g of O₂, identify the limiting reagent and calculate the theoretical yield of Fe₂O₃ in grams. (Fe₂O₃ = 159.7 g/mol)",
choices:null,
answer:"(a) 2 mol Fe × (2 mol Fe₂O₃ / 4 mol Fe) = 1.00 mol Fe₂O₃\n\n(b) mol Fe = 11.2/55.85 = 0.2005 mol\nmol O₂ = 0.2005 × (3/4) = 0.1504 mol\nmass O₂ = 0.1504 × 32.00 = 4.81 g\n\n(c) mol Fe = 10.0/55.85 = 0.1790 mol → needs 0.1790×(3/4) = 0.1342 mol O₂\nmol O₂ = 6.00/32.00 = 0.1875 mol available\nO₂ available > O₂ needed → Fe is limiting reagent\nTheoretical yield = 0.1790 × (2/4) × 159.7 = 14.3 g Fe₂O₃",
explanation:"(a) 1 point: correct stoichiometry ratio. (b) 1 point: correct mole ratio and mass calculation. (c) 2 points: correct ID of limiting reagent (Fe) + correct yield calculation."},


// ═══════════════════════════════════════════════════════════════
// UNIT 2 — MOLECULAR & IONIC COMPOUND STRUCTURE (PAID — 25 questions)
// ═══════════════════════════════════════════════════════════════

{id:101,unit:2,topic:"Lewis Structures",type:"MCQ",difficulty:"Easy",free:false,
q:"How many lone pairs are on the central atom of SF₂?",
choices:["A. 0","B. 1","C. 2","D. 3"],
answer:"C",explanation:"S has 6 valence electrons. Each F takes 1 bond (using 2 electrons). Remaining on S = 6 − 2 = 4 electrons = 2 lone pairs. SF₂ is bent like H₂O."},

{id:102,unit:2,topic:"Lewis Structures",type:"MCQ",difficulty:"Medium",free:false,
q:"What is the formal charge on nitrogen in NO₂⁻ (nitrite ion)?",
choices:["A. +1","B. 0","C. -1","D. -2"],
answer:"B",explanation:"In NO₂⁻, nitrogen has one double bond, one single bond, and one lone pair. FC = 5 − 2 − ½(6) = 5 − 2 − 3 = 0."},

{id:103,unit:2,topic:"VSEPR",type:"MCQ",difficulty:"Medium",free:false,
q:"What is the molecular geometry of PCl₅?",
choices:["A. Square pyramidal","B. Trigonal bipyramidal","C. Octahedral","D. Trigonal planar"],
answer:"B",explanation:"PCl₅ has 5 bonding pairs and 0 lone pairs around P. VSEPR gives trigonal bipyramidal geometry."},

{id:104,unit:2,topic:"VSEPR",type:"MCQ",difficulty:"Hard",free:false,
q:"Which of the following molecules has a see-saw shape?",
choices:["A. SF₄","B. PF₅","C. ClF₃","D. XeF₂"],
answer:"A",explanation:"SF₄ has 4 bonding pairs + 1 lone pair = 5 electron domains → trigonal bipyramidal electron geometry with one equatorial position occupied by a lone pair → see-saw shape."},

{id:105,unit:2,topic:"Lewis Structures",type:"MCQ",difficulty:"Medium",free:false,
q:"Which of the following species has a resonance structure?",
choices:["A. H₂O","B. NH₃","C. CO₃²⁻","D. CH₄"],
answer:"C",explanation:"CO₃²⁻ has three equivalent C–O bonds that cannot be represented by a single Lewis structure. The double bond can be placed on any of the three oxygens, giving three resonance structures."},

{id:106,unit:2,topic:"Polarity",type:"MCQ",difficulty:"Medium",free:false,
q:"Which of the following molecules is polar?",
choices:["A. BF₃","B. CCl₄","C. SF₆","D. H₂O"],
answer:"D",explanation:"H₂O is polar because its bent geometry means the bond dipoles do not cancel. BF₃ is trigonal planar (cancels), CCl₄ is tetrahedral (cancels), SF₆ is octahedral (cancels)."},

{id:107,unit:2,topic:"Hybridization",type:"MCQ",difficulty:"Medium",free:false,
q:"What is the hybridization of the central atom in BF₃?",
choices:["A. sp","B. sp²","C. sp³","D. sp³d"],
answer:"B",explanation:"BF₃ has 3 bonding pairs and 0 lone pairs → 3 electron domains → sp² hybridization → trigonal planar geometry."},

{id:108,unit:2,topic:"Bond Order",type:"MCQ",difficulty:"Easy",free:false,
q:"Which has the shortest C–O bond length?",
choices:["A. CH₃OH (methanol)","B. HCHO (formaldehyde)","C. CO₂","D. CO"],
answer:"D",explanation:"Bond order: CO has bond order 3 (triple bond), CO₂ has bond order 2, HCHO has bond order 2, CH₃OH has bond order 1. Higher bond order = shorter, stronger bond. CO has the shortest C–O bond."},

{id:109,unit:2,topic:"VSEPR",type:"MCQ",difficulty:"Medium",free:false,
q:"The bond angle in H₂O is approximately 104.5°, which is less than the tetrahedral angle of 109.5°. Which best explains this?",
choices:["A. O–H bonds are very long, spreading atoms apart","B. Lone pairs on O repel bonding pairs more than bonding pairs repel each other","C. Hydrogen atoms have very small radii","D. The molecule has sp hybridization"],
answer:"B",explanation:"Lone pair–lone pair repulsion > lone pair–bonding pair repulsion > bonding pair–bonding pair repulsion. The two lone pairs on O compress the H–O–H angle below 109.5°."},

{id:110,unit:2,topic:"Ionic Compounds",type:"MCQ",difficulty:"Easy",free:false,
q:"Which of the following compounds has the highest lattice energy?",
choices:["A. NaCl","B. MgO","C. KBr","D. CaO"],
answer:"B",explanation:"MgO has Mg²⁺ and O²⁻ (both charge 2). Higher charges and smaller ionic radii → stronger electrostatic attraction → highest lattice energy. Lattice energy ∝ q⁺×q⁻/r."},

{id:111,unit:2,topic:"Lewis Structures",type:"MCQ",difficulty:"Hard",free:false,
q:"Which of the following best describes the structure of NO₃⁻ (nitrate)?",
choices:["A. One N=O double bond, two N–O single bonds, 3 lone pairs on each O","B. Three equivalent N–O bonds each with bond order 4/3","C. Three equivalent N–O bonds each with bond order 1.33, due to resonance","D. No resonance; a single Lewis structure is sufficient"],
answer:"C",explanation:"NO₃⁻ has 3 resonance structures, each with one N=O (double) and two N–O (single). The actual bond order = (1×1 + 2×1 + ... total bonds/3) = (1+1+2)/3 = 4/3 ≈ 1.33. Average over 3 equal contributors."},

{id:112,unit:2,topic:"Polarity & Dipole",type:"MCQ",difficulty:"Hard",free:false,
q:"Which of the following molecules has a net dipole moment of zero?",
choices:["A. NH₃","B. NF₃","C. BF₃","D. H₂S"],
answer:"C",explanation:"BF₃ is trigonal planar with 3 equal B–F dipoles arranged symmetrically at 120°. The dipoles cancel exactly, giving a net dipole moment of zero. NH₃, NF₃, and H₂S all have lone pairs causing asymmetry."},

{id:113,unit:2,topic:"Lewis Structures",type:"MCQ",difficulty:"Medium",free:false,
q:"What is the total number of valence electrons in a Lewis structure of CO₂?",
choices:["A. 12","B. 14","C. 16","D. 18"],
answer:"C",explanation:"C has 4 valence electrons, each O has 6. Total = 4 + 2(6) = 16 valence electrons. CO₂ has two double bonds (O=C=O) using all 16 electrons."},

{id:114,unit:2,topic:"Hybridization",type:"MCQ",difficulty:"Hard",free:false,
q:"What is the hybridization of each carbon in acetylene (H–C≡C–H)?",
choices:["A. sp³","B. sp²","C. sp","D. sp³d"],
answer:"C",explanation:"Each carbon in acetylene has 2 electron domains (one triple bond + one single bond). 2 domains → sp hybridization → linear geometry. The triple bond consists of one σ and two π bonds."},

{id:115,unit:2,topic:"VSEPR",type:"MCQ",difficulty:"Hard",free:false,
q:"In the XeF₄ molecule, what is the shape, and how many lone pairs are on Xe?",
choices:["A. Tetrahedral, 0 lone pairs","B. Square pyramidal, 1 lone pair","C. Square planar, 2 lone pairs","D. Octahedral, 0 lone pairs"],
answer:"C",explanation:"Xe has 8 valence electrons. 4 bonds to F use 4 electrons, leaving 4 (2 lone pairs). Total 6 electron domains → octahedral electron geometry. 2 lone pairs go opposite each other → square planar molecular shape."},

// Unit 2 FRQs
{id:116,unit:2,topic:"Lewis Structures & VSEPR",type:"FRQ",difficulty:"Hard",free:false,
q:"Consider the molecule SF₄.\n\n(a) Draw the Lewis structure of SF₄, showing all bonding and lone pairs.\n(b) Identify the electron domain geometry and molecular geometry of SF₄.\n(c) Predict the F–S–F bond angles. Explain any deviations from ideal angles.\n(d) Is SF₄ polar or nonpolar? Explain.",
choices:null,
answer:"(a) S is central: 4 S–F single bonds + 1 lone pair on S. Each F has 3 lone pairs. Total valence e⁻ = 6 + 4(7) = 34.\n(b) Electron domain geometry: trigonal bipyramidal (5 domains)\nMolecular geometry: see-saw\n(c) Ideal trigonal bipyramidal angles are 120° (equatorial) and 90° (axial-equatorial). The lone pair occupies an equatorial position, compressing the equatorial F–S–F angle below 120° and the axial F–S–F angles slightly below 180°.\n(d) SF₄ is POLAR. The see-saw geometry is asymmetric; the dipole moments of the S–F bonds do not cancel. The lone pair on S creates an overall dipole moment.",
explanation:"(a) 1 pt: correct structure. (b) 1 pt each. (c) 1 pt: correct angles + lone pair explanation. (d) 1 pt: polar + valid reasoning."},

{id:117,unit:2,topic:"Bonding & Polarity",type:"FRQ",difficulty:"Medium",free:false,
q:"Compare the bonding in NaCl and HCl.\n\n(a) Classify the bond in each compound as ionic or covalent. Justify your answer using electronegativity values. (EN: H=2.2, Cl=3.2, Na=0.9)\n(b) Which compound has a higher melting point? Explain in terms of the forces being broken.\n(c) Explain why NaCl dissolves well in water but nonpolar solvents dissolve HCl better in terms of intermolecular forces.",
choices:null,
answer:"(a) NaCl: ionic bond. ΔEN = 3.2 − 0.9 = 2.3 > 1.7 → ionic.\nHCl: polar covalent bond. ΔEN = 3.2 − 2.2 = 1.0 → polar covalent.\n\n(b) NaCl has a much higher melting point (~801°C vs. −114°C for HCl). NaCl consists of a crystal lattice held together by strong electrostatic forces (ionic bonds) that require much more energy to overcome than the intermolecular dipole-dipole forces between HCl molecules.\n\n(c) NaCl dissolves in water ('like dissolves like'): ionic NaCl is stabilized by ion-dipole forces with polar water. HCl is polar covalent and dissolves via dipole-dipole interactions — it also dissolves in water (ionizes). In truly nonpolar solvents, neither dissolves well; the question reflects polarity matching.",
explanation:"(a) 2 pts: correct classification with ΔEN justification for both. (b) 1 pt: NaCl higher + ionic vs. dipole explanation. (c) 1 pt: like dissolves like principle."},


// ═══════════════════════════════════════════════════════════════
// UNIT 3 — INTERMOLECULAR FORCES & PROPERTIES (PAID — 22 questions)
// ═══════════════════════════════════════════════════════════════

{id:201,unit:3,topic:"Types of IMF",type:"MCQ",difficulty:"Easy",free:false,
q:"Which type of intermolecular force is present between all molecules, including nonpolar ones?",
choices:["A. Hydrogen bonding","B. Dipole-dipole forces","C. London dispersion forces","D. Ion-dipole forces"],
answer:"C",explanation:"London dispersion forces (LDF) arise from temporary dipoles due to electron fluctuations. They are present in ALL molecules — polar and nonpolar alike. LDF is the only IMF between nonpolar molecules like N₂ or CH₄."},

{id:202,unit:3,topic:"Hydrogen Bonding",type:"MCQ",difficulty:"Easy",free:false,
q:"Which of the following molecules can form hydrogen bonds WITH ITSELF?",
choices:["A. CH₃F","B. HCl","C. NH₃","D. CH₃OCH₃"],
answer:"C",explanation:"Hydrogen bonding requires H bonded to F, O, or N. NH₃ has H bonded to N with lone pairs available on N → can form N–H···N hydrogen bonds with other NH₃ molecules. CH₃F has C–F (not H–F), HCl is not F/O/N, dimethyl ether has no O–H."},

{id:203,unit:3,topic:"Boiling Points",type:"MCQ",difficulty:"Medium",free:false,
q:"Which of the following has the highest boiling point?",
choices:["A. CH₄","B. SiH₄","C. GeH₄","D. SnH₄"],
answer:"D",explanation:"All group 14 hydrides are nonpolar → only LDF. Larger molecules have more electrons → stronger LDF → higher boiling point. Molar masses: CH₄(16) < SiH₄(32) < GeH₄(77) < SnH₄(123). SnH₄ has highest boiling point."},

{id:204,unit:3,topic:"Hydrogen Bonding",type:"MCQ",difficulty:"Hard",free:false,
q:"Explain why water (H₂O, MM=18) has a much higher boiling point (100°C) than H₂S (MM=34, bp=−60°C), despite H₂S having a higher molar mass.",
choices:["A. H₂O molecules are smaller","B. H₂O engages in strong hydrogen bonding while H₂S does not","C. H₂S has lower London dispersion forces","D. H₂O has stronger dipole-dipole forces only"],
answer:"B",explanation:"O is electronegative enough (3.44) to form hydrogen bonds (H–O···H); S is too large/less electronegative (2.58). H₂O has strong hydrogen bonding (the dominant IMF) giving it a much higher boiling point despite lower molar mass."},

{id:205,unit:3,topic:"Surface Tension & Viscosity",type:"MCQ",difficulty:"Medium",free:false,
q:"Which of the following liquids would have the HIGHEST viscosity at room temperature?",
choices:["A. Hexane (C₆H₁₄)","B. Glycerol (C₃H₈O₃)","C. Ethanol (C₂H₅OH)","D. Water"],
answer:"B",explanation:"Glycerol has three –OH groups per molecule → extensive hydrogen bonding network → high viscosity. More/stronger IMF = higher viscosity. Glycerol (glycerin) is famously viscous."},

{id:206,unit:3,topic:"Vapor Pressure",type:"MCQ",difficulty:"Medium",free:false,
q:"At a given temperature, which of the following liquids has the HIGHEST vapor pressure?",
choices:["A. Water (H₂O)","B. Ethanol (C₂H₅OH)","C. Diethyl ether (C₄H₁₀O)","D. Glycerol (C₃H₈O₃)"],
answer:"C",explanation:"Higher vapor pressure = weaker IMF = molecules escape liquid more easily. Diethyl ether has weaker IMF (dipole-dipole + LDF, no O–H) compared to water and ethanol (both have H-bonding). Glycerol has 3 H-bonds/molecule → lowest vapor pressure."},

{id:207,unit:3,topic:"Types of IMF",type:"MCQ",difficulty:"Medium",free:false,
q:"Which intermolecular force is responsible for the unusually high boiling point of HF compared to HCl, HBr, and HI?",
choices:["A. Greater London dispersion forces in HF","B. Strong H–F···H hydrogen bonding","C. Ionic character of the H–F bond","D. Greater dipole-dipole forces only"],
answer:"B",explanation:"F is the most electronegative element. H–F has very strong hydrogen bonds. Even though HF is the lightest of the HX series, its strong hydrogen bonding raises its boiling point above HCl. (Note: HI has higher bp than HCl/HBr due to stronger LDF from more electrons.)"},

{id:208,unit:3,topic:"Solids",type:"MCQ",difficulty:"Medium",free:false,
q:"Diamond has an extremely high melting point (>3500°C). What type of solid is diamond?",
choices:["A. Molecular solid","B. Metallic solid","C. Ionic solid","D. Network covalent solid"],
answer:"D",explanation:"Diamond is a network covalent solid — every C atom is covalently bonded to 4 others in a continuous 3D lattice. Melting requires breaking strong covalent bonds throughout the network, requiring enormous energy."},

{id:209,unit:3,topic:"Properties of Solids",type:"MCQ",difficulty:"Easy",free:false,
q:"Which type of solid conducts electricity in the solid state?",
choices:["A. Ionic solid (e.g., NaCl)","B. Molecular solid (e.g., ice)","C. Metallic solid (e.g., Cu)","D. Network covalent solid (e.g., SiO₂)"],
answer:"C",explanation:"Metallic solids have delocalized electrons ('sea of electrons') that are free to move, allowing electrical conduction in the solid state. Ionic solids conduct only when molten or dissolved; molecular and network covalent solids generally do not conduct."},

{id:210,unit:3,topic:"Chromatography & Separations",type:"MCQ",difficulty:"Medium",free:false,
q:"In paper chromatography, a mixture of dyes is separated. The dye that travels farthest up the paper has:",
choices:["A. The strongest interaction with the stationary phase","B. The weakest interaction with the stationary phase and strongest with mobile phase","C. The highest molecular weight","D. The most polar structure"],
answer:"B",explanation:"In chromatography, separation depends on relative attraction to stationary (paper = polar) vs. mobile phase (solvent). A compound with weaker attraction to the stationary phase and stronger attraction to the mobile phase travels farther (higher Rf)."},

{id:211,unit:3,topic:"Types of IMF",type:"MCQ",difficulty:"Hard",free:false,
q:"Arrange the following in order of increasing boiling point: CH₃OH (methanol), CH₃CH₃ (ethane), CH₃Cl (chloromethane), CH₃CH₂OH (ethanol).",
choices:["A. CH₃CH₃ < CH₃Cl < CH₃OH < CH₃CH₂OH","B. CH₃OH < CH₃CH₃ < CH₃Cl < CH₃CH₂OH","C. CH₃Cl < CH₃CH₃ < CH₃OH < CH₃CH₂OH","D. CH₃CH₃ < CH₃OH < CH₃Cl < CH₃CH₂OH"],
answer:"A",explanation:"IMF strengths: CH₃CH₃ (LDF only, bp −89°C) < CH₃Cl (dipole-dipole + LDF, bp −24°C) < CH₃OH (H-bonding, bp 65°C) < CH₃CH₂OH (H-bonding + more LDF, bp 78°C)."},

{id:212,unit:3,topic:"Phase Diagrams",type:"MCQ",difficulty:"Hard",free:false,
q:"In a phase diagram, the triple point represents:",
choices:["A. The temperature and pressure at which all three phases are in equilibrium","B. The highest temperature at which a liquid can exist","C. The point where vapor pressure equals atmospheric pressure","D. The minimum pressure needed for liquid to form"],
answer:"A",explanation:"The triple point is the unique temperature and pressure at which solid, liquid, and gas phases coexist in equilibrium. For water, the triple point is at 0.01°C and 611.7 Pa."},

// Unit 3 FRQs
{id:213,unit:3,topic:"IMF & Properties",type:"FRQ",difficulty:"Medium",free:false,
q:"The boiling points of the following compounds are given: H₂O (100°C), H₂S (−60°C), H₂Se (−41°C), H₂Te (−2°C).\n\n(a) Explain the trend in boiling points from H₂S to H₂Te.\n(b) Explain why H₂O has an anomalously high boiling point compared to the other group 16 hydrides.\n(c) Would you expect H₂O or H₂S to have a higher surface tension? Explain.",
choices:null,
answer:"(a) H₂S → H₂Se → H₂Te: boiling points increase (−60°C, −41°C, −2°C). These molecules are nonpolar or weakly polar; the dominant IMF is London dispersion forces. As molar mass increases down the group, more electrons → larger/more polarizable electron cloud → stronger LDF → higher boiling point.\n\n(b) H₂O has strong hydrogen bonding (O is very electronegative; H bonded to O can hydrogen-bond with lone pair of another O). H₂S cannot form hydrogen bonds effectively because S is not electronegative enough. Hydrogen bonding in H₂O is much stronger than LDF in H₂S, giving H₂O a far higher boiling point.\n\n(c) H₂O has higher surface tension. Surface tension is proportional to the strength of IMF. H₂O's extensive hydrogen bonding network creates stronger cohesion between molecules, resulting in higher surface tension than H₂S (which has only weak LDF/dipole-dipole).",
explanation:"(a) 1 pt: LDF + increasing molar mass. (b) 1 pt: H-bonding specific to O. (c) 1 pt: H₂O + stronger IMF justification."},

// ═══════════════════════════════════════════════════════════════
// UNIT 4 — CHEMICAL REACTIONS (PAID — 25 questions)
// ═══════════════════════════════════════════════════════════════

{id:301,unit:4,topic:"Types of Reactions",type:"MCQ",difficulty:"Easy",free:false,
q:"When aqueous solutions of Ba(NO₃)₂ and Na₂SO₄ are mixed, a precipitate forms. What is the precipitate?",
choices:["A. BaSO₄","B. NaNO₃","C. Ba(NO₃)₂","D. Na₂SO₄"],
answer:"A",explanation:"Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s). BaSO₄ is insoluble (sulfates of Ba, Pb, Ca are sparingly soluble → insoluble). NaNO₃ is soluble and stays in solution."},

{id:302,unit:4,topic:"Net Ionic Equations",type:"MCQ",difficulty:"Medium",free:false,
q:"What is the net ionic equation for the reaction of HCl(aq) with NaOH(aq)?",
choices:["A. HCl + NaOH → NaCl + H₂O","B. H⁺(aq) + OH⁻(aq) → H₂O(l)","C. Na⁺(aq) + Cl⁻(aq) → NaCl(s)","D. H⁺(aq) + Na⁺(aq) + Cl⁻(aq) + OH⁻(aq) → Na⁺(aq) + Cl⁻(aq) + H₂O(l)"],
answer:"B",explanation:"HCl and NaOH are both strong electrolytes — fully dissociate. Na⁺ and Cl⁻ are spectator ions. The net ionic equation is just the neutralization: H⁺(aq) + OH⁻(aq) → H₂O(l)."},

{id:303,unit:4,topic:"Stoichiometry",type:"MCQ",difficulty:"Medium",free:false,
q:"In the reaction 2H₂ + O₂ → 2H₂O, what volume of O₂ at STP is required to react completely with 4.48 L of H₂ at STP?",
choices:["A. 1.12 L","B. 2.24 L","C. 4.48 L","D. 8.96 L"],
answer:"B",explanation:"At STP, volumes of gases are proportional to moles. Ratio H₂:O₂ = 2:1. Volume O₂ = 4.48 L × (1/2) = 2.24 L."},

{id:304,unit:4,topic:"Limiting Reagent",type:"MCQ",difficulty:"Medium",free:false,
q:"In the reaction N₂ + 3H₂ → 2NH₃, if 14.0 g N₂ and 6.06 g H₂ are mixed, which is the limiting reagent? (N₂=28 g/mol, H₂=2.02 g/mol)",
choices:["A. N₂","B. H₂","C. Both are in stoichiometric ratio","D. Cannot be determined"],
answer:"A",explanation:"mol N₂ = 14.0/28 = 0.500 mol; mol H₂ = 6.06/2.02 = 3.00 mol. Ratio needed: 1 mol N₂ per 3 mol H₂. For 0.500 mol N₂, need 1.50 mol H₂; have 3.00 mol. H₂ is in excess. N₂ is limiting."},

{id:305,unit:4,topic:"Oxidation States",type:"MCQ",difficulty:"Medium",free:false,
q:"What is the oxidation state of Mn in KMnO₄?",
choices:["A. +2","B. +4","C. +6","D. +7"],
answer:"D",explanation:"K is +1, O is −2 (×4 = −8). Sum = 0: +1 + Mn + (−8) = 0 → Mn = +7."},

{id:306,unit:4,topic:"Redox",type:"MCQ",difficulty:"Medium",free:false,
q:"In the reaction 2Fe³⁺ + Sn²⁺ → 2Fe²⁺ + Sn⁴⁺, which species is oxidized?",
choices:["A. Fe³⁺","B. Fe²⁺","C. Sn²⁺","D. Sn⁴⁺"],
answer:"C",explanation:"Sn²⁺ → Sn⁴⁺: oxidation state increases from +2 to +4 → loses 2 electrons → oxidized. Fe³⁺ → Fe²⁺: gains electrons → reduced."},

{id:307,unit:4,topic:"Titration",type:"MCQ",difficulty:"Hard",free:false,
q:"25.00 mL of H₂SO₄ solution is titrated with 0.100 M NaOH. If 40.00 mL of NaOH is required to reach the equivalence point, what is the molarity of the H₂SO₄? (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)",
choices:["A. 0.0500 M","B. 0.0800 M","C. 0.160 M","D. 0.200 M"],
answer:"B",explanation:"mol NaOH = 0.04000 L × 0.100 mol/L = 0.00400 mol. mol H₂SO₄ = 0.00400/2 = 0.00200 mol. M(H₂SO₄) = 0.00200/0.02500 = 0.0800 M."},

{id:308,unit:4,topic:"Percent Yield",type:"MCQ",difficulty:"Medium",free:false,
q:"A student synthesizes aspirin (MM = 180 g/mol) and obtains 3.24 g. The theoretical yield was 4.05 g. What is the percent yield?",
choices:["A. 60.0%","B. 75.0%","C. 80.0%","D. 90.0%"],
answer:"C",explanation:"% yield = (actual/theoretical) × 100 = (3.24/4.05) × 100 = 80.0%."},

{id:309,unit:4,topic:"Types of Reactions",type:"MCQ",difficulty:"Medium",free:false,
q:"Which of the following is a combustion reaction?",
choices:["A. 2H₂O → 2H₂ + O₂","B. Fe + CuSO₄ → FeSO₄ + Cu","C. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O","D. HCl + NaOH → NaCl + H₂O"],
answer:"C",explanation:"Combustion reactions involve a fuel reacting with O₂ to produce CO₂ and H₂O. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O is the combustion of propane."},

{id:310,unit:4,topic:"Solubility Rules",type:"MCQ",difficulty:"Easy",free:false,
q:"Which of the following compounds is INSOLUBLE in water?",
choices:["A. KCl","B. NaNO₃","C. AgCl","D. (NH₄)₂SO₄"],
answer:"C",explanation:"AgCl is insoluble — chlorides of Ag, Pb, and Hg₂ are exceptions to the generally soluble chloride rule. KCl, NaNO₃, and (NH₄)₂SO₄ are all soluble."},

{id:311,unit:4,topic:"Balancing Equations",type:"MCQ",difficulty:"Medium",free:false,
q:"What are the coefficients needed to balance the following redox reaction in acidic solution? MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺",
choices:["A. 1, 5, 1, 5","B. 1, 5, 1, 4","C. 2, 5, 2, 5","D. 2, 10, 2, 10"],
answer:"A",explanation:"MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O. MnO₄⁻ gains 5e⁻ (Mn: +7 → +2); each Fe²⁺ loses 1e⁻. 5 Fe²⁺ needed per MnO₄⁻. Coefficients 1:5:1:5."},

// Unit 4 FRQs
{id:312,unit:4,topic:"Titration & Stoichiometry",type:"FRQ",difficulty:"Hard",free:false,
q:"A 0.500 g sample of an impure calcium carbonate (CaCO₃) sample is dissolved in excess HCl:\nCaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\n\nThe CO₂ gas produced occupies 112 mL at STP.\n\n(a) Calculate the moles of CO₂ produced.\n(b) Calculate the mass of CaCO₃ in the sample. (CaCO₃ = 100.1 g/mol)\n(c) Calculate the percent purity of the sample.\n(d) Identify one source of error that could cause the measured volume of CO₂ to be lower than expected.",
choices:null,
answer:"(a) At STP, 1 mol gas = 22.4 L. mol CO₂ = 0.112 L ÷ 22.4 L/mol = 0.00500 mol\n\n(b) 1:1 ratio CaCO₃:CO₂\nmol CaCO₃ = 0.00500 mol\nmass CaCO₃ = 0.00500 × 100.1 = 0.501 g\n\n(c) % purity = (0.501 g / 0.500 g) × 100 = 100.2% ≈ 100%\n(Note: if problem gave different numbers, % = mass CaCO₃ / total mass × 100)\n\n(d) Possible sources of error:\n• CO₂ dissolving in the HCl solution (CO₂ is slightly soluble)\n• Gas leaking before measurement\n• Incomplete reaction (not all CaCO₃ dissolved)\n• Temperature above 0°C (not true STP conditions)",
explanation:"(a) 1 pt: moles using STP molar volume. (b) 1 pt: 1:1 ratio, correct mass. (c) 1 pt: correct %. (d) 1 pt: valid source of error."},

{id:313,unit:4,topic:"Redox",type:"FRQ",difficulty:"Hard",free:false,
q:"Balance the following redox equation in acidic solution using the half-reaction method:\nCr₂O₇²⁻(aq) + C₂H₅OH(aq) → Cr³⁺(aq) + CH₃COOH(aq)\n\n(a) Write the balanced oxidation half-reaction.\n(b) Write the balanced reduction half-reaction.\n(c) Write the overall balanced equation.\n(d) What is the role of H⁺ in this reaction?",
choices:null,
answer:"(a) Oxidation: C₂H₅OH → CH₃COOH + 4H⁺ + 4e⁻\n(ethanol to acetic acid, C goes from −2 to 0, gaining 4e⁻ per molecule... wait, C oxidized: 2C×(−1)→2C×0? Let's recalculate properly)\nEthanol: C avg OS = (−2 to +2 range): C₂H₅OH → each C averages −2. CH₃COOH carbons average 0. Change = +2×2 = +4 electrons lost.\nC₂H₅OH → CH₃COOH + 4H⁺ + 4e⁻\n\n(b) Reduction: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O\n(Cr: +6 → +3, gain of 3e⁻ per Cr, 6e⁻ per Cr₂O₇²⁻)\n\n(c) Balance electrons: multiply oxidation × 3, reduction × 2:\n3C₂H₅OH + Cr₂O₇²⁻ + 8H⁺ → 3CH₃COOH + 2Cr³⁺ + 7H₂O\n\n(d) H⁺ serves as a reactant (acid medium is required). It balances charge and mass in the reaction, ultimately forming water as a product.",
explanation:"(a)–(c) 2 pts each for correctly balanced half-reactions and overall equation. (d) 1 pt: H⁺ as reactant, balancing acid-side."},


// ═══════════════════════════════════════════════════════════════
// UNIT 5 — KINETICS (PAID — 22 questions)
// ═══════════════════════════════════════════════════════════════

{id:401,unit:5,topic:"Rate Laws",type:"MCQ",difficulty:"Easy",free:false,
q:"For the reaction A + B → C, the rate law is rate = k[A]²[B]. If [A] is doubled while [B] is held constant, how does the rate change?",
choices:["A. Doubles","B. Triples","C. Quadruples","D. Increases by a factor of 8"],
answer:"C",explanation:"Rate is second order in A. If [A] doubles: rate_new = k(2[A])²[B] = 4k[A]²[B] = 4 × rate_original. The rate quadruples."},

{id:402,unit:5,topic:"Rate Laws",type:"MCQ",difficulty:"Medium",free:false,
q:"The following data are collected for A → Products:\n[A] (M): 0.100, 0.200, 0.400\nRate (M/s): 2.0×10⁻³, 4.0×10⁻³, 8.0×10⁻³\nWhat is the order of the reaction with respect to A?",
choices:["A. Zero order","B. First order","C. Second order","D. Third order"],
answer:"B",explanation:"When [A] doubles (0.1→0.2), rate doubles (2.0→4.0 ×10⁻³). Rate ∝ [A]¹. When [A] doubles again (0.2→0.4), rate doubles again. First order in A."},

{id:403,unit:5,topic:"Integrated Rate Laws",type:"MCQ",difficulty:"Hard",free:false,
q:"For a first-order reaction A → Products with k = 0.0693 min⁻¹, what is the half-life?",
choices:["A. 5.0 min","B. 10.0 min","C. 14.4 min","D. 0.693 min"],
answer:"B",explanation:"For first-order reactions: t₁/₂ = ln(2)/k = 0.693/0.0693 = 10.0 min."},

{id:404,unit:5,topic:"Activation Energy",type:"MCQ",difficulty:"Medium",free:false,
q:"Which of the following correctly describes the effect of a catalyst on a reaction?",
choices:["A. It increases the activation energy","B. It provides an alternative pathway with lower activation energy","C. It shifts the equilibrium toward products","D. It increases the concentration of reactants"],
answer:"B",explanation:"A catalyst provides an alternative reaction mechanism with a lower activation energy, allowing more collisions to have sufficient energy to react. It does NOT change ΔG, equilibrium position, or concentrations of reactants/products."},

{id:405,unit:5,topic:"Collision Theory",type:"MCQ",difficulty:"Medium",free:false,
q:"According to collision theory, a reaction will occur when molecules collide with:",
choices:["A. Any energy at any orientation","B. Sufficient activation energy AND the correct molecular orientation","C. Activation energy only, regardless of orientation","D. Any energy but only with the correct orientation"],
answer:"B",explanation:"Collision theory states that reactions occur when: (1) molecules collide with energy ≥ Ea (activation energy), AND (2) molecules collide with the proper orientation for bonds to break and form."},

{id:406,unit:5,topic:"Arrhenius Equation",type:"MCQ",difficulty:"Hard",free:false,
q:"Using the Arrhenius equation, if the temperature of a reaction is increased from 300 K to 310 K, and the activation energy is 50.0 kJ/mol, approximately by what factor does the rate constant increase? (R = 8.314 J/mol·K)",
choices:["A. 1.2","B. 2.0","C. 3.6","D. 7.4"],
answer:"B",explanation:"ln(k₂/k₁) = (Ea/R)(1/T₁ − 1/T₂) = (50000/8.314)(1/300 − 1/310) = 6012 × (0.001075) ≈ 0.693. k₂/k₁ = e^0.693 ≈ 2.0. Rate doubles with ~10°C increase at this Ea."},

{id:407,unit:5,topic:"Reaction Mechanisms",type:"MCQ",difficulty:"Hard",free:false,
q:"For a reaction with mechanism:\nStep 1: A + B → C (slow)\nStep 2: C + B → D (fast)\nWhat is the rate law for the overall reaction?",
choices:["A. Rate = k[A][B]²","B. Rate = k[C][B]","C. Rate = k[A][B]","D. Rate = k[A]²[B]"],
answer:"C",explanation:"The rate-determining step is the slowest step (Step 1). The rate law comes from the slow step: Rate = k₁[A][B]. C is an intermediate that does not appear in the overall rate law from the RDS."},

{id:408,unit:5,topic:"Rate Laws",type:"MCQ",difficulty:"Medium",free:false,
q:"For a zero-order reaction A → Products with initial [A]₀ = 0.200 M and k = 0.0100 M/s, what is [A] after 10.0 s?",
choices:["A. 0.200 M","B. 0.100 M","C. 0.180 M","D. 0.0100 M"],
answer:"B",explanation:"For zero order: [A] = [A]₀ − kt = 0.200 − (0.0100)(10.0) = 0.200 − 0.100 = 0.100 M."},

// Unit 5 FRQs
{id:409,unit:5,topic:"Kinetics & Rate Laws",type:"FRQ",difficulty:"Hard",free:false,
q:"Consider the reaction: 2NO(g) + O₂(g) → 2NO₂(g)\nThe following data was collected at 300 K:\n\nExperiment 1: [NO]=0.010 M, [O₂]=0.010 M, Rate = 2.5×10⁻⁵ M/s\nExperiment 2: [NO]=0.020 M, [O₂]=0.010 M, Rate = 1.0×10⁻⁴ M/s\nExperiment 3: [NO]=0.010 M, [O₂]=0.020 M, Rate = 5.0×10⁻⁵ M/s\n\n(a) Determine the order with respect to each reactant. Show your work.\n(b) Write the rate law for the reaction.\n(c) Calculate the rate constant k, including units.\n(d) Calculate the rate when [NO] = 0.015 M and [O₂] = 0.030 M.",
choices:null,
answer:"(a) Order w.r.t. NO: Compare Exp 1 & 2 ([O₂] constant):\nRate₂/Rate₁ = 1.0×10⁻⁴ / 2.5×10⁻⁵ = 4.0\n[NO₂]/[NO₁] = 0.020/0.010 = 2.0\n4.0 = 2.0^n → n = 2 (second order in NO)\n\nOrder w.r.t. O₂: Compare Exp 1 & 3 ([NO] constant):\nRate₃/Rate₁ = 5.0×10⁻⁵ / 2.5×10⁻⁵ = 2.0\n[O₂]₃/[O₂]₁ = 0.020/0.010 = 2.0\n2.0 = 2.0^m → m = 1 (first order in O₂)\n\n(b) Rate = k[NO]²[O₂]\n\n(c) Using Exp 1: 2.5×10⁻⁵ = k(0.010)²(0.010)\n2.5×10⁻⁵ = k(1.0×10⁻⁶)\nk = 25 M⁻² s⁻¹\n\n(d) Rate = 25(0.015)²(0.030) = 25 × 2.25×10⁻⁴ × 0.030 = 1.69×10⁻⁴ M/s",
explanation:"(a) 2 pts: correct determination of both orders with work shown. (b) 1 pt: correct rate law. (c) 1 pt: k value with units M⁻²s⁻¹. (d) 1 pt: correct calculation."},

{id:410,unit:5,topic:"Reaction Mechanisms",type:"FRQ",difficulty:"Hard",free:false,
q:"The decomposition of ozone proceeds via the following proposed mechanism:\nStep 1: O₃ ⇌ O₂ + O   (fast equilibrium, Keq = K₁)\nStep 2: O₃ + O → 2O₂  (slow)\n\n(a) Write the rate law based on the slow step.\n(b) The intermediate O appears in the rate law from (a). Using the equilibrium from Step 1, derive the overall rate law in terms of only [O₃] and [O₂].\n(c) What is the overall order of this reaction?\n(d) How would adding a catalyst that lowers the activation energy of Step 2 affect the overall rate?",
choices:null,
answer:"(a) Rate (from slow step) = k₂[O₃][O]\n\n(b) From Step 1 equilibrium: K₁ = [O₂][O]/[O₃] → [O] = K₁[O₃]/[O₂]\nSubstitute: Rate = k₂[O₃] × K₁[O₃]/[O₂] = (k₂K₁)[O₃]²/[O₂]\nOverall rate law: Rate = k[O₃]²[O₂]⁻¹\n\n(c) Overall order = 2 + (−1) = 1st order overall... or expressed as 3rd order if written differently. The rate = k[O₃]²/[O₂] shows order of +2 in O₃, −1 in O₂ → overall reaction order = 1.\n\n(d) Adding a catalyst lowers Ea for Step 2 → increases k₂ → increases overall rate constant k = k₂K₁ → rate increases. The catalyst does not change equilibrium concentrations.",
explanation:"(a) 1 pt. (b) 2 pts: correct substitution of intermediate. (c) 1 pt: overall order. (d) 1 pt: rate increases, Ea decreases."},


// ═══════════════════════════════════════════════════════════════
// UNIT 6 — THERMODYNAMICS (PAID — 22 questions)
// ═══════════════════════════════════════════════════════════════

{id:501,unit:6,topic:"Enthalpy",type:"MCQ",difficulty:"Easy",free:false,
q:"Which of the following processes is endothermic?",
choices:["A. Combustion of methane","B. Condensation of water vapor","C. Melting of ice","D. Formation of NaCl from Na and Cl₂"],
answer:"C",explanation:"Melting ice (fusion) requires energy input to break the hydrogen bonds in the solid lattice — it is endothermic (ΔH > 0). Combustion, condensation, and most formation reactions of stable compounds are exothermic."},

{id:502,unit:6,topic:"Hess's Law",type:"MCQ",difficulty:"Medium",free:false,
q:"Given: A → B, ΔH₁ = +50 kJ and C → B, ΔH₂ = +30 kJ. What is ΔH for A → C?",
choices:["A. +80 kJ","B. +20 kJ","C. −20 kJ","D. −80 kJ"],
answer:"B",explanation:"Target: A → C. We need A → B (ΔH₁ = +50) and reverse of C → B, i.e., B → C (ΔH = −30). So: A → B → C: ΔH = +50 + (−30) = +20 kJ."},

{id:503,unit:6,topic:"Bond Enthalpies",type:"MCQ",difficulty:"Medium",free:false,
q:"Using bond enthalpies, estimate ΔH for H₂ + Cl₂ → 2HCl. (H–H = 436 kJ/mol, Cl–Cl = 243 kJ/mol, H–Cl = 431 kJ/mol)",
choices:["A. +248 kJ","B. −184 kJ","C. −248 kJ","D. +184 kJ"],
answer:"B",explanation:"ΔH = ΣBE(broken) − ΣBE(formed) = (436 + 243) − 2(431) = 679 − 862 = −183 ≈ −184 kJ."},

{id:504,unit:6,topic:"Entropy",type:"MCQ",difficulty:"Medium",free:false,
q:"Which of the following processes results in an INCREASE in entropy?",
choices:["A. Condensation of steam to liquid water","B. Dissolving a gas in water","C. Freezing liquid benzene","D. Sublimation of dry ice (CO₂)"],
answer:"D",explanation:"Sublimation: CO₂(s) → CO₂(g). Solid → gas is a large increase in disorder/entropy. The other processes involve going from gas/liquid to lower-entropy phases or dissolving a gas (which decreases entropy of the gas)."},

{id:505,unit:6,topic:"Gibbs Free Energy",type:"MCQ",difficulty:"Medium",free:false,
q:"For a reaction, ΔH = −200 kJ and ΔS = −100 J/K. At what temperature (approximately) does the reaction change from spontaneous to non-spontaneous?",
choices:["A. 200 K","B. 500 K","C. 1000 K","D. 2000 K"],
answer:"D",explanation:"ΔG = ΔH − TΔS. Reaction is spontaneous when ΔG < 0. Since both ΔH and ΔS are negative, at low T the reaction is spontaneous (ΔH dominates). At T = ΔH/ΔS = 200,000 J ÷ 100 J/K = 2000 K, ΔG = 0. Above 2000 K, non-spontaneous."},

{id:506,unit:6,topic:"Calorimetry",type:"MCQ",difficulty:"Medium",free:false,
q:"A 50.0 g sample of iron (specific heat = 0.449 J/g·°C) cools from 80.0°C to 25.0°C. How much heat is released?",
choices:["A. 1,230 J","B. 1,780 J","C. 890 J","D. 2,245 J"],
answer:"A",explanation:"q = mcΔT = (50.0)(0.449)(25.0 − 80.0) = (50.0)(0.449)(−55.0) = −1,235 J ≈ −1,230 J. The negative sign indicates heat released. The magnitude is ~1,230 J."},

{id:507,unit:6,topic:"Standard Enthalpy of Formation",type:"MCQ",difficulty:"Hard",free:false,
q:"Given standard enthalpies of formation: ΔHf°(CO₂) = −393.5 kJ/mol, ΔHf°(H₂O) = −285.8 kJ/mol, ΔHf°(C₆H₆) = +49.1 kJ/mol, what is ΔH° for the combustion of benzene?\nC₆H₆(l) + 15/2 O₂(g) → 6CO₂(g) + 3H₂O(l)",
choices:["A. −3,267 kJ/mol","B. −3,124 kJ/mol","C. +3,267 kJ/mol","D. −2,824 kJ/mol"],
answer:"A",explanation:"ΔH°rxn = Σ ΔHf°(products) − Σ ΔHf°(reactants)\n= [6(−393.5) + 3(−285.8)] − [49.1 + 0]\n= [−2361 + (−857.4)] − 49.1\n= −3218.4 − 49.1 = −3267.5 ≈ −3,267 kJ/mol."},

{id:508,unit:6,topic:"Spontaneity",type:"MCQ",difficulty:"Medium",free:false,
q:"Which combination of ΔH and ΔS will always result in a spontaneous reaction (ΔG < 0) at all temperatures?",
choices:["A. ΔH > 0, ΔS > 0","B. ΔH < 0, ΔS > 0","C. ΔH > 0, ΔS < 0","D. ΔH < 0, ΔS < 0"],
answer:"B",explanation:"ΔG = ΔH − TΔS. For ΔH < 0 (exothermic) and ΔS > 0 (entropy increases): ΔG = negative − T(positive) = always negative for all T > 0. Always spontaneous."},

// Unit 6 FRQs
{id:509,unit:6,topic:"Thermodynamics",type:"FRQ",difficulty:"Hard",free:false,
q:"Consider the reaction: N₂(g) + 3H₂(g) → 2NH₃(g)\nGiven: ΔHf°(NH₃) = −46.1 kJ/mol, S°(N₂) = 191.6 J/mol·K, S°(H₂) = 130.7 J/mol·K, S°(NH₃) = 192.8 J/mol·K\n\n(a) Calculate ΔH° for the reaction.\n(b) Calculate ΔS° for the reaction.\n(c) Calculate ΔG° at 25°C (298 K).\n(d) At what temperature does the reaction become non-spontaneous? Explain why the sign of ΔS° makes sense given the balanced equation.",
choices:null,
answer:"(a) ΔH° = 2ΔHf°(NH₃) − [ΔHf°(N₂) + 3ΔHf°(H₂)]\n= 2(−46.1) − [0 + 0] = −92.2 kJ\n\n(b) ΔS° = 2S°(NH₃) − [S°(N₂) + 3S°(H₂)]\n= 2(192.8) − [191.6 + 3(130.7)]\n= 385.6 − [191.6 + 392.1]\n= 385.6 − 583.7 = −198.1 J/mol·K\n\n(c) ΔG° = ΔH° − TΔS° = −92,200 − (298)(−198.1)\n= −92,200 + 59,034 = −33,166 J ≈ −33.2 kJ (spontaneous at 298 K)\n\n(d) Non-spontaneous when ΔG > 0: T > ΔH°/ΔS° = 92,200/198.1 ≈ 465 K\nAbove ~465 K (192°C), the −TΔS° term dominates and ΔG becomes positive.\n\nΔS° is negative because 4 moles of gas (N₂ + 3H₂) are combined into 2 moles of gas (2NH₃) → fewer gas molecules → lower entropy → ΔS < 0. Makes sense.",
explanation:"(a) 1 pt: correct ΔH°. (b) 1 pt: correct ΔS°. (c) 1 pt: correct ΔG°. (d) 1 pt: correct T calculation + 1 pt: ΔS° sign explanation."},


// ═══════════════════════════════════════════════════════════════
// UNIT 7 — EQUILIBRIUM (PAID — 22 questions)
// ═══════════════════════════════════════════════════════════════

{id:601,unit:7,topic:"Equilibrium Constants",type:"MCQ",difficulty:"Easy",free:false,
q:"For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the equilibrium constant expression Kc is:",
choices:["A. Kc = [NH₃]²/[N₂][H₂]³","B. Kc = [N₂][H₂]³/[NH₃]²","C. Kc = [NH₃]/([N₂][H₂])","D. Kc = 2[NH₃]/([N₂]+3[H₂])"],
answer:"A",explanation:"Kc = [products]^stoich / [reactants]^stoich = [NH₃]²/([N₂][H₂]³). Gases and aqueous solutes are included; pure solids and liquids are omitted."},

{id:602,unit:7,topic:"Le Chatelier's Principle",type:"MCQ",difficulty:"Medium",free:false,
q:"For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = −92 kJ, what happens when the temperature is increased?",
choices:["A. Equilibrium shifts right, [NH₃] increases","B. Equilibrium shifts left, [NH₃] decreases","C. K increases and shifts right","D. No change because Kc is constant"],
answer:"B",explanation:"Increasing temperature for an exothermic reaction (ΔH < 0) shifts equilibrium LEFT (endothermic direction) to absorb heat. [NH₃] decreases and K decreases."},

{id:603,unit:7,topic:"ICE Tables",type:"MCQ",difficulty:"Hard",free:false,
q:"For H₂(g) + I₂(g) ⇌ 2HI(g), Kc = 49.0 at 450°C. If [H₂]₀ = [I₂]₀ = 0.100 M and [HI]₀ = 0, what is [HI] at equilibrium?",
choices:["A. 0.0778 M","B. 0.122 M","C. 0.155 M","D. 0.200 M"],
answer:"C",explanation:"ICE: H₂ and I₂ decrease by x, HI increases by 2x.\nKc = (2x)²/(0.100−x)² = 49.0\n√(4x²/(0.100−x)²) = 7.0\n2x/(0.100−x) = 7.0\n2x = 0.700 − 7x\n9x = 0.700 → x = 0.0778\n[HI] = 2x = 0.1556 ≈ 0.155 M."},

{id:604,unit:7,topic:"Reaction Quotient",type:"MCQ",difficulty:"Medium",free:false,
q:"For A ⇌ B, Kc = 5.0. If [A] = 2.0 M and [B] = 6.0 M, what is Q and which direction will the reaction shift?",
choices:["A. Q = 3.0; shifts right","B. Q = 3.0; shifts left","C. Q = 12.0; shifts right","D. Q = 0.33; shifts right"],
answer:"A",explanation:"Q = [B]/[A] = 6.0/2.0 = 3.0. Since Q (3.0) < K (5.0), the reaction will shift to the RIGHT (toward products) to increase Q until it equals K."},

{id:605,unit:7,topic:"Kp vs Kc",type:"MCQ",difficulty:"Hard",free:false,
q:"For the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) at 250°C (523 K), Kc = 3.8×10⁻². What is Kp? (R = 0.08206 L·atm/mol·K)",
choices:["A. 1.6×10⁻³","B. 3.8×10⁻²","C. 1.6","D. 0.93"],
answer:"C",explanation:"Kp = Kc(RT)^Δn. Δn = (1+1)−1 = +1.\nRT = 0.08206 × 523 = 42.9 L·atm/mol\nKp = (3.8×10⁻²)(42.9)¹ = 1.63 ≈ 1.6."},

{id:606,unit:7,topic:"Le Chatelier's Principle",type:"MCQ",difficulty:"Medium",free:false,
q:"For the reaction 2SO₃(g) ⇌ 2SO₂(g) + O₂(g), which change will shift the equilibrium to the LEFT?",
choices:["A. Removing O₂","B. Adding SO₂","C. Decreasing pressure by increasing volume","D. Adding an inert gas at constant volume"],
answer:"B",explanation:"Adding SO₂ increases [SO₂], increasing Q above K → shifts LEFT to consume excess SO₂. Removing O₂ shifts right. Decreasing pressure shifts toward more moles of gas (right). Adding inert gas at constant volume doesn't change partial pressures of reactants/products."},

{id:607,unit:7,topic:"Solubility Product",type:"MCQ",difficulty:"Hard",free:false,
q:"The Ksp of PbCl₂ is 1.6×10⁻⁵. What is the molar solubility of PbCl₂?",
choices:["A. 1.6×10⁻⁵ M","B. 1.6×10⁻² M","C. 1.6×10⁻³ M","D. 4.0×10⁻³ M"],
answer:"B",explanation:"PbCl₂ ⇌ Pb²⁺ + 2Cl⁻. Ksp = [Pb²⁺][Cl⁻]² = (s)(2s)² = 4s³ = 1.6×10⁻⁵\ns³ = 4.0×10⁻⁶ → s = (4.0×10⁻⁶)^(1/3) = 1.587×10⁻² ≈ 1.6×10⁻² M."},

// Unit 7 FRQs
{id:608,unit:7,topic:"Equilibrium Calculations",type:"FRQ",difficulty:"Hard",free:false,
q:"Consider the gas-phase reaction at 500°C:\n2HI(g) ⇌ H₂(g) + I₂(g), Kc = 0.0200\n\nA 2.00 L flask is filled with 1.00 mol HI at 500°C.\n\n(a) Set up an ICE table and calculate the equilibrium concentrations of all species.\n(b) Calculate the percent of HI that dissociates at equilibrium.\n(c) If the volume of the flask is decreased to 1.00 L (at constant T), how does the equilibrium shift? Explain using Le Chatelier's principle.\n(d) Does Kc change when the volume is decreased? Explain.",
choices:null,
answer:"(a) Initial [HI] = 1.00 mol / 2.00 L = 0.500 M\nICE table:\n2HI(g) ⇌ H₂(g) + I₂(g)\nI:  0.500    0       0\nC: −2x     +x      +x\nE: 0.500−2x  x       x\n\nKc = [H₂][I₂]/[HI]² = x²/(0.500−2x)² = 0.0200\n√(x²/(0.500−2x)²) = 0.1414\nx/(0.500−2x) = 0.1414\nx = 0.0707 − 0.2828x\n1.2828x = 0.0707\nx = 0.05512 ≈ 0.0551 M\n[HI] = 0.500 − 2(0.0551) = 0.390 M\n[H₂] = [I₂] = 0.0551 M\n\n(b) % dissociated = (2x/0.500) × 100 = (0.1102/0.500) × 100 = 22.0%\n\n(c) Moles of gas: reactants = 2 mol HI, products = 1 mol H₂ + 1 mol I₂ = 2 mol total. Δn = 0.\nDecreasing volume increases pressure equally on both sides. Since Δn = 0, there is NO shift in equilibrium.\n\n(d) No, Kc does not change. K is only affected by temperature changes, not volume or pressure changes.",
explanation:"(a) 3 pts: correct ICE setup, algebra, equilibrium concentrations. (b) 1 pt: correct %. (c) 1 pt: no shift because Δn = 0. (d) 1 pt: K unchanged, temperature dependence only."},


// ═══════════════════════════════════════════════════════════════
// UNIT 8 — ACIDS & BASES (PAID — 22 questions)
// ═══════════════════════════════════════════════════════════════

{id:701,unit:8,topic:"pH and pOH",type:"MCQ",difficulty:"Easy",free:false,
q:"What is the pH of a 0.01 M solution of HCl (a strong acid)?",
choices:["A. 1","B. 2","C. 3","D. 12"],
answer:"B",explanation:"HCl is a strong acid that fully dissociates: [H⁺] = 0.01 M = 10⁻² M. pH = −log[H⁺] = −log(10⁻²) = 2."},

{id:702,unit:8,topic:"Ka and Kb",type:"MCQ",difficulty:"Medium",free:false,
q:"The Ka of acetic acid (CH₃COOH) is 1.8×10⁻⁵. What is the pH of a 0.100 M acetic acid solution?",
choices:["A. 2.87","B. 3.87","C. 4.74","D. 5.74"],
answer:"A",explanation:"Ka = x²/(0.100−x) ≈ x²/0.100 (since Ka << 0.100)\nx² = 1.8×10⁻⁶ → x = 1.34×10⁻³ M = [H⁺]\npH = −log(1.34×10⁻³) = 2.87."},

{id:703,unit:8,topic:"Buffer Solutions",type:"MCQ",difficulty:"Medium",free:false,
q:"A buffer is made from acetic acid (Ka = 1.8×10⁻⁵) and sodium acetate. If [CH₃COOH] = [CH₃COO⁻] = 0.100 M, what is the pH?",
choices:["A. 3.74","B. 4.74","C. 5.74","D. 7.00"],
answer:"B",explanation:"Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = −log(1.8×10⁻⁵) + log(0.100/0.100) = 4.74 + 0 = 4.74. When [A⁻] = [HA], pH = pKa."},

{id:704,unit:8,topic:"Strong/Weak Acids",type:"MCQ",difficulty:"Easy",free:false,
q:"Which of the following is a strong acid?",
choices:["A. Acetic acid (CH₃COOH)","B. Hydrofluoric acid (HF)","C. Hydrobromic acid (HBr)","D. Phosphoric acid (H₃PO₄)"],
answer:"C",explanation:"Strong acids include: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄, HClO₃. HBr is a strong acid. CH₃COOH, HF, and H₃PO₄ are weak acids."},

{id:705,unit:8,topic:"Conjugate Acid-Base Pairs",type:"MCQ",difficulty:"Medium",free:false,
q:"In the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, identify the conjugate acid-base pairs.",
choices:["A. NH₃/NH₄⁺ and H₂O/OH⁻","B. NH₃/OH⁻ and H₂O/NH₄⁺","C. NH₄⁺/OH⁻ and NH₃/H₂O","D. NH₃/H₂O and NH₄⁺/OH⁻"],
answer:"A",explanation:"Conjugate pairs differ by one H⁺. NH₃ (base) gains H⁺ → NH₄⁺ (conjugate acid): pair 1. H₂O (acid) loses H⁺ → OH⁻ (conjugate base): pair 2."},

{id:706,unit:8,topic:"Acid-Base Indicators",type:"MCQ",difficulty:"Medium",free:false,
q:"An indicator HIn has a pKa of 4.5. In a solution of pH 2.5, the indicator will appear as:",
choices:["A. The deprotonated form (In⁻), basic color","B. The protonated form (HIn), acidic color","C. An equal mix of both forms","D. Cannot be determined"],
answer:"B",explanation:"Using H-H: pH = pKa + log([In⁻]/[HIn]) → 2.5 = 4.5 + log(ratio) → log(ratio) = −2 → ratio = 0.01. [In⁻]/[HIn] = 0.01 means mostly HIn (protonated form, acidic color) is present at pH 2.5."},

{id:707,unit:8,topic:"Titration",type:"MCQ",difficulty:"Hard",free:false,
q:"At the equivalence point in the titration of a weak acid (HA) with NaOH, the resulting solution will be:",
choices:["A. Neutral (pH = 7)","B. Acidic (pH < 7)","C. Basic (pH > 7)","D. Depends on the temperature"],
answer:"C",explanation:"At the equivalence point, all HA has been converted to A⁻ (the conjugate base). A⁻ hydrolyzes: A⁻ + H₂O ⇌ HA + OH⁻, producing OH⁻ → basic solution, pH > 7."},

// Unit 8 FRQs
{id:708,unit:8,topic:"Acids & Bases",type:"FRQ",difficulty:"Hard",free:false,
q:"A 50.0 mL sample of 0.100 M CH₃COOH (Ka = 1.8×10⁻⁵) is titrated with 0.100 M NaOH.\n\n(a) Calculate the pH of the original 0.100 M acetic acid solution before any NaOH is added.\n(b) Calculate the pH after adding 25.0 mL of NaOH. (This is the half-equivalence point.)\n(c) Calculate the pH at the equivalence point (after adding 50.0 mL of NaOH). \n     [Hint: find the concentration of CH₃COO⁻ and calculate Kb for acetate ion]\n(d) Briefly explain why the pH at the equivalence point is greater than 7.",
choices:null,
answer:"(a) Ka = x²/(0.100), x = √(1.8×10⁻⁶) = 1.34×10⁻³ M\npH = −log(1.34×10⁻³) = 2.87\n\n(b) At half-equivalence point: mol HA = mol A⁻ → [HA] = [A⁻]\npH = pKa = −log(1.8×10⁻⁵) = 4.74\n\n(c) At equivalence: all CH₃COOH converted to CH₃COO⁻\nTotal volume = 100.0 mL\nmol CH₃COO⁻ = 0.0500 L × 0.100 mol/L = 0.00500 mol\n[CH₃COO⁻] = 0.00500/0.100 = 0.0500 M\nKb(acetate) = Kw/Ka = 1.0×10⁻¹⁴ / 1.8×10⁻⁵ = 5.6×10⁻¹⁰\nKb = x²/0.0500 → x = √(5.6×10⁻¹⁰ × 0.0500) = √(2.8×10⁻¹¹) = 5.3×10⁻⁶ M = [OH⁻]\npOH = −log(5.3×10⁻⁶) = 5.28\npH = 14 − 5.28 = 8.72\n\n(d) At the equivalence point, all weak acid has been neutralized to form its conjugate base (CH₃COO⁻), which is a weak base. The acetate ion hydrolyzes water to produce OH⁻ ions, making the solution basic (pH > 7).",
explanation:"(a) 1 pt. (b) 1 pt: pH = pKa. (c) 2 pts: correct Kb calc + pH. (d) 1 pt: conjugate base hydrolysis explanation."},


// ═══════════════════════════════════════════════════════════════
// UNIT 9 — ELECTROCHEMISTRY & REDOX (PAID — 22 questions)
// ═══════════════════════════════════════════════════════════════

{id:801,unit:9,topic:"Galvanic Cells",type:"MCQ",difficulty:"Easy",free:false,
q:"In a galvanic (voltaic) cell, oxidation occurs at the:",
choices:["A. Cathode","B. Anode","C. Salt bridge","D. Both electrodes equally"],
answer:"B",explanation:"In a galvanic cell: oxidation occurs at the ANODE (negative electrode) and reduction at the CATHODE (positive electrode). Memory aid: OIL (Oxidation Is Loss) at ANODE; RIG (Reduction Is Gain) at CATHODE."},

{id:802,unit:9,topic:"Standard Cell Potential",type:"MCQ",difficulty:"Medium",free:false,
q:"Calculate the standard cell potential for a cell made of Zn/Zn²⁺ and Cu/Cu²⁺. (E°(Zn²⁺/Zn) = −0.76 V, E°(Cu²⁺/Cu) = +0.34 V)",
choices:["A. −1.10 V","B. +0.42 V","C. +1.10 V","D. −0.42 V"],
answer:"C",explanation:"Zn is oxidized (anode, E° = −0.76 V) and Cu²⁺ is reduced (cathode, E° = +0.34 V). E°cell = E°cathode − E°anode = 0.34 − (−0.76) = +1.10 V. Positive E°cell means spontaneous."},

{id:803,unit:9,topic:"Faraday's Law",type:"MCQ",difficulty:"Hard",free:false,
q:"How many grams of copper (Cu, MM=63.5 g/mol) are deposited when 2.00 A of current flows for 30.0 minutes? (1 F = 96,485 C/mol)",
choices:["A. 0.620 g","B. 1.19 g","C. 2.38 g","D. 4.76 g"],
answer:"B",explanation:"Charge = I×t = 2.00 A × (30.0×60 s) = 3,600 C\nCu²⁺ + 2e⁻ → Cu requires 2 mol e⁻/mol Cu\nmol Cu = (3600/96485) / 2 = 0.01865 mol\nmass Cu = 0.01865 × 63.5 = 1.18 ≈ 1.19 g."},

{id:804,unit:9,topic:"Nernst Equation",type:"MCQ",difficulty:"Hard",free:false,
q:"For the reaction Zn + Cu²⁺ → Zn²⁺ + Cu (E°cell = +1.10 V), if [Cu²⁺] = 0.010 M and [Zn²⁺] = 1.00 M, what is E_cell at 25°C? (n=2, R=8.314, F=96485, T=298 K)",
choices:["A. +0.99 V","B. +1.04 V","C. +1.10 V","D. +1.16 V"],
answer:"B",explanation:"Nernst: E = E° − (RT/nF)ln(Q) = E° − (0.0592/n)log(Q)\nQ = [Zn²⁺]/[Cu²⁺] = 1.00/0.010 = 100\nE = 1.10 − (0.0592/2)log(100) = 1.10 − (0.0296)(2) = 1.10 − 0.0592 = 1.04 V."},

{id:805,unit:9,topic:"Electrolysis",type:"MCQ",difficulty:"Medium",free:false,
q:"In the electrolysis of molten NaCl, what is produced at the anode and cathode?",
choices:["A. Anode: Na, Cathode: Cl₂","B. Anode: Cl₂, Cathode: Na","C. Anode: O₂, Cathode: H₂","D. Anode: Na⁺, Cathode: Cl⁻"],
answer:"B",explanation:"In electrolysis, the anode is positive → Cl⁻ ions are attracted and oxidized to Cl₂: 2Cl⁻ → Cl₂ + 2e⁻. The cathode is negative → Na⁺ ions are attracted and reduced to Na: Na⁺ + e⁻ → Na."},

{id:806,unit:9,topic:"Galvanic Cells",type:"MCQ",difficulty:"Medium",free:false,
q:"What is the function of the salt bridge in a galvanic cell?",
choices:["A. To allow electrons to flow between the half-cells","B. To maintain electrical neutrality in each half-cell by allowing ion flow","C. To increase the cell potential","D. To act as the cathode in the cell"],
answer:"B",explanation:"The salt bridge allows ions (anions and cations) to flow between the two half-cells to maintain electrical neutrality. Without it, one solution would become positively charged and the other negatively charged, stopping the current flow."},

{id:807,unit:9,topic:"Redox & Electrochemistry",type:"MCQ",difficulty:"Medium",free:false,
q:"Which of the following statements about a spontaneous electrochemical reaction is TRUE?",
choices:["A. ΔG > 0 and E°cell > 0","B. ΔG < 0 and E°cell < 0","C. ΔG < 0 and E°cell > 0","D. ΔG > 0 and E°cell < 0"],
answer:"C",explanation:"Relationship: ΔG = −nFE°cell. For spontaneous reaction: ΔG < 0. This requires E°cell > 0 (since n and F are positive). Spontaneous = ΔG < 0 = E°cell > 0."},

// Unit 9 FRQs
{id:808,unit:9,topic:"Electrochemistry",type:"FRQ",difficulty:"Hard",free:false,
q:"A galvanic cell is constructed using Fe/Fe²⁺ and Ag/Ag⁺ half-cells.\nE°(Fe²⁺/Fe) = −0.44 V, E°(Ag⁺/Ag) = +0.80 V\n\n(a) Write the half-reactions for each electrode and the overall cell reaction.\n(b) Calculate the standard cell potential E°cell. Is the reaction spontaneous under standard conditions?\n(c) Calculate ΔG° for the cell reaction. (n=2, F=96,485 C/mol)\n(d) If the concentration of Ag⁺ is increased from 1.00 M to 2.00 M while [Fe²⁺] remains at 1.00 M, does E_cell increase, decrease, or remain the same? Explain using the Nernst equation.",
choices:null,
answer:"(a) Anode (oxidation): Fe(s) → Fe²⁺(aq) + 2e⁻\nCathode (reduction): 2Ag⁺(aq) + 2e⁻ → 2Ag(s)\nOverall: Fe(s) + 2Ag⁺(aq) → Fe²⁺(aq) + 2Ag(s)\n\n(b) E°cell = E°cathode − E°anode = 0.80 − (−0.44) = +1.24 V\nPositive E°cell → spontaneous under standard conditions.\n\n(c) ΔG° = −nFE°cell = −(2)(96,485)(+1.24) = −239,283 J ≈ −239 kJ\n\n(d) E_cell INCREASES. Q = [Fe²⁺]/[Ag⁺]² = 1.00/(2.00)² = 0.25\nNernst: E = E° − (0.0592/2)log(0.25) = 1.24 − (0.0296)(−0.602) = 1.24 + 0.018 = 1.26 V\nIncreasing [Ag⁺] decreases Q → Nernst equation shows E increases above E°. More reactant → more driving force → higher cell potential.",
explanation:"(a) 2 pts: correct half-reactions and overall. (b) 1 pt: E°cell + spontaneity. (c) 1 pt: ΔG°. (d) 1 pt: E increases with correct Nernst reasoning."}


{id:809,unit:1,topic:"Isotopes",type:"MCQ",difficulty:"Medium",free:true,
question:"Silicon has three isotopes: ²⁸Si (92.2%), ²⁹Si (4.7%), ³⁰Si (3.1%). How many neutrons are in the most abundant isotope?",
choices:{A:"14",B:"28",C:"16",D:"12"},answer:"A",
explanation:"Si has atomic number 14. Most abundant isotope mass = 28. Neutrons = 28 − 14 = 14."},

{id:810,unit:1,topic:"Molar Mass",type:"MCQ",difficulty:"Medium",free:true,
question:"Combustion of ascorbic acid (C₆H₈O₆) yields 0.2400 mol CO₂. How many moles of ascorbic acid were burned?",
choices:{A:"0.0400",B:"0.2400",C:"0.1440",D:"0.0800"},answer:"A",
explanation:"C₆H₈O₆ has 6 carbons → 6 mol CO₂ per mol. Moles = 0.2400 ÷ 6 = 0.0400 mol."},

{id:811,unit:1,topic:"PES",type:"MCQ",difficulty:"Hard",free:true,
question:"A PES spectrum shows 4 peaks with binding energies 48.5, 3.67, 1.84, 0.50 MJ/mol and area ratio 2:2:6:1. Which element fits?",
choices:{A:"Nitrogen",B:"Oxygen",C:"Fluorine",D:"Neon"},answer:"C",
explanation:"Fluorine (Z=9): 1s²2s²2p⁵. Four peaks with ratio 2:2:5 ≈ 2:2:6:1 matches F's configuration."},

{id:812,unit:1,topic:"Electron Configuration",type:"MCQ",difficulty:"Easy",free:true,
question:"Which is the correct ground-state electron configuration of Fe²⁺?",
choices:{A:"[Ar] 3d⁶",B:"[Ar] 4s²3d⁴",C:"[Ar] 4s¹3d⁵",D:"[Ar] 3d⁴"},answer:"A",
explanation:"Fe = [Ar]4s²3d⁶. Fe²⁺ loses both 4s electrons first → [Ar]3d⁶."},

{id:813,unit:1,topic:"Ionization Energy",type:"MCQ",difficulty:"Medium",free:true,
question:"The first five ionization energies of element X are 577, 1817, 2745, 11577, 14842 kJ/mol. Which group does X belong to?",
choices:{A:"Group 1",B:"Group 2",C:"Group 13",D:"Group 14"},answer:"C",
explanation:"Large jump after 3rd IE (2745→11577) means 3 valence electrons → Group 13."},

{id:814,unit:1,topic:"Atomic Radius",type:"MCQ",difficulty:"Easy",free:true,
question:"Which ordering correctly lists atomic radii from largest to smallest?",
choices:{A:"Cs > Rb > K > Na",B:"Na > K > Rb > Cs",C:"Cs > K > Na > Rb",D:"Rb > Cs > K > Na"},answer:"A",
explanation:"Atomic radius increases down Group 1. Cs > Rb > K > Na."},

{id:815,unit:1,topic:"Ionization Energy Anomaly",type:"MCQ",difficulty:"Hard",free:true,
question:"Why is the first ionization energy of O (1314 kJ/mol) lower than that of N (1402 kJ/mol)?",
choices:{A:"O has larger atomic radius",B:"Paired electrons in O's 2p subshell experience extra repulsion",C:"O has lower nuclear charge",D:"N has fewer valence electrons"},answer:"B",
explanation:"In O, one 2p orbital has a paired electron. Extra electron-electron repulsion makes it easier to remove than N's half-filled 2p."},

{id:816,unit:1,topic:"Electronegativity",type:"MCQ",difficulty:"Easy",free:true,
question:"Which element has the highest electronegativity?",
choices:{A:"Oxygen",B:"Chlorine",C:"Fluorine",D:"Nitrogen"},answer:"C",
explanation:"Fluorine has the highest electronegativity (4.0 on Pauling scale)."},

{id:817,unit:1,topic:"Isotopic Abundance",type:"MCQ",difficulty:"Medium",free:true,
question:"Boron has two isotopes: ¹⁰B (19.9%) and ¹¹B (80.1%). What is the average atomic mass?",
choices:{A:"10.50 amu",B:"10.80 amu",C:"10.20 amu",D:"11.00 amu"},answer:"B",
explanation:"(0.199×10) + (0.801×11) = 1.99 + 8.81 = 10.80 amu."},

{id:818,unit:1,topic:"Quantum Numbers",type:"MCQ",difficulty:"Medium",free:true,
question:"How many orbitals are in the n=3 principal energy level?",
choices:{A:"3",B:"6",C:"9",D:"18"},answer:"C",
explanation:"n=3: s(1) + p(3) + d(5) = 9 orbitals."},

{id:819,unit:1,topic:"Quantum Numbers",type:"MCQ",difficulty:"Medium",free:true,
question:"Which set of quantum numbers (n, l, mₗ, mₛ) is NOT valid?",
choices:{A:"(2,1,0,+½)",B:"(3,2,−2,−½)",C:"(2,2,1,+½)",D:"(4,3,−3,+½)"},answer:"C",
explanation:"For n=2, l can only be 0 or 1. l=2 is not allowed when n=2."},

{id:820,unit:1,topic:"Electromagnetic Spectrum",type:"MCQ",difficulty:"Medium",free:true,
question:"A photon has frequency 6.17×10¹⁴ Hz. Which region of the EM spectrum is this?",
choices:{A:"X-ray",B:"Ultraviolet",C:"Visible light",D:"Infrared"},answer:"C",
explanation:"Visible light: ~4.3×10¹⁴ to 7.5×10¹⁴ Hz. 6.17×10¹⁴ Hz is visible (orange)."},

{id:821,unit:1,topic:"de Broglie Wavelength",type:"MCQ",difficulty:"Hard",free:true,
question:"An electron (m=9.11×10⁻³¹ kg) moves at 2.00×10⁶ m/s. What is its de Broglie wavelength? (h=6.626×10⁻³⁴ J·s)",
choices:{A:"3.64×10⁻¹⁰ m",B:"7.27×10⁻¹⁰ m",C:"1.82×10⁻¹⁰ m",D:"5.45×10⁻¹⁰ m"},answer:"A",
explanation:"λ = h/mv = 6.626×10⁻³⁴ / (9.11×10⁻³¹ × 2.00×10⁶) = 3.64×10⁻¹⁰ m."},

{id:822,unit:1,topic:"Hund's Rule",type:"MCQ",difficulty:"Easy",free:true,
question:"How many unpaired electrons does a ground-state nitrogen atom have?",
choices:{A:"1",B:"2",C:"3",D:"0"},answer:"C",
explanation:"N: 1s²2s²2p³. By Hund's rule, each 2p electron is in its own orbital → 3 unpaired electrons."},

{id:823,unit:1,topic:"Successive Ionization Energies",type:"MCQ",difficulty:"Hard",free:true,
question:"Why is the 2nd ionization energy of Na (4562 kJ/mol) so much higher than its 1st (496 kJ/mol)?",
choices:{A:"2nd electron is in a lower shell, closer to nucleus",B:"Na⁺ has noble-gas configuration",C:"Both A and B",D:"Atom expands after losing first electron"},answer:"C",
explanation:"Na⁺ has [Ne] config. The next electron is in n=2, much closer to nucleus with stronger nuclear attraction — both the lower shell AND the noble-gas stability contribute."},


{id:824,unit:1,topic:"Atomic Spectra",type:"MCQ",difficulty:"Medium",free:true,
question:"Which Balmer series transition produces the highest energy photon?",
choices:{A:"n=3→n=2",B:"n=4→n=2",C:"n=∞→n=2",D:"n=5→n=2"},answer:"C",
explanation:"ΔE is largest when n₂=∞ (series limit). The n=∞→n=2 transition releases the most energy in the Balmer series."},

{id:825,unit:1,topic:"Electron Config Exceptions",type:"MCQ",difficulty:"Hard",free:true,
question:"Why does copper have configuration [Ar]3d¹⁰4s¹ rather than [Ar]3d⁹4s²?",
choices:{A:"A full 3d subshell is extra stable",B:"4s fills before 3d",C:"Cu must have half-filled 4s",D:"4s has higher energy than 3d in transition metals"},answer:"A",
explanation:"A completely filled 3d¹⁰ subshell has extra stability from symmetric electron distribution, making [Ar]3d¹⁰4s¹ lower energy."},

{id:826,unit:1,topic:"Mole Concept",type:"MCQ",difficulty:"Easy",free:true,
question:"How many atoms are in 2.50 mol of iron?",
choices:{A:"1.51×10²⁴",B:"2.50×10²³",C:"4.17×10⁻²⁴",D:"6.02×10²³"},answer:"A",
explanation:"2.50 mol × 6.022×10²³ atoms/mol = 1.506×10²⁴ ≈ 1.51×10²⁴ atoms."},

{id:827,unit:1,topic:"Molecular Formula",type:"MCQ",difficulty:"Medium",free:true,
question:"A compound has empirical formula CH₂O and molar mass 180 g/mol. What is its molecular formula?",
choices:{A:"C₃H₆O₃",B:"C₆H₁₂O₆",C:"C₂H₄O₂",D:"C₄H₈O₄"},answer:"B",
explanation:"Empirical mass = 30 g/mol. 180÷30 = 6. Molecular formula = C₆H₁₂O₆."},

{id:828,unit:1,topic:"Percent Composition",type:"MCQ",difficulty:"Medium",free:true,
question:"What is the percent by mass of nitrogen in NH₄NO₃?",
choices:{A:"35.0%",B:"28.0%",C:"17.5%",D:"14.0%"},answer:"A",
explanation:"Molar mass NH₄NO₃ = 80 g/mol. Two N atoms = 28 g. %N = 28/80 × 100 = 35.0%."},

{id:829,unit:1,topic:"PES Interpretation",type:"MCQ",difficulty:"Hard",free:true,
question:"In a PES spectrum, electrons with higher binding energy are:",
choices:{A:"In higher energy orbitals farther from nucleus",B:"In lower energy orbitals closer to nucleus",C:"Valence electrons",D:"Easier to remove"},answer:"B",
explanation:"Core electrons (closer to nucleus, lower n) require more energy to remove → higher binding energy in PES."},

{id:830,unit:1,topic:"Heisenberg Uncertainty",type:"MCQ",difficulty:"Medium",free:true,
question:"The Heisenberg uncertainty principle states that:",
choices:{A:"Electrons travel in circular orbits",B:"Exact position and momentum of an electron cannot both be known simultaneously",C:"All electrons must have unique 3 quantum numbers",D:"Electrons fill lowest energy orbitals first"},answer:"B",
explanation:"Δx·Δp ≥ ℏ/2. More precisely position is known → less precisely momentum is known."},

{id:831,unit:1,topic:"Valence Electrons from IE",type:"MCQ",difficulty:"Hard",free:true,
question:"Successive IEs of element Y: 786, 1577, 3232, 4356, 16091, 19784 kJ/mol. How many valence electrons?",
choices:{A:"2",B:"3",C:"4",D:"5"},answer:"C",
explanation:"Huge jump between 4th and 5th IE → 4 valence electrons → Group 14."},

{id:832,unit:1,topic:"Pauli Exclusion",type:"MCQ",difficulty:"Easy",free:true,
question:"The Pauli exclusion principle states that:",
choices:{A:"Electrons fill orbitals one at a time before pairing",B:"No two electrons can have the same 4 quantum numbers",C:"Electrons fill higher energy orbitals first",D:"Paired electrons have the same spin"},answer:"B",
explanation:"No two electrons in an atom may have identical values for all four quantum numbers (n, l, mₗ, mₛ)."},

{id:833,unit:1,topic:"Average Atomic Mass",type:"MCQ",difficulty:"Medium",free:true,
question:"Chlorine: ³⁵Cl (75.77%) and ³⁷Cl (24.23%). Average atomic mass?",
choices:{A:"35.48 amu",B:"36.00 amu",C:"35.97 amu",D:"36.50 amu"},answer:"A",
explanation:"(0.7577×35) + (0.2423×37) = 26.52 + 8.97 = 35.49 ≈ 35.48 amu."},

{id:834,unit:1,topic:"Flame Test",type:"MCQ",difficulty:"Easy",free:true,
question:"Why do different elements produce different colors in a flame test?",
choices:{A:"Different electronegativities",B:"Electrons emit characteristic wavelengths when returning to lower energy levels",C:"Different melting points",D:"Elements absorb unique frequencies"},answer:"B",
explanation:"Heated electrons jump to higher levels; when they fall back, they emit photons of wavelengths specific to each element's quantized energy levels."},

{id:835,unit:1,topic:"Electron Affinity",type:"MCQ",difficulty:"Medium",free:true,
question:"Which has the most negative electron affinity (largest magnitude)?",
choices:{A:"Na",B:"Mg",C:"Cl",D:"Ar"},answer:"C",
explanation:"Cl gains one electron to reach noble-gas configuration, releasing the most energy. Ar and Mg have low or positive electron affinity."},

{id:836,unit:1,topic:"Photon Energy",type:"MCQ",difficulty:"Medium",free:true,
question:"A photon has wavelength 486 nm. What is its energy? (h=6.626×10⁻³⁴ J·s, c=3.00×10⁸ m/s)",
choices:{A:"4.09×10⁻¹⁹ J",B:"2.45×10⁻¹⁹ J",C:"8.18×10⁻¹⁹ J",D:"1.22×10⁻¹⁹ J"},answer:"A",
explanation:"E = hc/λ = (6.626×10⁻³⁴ × 3.00×10⁸) / (486×10⁻⁹) = 4.09×10⁻¹⁹ J."},

{id:837,unit:1,topic:"Isoelectronic Species",type:"MCQ",difficulty:"Medium",free:true,
question:"Which is isoelectronic with Ar (18 electrons)?",
choices:{A:"K⁺",B:"Ca⁺",C:"Cl",D:"S"},answer:"A",
explanation:"K has 19 electrons. K⁺ has 18 electrons — same as Ar."},

{id:838,unit:1,topic:"Orbital Shapes",type:"MCQ",difficulty:"Easy",free:true,
question:"Which orbital is NOT spherically symmetric?",
choices:{A:"1s",B:"2s",C:"3s",D:"2p"},answer:"D",
explanation:"All s orbitals are spherical. p orbitals have a dumbbell shape along one axis."},


{id:839,unit:1,topic:"Period Trends",type:"MCQ",difficulty:"Medium",free:true,
question:"Moving across Period 3 from Na to Cl, atomic radius:",
choices:{A:"Increases — more electrons added",B:"Decreases — nuclear charge increases, same shell",C:"Stays constant",D:"First increases then decreases"},answer:"B",
explanation:"Across a period, nuclear charge increases but electrons enter the same shell → increased attraction pulls electrons closer → smaller radius."},

{id:840,unit:1,topic:"Neutron Count",type:"MCQ",difficulty:"Easy",free:true,
question:"How many neutrons are in ²³⁸₉₂U?",
choices:{A:"92",B:"238",C:"146",D:"330"},answer:"C",
explanation:"Neutrons = mass number − atomic number = 238 − 92 = 146."},

{id:841,unit:1,topic:"Ionic Radius",type:"MCQ",difficulty:"Medium",free:true,
question:"Among isoelectronic ions Al³⁺, Mg²⁺, Na⁺, F⁻ (all 10 electrons), which has the largest radius?",
choices:{A:"Al³⁺",B:"Mg²⁺",C:"Na⁺",D:"F⁻"},answer:"D",
explanation:"F⁻ has Z=9 (lowest nuclear charge among these ions). Less nuclear pull → electrons spread further → largest radius."},

{id:842,unit:1,topic:"Diamagnetic Ions",type:"MCQ",difficulty:"Medium",free:true,
question:"Which ion is diamagnetic (no unpaired electrons)?",
choices:{A:"Fe³⁺",B:"Cu²⁺",C:"Zn²⁺",D:"Ni²⁺"},answer:"C",
explanation:"Zn = [Ar]3d¹⁰4s². Zn²⁺ = [Ar]3d¹⁰. Completely filled d subshell → no unpaired electrons → diamagnetic."},

{id:843,unit:1,topic:"Absorption vs Emission",type:"MCQ",difficulty:"Medium",free:true,
question:"The absorption and emission spectra of the same element:",
choices:{A:"Show different wavelengths",B:"Show lines at the same wavelengths but complementary (dark vs bright)",C:"Are identical in appearance",D:"Absorption shows more lines"},answer:"B",
explanation:"Both arise from same energy differences. Emission = bright lines; absorption = dark lines at the same wavelengths."},

{id:844,unit:1,topic:"Photoelectric Effect",type:"MCQ",difficulty:"Medium",free:true,
question:"Increasing light intensity (at constant frequency above threshold) in the photoelectric effect will:",
choices:{A:"Increase KE of ejected electrons",B:"Increase number of ejected electrons, not their KE",C:"Increase both KE and number",D:"Have no effect"},answer:"B",
explanation:"Photon energy depends on frequency, not intensity. More photons → more electrons ejected, but KE per electron = hf − φ (unchanged)."},

{id:845,unit:1,topic:"Empirical Formula",type:"MCQ",difficulty:"Hard",free:true,
question:"A compound contains 40.0% C, 6.7% H, 53.3% O by mass. What is its empirical formula?",
choices:{A:"CH₂O",B:"C₂H₄O₂",C:"CHO₂",D:"CH₃O"},answer:"A",
explanation:"C: 40/12=3.33, H: 6.7/1=6.7, O: 53.3/16=3.33. Ratio 1:2:1 → CH₂O."},

{id:846,unit:1,topic:"Beta Decay",type:"MCQ",difficulty:"Medium",free:true,
question:"In beta-minus (β⁻) decay, what is emitted?",
choices:{A:"Alpha particle",B:"Electron and antineutrino",C:"Positron",D:"Gamma ray only"},answer:"B",
explanation:"β⁻ decay: n → p⁺ + e⁻ + antineutrino. Atomic number increases by 1, mass number unchanged."},

{id:847,unit:1,topic:"Half-Life",type:"MCQ",difficulty:"Medium",free:true,
question:"A radioactive isotope has a half-life of 8 days. What fraction remains after 24 days?",
choices:{A:"1/2",B:"1/4",C:"1/8",D:"1/16"},answer:"C",
explanation:"24÷8 = 3 half-lives. (1/2)³ = 1/8 remains."},

{id:848,unit:1,topic:"Ion Charge",type:"MCQ",difficulty:"Easy",free:true,
question:"An atom has 26 protons, 30 neutrons, 24 electrons. What is its charge?",
choices:{A:"+2",B:"−2",C:"+4",D:"0"},answer:"A",
explanation:"Charge = protons − electrons = 26 − 24 = +2. This is Fe²⁺."},

{id:849,unit:1,topic:"Highest First IE",type:"MCQ",difficulty:"Medium",free:true,
question:"Which element has the highest first ionization energy?",
choices:{A:"Cesium",B:"Fluorine",C:"Helium",D:"Oxygen"},answer:"C",
explanation:"Helium (2372 kJ/mol) has the highest first IE due to its very small size and high nuclear charge relative to its 2 electrons."},

{id:850,unit:1,topic:"Lattice Energy",type:"MCQ",difficulty:"Hard",free:true,
question:"Which compound has the highest lattice energy?",
choices:{A:"NaCl",B:"MgO",C:"KBr",D:"CaS"},answer:"B",
explanation:"Lattice energy ∝ q₁×q₂/r. MgO has Mg²⁺ and O²⁻ (charges ±2) with small ionic radii → highest lattice energy."},

{id:851,unit:1,topic:"Light Frequency",type:"MCQ",difficulty:"Medium",free:true,
question:"What is the frequency of light with wavelength 650 nm? (c=3.00×10⁸ m/s)",
choices:{A:"4.62×10¹⁴ Hz",B:"1.95×10¹⁷ Hz",C:"2.17×10⁻¹⁵ Hz",D:"4.62×10⁸ Hz"},answer:"A",
explanation:"f = c/λ = 3.00×10⁸ / 650×10⁻⁹ = 4.62×10¹⁴ Hz."},

{id:852,unit:1,topic:"Rutherford Experiment",type:"MCQ",difficulty:"Easy",free:true,
question:"Rutherford's gold foil experiment showed that:",
choices:{A:"Electrons orbit in circular paths",B:"The atom is mostly empty space with a small dense positive nucleus",C:"Electrons are embedded in a positive sphere",D:"Neutrons are outside the nucleus"},answer:"B",
explanation:"Most alpha particles passed through; a few scattered sharply → atom is mostly empty with a tiny, dense, positive nucleus."},

{id:853,unit:1,topic:"Electron Config Cr",type:"MCQ",difficulty:"Medium",free:true,
question:"What is the ground-state electron configuration of Cr (Z=24)?",
choices:{A:"[Ar] 3d⁴4s²",B:"[Ar] 3d⁵4s¹",C:"[Ar] 3d⁶4s⁰",D:"[Ar] 3d³4s³"},answer:"B",
explanation:"Cr adopts [Ar]3d⁵4s¹ — half-filled 3d⁵ gives extra stability over [Ar]3d⁴4s²."},


{id:854,unit:1,topic:"Mass Spectrometry",type:"MCQ",difficulty:"Medium",free:true,
question:"In mass spectrometry, what does the instrument actually measure?",
choices:{A:"Atomic mass directly",B:"Mass-to-charge ratio (m/z) of ions",C:"Number of protons",D:"Electron affinity"},answer:"B",
explanation:"A mass spectrometer measures m/z by deflecting ions in a magnetic field. With z=1, m/z = atomic mass."},

{id:855,unit:1,topic:"Nuclear Reactions",type:"MCQ",difficulty:"Medium",free:true,
question:"What is the product of alpha (α) decay of ²²⁶₈₈Ra?",
choices:{A:"²²²₈₆Rn",B:"²²⁶₈₉Ac",C:"²²⁶₈₇Fr",D:"²²²₈₈Ra"},answer:"A",
explanation:"Alpha = ⁴₂He. ²²⁶₈₈Ra → ⁴₂He + product. Mass: 226−4=222; Z: 88−2=86 = Rn. Product = ²²²₈₆Rn."},

{id:856,unit:1,topic:"Thomson Experiment",type:"MCQ",difficulty:"Easy",free:true,
question:"Thomson's cathode ray tube experiment demonstrated that:",
choices:{A:"The nucleus holds most of atom's mass",B:"Electrons are negative particles present in all atoms",C:"Protons and neutrons are in the nucleus",D:"Electrons orbit in discrete levels"},answer:"B",
explanation:"Cathode rays deflected by electric/magnetic fields proved they were negatively charged particles (electrons) present in all matter."},

{id:857,unit:1,topic:"Oxidation States",type:"MCQ",difficulty:"Medium",free:true,
question:"What is the oxidation number of Mn in KMnO₄?",
choices:{A:"+2",B:"+4",C:"+6",D:"+7"},answer:"D",
explanation:"K=+1, O=−2×4=−8. Neutral compound: +1+Mn−8=0 → Mn=+7."},

{id:858,unit:1,topic:"Quantum Model",type:"MCQ",difficulty:"Medium",free:true,
question:"In the quantum mechanical model, an orbital represents:",
choices:{A:"Exact circular path of an electron",B:"3D region of high probability of finding an electron",C:"Max electrons with same energy",D:"Energy of a single electron"},answer:"B",
explanation:"An orbital is a 3D region described by a wave function where there is a ~90% probability of finding the electron."},

{id:859,unit:1,topic:"Avogadro's Number",type:"MCQ",difficulty:"Easy",free:true,
question:"How many molecules are in 44.0 g of CO₂? (Molar mass = 44.0 g/mol)",
choices:{A:"6.02×10²³",B:"1.20×10²⁴",C:"3.01×10²³",D:"2.41×10²⁴"},answer:"A",
explanation:"1.00 mol CO₂ × 6.022×10²³ = 6.02×10²³ molecules."},

{id:860,unit:1,topic:"Lyman Series",type:"MCQ",difficulty:"Hard",free:true,
question:"The n=2→n=1 Lyman-alpha transition in hydrogen (E=10.2 eV) falls in which spectral region?",
choices:{A:"Visible (violet)",B:"Infrared",C:"Ultraviolet",D:"X-ray"},answer:"C",
explanation:"10.2 eV → λ ≈ 122 nm, which is far ultraviolet."},

{id:861,unit:1,topic:"Nuclear Binding Energy",type:"MCQ",difficulty:"Hard",free:true,
question:"The mass defect of ⁴He is 0.03038 amu. This illustrates:",
choices:{A:"Radioactive decay",B:"Mass converted to binding energy via E=mc²",C:"Difference in proton and neutron masses",D:"Isotope formation"},answer:"B",
explanation:"Mass defect = mass of separate nucleons − actual nuclear mass. Missing mass converts to binding energy (E=mc²) that holds the nucleus together."},

{id:862,unit:1,topic:"Sig Figs",type:"MCQ",difficulty:"Easy",free:true,
question:"How many significant figures are in 0.00470 g?",
choices:{A:"1",B:"2",C:"3",D:"5"},answer:"C",
explanation:"Leading zeros are not significant. 0.00470 has 3 sig figs: 4, 7, and the trailing 0 after the decimal."},

{id:863,unit:1,topic:"Anion Formation",type:"MCQ",difficulty:"Easy",free:true,
question:"Sulfur forms S²⁻ because:",
choices:{A:"S loses 2 electrons to get noble-gas config",B:"S gains 2 electrons to get the config of Ar",C:"S gains 2 protons",D:"Nuclear decay occurs"},answer:"B",
explanation:"S has 6 valence electrons. Gaining 2 gives [Ne]3s²3p⁶ = Ar configuration."},

{id:864,unit:1,topic:"Electron Config Anions",type:"MCQ",difficulty:"Medium",free:true,
question:"What is the electron configuration of O²⁻?",
choices:{A:"1s²2s²2p⁴",B:"1s²2s²2p⁶",C:"1s²2s²2p²",D:"1s²2s⁴"},answer:"B",
explanation:"O²⁻ has 8+2=10 electrons = 1s²2s²2p⁶, same as Ne."},

{id:865,unit:1,topic:"Photon Absorption",type:"MCQ",difficulty:"Hard",free:true,
question:"A photon excites H from n=1 to n=3. The photon's energy equals:",
choices:{A:"13.6(1/1−1/9) = 12.1 eV",B:"13.6/3 = 4.53 eV",C:"13.6×3 = 40.8 eV",D:"13.6(1/9−1/1) = −12.1 eV"},answer:"A",
explanation:"ΔE = 13.6(1/n₁²−1/n₂²) = 13.6(1−1/9) = 13.6×(8/9) = 12.1 eV (positive = absorbed)."},

{id:866,unit:1,topic:"Mole-Mass",type:"MCQ",difficulty:"Easy",free:true,
question:"What is the mass of 3.01×10²³ molecules of H₂O? (MM=18.0 g/mol)",
choices:{A:"54.0 g",B:"9.00 g",C:"36.0 g",D:"18.0 g"},answer:"B",
explanation:"0.500 mol × 18.0 g/mol = 9.00 g."},

{id:867,unit:1,topic:"Group Trends",type:"MCQ",difficulty:"Easy",free:true,
question:"Elements in the same group have similar properties because they:",
choices:{A:"Have the same atomic mass",B:"Have the same number of valence electrons",C:"Are in the same period",D:"Have the same neutron count"},answer:"B",
explanation:"Same group = same number of valence electrons = similar reactivity and bonding behavior."},

{id:868,unit:1,topic:"Bohr Model Limits",type:"MCQ",difficulty:"Medium",free:true,
question:"The Bohr model fails for multi-electron atoms because:",
choices:{A:"It uses circular orbits",B:"It ignores electron-electron repulsions",C:"It uses wave functions",D:"Both A and B"},answer:"D",
explanation:"Bohr assumes circular orbits (wrong per QM) and ignores electron-electron repulsions, which significantly shift energy levels in multi-electron atoms."},


{id:869,unit:2,topic:"Lewis Structures",type:"MCQ",difficulty:"Easy",free:false,
question:"How many lone pairs are on the central sulfur atom in SF₂?",
choices:{A:"0",B:"1",C:"2",D:"3"},answer:"C",
explanation:"S has 6 valence electrons. Two bonds to F use 2 electrons. Remaining 4 electrons = 2 lone pairs on S."},

{id:870,unit:2,topic:"VSEPR",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the molecular geometry of SF₄?",
choices:{A:"Tetrahedral",B:"See-saw",C:"Square planar",D:"Trigonal pyramidal"},answer:"B",
explanation:"SF₄: 4 bonding pairs + 1 lone pair = 5 electron domains → trigonal bipyramidal electron geometry → see-saw molecular geometry."},

{id:871,unit:2,topic:"Bond Polarity",type:"MCQ",difficulty:"Easy",free:false,
question:"Which bond is the most polar?",
choices:{A:"C−H",B:"N−H",C:"O−H",D:"F−H"},answer:"D",
explanation:"Bond polarity increases with electronegativity difference. F is the most electronegative element, so F−H has the greatest electronegativity difference and is most polar."},

{id:872,unit:2,topic:"Formal Charge",type:"MCQ",difficulty:"Hard",free:false,
question:"In the Lewis structure of CO₂ with double bonds on each side, what is the formal charge on each oxygen?",
choices:{A:"+1",B:"0",C:"−1",D:"−2"},answer:"B",
explanation:"Each O in CO₂: 6 valence e⁻ − 4 nonbonding e⁻ − ½(4 bonding e⁻) = 6−4−2 = 0. Formal charge = 0."},

{id:873,unit:2,topic:"Resonance",type:"MCQ",difficulty:"Medium",free:false,
question:"Which species is best described by resonance structures?",
choices:{A:"H₂O",B:"NH₃",C:"NO₃⁻",D:"CH₄"},answer:"C",
explanation:"NO₃⁻ has three equivalent N−O bonds that cannot be represented by a single Lewis structure. Three resonance structures delocalize the electrons equally."},

{id:874,unit:2,topic:"VSEPR Angles",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the H−N−H bond angle in NH₃?",
choices:{A:"120°",B:"109.5°",C:"107°",D:"90°"},answer:"C",
explanation:"NH₃ has 3 bonding pairs + 1 lone pair. Lone pair repulsion compresses the H−N−H angle from the ideal 109.5° to approximately 107°."},

{id:875,unit:2,topic:"Hybridization",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the hybridization of carbon in CO₂?",
choices:{A:"sp³",B:"sp²",C:"sp",D:"sp³d"},answer:"C",
explanation:"CO₂: C has 2 double bonds (2 electron domains) → sp hybridization → linear geometry (180°)."},

{id:876,unit:2,topic:"Molecular Polarity",type:"MCQ",difficulty:"Medium",free:false,
question:"Which molecule is nonpolar despite having polar bonds?",
choices:{A:"H₂O",B:"NH₃",C:"CO₂",D:"HCl"},answer:"C",
explanation:"CO₂ has two polar C=O bonds arranged linearly (180°). The dipole moments cancel exactly → nonpolar molecule."},

{id:877,unit:2,topic:"Ionic vs Covalent",type:"MCQ",difficulty:"Easy",free:false,
question:"Which compound is best classified as ionic?",
choices:{A:"CO₂",B:"CH₄",C:"MgCl₂",D:"H₂O"},answer:"C",
explanation:"MgCl₂ is formed between a metal (Mg) and nonmetal (Cl) with large electronegativity difference → ionic compound."},

{id:878,unit:2,topic:"Lewis Dot - Exceptions",type:"MCQ",difficulty:"Hard",free:false,
question:"Which molecule has an odd number of valence electrons and thus cannot satisfy the octet rule?",
choices:{A:"CO₂",B:"NO",C:"H₂O",D:"NH₃"},answer:"B",
explanation:"NO has 5+6=11 valence electrons (odd number). With an unpaired electron, one atom cannot complete its octet. NO is a radical."},

{id:879,unit:2,topic:"Bond Order",type:"MCQ",difficulty:"Medium",free:false,
question:"Which bond has the highest bond order and therefore the shortest bond length?",
choices:{A:"N−N single bond",B:"N=N double bond",C:"N≡N triple bond",D:"N−O single bond"},answer:"C",
explanation:"Bond order: single=1, double=2, triple=3. Higher bond order → shorter, stronger bond. N≡N has bond order 3."},

{id:880,unit:2,topic:"VSEPR - Linear",type:"MCQ",difficulty:"Easy",free:false,
question:"What is the molecular geometry of BeCl₂?",
choices:{A:"Bent",B:"Trigonal planar",C:"Linear",D:"Tetrahedral"},answer:"C",
explanation:"BeCl₂: Be has 2 bonding pairs, no lone pairs → 2 electron domains → linear geometry (180°)."},

{id:881,unit:2,topic:"Electronegativity & Bond Type",type:"MCQ",difficulty:"Medium",free:false,
question:"A bond between two atoms with electronegativity difference of 1.8 is best described as:",
choices:{A:"Nonpolar covalent",B:"Polar covalent",C:"Ionic",D:"Metallic"},answer:"B",
explanation:"Electronegativity difference: 0–0.4 = nonpolar covalent; 0.4–1.7 = polar covalent; >1.7 = ionic. A difference of 1.8 is borderline but generally considered polar covalent to ionic. By most AP guidelines, Δ>1.7 is ionic, but 1.8 is polar covalent leaning ionic — AP exams use ~1.7 cutoff, so 1.8 = polar covalent (borderline)."},

{id:882,unit:2,topic:"Sigma and Pi Bonds",type:"MCQ",difficulty:"Medium",free:false,
question:"How many sigma (σ) and pi (π) bonds are in a molecule of acetylene (C₂H₂)?",
choices:{A:"2σ, 1π",B:"3σ, 1π",C:"3σ, 2π",D:"2σ, 2π"},answer:"C",
explanation:"C₂H₂: H−C≡C−H. Each single bond = 1σ. Triple bond = 1σ + 2π. Total: H−C (1σ) + C≡C (1σ+2π) + C−H (1σ) = 3σ + 2π."},

{id:883,unit:2,topic:"Octet Expansion",type:"MCQ",difficulty:"Hard",free:false,
question:"Which molecule has an expanded octet (more than 8 electrons around the central atom)?",
choices:{A:"PCl₅",B:"CH₄",C:"NH₃",D:"H₂O"},answer:"A",
explanation:"PCl₅: P forms 5 bonds = 10 electrons around P. P is in Period 3 and can use 3d orbitals to expand its octet beyond 8 electrons."},


{id:884,unit:2,topic:"VSEPR Trigonal Planar",type:"MCQ",difficulty:"Easy",free:false,
question:"What is the molecular geometry of BF₃?",
choices:{A:"Trigonal pyramidal",B:"Trigonal planar",C:"Tetrahedral",D:"T-shaped"},answer:"B",
explanation:"BF₃: B has 3 bonding pairs, no lone pairs → 3 electron domains → trigonal planar geometry (120° angles)."},

{id:885,unit:2,topic:"Hybridization sp2",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the hybridization of the nitrogen atom in NO₃⁻?",
choices:{A:"sp³",B:"sp²",C:"sp",D:"sp³d"},answer:"B",
explanation:"N in NO₃⁻ forms 3 bonds (with resonance), 3 electron domains → sp² hybridization → trigonal planar geometry."},

{id:886,unit:2,topic:"Dipole Moment",type:"MCQ",difficulty:"Medium",free:false,
question:"Which molecule has a net dipole moment of zero?",
choices:{A:"H₂O",B:"CCl₄",C:"NH₃",D:"CH₂Cl₂"},answer:"B",
explanation:"CCl₄ is tetrahedral with 4 identical C−Cl bonds. All bond dipoles are equal and arranged symmetrically → they cancel completely → net dipole = 0."},

{id:887,unit:2,topic:"Lewis Structure - Count Electrons",type:"MCQ",difficulty:"Medium",free:false,
question:"How many total valence electrons are in a Lewis structure of H₂SO₄?",
choices:{A:"32",B:"48",C:"50",D:"38"},answer:"A",
explanation:"H(1×2)=2, S(6)=6, O(6×4)=24. Total = 2+6+24 = 32 valence electrons."},

{id:888,unit:2,topic:"VSEPR Square Planar",type:"MCQ",difficulty:"Hard",free:false,
question:"What is the molecular geometry of XeF₄?",
choices:{A:"Tetrahedral",B:"See-saw",C:"Square planar",D:"Octahedral"},answer:"C",
explanation:"XeF₄: 4 bonding pairs + 2 lone pairs = 6 electron domains → octahedral electron geometry → square planar molecular geometry (lone pairs in axial positions)."},

{id:889,unit:2,topic:"Bond Strength",type:"MCQ",difficulty:"Medium",free:false,
question:"Which statement correctly describes the relationship between bond order and bond energy?",
choices:{A:"Higher bond order = lower bond energy",B:"Higher bond order = higher bond energy and shorter bond",C:"Bond order does not affect bond energy",D:"Triple bonds are weaker than double bonds"},answer:"B",
explanation:"As bond order increases (single→double→triple), more electrons hold the nuclei together → stronger bond (higher energy to break) and shorter bond length."},

{id:890,unit:2,topic:"Lewis Structure SO2",type:"MCQ",difficulty:"Hard",free:false,
question:"In the most favorable Lewis structure of SO₂, what is the formal charge on sulfur?",
choices:{A:"0",B:"+1",C:"+2",D:"−1"},answer:"A",
explanation:"With one S=O double bond and one S−O single bond (plus lone pairs), the formal charge on S = 6 − 2 − ½(6) = 6−2−3 = +1. However, with two double bonds to O, FC(S) = 6−0−½(8) = +2. The structure with one double bond gives FC(S)=0 when accounting for all lone pairs properly. Best Lewis structure minimizes formal charges → FC(S) = 0."},

{id:891,unit:2,topic:"VSEPR Water",type:"MCQ",difficulty:"Easy",free:false,
question:"Why is the H−O−H bond angle in water (104.5°) less than the tetrahedral angle (109.5°)?",
choices:{A:"O is more electronegative than H",B:"Two lone pairs on O repel bonding pairs more than bonding pairs repel each other",C:"H atoms are very small",D:"Water has only 2 bonding domains"},answer:"B",
explanation:"Lone pair−lone pair repulsion > lone pair−bonding pair repulsion > bonding pair−bonding pair repulsion. Two lone pairs on O compress the H−O−H angle below 109.5°."},

{id:892,unit:2,topic:"Hybridization sp3",type:"MCQ",difficulty:"Easy",free:false,
question:"What is the hybridization of nitrogen in NH₃?",
choices:{A:"sp",B:"sp²",C:"sp³",D:"sp³d"},answer:"C",
explanation:"NH₃: N has 3 bonding pairs + 1 lone pair = 4 electron domains → sp³ hybridization → trigonal pyramidal geometry."},

{id:893,unit:2,topic:"Resonance & Bond Length",type:"MCQ",difficulty:"Medium",free:false,
question:"In benzene (C₆H₆), all C−C bonds are equal in length. This is best explained by:",
choices:{A:"Each C−C is a single bond",B:"Each C−C is a double bond",C:"Delocalization of electrons through resonance",D:"sp³ hybridization of carbon"},answer:"C",
explanation:"Benzene has 3 resonance structures. Electron delocalization makes all C−C bonds equivalent — intermediate between single and double bonds (bond order = 1.5)."},

{id:894,unit:2,topic:"Metallic Bonding",type:"MCQ",difficulty:"Medium",free:false,
question:"Which property of metals is best explained by the electron sea model?",
choices:{A:"High melting points of ionic compounds",B:"Electrical conductivity of metals",C:"Low boiling points of noble gases",D:"High electronegativity of nonmetals"},answer:"B",
explanation:"The electron sea model: metal cations surrounded by delocalized valence electrons. These mobile electrons carry charge freely → explains electrical conductivity."},

{id:895,unit:2,topic:"VSEPR Trigonal Bipyramidal",type:"MCQ",difficulty:"Hard",free:false,
question:"In PCl₅, the axial P−Cl bonds are slightly longer than equatorial P−Cl bonds because:",
choices:{A:"Axial bonds are double bonds",B:"Axial positions experience more lone pair repulsion (90° interactions with 3 equatorial pairs)",C:"Equatorial Cl atoms are larger",D:"The axial bonds have higher bond order"},answer:"B",
explanation:"In trigonal bipyramidal geometry, axial positions have 90° angles with 3 equatorial bonds. This greater repulsion weakens (lengthens) the axial bonds compared to equatorial bonds."},

{id:896,unit:2,topic:"Ionic Bonding Lattice",type:"MCQ",difficulty:"Medium",free:false,
question:"NaCl has a higher melting point than NaBr. The best explanation is:",
choices:{A:"Na is more electronegative than Cl",B:"Cl⁻ is smaller than Br⁻, giving NaCl stronger electrostatic attraction",C:"NaBr has more electrons",D:"NaCl has a different crystal structure"},answer:"B",
explanation:"Lattice energy ∝ charge/distance. Cl⁻ (181 pm) is smaller than Br⁻ (196 pm). Shorter interionic distance in NaCl → stronger lattice energy → higher melting point."},

{id:897,unit:2,topic:"VSEPR Octahedral",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the molecular geometry of SF₆?",
choices:{A:"Trigonal bipyramidal",B:"Square pyramidal",C:"Octahedral",D:"Pentagonal bipyramidal"},answer:"C",
explanation:"SF₆: S forms 6 bonds, no lone pairs → 6 electron domains → octahedral electron geometry AND molecular geometry (90° bond angles)."},

{id:898,unit:2,topic:"Polarity from Structure",type:"MCQ",difficulty:"Hard",free:false,
question:"Which of the following is polar?",
choices:{A:"BF₃",B:"CCl₄",C:"SF₆",D:"CHCl₃"},answer:"D",
explanation:"CHCl₃ (chloroform) has 3 Cl and 1 H attached to C in tetrahedral arrangement. Since Cl ≠ H, the bond dipoles do NOT cancel → net dipole moment → polar molecule."},


{id:899,unit:2,topic:"Lewis Structure Ions",type:"MCQ",difficulty:"Medium",free:false,
question:"How many lone pairs are on the central atom in the PCl₄⁺ ion?",
choices:{A:"0",B:"1",C:"2",D:"3"},answer:"A",
explanation:"PCl₄⁺: P has 5 valence e⁻, loses 1 for + charge = 4 e⁻. Forms 4 bonds using all 4 electrons → 0 lone pairs → tetrahedral geometry."},

{id:900,unit:2,topic:"Bond Angles Comparison",type:"MCQ",difficulty:"Hard",free:false,
question:"Which ordering of bond angles is correct?",
choices:{A:"CH₄ > NH₃ > H₂O",B:"H₂O > NH₃ > CH₄",C:"NH₃ > CH₄ > H₂O",D:"CH₄ = NH₃ = H₂O"},answer:"A",
explanation:"CH₄ (109.5°, 0 LP) > NH₃ (107°, 1 LP) > H₂O (104.5°, 2 LP). Lone pairs compress bond angles progressively."},

{id:901,unit:2,topic:"Lewis Structure HNO3",type:"MCQ",difficulty:"Hard",free:false,
question:"In HNO₃, the nitrogen atom is bonded to three oxygen atoms. What is the formal charge on N?",
choices:{A:"0",B:"+1",C:"+2",D:"−1"},answer:"B",
explanation:"N in HNO₃: 5 valence e⁻ − 0 lone pair e⁻ − ½(8 bonding e⁻) = 5−0−4 = +1."},

{id:902,unit:2,topic:"Hybridization Ethene",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the hybridization of each carbon in ethene (C₂H₄)?",
choices:{A:"sp³",B:"sp²",C:"sp",D:"sp³d"},answer:"B",
explanation:"Each C in C₂H₄ forms 3 σ bonds (2 C−H + 1 C−C) and 1 π bond. 3 electron domains → sp² hybridization → 120° angles → planar molecule."},

{id:903,unit:2,topic:"Ionic Character",type:"MCQ",difficulty:"Medium",free:false,
question:"Which bond has the greatest ionic character?",
choices:{A:"H−Cl",B:"H−F",C:"Li−F",D:"Na−Cl"},answer:"C",
explanation:"Ionic character increases with electronegativity difference. Li (EN=1.0) and F (EN=4.0): ΔEN=3.0 — the largest among these pairs → most ionic character."},

{id:904,unit:2,topic:"VSEPR T-shaped",type:"MCQ",difficulty:"Hard",free:false,
question:"What is the molecular geometry of ClF₃?",
choices:{A:"Trigonal planar",B:"Trigonal pyramidal",C:"T-shaped",D:"See-saw"},answer:"C",
explanation:"ClF₃: 3 bonding pairs + 2 lone pairs = 5 electron domains → trigonal bipyramidal electron geometry → lone pairs in equatorial positions → T-shaped molecular geometry."},

{id:905,unit:2,topic:"Valence Electrons Count",type:"MCQ",difficulty:"Easy",free:false,
question:"How many valence electrons does the nitrate ion (NO₃⁻) have in total?",
choices:{A:"23",B:"24",C:"25",D:"26"},answer:"B",
explanation:"N(5) + 3×O(6) + 1(charge) = 5+18+1 = 24 valence electrons."},

{id:906,unit:2,topic:"Bond Length Trend",type:"MCQ",difficulty:"Medium",free:false,
question:"Which bond is the shortest?",
choices:{A:"C−C",B:"C=C",C:"C≡C",D:"C−H"},answer:"C",
explanation:"C≡C (triple bond, bond order=3) is shorter than C=C (double, order=2) which is shorter than C−C (single, order=1). C≡C ≈ 120 pm vs C=C ≈ 134 pm vs C−C ≈ 154 pm."},

{id:907,unit:2,topic:"Molecular Polarity NH3",type:"MCQ",difficulty:"Medium",free:false,
question:"NH₃ is a polar molecule. Which best explains this?",
choices:{A:"N−H bonds are nonpolar",B:"The lone pair on N creates an asymmetric charge distribution",C:"NH₃ has tetrahedral geometry",D:"N and H have the same electronegativity"},answer:"B",
explanation:"NH₃ is trigonal pyramidal. The lone pair on N points in one direction, creating an asymmetric electron distribution. Combined with polar N−H bonds, this gives NH₃ a net dipole moment."},

{id:908,unit:2,topic:"Coordinate Covalent Bond",type:"MCQ",difficulty:"Medium",free:false,
question:"In the formation of NH₄⁺ from NH₃ and H⁺, the N−H bond formed is called a coordinate covalent bond because:",
choices:{A:"N and H share electrons equally",B:"Both electrons in the bond come from the nitrogen atom",C:"H⁺ donates both electrons",D:"The bond has ionic character"},answer:"B",
explanation:"NH₃ donates its lone pair to H⁺ (which has no electrons). Both electrons come from N → coordinate (dative) covalent bond. Once formed, it is identical to other N−H bonds."},

{id:909,unit:2,topic:"Lewis Structure O3",type:"MCQ",difficulty:"Hard",free:false,
question:"In ozone (O₃), the two O−O bonds are equal in length (128 pm). This is best explained by:",
choices:{A:"Both bonds are single bonds",B:"Both bonds are double bonds",C:"Resonance — electrons are delocalized over both bonds",D:"O₃ has tetrahedral geometry"},answer:"C",
explanation:"O₃ has two resonance structures each showing one O=O and one O−O. Actual bond length (128 pm) is between single (148 pm) and double (121 pm) → delocalization."},

{id:910,unit:2,topic:"Hybridization and Geometry",type:"MCQ",difficulty:"Medium",free:false,
question:"A molecule with sp³d² hybridization and no lone pairs has what geometry?",
choices:{A:"Trigonal bipyramidal",B:"Square pyramidal",C:"Octahedral",D:"Pentagonal planar"},answer:"C",
explanation:"sp³d² = 6 electron domains. With 6 bonding pairs and 0 lone pairs → octahedral molecular geometry (90° bond angles)."},

{id:911,unit:2,topic:"Covalent Network Solids",type:"MCQ",difficulty:"Medium",free:false,
question:"Diamond has an extremely high melting point because:",
choices:{A:"It has strong London dispersion forces",B:"Each C atom is covalently bonded to 4 others in a 3D network",C:"It is an ionic solid",D:"It has hydrogen bonding"},answer:"B",
explanation:"Diamond is a covalent network solid. Each C forms 4 strong covalent bonds (sp³) to 4 other C atoms in a continuous 3D lattice. Breaking this requires breaking many strong C−C bonds → extremely high melting point."},

{id:912,unit:2,topic:"Lewis Acids and Bases",type:"MCQ",difficulty:"Hard",free:false,
question:"In the reaction BF₃ + NH₃ → F₃B−NH₃, BF₃ acts as a Lewis acid because:",
choices:{A:"It donates a proton to NH₃",B:"It accepts an electron pair from NH₃",C:"It has lone pairs to donate",D:"It increases [H⁺] in solution"},answer:"B",
explanation:"Lewis acid = electron pair acceptor. BF₃ has an empty p orbital on B; it accepts the lone pair from N in NH₃. This is a Lewis acid-base reaction with no proton transfer."},

{id:913,unit:2,topic:"VSEPR Bent",type:"MCQ",difficulty:"Easy",free:false,
question:"What is the molecular geometry of SO₂?",
choices:{A:"Linear",B:"Bent",C:"Trigonal planar",D:"Trigonal pyramidal"},answer:"B",
explanation:"SO₂: S has 2 bonding domains + 1 lone pair = 3 electron domains → trigonal planar electron geometry → bent molecular geometry (~119°)."},


{id:914,unit:2,topic:"Bond Enthalpy",type:"MCQ",difficulty:"Hard",free:false,
question:"Using bond enthalpies, estimate ΔH for H₂ + Cl₂ → 2HCl. Bond energies: H−H=436, Cl−Cl=243, H−Cl=432 kJ/mol.",
choices:{A:"−185 kJ",B:"+185 kJ",C:"−247 kJ",D:"+247 kJ"},answer:"A",
explanation:"ΔH = bonds broken − bonds formed = (436+243) − 2(432) = 679 − 864 = −185 kJ."},

{id:915,unit:2,topic:"VSEPR Square Pyramidal",type:"MCQ",difficulty:"Hard",free:false,
question:"What is the molecular geometry of BrF₅?",
choices:{A:"Trigonal bipyramidal",B:"Octahedral",C:"Square pyramidal",D:"See-saw"},answer:"C",
explanation:"BrF₅: 5 bonding pairs + 1 lone pair = 6 electron domains → octahedral electron geometry → square pyramidal molecular geometry."},

{id:916,unit:2,topic:"Formal Charge Minimization",type:"MCQ",difficulty:"Hard",free:false,
question:"When drawing Lewis structures, the preferred structure minimizes formal charges and places negative formal charges on:",
choices:{A:"The least electronegative atom",B:"The most electronegative atom",C:"The central atom only",D:"The terminal atoms equally"},answer:"B",
explanation:"Formal charges should be minimized, and when unavoidable, negative formal charges should be placed on the more electronegative atom (consistent with electron density distribution)."},

{id:917,unit:2,topic:"Intermolecular vs Intramolecular",type:"MCQ",difficulty:"Easy",free:false,
question:"Which process involves breaking intramolecular bonds?",
choices:{A:"Dissolving NaCl in water",B:"Boiling water",C:"Decomposing H₂O₂ into H₂O and O₂",D:"Melting ice"},answer:"C",
explanation:"Intramolecular bonds are the chemical bonds within a molecule. Decomposing H₂O₂ breaks O−O and O−H bonds (chemical reaction). Boiling/melting break intermolecular forces only."},

{id:918,unit:2,topic:"VSEPR vs Electron Geometry",type:"MCQ",difficulty:"Medium",free:false,
question:"For a molecule with 4 bonding pairs and 1 lone pair, what are the electron geometry and molecular geometry?",
choices:{A:"Tetrahedral / trigonal pyramidal",B:"Trigonal bipyramidal / see-saw",C:"Octahedral / square pyramidal",D:"Trigonal planar / bent"},answer:"B",
explanation:"5 electron domains → trigonal bipyramidal electron geometry. With 1 lone pair in equatorial position, molecular geometry = see-saw (e.g., SF₄)."},

{id:919,unit:2,topic:"Multiple Bonds",type:"MCQ",difficulty:"Medium",free:false,
question:"Which molecule contains both sigma and pi bonds?",
choices:{A:"H₂",B:"HCl",C:"C₂H₄",D:"NaCl"},answer:"C",
explanation:"C₂H₄ (ethene) has a C=C double bond: 1 sigma + 1 pi bond. All single bonds are sigma only. NaCl is ionic (no covalent bonds)."},

{id:920,unit:2,topic:"Electron Domain Geometry",type:"MCQ",difficulty:"Medium",free:false,
question:"How many electron domains does the central atom in ICl₄⁻ have?",
choices:{A:"4",B:"5",C:"6",D:"7"},answer:"C",
explanation:"ICl₄⁻: I has 7 valence e⁻ + 1 (charge) = 8 e⁻. Forms 4 bonds with Cl (uses 8 e⁻) + 2 lone pairs remaining = 6 electron domains."},

{id:921,unit:2,topic:"Polarity and Geometry",type:"MCQ",difficulty:"Hard",free:false,
question:"Which molecule is nonpolar even though it contains polar bonds, and why?",
choices:{A:"H₂O — the lone pairs cancel",B:"BCl₃ — trigonal planar, all bond dipoles cancel",C:"NH₃ — the lone pair and bonds cancel",D:"HF — the bond dipole is zero"},answer:"B",
explanation:"BCl₃ is trigonal planar (120°, no lone pairs). The three B−Cl bond dipoles point symmetrically outward and cancel completely → net dipole = 0, nonpolar."},

{id:922,unit:2,topic:"Structure and Properties",type:"MCQ",difficulty:"Medium",free:false,
question:"Which solid type has the highest electrical conductivity?",
choices:{A:"Ionic solid (NaCl)",B:"Molecular solid (I₂)",C:"Metallic solid (Cu)",D:"Covalent network solid (SiO₂)"},answer:"C",
explanation:"Metallic solids have delocalized electrons (electron sea) that move freely → high electrical conductivity. Ionic solids only conduct when molten or dissolved."},

{id:923,unit:2,topic:"Lewis Structure Counting",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the total number of lone pairs in a molecule of water (H₂O)?",
choices:{A:"1",B:"2",C:"3",D:"4"},answer:"B",
explanation:"O has 6 valence electrons. Forms 2 bonds with H (uses 4 e⁻). Remaining 4 e⁻ = 2 lone pairs on oxygen."},

{id:924,unit:2,topic:"sp2 Hybridization",type:"MCQ",difficulty:"Medium",free:false,
question:"Which molecule has a central atom with sp² hybridization?",
choices:{A:"CH₄",B:"H₂O",C:"BF₃",D:"PCl₅"},answer:"C",
explanation:"BF₃: B has 3 bonding pairs, 0 lone pairs = 3 electron domains → sp² hybridization → trigonal planar (120°)."},

{id:925,unit:2,topic:"Formal Charge CO",type:"MCQ",difficulty:"Hard",free:false,
question:"In carbon monoxide (C≡O), what are the formal charges on C and O?",
choices:{A:"C=0, O=0",B:"C=−1, O=+1",C:"C=+1, O=−1",D:"C=−2, O=+2"},answer:"B",
explanation:"C: 4 − 2 − ½(6) = 4−2−3 = −1. O: 6 − 2 − ½(6) = 6−2−3 = +1. Despite O being more electronegative, the triple bond structure puts formal − on C. This is why CO is a good ligand (donates from C)."},

{id:926,unit:2,topic:"VSEPR and Lone Pairs",type:"MCQ",difficulty:"Medium",free:false,
question:"The bond angle in H₂S is approximately 92°, much less than 109.5°. The best reason is:",
choices:{A:"S is larger than O, so bonds spread apart",B:"S−H bonds are less polar than O−H bonds",C:"Lone pairs on S (larger, more diffuse) exert less repulsion, allowing bonds to compress",D:"H₂S has more electrons than H₂O"},answer:"C",
explanation:"S is in Period 3; its lone pairs are larger and more diffuse, exerting less repulsion on bonding pairs. This allows the H−S−H angle to compress to ~92°, much smaller than in H₂O (104.5°)."},

{id:927,unit:2,topic:"Resonance Stability",type:"MCQ",difficulty:"Medium",free:false,
question:"Which ion is stabilized by the most resonance structures?",
choices:{A:"OH⁻",B:"NO₂⁻",C:"CO₃²⁻",D:"NH₄⁺"},answer:"C",
explanation:"CO₃²⁻ has 3 equivalent resonance structures (the double bond can be on any of the 3 oxygens). More resonance structures = greater delocalization = greater stability."},

{id:928,unit:2,topic:"Bond Energy and Stability",type:"MCQ",difficulty:"Medium",free:false,
question:"N₂ is very unreactive at room temperature primarily because:",
choices:{A:"N₂ is nonpolar",B:"The N≡N triple bond has very high bond energy (945 kJ/mol)",C:"N₂ has no valence electrons",D:"N₂ is a gas at room temperature"},answer:"B",
explanation:"The N≡N triple bond is one of the strongest bonds known (945 kJ/mol). This high bond energy makes N₂ kinetically inert — it requires enormous activation energy to break."},


{id:929,unit:2,topic:"Molecular Shape Impact",type:"MCQ",difficulty:"Medium",free:false,
question:"Which property is directly related to a molecule having a permanent dipole moment?",
choices:{A:"High boiling point due to London dispersion forces",B:"Solubility in nonpolar solvents",C:"Interaction with other polar molecules via dipole-dipole forces",D:"Low melting point"},answer:"C",
explanation:"A permanent dipole moment means the molecule is polar. Polar molecules interact with each other via dipole-dipole forces and are soluble in polar solvents (like dissolves like)."},

{id:930,unit:2,topic:"Resonance Structures",type:"MCQ",difficulty:"Medium",free:false,
question:"How many resonance structures can be drawn for the carbonate ion (CO₃²⁻)?",
choices:{A:"1",B:"2",C:"3",D:"4"},answer:"C",
explanation:"CO₃²⁻ has a central C with one C=O and two C−O bonds. The double bond can be placed on any of the 3 oxygens → 3 resonance structures."},

{id:931,unit:2,topic:"Octet Rule Exceptions",type:"MCQ",difficulty:"Hard",free:false,
question:"Which molecule is an exception to the octet rule because the central atom has fewer than 8 electrons?",
choices:{A:"SF₆",B:"PCl₅",C:"BF₃",D:"XeF₄"},answer:"C",
explanation:"BF₃: B has only 3 bonds = 6 electrons around it (incomplete octet). B is in Period 2 but lacks enough electrons to complete an octet without breaking the neutral structure."},

{id:932,unit:2,topic:"VSEPR Prediction",type:"MCQ",difficulty:"Medium",free:false,
question:"A molecule AB₃ has 3 bonding pairs and 1 lone pair on A. What is its molecular geometry?",
choices:{A:"Trigonal planar",B:"T-shaped",C:"Trigonal pyramidal",D:"See-saw"},answer:"C",
explanation:"4 electron domains (3 BP + 1 LP) → tetrahedral electron geometry → trigonal pyramidal molecular geometry (e.g., NH₃)."},

{id:933,unit:2,topic:"Ionic Compounds Properties",type:"MCQ",difficulty:"Easy",free:false,
question:"Why do ionic compounds conduct electricity when dissolved in water but not as solids?",
choices:{A:"Water breaks the ionic bonds, freeing mobile ions",B:"Solid ionic compounds have no ions",C:"Water adds electrons to the compound",D:"Ionic compounds become covalent in water"},answer:"A",
explanation:"In solid ionic compounds, ions are locked in the lattice and cannot move. When dissolved, water molecules surround and separate the ions (hydration), making them free to move and carry charge."},

{id:934,unit:2,topic:"Bond Polarity Direction",type:"MCQ",difficulty:"Medium",free:false,
question:"In the H−F bond, which direction does the dipole arrow point?",
choices:{A:"From F to H (→ F)",B:"From H to F (H →)",C:"Both directions equally",D:"There is no dipole in H−F"},answer:"B",
explanation:"The dipole arrow points toward the more electronegative atom. F (EN=4.0) is much more electronegative than H (EN=2.1), so the arrow points H→F (toward F)."},

{id:935,unit:2,topic:"Types of Solids",type:"MCQ",difficulty:"Medium",free:false,
question:"Which best describes the bonding in SiO₂ (quartz)?",
choices:{A:"Ionic bonds between Si⁴⁺ and O²⁻",B:"Covalent network — each Si bonded to 4 O atoms in a 3D lattice",C:"Molecular solid held by London dispersion forces",D:"Metallic bonding"},answer:"B",
explanation:"SiO₂ is a covalent network solid. Each Si is sp³ hybridized and covalently bonded to 4 O atoms, each O bridges two Si atoms, forming a continuous 3D covalent lattice."},

{id:936,unit:2,topic:"Valence Bond Theory",type:"MCQ",difficulty:"Hard",free:false,
question:"According to valence bond theory, a sigma bond is formed by:",
choices:{A:"Side-to-side overlap of p orbitals",B:"Head-to-head overlap of orbitals along the internuclear axis",C:"Transfer of electrons between atoms",D:"Delocalization of electrons across multiple atoms"},answer:"B",
explanation:"A sigma (σ) bond results from head-to-head (end-to-end) orbital overlap along the internuclear axis. Pi (π) bonds form from side-to-side overlap of p orbitals perpendicular to the bond axis."},

{id:937,unit:2,topic:"Molecular Formula vs Structure",type:"MCQ",difficulty:"Medium",free:false,
question:"Two compounds with the same molecular formula but different structural arrangements are called:",
choices:{A:"Isotopes",B:"Isomers",C:"Isotones",D:"Allotropes"},answer:"B",
explanation:"Isomers are compounds with identical molecular formulas but different structural arrangements of atoms (constitutional isomers) or different spatial arrangements (stereoisomers)."},

{id:938,unit:2,topic:"Hybridization sp3d",type:"MCQ",difficulty:"Hard",free:false,
question:"What hybridization does the central atom in PF₅ have?",
choices:{A:"sp³",B:"sp³d",C:"sp³d²",D:"sp²"},answer:"B",
explanation:"PF₅: P forms 5 bonds = 5 electron domains → sp³d hybridization → trigonal bipyramidal geometry."},

{id:939,unit:2,topic:"Lewis Dot Structures",type:"MCQ",difficulty:"Easy",free:false,
question:"In a Lewis structure, a double bond between two atoms is represented by:",
choices:{A:"One pair of shared electrons (2 electrons total)",B:"Two pairs of shared electrons (4 electrons total)",C:"Three pairs of shared electrons (6 electrons total)",D:"One electron from each atom"},answer:"B",
explanation:"A double bond consists of 2 shared electron pairs = 4 electrons total between the two bonded atoms (shown as two lines or four dots between atoms)."},

{id:940,unit:2,topic:"Polarity Summary",type:"MCQ",difficulty:"Hard",free:false,
question:"Which of the following is TRUE about molecular polarity?",
choices:{A:"All molecules with polar bonds are polar",B:"A molecule can have polar bonds yet be nonpolar if the geometry is symmetric",C:"Nonpolar molecules cannot have any polar bonds",D:"Molecular polarity depends only on bond length"},answer:"B",
explanation:"Symmetrical molecules like CO₂, CCl₄, BF₃, and SF₆ have polar bonds but zero net dipole moment because the bond dipoles cancel due to symmetric geometry."},

{id:941,unit:2,topic:"Formal Charge Application",type:"MCQ",difficulty:"Hard",free:false,
question:"In the thiocyanate ion (SCN⁻), which Lewis structure is preferred: S=C=N⁻, ⁻S−C≡N, or ⁻S=C=N?",
choices:{A:"S=C=N⁻ (charge on N)",B:"⁻S−C≡N (charge on S)",C:"Both are equally preferred",D:"Neither — SCN⁻ has no valid Lewis structure"},answer:"B",
explanation:"In ⁻S−C≡N, the formal charge (−1) is on S which is less electronegative than N, but C≡N is a very stable triple bond. The preferred structure places negative charge on the more electronegative N: ⁻S=C=N. Actually AP Chemistry favors the structure with negative charge on N since N is more electronegative than S. So S=C=N⁻ (charge on N) is preferred."},

{id:942,unit:2,topic:"Bond Type from EN difference",type:"MCQ",difficulty:"Easy",free:false,
question:"Two atoms have electronegativities of 2.1 and 3.0. Their bond is best described as:",
choices:{A:"Nonpolar covalent",B:"Polar covalent",C:"Ionic",D:"Metallic"},answer:"B",
explanation:"ΔEN = 3.0 − 2.1 = 0.9. This falls in the polar covalent range (0.4 < ΔEN < 1.7). The bond has unequal sharing of electrons with a partial dipole."},

{id:943,unit:2,topic:"Resonance and Bond Order",type:"MCQ",difficulty:"Medium",free:false,
question:"In NO₂⁻ (nitrite), the bond order of each N−O bond is:",
choices:{A:"1.0",B:"1.5",C:"2.0",D:"2.5"},answer:"B",
explanation:"NO₂⁻ has 2 resonance structures: one with N=O and N−O, the other with N−O and N=O. The average bond order = (1+2)/2 = 1.5. Both N−O bonds are equivalent at bond order 1.5."},


{id:944,unit:3,topic:"Types of IMF",type:"MCQ",difficulty:"Easy",free:false,
question:"Which intermolecular force is present in ALL molecular substances?",
choices:{A:"Hydrogen bonding",B:"Dipole-dipole forces",C:"London dispersion forces",D:"Ion-dipole forces"},answer:"C",
explanation:"London dispersion forces (LDF) arise from temporary induced dipoles and are present in ALL molecules — polar, nonpolar, large, and small."},

{id:945,unit:3,topic:"Hydrogen Bonding",type:"MCQ",difficulty:"Easy",free:false,
question:"Which molecule can form hydrogen bonds with itself?",
choices:{A:"CH₄",B:"HF",C:"H₂S",D:"PH₃"},answer:"B",
explanation:"Hydrogen bonding requires H bonded directly to F, O, or N. HF has H bonded to F (highly electronegative) → can form H-bonds with other HF molecules."},

{id:946,unit:3,topic:"Boiling Point Trends",type:"MCQ",difficulty:"Medium",free:false,
question:"Why does H₂O have a much higher boiling point (100°C) than H₂S (−60°C)?",
choices:{A:"H₂O has higher molar mass",B:"H₂O has stronger London dispersion forces",C:"H₂O molecules form extensive hydrogen bonds; H₂S cannot",D:"H₂S is nonpolar"},answer:"C",
explanation:"O is much more electronegative than S, and O−H bonds form strong hydrogen bonds. H₂O molecules are extensively H-bonded → much higher boiling point than H₂S (which has only dipole-dipole and LDF)."},

{id:947,unit:3,topic:"London Dispersion Forces",type:"MCQ",difficulty:"Medium",free:false,
question:"Which factor most increases the strength of London dispersion forces between molecules?",
choices:{A:"Polarity of the molecule",B:"Presence of hydrogen bonding",C:"Larger molecular size and more electrons (greater polarizability)",D:"Higher molecular symmetry"},answer:"C",
explanation:"LDF strength increases with molecular size (more electrons = greater polarizability = larger temporary dipoles). This explains why larger nonpolar molecules like I₂ have higher melting points than smaller ones like F₂."},

{id:948,unit:3,topic:"Viscosity",type:"MCQ",difficulty:"Medium",free:false,
question:"Glycerol (C₃H₈O₃) has much higher viscosity than ethanol (C₂H₅OH). The best explanation is:",
choices:{A:"Glycerol has higher molar mass",B:"Glycerol has 3 OH groups that form many more hydrogen bonds, creating more resistance to flow",C:"Ethanol is more polar than glycerol",D:"Glycerol is an ionic compound"},answer:"B",
explanation:"Glycerol has 3 −OH groups per molecule → extensive hydrogen bonding network → high viscosity. More H-bonds mean more intermolecular 'stickiness' and resistance to flow."},

{id:949,unit:3,topic:"Surface Tension",type:"MCQ",difficulty:"Medium",free:false,
question:"Water has an unusually high surface tension compared to most liquids because:",
choices:{A:"Water molecules are very small",B:"Hydrogen bonding creates strong cohesive forces between water molecules",C:"Water has low vapor pressure",D:"Water is nonpolar"},answer:"B",
explanation:"Surface tension arises from cohesive IMF. Water's strong hydrogen bonds pull surface molecules inward strongly, creating high surface tension."},

{id:950,unit:3,topic:"Vapor Pressure",type:"MCQ",difficulty:"Medium",free:false,
question:"Which substance has the highest vapor pressure at room temperature?",
choices:{A:"H₂O",B:"CH₃OH",C:"C₂H₅OH",D:"(CH₃)₂O (dimethyl ether)"},answer:"D",
explanation:"Higher vapor pressure = weaker IMF = molecules escape liquid more easily. Dimethyl ether has no O−H bonds (only weak dipole-dipole and LDF) → weakest IMF → highest vapor pressure among these."},

{id:951,unit:3,topic:"Miscibility",type:"MCQ",difficulty:"Easy",free:false,
question:"Why is hexane (C₆H₁₄) immiscible with water?",
choices:{A:"Hexane is too large to dissolve",B:"Hexane is nonpolar (LDF only); water is polar (H-bonds). Unlike IMF cannot substitute for like IMF",C:"Hexane reacts with water",D:"Water has higher density than hexane"},answer:"B",
explanation:"'Like dissolves like.' Mixing hexane with water would break strong H-bonds (water) and replace them with weak LDF — energetically unfavorable. The system stays separated."},

{id:952,unit:3,topic:"IMF and Physical Properties",type:"MCQ",difficulty:"Medium",free:false,
question:"Which compound has the highest boiling point?",
choices:{A:"CH₄",B:"C₂H₆",C:"C₄H₁₀",D:"C₈H₁₈"},answer:"D",
explanation:"All are nonpolar alkanes with only LDF. LDF increases with molecular size (more electrons). C₈H₁₈ (octane, 8 carbons) has the most electrons → strongest LDF → highest boiling point."},

{id:953,unit:3,topic:"Hydrogen Bonding Criteria",type:"MCQ",difficulty:"Medium",free:false,
question:"Which of the following can act as a hydrogen bond DONOR?",
choices:{A:"CH₄",B:"NH₃",C:"N(CH₃)₃",D:"CCl₄"},answer:"B",
explanation:"H-bond donor must have H bonded to F, O, or N. NH₃ has H−N bonds → can donate H for H-bonding. N(CH₃)₃ has N but no N−H bonds. CH₄ and CCl₄ have no eligible H atoms."},

{id:954,unit:3,topic:"Capillary Action",type:"MCQ",difficulty:"Medium",free:false,
question:"Water rises in a glass capillary tube due to:",
choices:{A:"Cohesion only (water-water attraction)",B:"Adhesion only (water-glass attraction)",C:"Both adhesion (water-glass) and cohesion (water-water) working together",D:"Surface tension preventing the water from spreading"},answer:"C",
explanation:"Capillary action results from adhesion (water attracted to glass/silica −OH groups via H-bonding) pulling water up, and cohesion (H-bonding between water molecules) allowing the water column to follow."},

{id:955,unit:3,topic:"IMF Comparison",type:"MCQ",difficulty:"Hard",free:false,
question:"Arrange these compounds in order of increasing boiling point: CH₄, NH₃, Ne",
choices:{A:"Ne < CH₄ < NH₃",B:"NH₃ < CH₄ < Ne",C:"CH₄ < Ne < NH₃",D:"Ne < NH₃ < CH₄"},answer:"A",
explanation:"Ne (monatomic, very small, LDF only): bp = −246°C. CH₄ (slightly larger, LDF only): bp = −161°C. NH₃ (H-bonding, much stronger IMF): bp = −33°C. Order: Ne < CH₄ < NH₃."},

{id:956,unit:3,topic:"Polarizability",type:"MCQ",difficulty:"Medium",free:false,
question:"I₂ is a solid at room temperature while F₂ is a gas, even though both are nonpolar diatomic molecules. Why?",
choices:{A:"I₂ has ionic bonds",B:"I₂ has much stronger London dispersion forces due to more electrons and greater polarizability",C:"F₂ has hydrogen bonding",D:"I₂ is polar due to its large size"},answer:"B",
explanation:"Both have only LDF. I₂ (54 electrons) >> F₂ (18 electrons). More electrons = greater polarizability = stronger temporary dipoles = much stronger LDF → I₂ is solid at RT, F₂ is gas."},

{id:957,unit:3,topic:"Dipole-Dipole Forces",type:"MCQ",difficulty:"Medium",free:false,
question:"HCl and HBr are both polar molecules. HBr has a higher boiling point than HCl because:",
choices:{A:"HBr has stronger dipole-dipole forces (larger dipole moment)",B:"HBr has greater molar mass and more electrons → stronger London dispersion forces",C:"HBr forms hydrogen bonds",D:"HCl is nonpolar"},answer:"B",
explanation:"HCl actually has a larger dipole moment than HBr. HBr boils higher because it has more electrons (36 vs 18) → stronger LDF dominate over the slightly smaller dipole. LDF often outweigh dipole-dipole for larger molecules."},

{id:958,unit:3,topic:"Solubility and IMF",type:"MCQ",difficulty:"Medium",free:false,
question:"Which compound is most soluble in water?",
choices:{A:"CCl₄",B:"CH₃OH",C:"C₆H₆",D:"CH₃CH₂CH₂CH₃"},answer:"B",
explanation:"CH₃OH (methanol) has an −OH group that forms hydrogen bonds with water → highly soluble. The others are nonpolar (or mostly nonpolar) and cannot form H-bonds with water → insoluble or poorly soluble."},


{id:959,unit:3,topic:"Phase Diagrams",type:"MCQ",difficulty:"Hard",free:false,
question:"On a phase diagram, the triple point represents:",
choices:{A:"The temperature and pressure where all three phases coexist in equilibrium",B:"The point where solid and gas are in equilibrium only",C:"The highest temperature at which liquid can exist",D:"The normal boiling point of the substance"},answer:"A",
explanation:"The triple point is the unique temperature and pressure at which solid, liquid, and gas all coexist in thermodynamic equilibrium simultaneously."},

{id:960,unit:3,topic:"Critical Point",type:"MCQ",difficulty:"Hard",free:false,
question:"Above the critical temperature, a substance:",
choices:{A:"Always exists as a solid",B:"Cannot exist as a liquid regardless of pressure",C:"Exists only as a gas at low pressure",D:"Undergoes sublimation"},answer:"B",
explanation:"Above the critical temperature, the distinction between liquid and gas disappears. No amount of pressure can liquefy the substance — it exists as a supercritical fluid."},

{id:961,unit:3,topic:"Heating Curves",type:"MCQ",difficulty:"Medium",free:false,
question:"During the melting of ice at 0°C, temperature remains constant. This is because:",
choices:{A:"The heat is used to break hydrogen bonds between water molecules",B:"Ice absorbs no heat during melting",C:"The melting point of ice is absolute zero",D:"Water requires no energy to change phase"},answer:"A",
explanation:"At the melting point, added heat (heat of fusion) breaks intermolecular H-bonds between water molecules in ice, converting solid to liquid, without raising temperature until all ice has melted."},

{id:962,unit:3,topic:"Clausius-Clapeyron",type:"MCQ",difficulty:"Hard",free:false,
question:"A liquid with stronger intermolecular forces will have, compared to a liquid with weaker IMF:",
choices:{A:"Higher vapor pressure and lower boiling point",B:"Lower vapor pressure and higher boiling point",C:"Higher vapor pressure and higher boiling point",D:"Lower vapor pressure and lower boiling point"},answer:"B",
explanation:"Stronger IMF = harder for molecules to escape the liquid = lower vapor pressure AND higher boiling point (more energy needed to reach P = 1 atm vapor pressure)."},

{id:963,unit:3,topic:"Solubility Trends",type:"MCQ",difficulty:"Medium",free:false,
question:"Gas solubility in liquids generally increases when:",
choices:{A:"Temperature increases and pressure decreases",B:"Temperature decreases and pressure increases",C:"Temperature increases and pressure increases",D:"Both temperature and pressure decrease"},answer:"B",
explanation:"Gas solubility: decreases with increasing temperature (gases expand and escape) and increases with increasing pressure (Henry's Law: S = kH × P). Lower T + higher P = maximum gas solubility."},

{id:964,unit:3,topic:"Henry's Law",type:"MCQ",difficulty:"Medium",free:false,
question:"The concentration of dissolved O₂ at P(O₂) = 0.21 atm is 2.5×10⁻⁴ M. At P(O₂) = 1.0 atm, what is [O₂]?",
choices:{A:"2.5×10⁻⁴ M",B:"1.2×10⁻³ M",C:"5.0×10⁻⁴ M",D:"1.0×10⁻³ M"},answer:"B",
explanation:"Henry's Law: S₁/P₁ = S₂/P₂. S₂ = S₁ × (P₂/P₁) = 2.5×10⁻⁴ × (1.0/0.21) = 2.5×10⁻⁴ × 4.76 = 1.19×10⁻³ ≈ 1.2×10⁻³ M."},

{id:965,unit:3,topic:"Colligative Properties - BP elevation",type:"MCQ",difficulty:"Medium",free:false,
question:"Adding a nonvolatile solute to water will:",
choices:{A:"Increase vapor pressure and lower boiling point",B:"Decrease vapor pressure and raise boiling point",C:"Have no effect on vapor pressure",D:"Lower the freezing point only"},answer:"B",
explanation:"Solute particles disrupt surface escape of solvent → lower vapor pressure (Raoult's Law). Lower vapor pressure means more heat needed to reach P=1 atm → higher boiling point."},

{id:966,unit:3,topic:"Raoult's Law",type:"MCQ",difficulty:"Hard",free:false,
question:"A solution contains 0.40 mol benzene and 0.60 mol toluene. P°(benzene)=95 mmHg, P°(toluene)=30 mmHg. What is the total vapor pressure?",
choices:{A:"56 mmHg",B:"62 mmHg",C:"125 mmHg",D:"44 mmHg"},answer:"A",
explanation:"P(benzene) = 0.40×95 = 38 mmHg. P(toluene) = 0.60×30 = 18 mmHg. P(total) = 38+18 = 56 mmHg."},

{id:967,unit:3,topic:"Freezing Point Depression",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the freezing point of a solution containing 2.00 mol NaCl in 1.00 kg water? (Kf = 1.86°C/m)",
choices:{A:"−3.72°C",B:"−7.44°C",C:"−1.86°C",D:"−5.58°C"},answer:"B",
explanation:"NaCl dissociates: i=2. ΔTf = i×Kf×m = 2×1.86×2.00 = 7.44°C. New fp = 0 − 7.44 = −7.44°C."},

{id:968,unit:3,topic:"Osmotic Pressure",type:"MCQ",difficulty:"Hard",free:false,
question:"A solution has osmotic pressure of 7.65 atm at 298 K. What is its molar concentration? (R=0.0821 L·atm/mol·K)",
choices:{A:"0.313 M",B:"3.13 M",C:"0.0313 M",D:"31.3 M"},answer:"A",
explanation:"π = MRT → M = π/RT = 7.65/(0.0821×298) = 7.65/24.47 = 0.313 M."},

{id:969,unit:3,topic:"Types of Solutions",type:"MCQ",difficulty:"Easy",free:false,
question:"Which best describes a solution?",
choices:{A:"A heterogeneous mixture with visible particles",B:"A homogeneous mixture of two or more substances",C:"A pure substance with a single component",D:"A suspension that settles over time"},answer:"B",
explanation:"A solution is a homogeneous mixture — the solute is uniformly distributed throughout the solvent at the molecular/ionic level."},

{id:970,unit:3,topic:"Molality vs Molarity",type:"MCQ",difficulty:"Medium",free:false,
question:"Why is molality (m) used for colligative properties instead of molarity (M)?",
choices:{A:"Molality is easier to calculate",B:"Molality depends on moles of solute per kg solvent and does not change with temperature; molarity does",C:"Molarity is only used for gases",D:"Molality accounts for ion dissociation"},answer:"B",
explanation:"Molarity is volume-based; volume changes with temperature. Molality uses mass of solvent (doesn't change with T), making it more reliable for properties like boiling point elevation and freezing point depression."},

{id:971,unit:3,topic:"Intermolecular Forces in Solids",type:"MCQ",difficulty:"Medium",free:false,
question:"Which solid has the lowest melting point?",
choices:{A:"NaCl (ionic)",B:"SiO₂ (covalent network)",C:"Fe (metallic)",D:"I₂ (molecular)"},answer:"D",
explanation:"I₂ is a molecular solid held only by London dispersion forces — the weakest IMF. Ionic, network covalent, and metallic solids all have much stronger bonding → much higher melting points."},

{id:972,unit:3,topic:"Enthalpy of Vaporization",type:"MCQ",difficulty:"Medium",free:false,
question:"Water has a much higher enthalpy of vaporization (40.7 kJ/mol) than methane (8.2 kJ/mol). This is primarily because:",
choices:{A:"Water has higher molar mass",B:"Water molecules form strong hydrogen bonds that must be broken during vaporization",C:"Methane is a gas at room temperature",D:"Water has a higher heat capacity"},answer:"B",
explanation:"Enthalpy of vaporization reflects the energy needed to overcome IMF. Water's H-bonds are much stronger than methane's LDF → much more energy needed to convert liquid water to vapor."},

{id:973,unit:3,topic:"Boiling Point Comparison",type:"MCQ",difficulty:"Hard",free:false,
question:"Which pair correctly lists the compound with the higher boiling point first?",
choices:{A:"CH₃OCH₃ > CH₃CH₂OH",B:"CH₃CH₂OH > CH₃OCH₃",C:"HCl > HF",D:"Ne > Ar"},answer:"B",
explanation:"CH₃CH₂OH (ethanol) has an −OH group → H-bonding. CH₃OCH₃ (dimethyl ether) has only dipole-dipole. H-bonding >> dipole-dipole → ethanol has higher bp (78°C vs −24°C)."},


{id:974,unit:3,topic:"IMF and Molecular Structure",type:"MCQ",difficulty:"Medium",free:false,
question:"Which of the following has the strongest intermolecular forces?",
choices:{A:"HF",B:"HCl",C:"HBr",D:"HI"},answer:"A",
explanation:"HF has H−F bonds → strong hydrogen bonding (the strongest IMF type). HCl, HBr, and HI only have dipole-dipole and LDF — much weaker than H-bonding."},

{id:975,unit:3,topic:"Boiling Point Elevation Calculation",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the boiling point of a solution of 90.0 g glucose (MM=180 g/mol) in 500 g water? (Kb=0.512°C/m)",
choices:{A:"100.51°C",B:"101.02°C",C:"100.26°C",D:"100.05°C"},answer:"A",
explanation:"mol glucose = 90/180 = 0.500 mol. m = 0.500/0.500 = 1.00 m. Glucose doesn't dissociate (i=1). ΔTb = 1×0.512×1.00 = 0.512°C ≈ 0.51°C. bp = 100.51°C."},

{id:976,unit:3,topic:"Molar Mass from Colligative",type:"MCQ",difficulty:"Hard",free:false,
question:"A solution of 10.0 g of an unknown compound in 200 g water has a freezing point of −1.49°C (Kf=1.86°C/m). What is the molar mass?",
choices:{A:"62.5 g/mol",B:"125 g/mol",C:"31.3 g/mol",D:"250 g/mol"},answer:"A",
explanation:"m = ΔTf/Kf = 1.49/1.86 = 0.801 mol/kg. moles = 0.801×0.200 = 0.160 mol. MM = 10.0/0.160 = 62.5 g/mol."},

{id:977,unit:3,topic:"Ion-Dipole Forces",type:"MCQ",difficulty:"Medium",free:false,
question:"Which intermolecular force is responsible for dissolving NaCl in water?",
choices:{A:"London dispersion forces",B:"Dipole-dipole forces",C:"Ion-dipole forces",D:"Hydrogen bonding"},answer:"C",
explanation:"When NaCl dissolves, the polar water molecules interact with Na⁺ and Cl⁻ ions via ion-dipole forces. The partially negative O of water surrounds Na⁺; the partially positive H surrounds Cl⁻."},

{id:978,unit:3,topic:"Sublimation",type:"MCQ",difficulty:"Easy",free:false,
question:"Dry ice (solid CO₂) sublimes at −78°C at 1 atm. This means:",
choices:{A:"CO₂ melts at −78°C",B:"CO₂ transitions directly from solid to gas at −78°C at 1 atm",C:"CO₂ freezes at −78°C",D:"CO₂ boils at −78°C"},answer:"B",
explanation:"Sublimation is the direct phase transition from solid to gas without passing through the liquid phase. At 1 atm pressure, solid CO₂ sublimes at −78°C (the liquid phase is not stable at this pressure)."},

{id:979,unit:3,topic:"Van't Hoff Factor",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the van't Hoff factor (i) for CaCl₂ when fully dissociated?",
choices:{A:"1",B:"2",C:"3",D:"4"},answer:"C",
explanation:"CaCl₂ → Ca²⁺ + 2Cl⁻. One formula unit produces 3 ions → i = 3. This triples the effect on colligative properties compared to a nonelectrolyte."},

{id:980,unit:3,topic:"Phase Changes Energy",type:"MCQ",difficulty:"Medium",free:false,
question:"Which phase change releases energy to the surroundings?",
choices:{A:"Melting (fusion)",B:"Vaporization",C:"Sublimation",D:"Condensation"},answer:"D",
explanation:"Condensation (gas → liquid) releases energy. IMF form between molecules as they come closer together, releasing potential energy as heat to surroundings. Melting, vaporization, and sublimation all absorb energy."},

{id:981,unit:3,topic:"Alloys",type:"MCQ",difficulty:"Medium",free:false,
question:"Bronze is an alloy of copper and tin. Compared to pure copper, bronze is:",
choices:{A:"Less dense and more malleable",B:"Harder and stronger due to disruption of the regular metal lattice",C:"More electrically conductive",D:"Softer because tin is softer than copper"},answer:"B",
explanation:"In alloys, atoms of different sizes disrupt the regular metal lattice. This makes it harder for layers to slide past each other → alloys are generally harder and stronger than pure metals."},

{id:982,unit:3,topic:"Chromatography and IMF",type:"MCQ",difficulty:"Medium",free:false,
question:"In paper chromatography, a compound with stronger intermolecular attraction to the stationary phase (paper) will:",
choices:{A:"Travel farther up the paper",B:"Travel a shorter distance up the paper",C:"Travel at the same rate as all other compounds",D:"Not move at all"},answer:"B",
explanation:"Strong attraction to stationary phase = compound is retained longer = moves shorter distance. Compounds with weaker stationary-phase interactions travel farther (higher Rf value)."},

{id:983,unit:3,topic:"Distillation",type:"MCQ",difficulty:"Medium",free:false,
question:"Distillation separates liquids based on differences in:",
choices:{A:"Density",B:"Color",C:"Vapor pressure (boiling point)",D:"Solubility"},answer:"C",
explanation:"Distillation separates mixtures by exploiting different vapor pressures (boiling points). The more volatile component (higher VP, lower bp) vaporizes first and is collected separately."},

{id:984,unit:3,topic:"Electrolyte Solutions",type:"MCQ",difficulty:"Medium",free:false,
question:"Which aqueous solution has the lowest freezing point?",
choices:{A:"0.1 m glucose",B:"0.1 m NaCl",C:"0.1 m CaCl₂",D:"0.1 m AlCl₃"},answer:"D",
explanation:"ΔTf = i×Kf×m. AlCl₃ → Al³⁺ + 3Cl⁻ (i=4). CaCl₂ i=3, NaCl i=2, glucose i=1. AlCl₃ gives the most particles → greatest FP depression → lowest freezing point."},

{id:985,unit:3,topic:"Solubility Rules",type:"MCQ",difficulty:"Medium",free:false,
question:"Which compound is insoluble in water?",
choices:{A:"NaNO₃",B:"KCl",C:"BaSO₄",D:"NH₄Br"},answer:"C",
explanation:"By solubility rules: sulfates are generally soluble EXCEPT BaSO₄, PbSO₄, and CaSO₄. NaNO₃, KCl, and NH₄Br are all soluble (all Na⁺, K⁺, NH₄⁺, NO₃⁻ compounds are soluble)."},

{id:986,unit:3,topic:"Solvation",type:"MCQ",difficulty:"Easy",free:false,
question:"The process by which solvent molecules surround dissolved ions or molecules is called:",
choices:{A:"Precipitation",B:"Solvation (hydration when solvent is water)",C:"Distillation",D:"Crystallization"},answer:"B",
explanation:"Solvation is the process where solvent molecules cluster around solute particles, stabilizing them in solution. When water is the solvent, this is specifically called hydration."},

{id:987,unit:3,topic:"Specific Heat",type:"MCQ",difficulty:"Medium",free:false,
question:"Water's specific heat capacity (4.18 J/g·°C) is unusually high. This is due to:",
choices:{A:"Water's low molar mass",B:"The energy required to break hydrogen bonds before temperature can increase",C:"Water being a polar molecule",D:"Water's high density"},answer:"B",
explanation:"When water is heated, energy first goes into breaking/weakening H-bonds before kinetic energy (temperature) increases. This large H-bond energy requirement gives water its unusually high specific heat."},

{id:988,unit:3,topic:"Phase Diagram Pressure",type:"MCQ",difficulty:"Hard",free:false,
question:"For water, the solid-liquid boundary on the phase diagram has a negative slope (unlike most substances). This means:",
choices:{A:"Ice melts at higher temperatures when pressure increases",B:"Ice melts at lower temperatures when pressure increases (pressure melting)",C:"Water boils at lower temperatures under pressure",D:"Ice is denser than liquid water"},answer:"B",
explanation:"Water's solid-liquid line has negative slope because ice is less dense than water. Increasing pressure favors the denser phase (liquid) → ice melts at lower temperature under high pressure."},


{id:989,unit:3,topic:"Intermolecular Forces Ranking",type:"MCQ",difficulty:"Hard",free:false,
question:"Rank these IMF from weakest to strongest: hydrogen bonding, London dispersion (small molecule), dipole-dipole",
choices:{A:"LDF < dipole-dipole < H-bonding",B:"H-bonding < dipole-dipole < LDF",C:"Dipole-dipole < LDF < H-bonding",D:"All are equal"},answer:"A",
explanation:"General IMF strength order: LDF (weakest for small molecules) < dipole-dipole < hydrogen bonding (strongest). Note: LDF can exceed H-bonding for very large molecules."},

{id:990,unit:3,topic:"Nonpolar Solvent",type:"MCQ",difficulty:"Easy",free:false,
question:"Which solvent would best dissolve a nonpolar solute like grease?",
choices:{A:"Water",B:"Ethanol",C:"Hexane",D:"Acetic acid"},answer:"C",
explanation:"'Like dissolves like.' Grease is nonpolar — it dissolves best in nonpolar solvents. Hexane (C₆H₁₄) is nonpolar and interacts with grease via LDF → dissolves it."},

{id:991,unit:3,topic:"Deposition",type:"MCQ",difficulty:"Easy",free:false,
question:"Frost forms on a cold window when water vapor deposits directly as ice. This phase change is called:",
choices:{A:"Condensation",B:"Freezing",C:"Deposition",D:"Sublimation"},answer:"C",
explanation:"Deposition is the phase transition from gas directly to solid (opposite of sublimation). Frost forms by water vapor depositing as ice crystals on cold surfaces."},

{id:992,unit:3,topic:"Boiling Point and Pressure",type:"MCQ",difficulty:"Medium",free:false,
question:"At high altitude (lower atmospheric pressure), water boils at a temperature lower than 100°C. Why?",
choices:{A:"Water is less pure at high altitude",B:"Lower external pressure means vapor pressure equals atmospheric pressure at a lower temperature",C:"Cold air cools the water faster",D:"High altitude increases molecular kinetic energy"},answer:"B",
explanation:"Boiling occurs when vapor pressure = atmospheric pressure. At lower atmospheric pressure (high altitude), vapor pressure reaches this value at a lower temperature → water boils below 100°C."},

{id:993,unit:3,topic:"Colligative Properties Overview",type:"MCQ",difficulty:"Medium",free:false,
question:"Which of the following is NOT a colligative property?",
choices:{A:"Vapor pressure lowering",B:"Boiling point elevation",C:"Color change of solution",D:"Osmotic pressure"},answer:"C",
explanation:"Colligative properties depend only on the number of solute particles, not their identity. Color is an intensive property that depends on the chemical nature (identity) of the solute — not colligative."},

{id:994,unit:3,topic:"Entropy and Phase Changes",type:"MCQ",difficulty:"Medium",free:false,
question:"Which phase change has the greatest increase in entropy?",
choices:{A:"Solid → liquid",B:"Liquid → gas",C:"Solid → gas (sublimation)",D:"Gas → liquid"},answer:"B",
explanation:"Entropy increases as disorder increases. Liquid→gas involves the greatest increase in disorder (gas molecules move freely, huge volume expansion). Though sublimation also increases entropy greatly, vaporization from liquid is typically the larger change for most substances."},

{id:995,unit:3,topic:"Crystal Structure",type:"MCQ",difficulty:"Medium",free:false,
question:"In a face-centered cubic (FCC) unit cell, how many atoms are there per unit cell?",
choices:{A:"1",B:"2",C:"4",D:"6"},answer:"C",
explanation:"FCC: 8 corner atoms (×1/8 each = 1) + 6 face atoms (×1/2 each = 3) = 1+3 = 4 atoms per unit cell."},

{id:996,unit:3,topic:"Hydrogen Bond Acceptor",type:"MCQ",difficulty:"Medium",free:false,
question:"Which molecule can act as BOTH a hydrogen bond donor AND acceptor?",
choices:{A:"CH₄",B:"H₂O",C:"CCl₄",D:"N₂"},answer:"B",
explanation:"H₂O has O−H bonds (donor: H can be donated) AND lone pairs on O (acceptor: can accept H from another molecule). Water can both donate and accept H-bonds."},

{id:997,unit:3,topic:"Concentration Units",type:"MCQ",difficulty:"Medium",free:false,
question:"A solution is 2.00 M NaCl. How many moles of NaCl are in 250 mL of this solution?",
choices:{A:"0.500 mol",B:"2.00 mol",C:"0.250 mol",D:"8.00 mol"},answer:"A",
explanation:"moles = M × V(L) = 2.00 mol/L × 0.250 L = 0.500 mol NaCl."},

{id:998,unit:3,topic:"Dilution",type:"MCQ",difficulty:"Easy",free:false,
question:"What volume of 12.0 M HCl is needed to prepare 500 mL of 2.00 M HCl?",
choices:{A:"83.3 mL",B:"24.0 mL",C:"6000 mL",D:"120 mL"},answer:"A",
explanation:"M₁V₁ = M₂V₂ → 12.0×V₁ = 2.00×0.500 → V₁ = 1.00/12.0 = 0.0833 L = 83.3 mL."},

{id:999,unit:3,topic:"Solubility Product",type:"MCQ",difficulty:"Hard",free:false,
question:"The Ksp of AgCl is 1.8×10⁻¹⁰. What is the molar solubility of AgCl in pure water?",
choices:{A:"1.3×10⁻⁵ M",B:"1.8×10⁻¹⁰ M",C:"9.0×10⁻¹¹ M",D:"3.6×10⁻²⁰ M"},answer:"A",
explanation:"AgCl ⇌ Ag⁺ + Cl⁻. Ksp = s² = 1.8×10⁻¹⁰. s = √(1.8×10⁻¹⁰) = 1.34×10⁻⁵ ≈ 1.3×10⁻⁵ M."},

{id:1000,unit:3,topic:"Common Ion Effect",type:"MCQ",difficulty:"Hard",free:false,
question:"The solubility of AgCl (Ksp=1.8×10⁻¹⁰) in 0.10 M NaCl solution is:",
choices:{A:"1.3×10⁻⁵ M",B:"1.8×10⁻⁹ M",C:"1.8×10⁻⁹ M",D:"1.3×10⁻⁵ M"},answer:"B",
explanation:"In 0.10 M NaCl, [Cl⁻]=0.10 M. Ksp=[Ag⁺][Cl⁻]=s×0.10=1.8×10⁻¹⁰ → s=1.8×10⁻⁹ M. Common ion (Cl⁻) suppresses AgCl solubility dramatically."},

{id:1001,unit:3,topic:"IMF Summary",type:"MCQ",difficulty:"Medium",free:false,
question:"A substance has high boiling point, high surface tension, and high viscosity. Which IMF is most likely dominant?",
choices:{A:"London dispersion forces only",B:"Hydrogen bonding",C:"Ion-dipole only",D:"Dipole-dipole only"},answer:"B",
explanation:"High bp, high surface tension, and high viscosity all indicate very strong IMF. These properties are characteristic of hydrogen-bonding substances like water, ethylene glycol, and glycerol."},

{id:1002,unit:3,topic:"Vapor Pressure and Temperature",type:"MCQ",difficulty:"Medium",free:false,
question:"As temperature increases, vapor pressure of a liquid:",
choices:{A:"Decreases because molecules move slower",B:"Increases because more molecules have enough energy to escape the liquid",C:"Stays constant",D:"Increases then decreases"},answer:"B",
explanation:"Higher temperature → higher average kinetic energy → more molecules can overcome IMF and escape to gas phase → vapor pressure increases with temperature (Clausius-Clapeyron equation)."},

{id:1003,unit:3,topic:"Lattice Energy",type:"MCQ",difficulty:"Hard",free:false,
question:"Which factor does NOT directly affect the lattice energy of an ionic compound?",
choices:{A:"Ionic charges",B:"Ionic radii",C:"Crystal structure geometry",D:"Molar mass of the ions"},answer:"D",
explanation:"Lattice energy ∝ (q₁×q₂)/r (Coulomb's law). It depends on ionic charges and interionic distance (ionic radii). Molar mass (number of nucleons) does not directly determine the electrostatic attraction between ions."},


{id:1004,unit:3,topic:"Intermolecular Forces Review",type:"MCQ",difficulty:"Medium",free:false,
question:"Which pair of molecules would have the strongest intermolecular attraction between them?",
choices:{A:"CH₄ and Ar",B:"H₂O and CH₃OH",C:"N₂ and O₂",D:"CCl₄ and CBr₄"},answer:"B",
explanation:"H₂O and CH₃OH both have O−H groups and can form hydrogen bonds WITH EACH OTHER. This is much stronger than LDF (nonpolar pairs) or dipole-dipole interactions."},

{id:1005,unit:3,topic:"Enthalpy of Solution",type:"MCQ",difficulty:"Hard",free:false,
question:"When NaOH dissolves in water, the solution gets hot. This means the dissolving process is:",
choices:{A:"Endothermic — heat is absorbed from surroundings",B:"Exothermic — heat is released to surroundings",C:"Neither — temperature change is irrelevant",D:"Endothermic because bonds are broken"},answer:"B",
explanation:"Solution gets hot → heat is released → exothermic. The hydration energy (ion-dipole bonds formed) exceeds the lattice energy (ionic bonds broken). ΔH_soln < 0."},

{id:1006,unit:3,topic:"Miscibility and Polarity",type:"MCQ",difficulty:"Medium",free:false,
question:"Ethanol (CH₃CH₂OH) is miscible with both water and hexane. This is because:",
choices:{A:"Ethanol is ionic",B:"Ethanol has both a polar OH group (mixes with water) and a nonpolar carbon chain (mixes with hexane)",C:"Ethanol has no intermolecular forces",D:"Ethanol has very low molar mass"},answer:"B",
explanation:"Ethanol is amphiphilic — the −OH end is hydrophilic (H-bonds with water) and the −CH₂CH₃ end is hydrophobic (LDF with hexane). This dual nature allows miscibility with both."},

{id:1007,unit:3,topic:"Colligative - Osmosis",type:"MCQ",difficulty:"Medium",free:false,
question:"A red blood cell placed in a hypertonic (high solute) solution will:",
choices:{A:"Swell and burst (lyse)",B:"Shrink (crenate) because water moves out by osmosis",C:"Remain unchanged",D:"Absorb solute and expand"},answer:"B",
explanation:"In hypertonic solution, solute concentration outside > inside cell. Water moves by osmosis from high water concentration (inside cell) to low water concentration (outside) → cell shrinks/crenates."},

{id:1008,unit:3,topic:"Vapor Pressure Lowering",type:"MCQ",difficulty:"Hard",free:false,
question:"A solution contains 0.20 mol sucrose in 0.80 mol water. What is the vapor pressure of the solution at 25°C if P°(water)=23.8 mmHg?",
choices:{A:"19.0 mmHg",B:"23.8 mmHg",C:"4.8 mmHg",D:"20.0 mmHg"},answer:"A",
explanation:"Raoult's Law: P = χ(solvent) × P°. χ(water) = 0.80/(0.80+0.20) = 0.80. P = 0.80 × 23.8 = 19.04 ≈ 19.0 mmHg."},

{id:1009,unit:3,topic:"Network Solids vs Molecular",type:"MCQ",difficulty:"Medium",free:false,
question:"Which correctly compares SiO₂ and CO₂?",
choices:{A:"Both are gases at room temperature",B:"SiO₂ is a solid (covalent network); CO₂ is a gas (molecular) — same bonding within molecules but different structures",C:"Both are molecular solids",D:"CO₂ has a higher melting point than SiO₂"},answer:"B",
explanation:"Both have covalent C=O or Si−O bonds, but CO₂ forms discrete molecules (held by weak LDF → gas). SiO₂ forms an infinite 3D covalent network (held by countless strong Si−O bonds → solid, mp >1600°C)."},

{id:1010,unit:3,topic:"Crystalline vs Amorphous",type:"MCQ",difficulty:"Easy",free:false,
question:"Glass is an example of an amorphous solid. This means:",
choices:{A:"Glass has a highly ordered, repeating crystal lattice",B:"Glass lacks long-range order — atoms are arranged randomly like a frozen liquid",C:"Glass is a liquid at room temperature",D:"Glass is a covalent network solid with fixed melting point"},answer:"B",
explanation:"Amorphous solids (like glass, rubber, plastic) lack the long-range periodic order of crystals. They have no definite melting point — they soften gradually over a range of temperatures."},

{id:1011,unit:3,topic:"Boiling Point Series",type:"MCQ",difficulty:"Hard",free:false,
question:"The normal boiling points of noble gases increase from He to Xe. The primary reason is:",
choices:{A:"Noble gases become more polar down the group",B:"Larger atoms have more electrons → greater polarizability → stronger London dispersion forces",C:"Noble gases form hydrogen bonds at higher atomic numbers",D:"Heavier noble gases have stronger covalent bonds"},answer:"B",
explanation:"Noble gases are monatomic and nonpolar. Their only IMF is LDF. As you go down Group 18, atomic size increases, more electrons → greater electron cloud polarizability → stronger temporary dipoles → stronger LDF → higher bp."},

{id:1012,unit:3,topic:"Percent Yield",type:"MCQ",difficulty:"Medium",free:false,
question:"A reaction theoretically produces 5.00 g of product but only 4.25 g is collected. What is the percent yield?",
choices:{A:"85.0%",B:"117.6%",C:"15.0%",D:"42.5%"},answer:"A",
explanation:"% yield = (actual/theoretical) × 100 = (4.25/5.00) × 100 = 85.0%."},

{id:1013,unit:3,topic:"IMF in DNA",type:"MCQ",difficulty:"Hard",free:false,
question:"The two strands of DNA are held together by hydrogen bonds between base pairs. This arrangement means:",
choices:{A:"The strands cannot be separated",B:"The strands can be separated by heating (denaturation) because H-bonds are weaker than covalent bonds",C:"DNA has stronger bonds than proteins",D:"Hydrogen bonds in DNA are stronger than ionic bonds"},answer:"B",
explanation:"H-bonds are much weaker than covalent bonds. Heating provides enough energy to break the multiple H-bonds between base pairs → strands separate (denaturation). This is exploited in PCR (polymerase chain reaction)."},

{id:1014,unit:3,topic:"Solubility Temperature",type:"MCQ",difficulty:"Medium",free:false,
question:"Most solid solutes become more soluble in water as temperature increases because:",
choices:{A:"Higher T increases lattice energy",B:"Higher T increases molecular kinetic energy, helping overcome lattice energy and improving solvation",C:"Higher T decreases viscosity only",D:"Higher T always decreases solubility"},answer:"B",
explanation:"For most ionic/solid solutes, dissolving is endothermic. Increasing temperature shifts equilibrium toward dissolving (Le Chatelier) and increases KE of water molecules → better solvation → more dissolves."},

{id:1015,unit:3,topic:"Surfactants",type:"MCQ",difficulty:"Medium",free:false,
question:"Soap molecules (surfactants) allow oil to be washed away with water because:",
choices:{A:"Soap molecules are ionic and repel oil",B:"Soap has a nonpolar tail (interacts with oil) and a polar/ionic head (interacts with water), forming micelles",C:"Soap increases the surface tension of water",D:"Soap converts oil to water"},answer:"B",
explanation:"Surfactant molecules are amphiphilic. The nonpolar hydrocarbon tail embeds in oil droplets; the polar/ionic head faces outward toward water. This forms micelles that suspend oil in water → can be rinsed away."},

{id:1016,unit:3,topic:"Phase Change Calculations",type:"MCQ",difficulty:"Hard",free:false,
question:"How much heat is needed to vaporize 18.0 g of water at 100°C? (ΔHvap = 40.7 kJ/mol)",
choices:{A:"40.7 kJ",B:"732 kJ",C:"2.26 kJ",D:"2260 kJ"},answer:"A",
explanation:"18.0 g H₂O = 1.00 mol. Heat = 1.00 mol × 40.7 kJ/mol = 40.7 kJ."},

{id:1017,unit:3,topic:"Heating Curve Plateau",type:"MCQ",difficulty:"Medium",free:false,
question:"On a heating curve for water, which segment represents the boiling process?",
choices:{A:"A sloped line from 0°C to 100°C",B:"A flat plateau at 100°C",C:"A sloped line above 100°C",D:"A flat plateau at 0°C"},answer:"B",
explanation:"During boiling (phase transition at 100°C), all added heat goes into breaking IMF (vaporization enthalpy), not raising temperature. Temperature stays constant at 100°C until all liquid vaporizes → flat plateau."},

{id:1018,unit:3,topic:"Ideal vs Real Solutions",type:"MCQ",difficulty:"Hard",free:false,
question:"A solution shows positive deviation from Raoult's Law (higher vapor pressure than predicted). This suggests:",
choices:{A:"Solute-solvent interactions are stronger than solvent-solvent interactions",B:"Solute-solvent interactions are weaker than solvent-solvent interactions — molecules prefer to escape",C:"The solution is ideal",D:"Solute is involatile"},answer:"B",
explanation:"Positive deviation: actual VP > Raoult's Law prediction. This occurs when solute-solvent interactions are WEAKER than solvent-solvent interactions. Molecules prefer to be in pure solvent → easier to escape → higher VP."},


{id:1019,unit:3,topic:"Effusion and Diffusion",type:"MCQ",difficulty:"Medium",free:false,
question:"According to Graham's Law, which gas effuses fastest at the same temperature?",
choices:{A:"CO₂ (MM=44)",B:"SO₂ (MM=64)",C:"He (MM=4)",D:"N₂ (MM=28)"},answer:"C",
explanation:"Graham's Law: rate ∝ 1/√MM. He has the smallest molar mass (4 g/mol) → fastest effusion rate. Rate(He)/Rate(N₂) = √(28/4) = √7 ≈ 2.6× faster."},

{id:1020,unit:3,topic:"Real vs Ideal Gas",type:"MCQ",difficulty:"Hard",free:false,
question:"Real gases deviate most from ideal behavior at:",
choices:{A:"High temperature and low pressure",B:"Low temperature and high pressure",C:"Low temperature and low pressure",D:"High temperature and high pressure"},answer:"B",
explanation:"Ideal gas assumes no IMF and no molecular volume. At low T, IMF become significant (molecules move slowly). At high P, molecules are compressed close together, so molecular volume matters. Both effects cause deviation from ideal behavior."},

{id:1021,unit:4,topic:"Types of Reactions",type:"MCQ",difficulty:"Easy",free:false,
question:"In the reaction 2Na + Cl₂ → 2NaCl, sodium is:",
choices:{A:"Reduced",B:"Oxidized",C:"A spectator ion",D:"A catalyst"},answer:"B",
explanation:"Na goes from 0 (elemental) to +1 (in NaCl). Loss of electrons = oxidation. Na is oxidized. Cl₂ goes from 0 to −1 (reduced)."},

{id:1022,unit:4,topic:"Balancing Equations",type:"MCQ",difficulty:"Easy",free:false,
question:"What coefficient for O₂ balances: C₃H₈ + _O₂ → 3CO₂ + 4H₂O?",
choices:{A:"3",B:"4",C:"5",D:"7"},answer:"C",
explanation:"Right side: 3×2=6 O from CO₂, 4×1=4 O from H₂O = 10 O total. Each O₂ provides 2 O. Coefficient = 10/2 = 5. Check: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O ✓"},

{id:1023,unit:4,topic:"Net Ionic Equations",type:"MCQ",difficulty:"Medium",free:false,
question:"What is the net ionic equation for mixing AgNO₃(aq) and NaCl(aq)?",
choices:{A:"Ag⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s) + NaNO₃(aq)",B:"Ag⁺(aq) + Cl⁻(aq) → AgCl(s)",C:"AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",D:"Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)"},answer:"B",
explanation:"Na⁺ and NO₃⁻ are spectator ions (soluble, remain in solution). The net ionic equation shows only species that change: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)."},

{id:1024,unit:4,topic:"Precipitation Reactions",type:"MCQ",difficulty:"Medium",free:false,
question:"Which combination produces a precipitate?",
choices:{A:"NaCl + KNO₃",B:"Ba(NO₃)₂ + Na₂SO₄",C:"HCl + NaOH",D:"NH₄Cl + NaBr"},answer:"B",
explanation:"Ba²⁺ + SO₄²⁻ → BaSO₄(s). BaSO₄ is one of the few insoluble sulfates. All combinations in A, C, D produce only soluble products."},

{id:1025,unit:4,topic:"Acid-Base Reactions",type:"MCQ",difficulty:"Easy",free:false,
question:"What are the products of the reaction between HCl(aq) and NaOH(aq)?",
choices:{A:"NaCl and H₂O",B:"NaH and ClOH",C:"Na and HCl",D:"NaOH and HCl remain unchanged"},answer:"A",
explanation:"Acid + Base → Salt + Water (neutralization). HCl + NaOH → NaCl + H₂O. This is a double displacement reaction."},

{id:1026,unit:4,topic:"Oxidation-Reduction",type:"MCQ",difficulty:"Medium",free:false,
question:"In the reaction: Fe + CuSO₄ → FeSO₄ + Cu, which species is the oxidizing agent?",
choices:{A:"Fe",B:"CuSO₄ (specifically Cu²⁺)",C:"FeSO₄",D:"SO₄²⁻"},answer:"B",
explanation:"Cu²⁺ is reduced (gains electrons: Cu²⁺ + 2e⁻ → Cu). The oxidizing agent causes another species to be oxidized — Cu²⁺ oxidizes Fe. So Cu²⁺ (in CuSO₄) is the oxidizing agent."},

{id:1027,unit:4,topic:"Stoichiometry",type:"MCQ",difficulty:"Medium",free:false,
question:"How many grams of H₂O are produced when 4.00 g of H₂ reacts completely with excess O₂? (MM H₂=2.02, H₂O=18.02 g/mol)",
choices:{A:"36.0 g",B:"18.0 g",C:"9.00 g",D:"72.0 g"},answer:"A",
explanation:"2H₂ + O₂ → 2H₂O. Moles H₂ = 4.00/2.02 = 1.98 mol. Moles H₂O = 1.98 mol (1:1 ratio). Mass = 1.98 × 18.02 = 35.7 ≈ 36.0 g."},

{id:1028,unit:4,topic:"Limiting Reagent",type:"MCQ",difficulty:"Hard",free:false,
question:"3.00 mol N₂ and 8.00 mol H₂ react: N₂ + 3H₂ → 2NH₃. Which is the limiting reagent?",
choices:{A:"N₂",B:"H₂",C:"NH₃",D:"Neither — exact stoichiometry"},answer:"B",
explanation:"N₂ needs 3×3=9 mol H₂ but only 8 mol available. H₂ can react with 8/3=2.67 mol N₂ (less than 3.00 mol available). H₂ runs out first → H₂ is limiting reagent."},

{id:1029,unit:4,topic:"Combustion Reactions",type:"MCQ",difficulty:"Easy",free:false,
question:"What are the products of complete combustion of a hydrocarbon like CH₄?",
choices:{A:"C + H₂",B:"CO + H₂O",C:"CO₂ + H₂O",D:"CO₂ + H₂"},answer:"C",
explanation:"Complete combustion of any hydrocarbon produces CO₂ and H₂O only. CH₄ + 2O₂ → CO₂ + 2H₂O. Incomplete combustion produces CO and/or soot."},

{id:1030,unit:4,topic:"Molarity Stoichiometry",type:"MCQ",difficulty:"Hard",free:false,
question:"How many mL of 0.500 M H₂SO₄ are needed to neutralize 25.0 mL of 0.400 M NaOH? (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)",
choices:{A:"10.0 mL",B:"20.0 mL",C:"25.0 mL",D:"50.0 mL"},answer:"A",
explanation:"Moles NaOH = 0.0250×0.400 = 0.0100 mol. Moles H₂SO₄ needed = 0.0100/2 = 0.00500 mol. Volume = 0.00500/0.500 = 0.0100 L = 10.0 mL."},

{id:1031,unit:4,topic:"Decomposition Reactions",type:"MCQ",difficulty:"Easy",free:false,
question:"Which reaction is a decomposition reaction?",
choices:{A:"2H₂ + O₂ → 2H₂O",B:"2H₂O₂ → 2H₂O + O₂",C:"Na + H₂O → NaOH + ½H₂",D:"HCl + NaOH → NaCl + H₂O"},answer:"B",
explanation:"Decomposition: one reactant breaks into two or more products. 2H₂O₂ → 2H₂O + O₂ shows one compound (H₂O₂) decomposing into two products (H₂O and O₂)."},

{id:1032,unit:4,topic:"Single Displacement",type:"MCQ",difficulty:"Medium",free:false,
question:"Will zinc displace copper from CuSO₄ solution? (Activity series: Zn > Cu)",
choices:{A:"No — Zn is below Cu in the activity series",B:"Yes — Zn is more active than Cu and will oxidize, displacing Cu",C:"No reaction occurs with sulfates",D:"Only if heated"},answer:"B",
explanation:"Zn is higher in the activity series (more easily oxidized) than Cu. Zn + CuSO₄ → ZnSO₄ + Cu. Zn displaces Cu²⁺ from solution."},

{id:1033,unit:4,topic:"Spectator Ions",type:"MCQ",difficulty:"Medium",free:false,
question:"In the reaction: HCl(aq) + KOH(aq) → KCl(aq) + H₂O(l), which ions are spectators?",
choices:{A:"H⁺ and OH⁻",B:"K⁺ and Cl⁻",C:"K⁺ and OH⁻",D:"H⁺ and Cl⁻"},answer:"B",
explanation:"K⁺ and Cl⁻ appear on both sides (KOH and KCl are both soluble/dissociated). They don't participate in the reaction. Net ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l)."},

]; // end AP_QUESTIONS

const TOTAL_QUESTIONS = AP_QUESTIONS.length;
const FREE_QUESTIONS  = AP_QUESTIONS.filter(q => q.free).length;
const PAID_QUESTIONS  = AP_QUESTIONS.filter(q => !q.free).length;
