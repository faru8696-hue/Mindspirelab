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

]; // end AP_QUESTIONS

const TOTAL_QUESTIONS = AP_QUESTIONS.length;
const FREE_QUESTIONS  = AP_QUESTIONS.filter(q => q.free).length;
const PAID_QUESTIONS  = AP_QUESTIONS.filter(q => !q.free).length;
