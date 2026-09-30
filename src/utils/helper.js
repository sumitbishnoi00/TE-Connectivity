export const bottomTabs = [
  "Featured Products",
  "Application Tooling",
  "Video",
  "Featured Applications",
  "Resources",
];

export const benefitsData = [
  {
    icon: "ProcessSteps",
    title: "Reduce Process Steps",
    description: (<>Eliminate stripping <br /> and soldering.</>),
  },
  {
    icon: "repeatability",
    title: "Improve Repeatability",
    description: "Consistent connections across production runs.",
  },
  {
    icon: "automation",
    title: "Support Automation",
    description: "Compatible with automated or semi-automated tooling.",
  },
  {
    icon: "totalCost",
    title: "Lower Total Cost",
    description: "Reduce labor, rework and process variability.",
  },
  {
    icon: "flexibility",
    title: "Conduct Material Flexibility",
    description: "Solutions for copper or aluminium wire",
  },
];

export const traditionalData = [
  "For applications requiring wire preparation (stripping)",
  "Labor-intensive, multi-step process that is difficult to automate, scale, and maintain efficiently",
  "Greater variability, rework risk, and challenges maintaining consistent termination quality",
  "Heat and chemical-dependent process with environmental and thermal concerns",
  "Very difficult to terminate aluminum magnet wire; copper is typically the only practical option",
];


export const solderlessData = [
  "No pre-stripping required",
  "Streamlined, automation-ready solution with fewer process steps, reducing labor costs while increasing scalability and throughput.",
  "Repeatable process delivering consistent, high-quality connections",
  "No heat, chemicals, or solder required, eliminating thermal damage and fumes",
  "Connects both copper and aluminum magnet wire with stable, gas-tight terminations",
];


export const tabData = {
  magnet: {
    title: "IDC (MAG-MATE/SIAMEZE)",
    cards: [
      {
        number: "1",
        title: "Insert Magnet Wire",
        description:
          "The unstripped magnet wire is positioned into the termination slot.",
        image: "/assets/images/webp/magnet-wire.webp",
      },
      {
        number: "2",
        title: "Insert Terminal into Cavity",
        description:
          "The terminal is pushed into the cavity by a specially designed insertion tool. During this insertion, specially designed contact features penetrate the enamel insulation layer of the magnet wire.",
        image: "/assets/images/webp/terminal-into-cavity.webp",
      },
      {
        number: "3",
        title: "Create Electrical Contact",
        description:
          "Once inserted, the terminal is retained by locking barbs, and its contact features establish a reliable electrical connection. ",
        image: "/assets/images/webp/electrical-contact.webp",
      },
    ],
  },

  openBarrel: {
    title: "Open-Barrel (AMPLIVAR)",
    cards: [
      {
        number: "1",
        title: "Lay Wire in Splice",
        description:
          "If you are crimping both magnet wire & stranded wire, place the magnet wire on the bottom & stranded wire on top.",
        image: "/assets/images/webp/lay-wire.webp",
      },
      {
        number: "2",
        title: "Crimp Splice",
        description:
          "Specially designed serrations in the wire barrel penetrate the enamel insulation layer of the magnet wire to create a reliable electrical connection. ",
        image: "/assets/images/webp/crimp-splice.webp",
      },
    ],
  },
};

export const tabData2 = {
  magMate: {
    title: "MAG-MATE/SIAMEZE",
    cards: [
      {
        title: "Arbor Press + Fixturing",
        machineRate: "60 crimps/hour",
        priceRange: "$2,000 - $4,000, depending on complexity",
        purchaseFrom: "TE",
        leadTime: "8 weeks",
        additionalInfo: [
          "TE will offer custom configurations based on customer needs",
          "Customer intake form",
        ],
        image: "/assets/images/webp/cls-arbor-press.webp",
      },
      {
        title: "Inserter Machines",
        machineRate: "600+ crimps/hour, depending on complexity",
        priceRange: "$10,000 - $25,000, depending on complexity",
        purchaseFrom: [
          "Recommended partners:",
          "Sipro (Americas & EMEA)",
          "Zhanxu (Asia)",
        ],
        leadTime: "12-20 weeks, depend on complexity",
        additionalInfo: "Customizable, semi-automatic machine",
        image: "/assets/images/webp/cls-inserter-machines.webp",
      },
      {
        title: "Custom Work Stations",
        machineRate: "1500+ crimps/hour, depending on complexity",
        priceRange: "$50,000+, depending on complexity",
        purchaseFrom: [
          "Recommended partners:",
          "Sipro (Americas & EMEA)",
          "Zhanxu (Asia)",
        ],
        leadTime: "20+ weeks, depending on complexity",
        additionalInfo: "Customizable, automat workstations",
        image: "/assets/images/webp/cls-custom-work-stations.webp",
      },
    ],
  },

  amplivar: {
    title: "AMPLIVAR",
    cards: [
      {
        title: "Hand Tools",
        machineRate: "80 crimps/hour",
        priceRange: "$5,000 - $7,000",
        purchaseFrom: [
          "Recommended partners:",
          "Mecal (Americas & Europe)",
          "Zhanxu Electric (Asia)",
        ],
        leadTime: "10 weeks",
        spliceTypes: "Pig-Tail only",
        additionalInfo: 
          "Battery powered or pneumatic options available",
        
        image: "/assets/images/webp/cls-hand-tools.webp",
      },
      {
        title: "Benchtop Terminator & Applicator",
        machineRate: "600 crimps/hour",
        priceRange: [
          "Terminator – $4,000 - $8,000",
          "Applicator - $3,000 - $6,000",
        ],
        purchaseFrom: [
          "Recommended partners:",
          "Mecal (Americas & Europe)",
          "Zhanxu Electric (Asia)",
        ],
        leadTime: "10 weeks",
        spliceTypes: "Thru-Splice only",
        additionalInfo: "Semi-automatic",
        image: "/assets/images/webp/cls-benchtop-terminator.webp",
      },
      {
        title: "APT6",
        machineRate: "600-2000 crimps/hour, depending on customer application",
        priceRange: "$25,000 - $40,000, depending on machine type",
        purchaseFrom: "TE",
        leadTime: "12 weeks",
        spliceTypes: "Pig-tail, Infinite Splice, and Direct Connect",
        additionalInfo: "Semi automatic",
        image: "/assets/images/webp/cls-apt-6.webp",
      },
    ],
  },
};


export const RIGHT_MAGNER = [
  {
    img: "/assets/images/webp/mag-mite.webp",
    heading: "MAG-MATE Terminals",
    para: "Insulation displacement (IDC) terminals simplify magnet wire termination by eliminating the need to strip insulation before assembly. Designed for motor, transformer, coil, and other winding applications, these terminals create reliable electrical connections while helping reduce assembly steps, improve productivity, and support high-volume automated manufacturing. Available in multiple configurations and wire ranges, MAG-MATE solutions can help optimize both performance and production efficiency.",
    link: "View MAG-MATE Products",
    popup: {
      bullets: [
        "Terminates film-insulated copper or aluminum magnet wire",
        "New Nano MAG-MATE terminals are available for fine gauge copper magnet wire terminations",
        "Virtually eliminates need for pre-stripping conductors and post-insulate termination",
        "Terminates two magnet wires of the same size in one terminal (for splicing or bi-filing)",
        "Varnish-resist tab terminals are available for special applications",
        "Broad application coverage – Offered in Standard, Slim-Line, and Mini versions supporting magnet wire sizes from 52 AWG to 12 AWG depending on product family.",
        "Multiple terminal styles available – Includes poke-in, splice, quick connect, crimp wire barrel, solder post, pin, tab, and receptacle configurations to meet diverse design requirements.",
      ],
      images: [
        {
          src: "/assets/images/webp/standard-mag-mate1.1.webp",
          label: "Standard MAG-MATE Terminals",
          about: [
            "Copper wire: 34-12 AWG / 0.16-2.05 mm",
            "Aluminium wire: 33-11 AWG / 0.18-2.30 mm",
          ],
        },
        {
          src: "/assets/images/webp/sim-line1.2.webp",
          label: "Slim Line MAG-MATE Terminals",
          about: ["Copper wire: 33-17 AWG / 0.18-1.15 mm"],
        },
        {
          src: "/assets/images/webp/mini-mag-mate1.3.webp",
          label: "Mini MAG-MATE Terminals",
          about: ["Copper wire: 52-30 AWG / 0.02-0.25 mm"],
        },
        {
          src: "/assets/images/webp/nano-mag-mate1.4.webp",
          label: "Nano MAG-MATE Terminals",
        },
      ],
    },
  },
  {
    img: "/assets/images/webp/sianmze.webp",
    heading: "SIAMEZE Terminals",
    para: "It provides a fast, reliable way to terminate magnet wire without pre-stripping insulation. Designed for coil, motor, transformer, and other winding applications, SIAMEZE terminals create clean, gas-tight electrical connections by automatically piercing wire insulation & establishing a stable metal-to-metal interface. Supporting a wide range of wire sizes and automated assembly processes.",
    link: "View SIAMEZE Products",
    popup: {
      bullets: [
        "Designed for copper or aluminum magnet wires",
        "Virtually eliminates the need for welding or soldering processes, improving operating and manufacturing efficiencies",
        "Space saving size for small motor designs",
        "No pre-stripping of wires needed",
        "Available in multiple interconnection options for design flexibility",
        "Wide wire range capability with a cantilever beam design",
        "Direct termination through Lead wire with 105℃ PVC insulation",
      ],
      images: [
        {
          src: "/assets/images/webp/fine-wire-range2.2.webp",
          label: "Standard Wire Range",
          about: [
            "Copper wire: 34-18 AWG / 0.16-1.02 mm",
            "Aluminum wire: 25-18 AG / 0.45-1.00 mm",
            "Lead wire: 22-18 AWG / 0.3-0.8 mm²",
          ],
        },
        {
          src: "/assets/images/webp/standard-wire-range2.1.webp",
          label: "Fine Wire Range",
          about: [
            "Copper: 36-27 AWG / 0.13-0.36 mm",
            "Lead wire: 22-18 AWG / 0.3-0.8 mm",
          ],
        },
        {
          src: "/assets/images/webp/medium-wire-range2.3.webp",
          label: "Medium Wire Range",
          about: [
            "Copper: 23-12 AWG / 0.56-2.05 mm",
            "Lead wire: 20-16 AWG / 0.5-1.3 mm²",
          ],
        },
      ],
    },
  },
  {
    img: "/assets/images/webp/amplivar.webp",
    heading: "AMPLIVAR Terminals & Splices",
    para: "AMPLIVAR Terminals & Splices provide a reliable alternative to soldering and traditional magnet wire termination methods. By automatically penetrating wire insulation and creating precision metal-to-metal crimp connections, AMPLIVAR helps streamline assembly, improve termination consistency, and deliver durable electrical performance across a wide range of winding applications.",
    link: "View AMPLIVAR Products",
    popup: {
      bullets: [
        "Designed for copper and/or aluminum magnet wire",
        "Outstanding wire barrel design with serrations and burrs produces superior metal-to-metal compression crimp with excellent tensile strength",
        "New application tooling allows splices to be bussed together to 4+ magnet wires in nearly infinite combinations",
        "Operating temperature ranges from -65ºC to 150ºC",
      ],
      images: [
        {
          src: "/assets/images/webp/nine-serrations3.1.webp",
          label: "9 Serrations",
          about: [
            "CMA range: 400-22000",
            "Magnet wire of 28AWG [0.32mm] or smaller should be used with Shallow serrations",
          ],
        },
        {
          src: "/assets/images/webp/seven-serrations3.2.webp",
          label: "7 Serrations",
          about: [
            "CMA range: 600-13000",
            "Magnet wire of 26AWG [0.40mm] or smaller should be used with Shallow serrations",
          ],
        },
        {
          src: "/assets/images/webp/five-serrations3.3.webp",
          label: "5 Serrations",
          about: [
            "CMA range: 600-13000",
            "Magnet wire of 26AWG [0.40mm] or smaller should be used with Shallow serrations",
          ],
        },
      ],
    },
  },
  {
    img: "/assets/images/webp/cluster.webp",
    heading: "Insulated Quick-Connect Cluster Blocks",
    para: "Cluster Blocks provide a fully insulated, quick-connect solution designed to help manufacturers simplify compressor connections, reduce installation errors, and support long-term reliability in air conditioning and refrigeration applications. Engineered for high-volume production, Cluster Blocks combine durable housing materials, secure electrical performance, and flexible header pin compatibility in a cost-effective design.",
    link: "View Cluster Blocks",
    popup: {
      bullets: [
        "Designed for mage wire copper and/or aluminum magnet wire and lead wire",
        "Withstand refrigerant and oil in compressor applications",
        "High termination quality in a repeatable process",
      ],
      images: [
        {
          src: "/assets/images/webp/insulate-quick4.webp",
        },
        {
          title: ".090’ [2.29mm] pin size",
          about: [
            "Lead wire range: 22-14AWG [0.3-2.0mm²]",
            "Or magnet wire range 225-4800",
          ],
        },
        {
          title: ".125’ [3.18mm] pin size",
          about: [
            <>Lead wire range: 18-16AWG [0.8-1.4mm²] Or 14-10AWG [2.0-6.0mm²] <br /> Or magnet wire range 400-8500</>,
          ],
        },
      ],
    },
  },
];

export const applicationData = [
  {
    title: "Robotics & Factory Automation",
    description:
      "For servo motors, stepper motors, and robotic actuators, TE MagWire solutions and compact, reliable motor connections that support automation, precision motion control, efficient manufacturing.",
    icon: "robot",
  },
  {
    title: "HVAC & Compressors",
    description:
      "For compressors, fans, and pumps, TE MagWire solutions deliver robust winding terminations designed to improve reliability, simplify assembly, and support demanding operating environments.",
    icon: "hvac",
  },
  {
    title: "Home Appliance Motors",
    description:
      "For appliance motor applications, TE MagWire solutions help manufacturers achieve high-volume production with cost-effective, reliable, and automation-friendly motor connections.",
    icon: "motor",
  },
  {
    title: "Industrial Motors & Coils",
    description:
      "For industrial motors, transformers, solenoids, and coils, TE MagWire solutions provide space-saving, high-quality magnet wire termination options that enhance performance and manufacturing productivity.",
    icon: "industrial",
  },
  {
    title: "Automotive",
    description:
      "Reliable MagWire termination solutions for EV compressors and motors, helping engineers improve performance, simplify assembly, and accelerate electrification designs.",
    icon: "transformer",
  },
];

export const designDecisionsData = [
  {
    type: "WHITE PAPER",
    title: "Understanding IDC Magnet Wire Termination Technology",
    description:
      "Learn how IDC works and why it improves reliability and repeatability.",
    action: "Download",
  },
  {
    type: "GUIDE",
    title: "Magnet Wire Termination Selection Guide",
    description:
      "A quick reference to help you select the right product for your application.",
    action: "Download",
  },
  {
    type: "WHITE PAPER",
    title: "Soldered vs. Solderless Magnet Wire Connections",
    description:
      "Compare methods and understand the manufacturing advantages.",
    action: "Download",
  },
  {
    type: "CASE STUDY",
    title: "HVAC Compressor Motor Connection Solution",
    description:
      "See how TE helped improve reliability and manufacturing efficiency.",
    action: "Read Case Study",
  },
  {
    type: "Case Study",
    title: "Solderless Magnet Wire Solutions for Power Tool Motors",
    description:
      "Learn more about our solderless magnet wire solutions and how they can help improve efficiency during electric motor manufacturing.",
    action: "Read Case Study",
  },
  {
    type: "Case Study",
    title: "Solderless Magnet Wire Solutions for Electric Bicycle Motors",
    description:
      "Learn more about how these solderless solutions can be used in electric bicycle motor applications.",
    action: "Read Case Study",
  },
  {
    type: "White Paper",
    title: "Solderless Magnet Wire Solutions for Ceiling Fan Motors",
    description:
      "An overview of TE Connectivity’s IDC technology and its role in improving efficiency, noise reduction, and service life in ceiling fan motors.",
    action: "Download",
  },
  {
    type: "White Paper",
    title: "Solderless Magnet Wire Solutions for Fan Motors",
    description:
      "Explore how magnet wire solderless connectivity solutions address the evolving requirements of fan motor manufacturing.",
    action: "Download",
  },
];


export const footerCards = [
  {
    title: "Contact Our Product Team",
    description: "Get expert support for your application.",
    link: "Contact Us",
    icon: "contactUs",
  },
  {
    title: "Download the Selection Guide",
    description: "Find the right solution faster.",
    link: "Download Now",
    icon: "downloadNow",
  },
  {
    title: "Explore All Products",
    description: "View the complete range of magnet wire terminals.",
    link: "View Products",
    icon: "viewProducts",
  },
];

export const footerLinks = [
  "Featured Products",
  "Video",
  "Featured Applications",
  "Resources",
];