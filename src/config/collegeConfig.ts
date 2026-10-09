export interface Trade {
  id: string;
  name: string;
  code: string;
  duration: string;
  hours: number;
  seats: number;
  eligibility: string;
  category: 'Engineering' | 'Non-Engineering';
  shortDesc: string;
  fullDesc: string;
  syllabusHighlights: string[];
  toolsEquipment: string[];
  careerOpportunities: string[];
  certification: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Exams' | 'Job Fair' | 'General';
  isNew: boolean;
  fileUrl?: string;
}

export interface Topper {
  id: string;
  name: string;
  trade: string;
  session: string;
  percentage: string;
  companyOrRole: string;
}

export interface CollegeConfig {
  name: string;
  shortName: string;
  legalEntity: string;
  tagline: string;
  misCode: string;
  grading: string;
  established: string;
  managementName: string;
  phone: string;
  whatsapp: string;
  email: string;
  oldWebsiteUrl: string;
  address: {
    village: string;
    area: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    fullAddress: string;
    googleMapsSearchUrl: string;
  };
  affiliation: {
    board: string;
    council: string;
    ministry: string;
    approvedSince: string;
  };
  metrics: {
    yearsOfExcellence: string;
    totalSeats: string;
    practicalRatio: string;
    placementAssistance: string;
  };
  trades: Trade[];
  notices: Notice[];
  toppers: Topper[];
  recruiters: string[];
}

export const collegeConfig: CollegeConfig = {
  name: "Karam Private ITI",
  shortName: "Karam ITI",
  legalEntity: "Karam Industrial Training Institute",
  tagline: "Premier NCVT Industrial Training Institute in Gorakhpur",
  misCode: "PR09001368",
  grading: "1.71 (Govt. of India DGT Grading Record)",
  established: "25 September 2012",
  managementName: "Shri Prem Chandra Singh",
  phone: "+91 76076 09955",
  whatsapp: "+91 76076 09955",
  email: "karamiti2012@gmail.com",
  oldWebsiteUrl: "https://www.karam_iti.in",
  address: {
    village: "Chatradhari",
    area: "Lalganj",
    city: "Gorakhpur",
    district: "Gorakhpur",
    state: "Uttar Pradesh",
    pincode: "273013",
    fullAddress: "Chatradhari (Lalganj), Gorakhpur, Uttar Pradesh – 273013",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Karam+Private+ITI+Lalganj+Gorakhpur+273013"
  },
  affiliation: {
    board: "National Council for Vocational Training (NCVT)",
    council: "Directorate General of Training (DGT)",
    ministry: "Ministry of Skill Development & Entrepreneurship (MSDE), Govt. of India",
    approvedSince: "September 2012"
  },
  metrics: {
    yearsOfExcellence: "14+",
    totalSeats: "220+",
    practicalRatio: "70%",
    placementAssistance: "100%"
  },
  trades: [
    {
      id: "fitter",
      name: "Fitter",
      code: "227",
      duration: "2 Years (4 Semesters)",
      hours: 2400,
      seats: 120,
      eligibility: "10th Pass with Science & Mathematics",
      category: "Engineering",
      shortDesc: "Flagship mechanical trade specializing in precision machine work, lathe turning, assembly, and maintenance.",
      fullDesc: "The Fitter trade at Karam Private ITI is one of the highest-capacity programs with 120 approved NCVT seats. Students undergo rigorous hands-on training on heavy-duty lathe machines, precision filing, drilling, piping, and mechanical component fitting according to strict engineering tolerances.",
      syllabusHighlights: [
        "Workshop safety protocols and PPE compliance",
        "Precision measurement using Micrometers, Vernier Calipers, and Dial Indicators",
        "Lathe machine turning, threading, facing, and knurling",
        "Power hacksaw, surface grinding, and bench fitting exercises",
        "Assembly of mechanical valves, gearboxes, and pumps",
        "Engineering drawing reading and tolerance standards"
      ],
      toolsEquipment: [
        "Heavy-duty Lathe Machines",
        "Pillar & Radial Drilling Machines",
        "Bench Vices and Hand Tools Set",
        "Surface Plates & Height Gauges",
        "Pedestal Grinding Machine"
      ],
      careerOpportunities: [
        "North Eastern Railway (NER) Mechanical Workshop Gorakhpur",
        "Railway Assistant Loco Pilot (ALP) & Technician Grades",
        "BHEL, NTPC, and Defence Ordnance Factories",
        "Manufacturing plants in GIDA (Gorakhpur Industrial Development Authority)",
        "Tata Motors, Maruti Suzuki, L&T, and Jindal Steel"
      ],
      certification: "National Trade Certificate (NTC) issued by DGT / NCVT, Govt. of India"
    },
    {
      id: "electrician",
      name: "Electrician",
      code: "231",
      duration: "2 Years (4 Semesters)",
      hours: 2400,
      seats: 80,
      eligibility: "10th Pass with Science & Mathematics",
      category: "Engineering",
      shortDesc: "High-demand electrical trade training in AC/DC machinery, domestic and industrial wiring, and power distribution.",
      fullDesc: "With 80 approved NCVT seats, the Electrician trade at Karam Private ITI equips trainees with thorough practical mastery over residential, commercial, and industrial electrical installations, motor rewinding, transformers, and electrical safety standards.",
      syllabusHighlights: [
        "Electrical fundamental laws, Ohm's law, and Kirchhoff's laws in practice",
        "Domestic conduit wiring, switchboards, and Earthing techniques",
        "Single-phase and Three-phase AC motors and starters (DOL, Star-Delta)",
        "Transformer testing, oil inspection, and winding principles",
        "DC Motors & Alternators maintenance and MG Set operation",
        "Solar rooftop photovoltaic system basics and safety"
      ],
      toolsEquipment: [
        "AC/DC Motor-Generator (MG) Set",
        "3-Phase Induction Motors with Star-Delta Starters",
        "High-Voltage Transformer Test Bench",
        "Digital Multimeters, Meggers, and Clamp Meters",
        "Dedicated Domestic & Industrial Wiring Booths"
      ],
      careerOpportunities: [
        "UPPCL (Uttar Pradesh Power Corporation Ltd) Technician Grade-2",
        "Indian Railways Electrical Wing & Substation Operator",
        "Power Grid Corporation of India & NTPC",
        "Industrial Plant Electrician in GIDA Gorakhpur",
        "Authorized 'A/B' Class Government Electrical Contractor License"
      ],
      certification: "National Trade Certificate (NTC) issued by DGT / NCVT, Govt. of India"
    },
    {
      id: "draughtsman-civil",
      name: "Draughtsman (Civil)",
      code: "218",
      duration: "2 Years (4 Semesters)",
      hours: 2400,
      seats: 20,
      eligibility: "10th Pass with Science & Mathematics",
      category: "Engineering",
      shortDesc: "Specialized engineering drafting trade covering architectural planning, civil structural drawings, and AutoCAD.",
      fullDesc: "The Draughtsman (Civil) trade trains students to prepare complete architectural, structural, and civil engineering drawings for residential, commercial, and public works projects. Students master both manual drafting techniques and computerized CAD applications.",
      syllabusHighlights: [
        "Building construction materials, brick bonding, and masonry details",
        "Architectural floor plans, elevations, sections, and municipal bylaws",
        "Computer-Aided Drafting (AutoCAD 2D and 3D modeling)",
        "Reinforced Concrete (RCC) detailing and bar bending schedules",
        "Surveying with Chain, Plane Table, Prismatic Compass, and Dumpy Level",
        "Quantity estimation, bill of quantities (BOQ), and costing"
      ],
      toolsEquipment: [
        "Modern Computer Lab equipped with CAD Software",
        "Professional Drafting Tables with Parallel Motion Arms",
        "Surveying Equipment (Dumpy Level, Theodolite, Prismatic Compass)",
        "Drawing Instruments, Blueprints, and Plotting Station"
      ],
      careerOpportunities: [
        "Civil Draftsman in PWD, Irrigation, and CPWD departments",
        "Municipal Corporations & Development Authorities (GDA)",
        "Private Architectural, Structural & Construction Consultancies",
        "NHAI highway and bridge contracting firms",
        "Freelance Building Planning and CAD Drafter"
      ],
      certification: "National Trade Certificate (NTC) issued by DGT / NCVT, Govt. of India"
    }
  ],
  notices: [
    {
      id: "n1",
      title: "Admissions Open for Session 2026-27: Limited Seats in Fitter & Electrician Trades",
      date: "05 OCT 2026",
      category: "Admissions",
      isNew: true
    },
    {
      id: "n2",
      title: "Upcoming Campus Placement Drive for 2nd Year Trainees by Leading GIDA Industries",
      date: "28 SEP 2026",
      category: "Job Fair",
      isNew: true
    },
    {
      id: "n3",
      title: "AITT NCVT Supplementary & Practical Exam Schedule Released on DGT Portal",
      date: "15 SEP 2026",
      category: "Exams",
      isNew: false
    },
    {
      id: "n4",
      title: "UP Post-Matric Scholarship Portal Registration Notice for Session 2026-27",
      date: "01 SEP 2026",
      category: "General",
      isNew: false
    }
  ],
  toppers: [
    {
      id: "t1",
      name: "Amit Kumar Yadav",
      trade: "Electrician",
      session: "2022-2024",
      percentage: "94.2%",
      companyOrRole: "Selected in UPPCL Technician Grade-2"
    },
    {
      id: "t2",
      name: "Sandeep Vishwakarma",
      trade: "Fitter",
      session: "2022-2024",
      percentage: "92.8%",
      companyOrRole: "Apprentice, North Eastern Railway (NER) Workshop"
    },
    {
      id: "t3",
      name: "Rajnish Singh",
      trade: "Draughtsman (Civil)",
      session: "2021-2023",
      percentage: "91.5%",
      companyOrRole: "CAD Drafter at Regional Infrastructure Corp"
    }
  ],
  recruiters: [
    "North Eastern Railway (NER)",
    "Tata Motors",
    "Maruti Suzuki India",
    "Larsen & Toubro (L&T)",
    "BHEL",
    "Schneider Electric",
    "Havells India",
    "Hero MotoCorp",
    "Dixon Technologies",
    "GIDA Manufacturing Units"
  ]
};
