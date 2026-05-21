export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  name: string;
  category: string;
  description: string;
  features: string[];
  application: string;
  material: string;
  customization: string;
  image: string;
  gallery: string[];
  specs: ProductSpec[];
  sourcePage: string;
};

export const products: Product[] = [
  {
    name: "PLASTIC BAKERY BAGS",
    category: "Plastic Bags",
    description:
      "Versatile bakery bags ideal for carrying bakery items, fish, and vegetables, suitable for bakeries, grocery stores, and shopping centers. Available in printed and plain designs with side sealing and bottom gusseting for increased capacity and strength.",
    features: ["Printed or plain", "Bottom gusseting", "Multiple sizes and colors"],
    application: "Bakeries, grocery stores, shopping centers, fish counters, vegetable packing, and retail takeaway use.",
    material: "Crafted for durability and long-lasting use in retail settings.",
    customization: "Available in a range of sizes, colors, printed designs, and plain designs to meet client requirements.",
    image: "/catalog/p09-03-X17.jpg",
    gallery: ["/catalog/p09-01-X15.jpg", "/catalog/p09-02-X16.jpg", "/catalog/p09-03-X17.jpg"],
    specs: [
      { label: "Design", value: "Side sealing with bottom gusseting" },
      { label: "Options", value: "Printed and plain designs" },
      { label: "Sizes / Colors", value: "Multiple sizes and colors available" },
      { label: "Use", value: "Bakery items, fish, vegetables, grocery and retail carrying" }
    ],
    sourcePage: "Catalogue page 9"
  },
  {
    name: "GUSSETED POLYETHYLENE BAGS",
    category: "Plastic Bags",
    description:
      "Gusseted polyethylene bags crafted from premium quality raw materials for durability and reliability. They feature expandable sides and a fitted bottom to accommodate irregularly shaped items efficiently.",
    features: ["FDA compliant", "HDPE / LDPE options", "Custom dimensions"],
    application: "Food packaging, medical packaging, irregular shaped items, commercial packing, and secure product containment.",
    material: "High-density and low-density polyethylene options made from premium quality raw materials.",
    customization:
      "Customized dimensions are available. Closure options include twist ties, bag tape, or impulse sealers for secure sealing.",
    image: "/catalog/p10-02-X19.jpg",
    gallery: ["/catalog/p10-02-X19.jpg", "/catalog/p10-01-X18.jpg"],
    specs: [
      { label: "Material", value: "High-density or low-density polyethylene" },
      { label: "Compliance", value: "Meets FDA requirements for food and medical packaging" },
      { label: "Design", value: "Expandable sides with fitted bottom" },
      { label: "Closure", value: "Twist ties, bag tape, or impulse sealers" }
    ],
    sourcePage: "Catalogue page 10"
  },
  {
    name: "PLASTIC TRASH BAG",
    category: "Plastic Bags",
    description:
      "Trash bags manufactured using SABIC 100% virgin material, including LLDPE, LDPE, and HDPE. The range includes heavy-duty and thin trash bags in multiple colors and sizes for residential and commercial waste management.",
    features: ["SABIC virgin material", "Heavy-duty and thin options", "5 to 100 gallon capacities"],
    application: "Residential, commercial, facility, hospitality, industrial, and municipal waste management.",
    material: "SABIC 100% virgin LLDPE, LDPE, and HDPE.",
    customization: "Available in multiple colors, sizes, and capacities to suit specific waste disposal needs.",
    image: "/catalog/p17-01-X44.jpg",
    gallery: ["/catalog/p17-01-X44.jpg", "/catalog/p17-02-X45.jpg", "/catalog/p17-03-X46.jpg"],
    specs: [
      { label: "Material", value: "SABIC 100% virgin LLDPE, LDPE, and HDPE" },
      { label: "Capacities", value: "5, 8, 10, 20, 30, 50, 55, 70, 80, and 100 gallons" },
      { label: "Types", value: "Heavy-duty and thin trash bags" },
      { label: "Known As", value: "Garbage bags, bin bags, or bin liners" }
    ],
    sourcePage: "Catalogue page 17"
  },
  {
    name: "LAUNDRY BAGS ON PERFORATED ROLL",
    category: "Plastic Bags",
    description:
      "Plastic laundry bags available in printed and plain designs, perfectly suited for carrying dry-cleaned clothes. Supplied on perforated rolls for easy dispensing and widely used across laundry settings.",
    features: ["Perforated roll", "Printed or plain", "Custom sizes and colors"],
    application: "Dry cleaning, laundry service providers, garment protection, hotel laundry, and commercial laundries.",
    material: "Durable plastic laundry bag construction for safe and stylish garment transport.",
    customization: "Customizable in a range of sizes, colors, and printed or plain designs.",
    image: "/catalog/p18-02-X48.jpg",
    gallery: ["/catalog/p18-02-X48.jpg", "/catalog/p18-01-X47.jpg"],
    specs: [
      { label: "Format", value: "Bags on perforated rolls" },
      { label: "Design", value: "Printed and plain designs" },
      { label: "Use", value: "Carrying dry-cleaned clothes" },
      { label: "Options", value: "Custom sizes and colors" }
    ],
    sourcePage: "Catalogue page 18"
  },
  {
    name: "HDPE SHOPPING BAGS",
    category: "Plastic Bags",
    description:
      "HDPE and LLDPE/LDPE shopping bags crafted to meet high quality standards using premium materials in compliance with industry norms. They are available in a variety of specifications and styles.",
    features: ["HDPE and LLDPE/LDPE", "Logo printing", "Competitive pricing"],
    application: "Major shopping centers, supermarkets, retail stores, boutiques, grocery stores, and branded retail packaging.",
    material: "Premium HDPE and LLDPE/LDPE materials in compliance with industry norms.",
    customization: "Customization options include printed logos, printed details, styles, and specifications for brand presentation.",
    image: "/catalog/p20-02-X53.jpg",
    gallery: [
      "/catalog/p20-01-X52.jpg",
      "/catalog/p20-02-X53.jpg",
      "/catalog/p20-03-X54.jpg",
      "/catalog/p21-05-X59.jpg",
      "/catalog/p21-06-X60.jpg"
    ],
    specs: [
      { label: "Material", value: "HDPE and LLDPE/LDPE" },
      { label: "Design", value: "Variety of specifications and styles" },
      { label: "Branding", value: "Printed logos and details available" },
      { label: "Market", value: "Manufactured for major shopping centers" }
    ],
    sourcePage: "Catalogue pages 20-21"
  },
  {
    name: "VEGETABLE BAG ON ROLL",
    category: "Plastic Bags",
    description:
      "Vegetable bags on roll crafted for supermarkets, retail stores, department stores, shopping malls, grocery stores, and household use. Designed for convenience, sustainability, grocery storage, promotions, and shopping.",
    features: ["LDPE / HDPE / LLDPE", "10 to 100 microns", "Biodegradable additive option"],
    application: "Vegetables, groceries, retail produce counters, promotions, and daily household packaging.",
    material: "LDPE/HDPE/LLDPE with 100% virgin PE material; biodegradable additive option available.",
    customization:
      "Size customization, printed or non-printed options, high-quality logo/design printing, and client-specific requirements are available.",
    image: "/catalog/p37-02-X94.jpg",
    gallery: ["/catalog/p37-01-X93.jpg", "/catalog/p37-02-X94.jpg", "/catalog/p37-03-X95.jpg"],
    specs: [
      { label: "Material", value: "LDPE/HDPE/LLDPE, 100% virgin PE material" },
      { label: "Thickness", value: "10 to 100 microns" },
      { label: "Sustainability", value: "Biodegradable additive option" },
      { label: "Printing", value: "Printed and non-printed options with logo customization" }
    ],
    sourcePage: "Catalogue page 37"
  },
  {
    name: "ICE PACKING BAG",
    category: "Plastic Bags",
    description:
      "Ice packing bags designed for efficient packaging and transportation of ice. Made from high-quality, durable materials to keep ice frozen longer while reducing melt and leakage during transit.",
    features: ["Leak resistant", "Freezer durable", "Clear bag option"],
    application: "Food service, retail ice supply, event operations, cold storage, and bulk ice transportation.",
    material: "Strong, leak-resistant materials designed to prevent punctures and tears.",
    customization: "Various sizes are available, from small retail packages to large bulk orders, with custom sizes on request.",
    image: "/catalog/p38-01-X96.jpg",
    gallery: ["/catalog/p38-01-X96.jpg"],
    specs: [
      { label: "Material", value: "Strong, leak-resistant materials" },
      { label: "Sizes", value: "Various sizes, from small retail packages to large bulk orders" },
      { label: "Sealability", value: "Secure sealing options" },
      { label: "Options", value: "Clear bags, recyclable or biodegradable material options" }
    ],
    sourcePage: "Catalogue page 38"
  },
  {
    name: "BIOMEDICAL WASTE COLLECTING BAG",
    category: "Plastic Bags",
    description:
      "Biomedical waste collecting bags designed for safe and efficient collection of biomedical waste. Manufactured using 100% virgin LLDPE material to maintain quality and shine over an extended period.",
    features: ["100% virgin LLDPE", "Durable collection bags", "Biomedical waste use"],
    application: "Hospitals, clinics, laboratories, healthcare facilities, and biomedical waste collection.",
    material: "100% virgin LLDPE material.",
    customization: "Available at competitive pricing for client requirements; color and size options align with biomedical waste collection use.",
    image: "/catalog/p15-02-X38.jpg",
    gallery: ["/catalog/p15-02-X38.jpg", "/catalog/p16-05-X43.jpg"],
    specs: [
      { label: "Material", value: "100% virgin LLDPE" },
      { label: "Purpose", value: "Safe and efficient collection of biomedical waste" },
      { label: "Durability", value: "Maintains quality and shine over an extended period" },
      { label: "Pricing", value: "Competitive price" }
    ],
    sourcePage: "Catalogue page 15"
  },
  {
    name: "INFECTIOUS MEDICAL WASTE BAG",
    category: "Plastic Bags",
    description:
      "Infectious medical waste bags designed for disposal of infectious waste from hospitals and labs. Engineered for containment of infected medical waste, ensuring safety and hygiene.",
    features: ["Red and yellow colors", "Custom sizes", "Hospital and lab disposal"],
    application: "Hospitals, laboratories, clinics, infectious waste containment, and medical waste disposal systems.",
    material: "Durable plastic bag construction for containment of infected medical waste.",
    customization: "Available in commonly used red and yellow colors and customizable in various sizes to meet client requirements.",
    image: "/catalog/p16-01-X39.jpg",
    gallery: ["/catalog/p16-01-X39.jpg", "/catalog/p16-02-X40.jpg", "/catalog/p16-03-X41.jpg", "/catalog/p16-04-X42.jpg"],
    specs: [
      { label: "Colors", value: "Red and Yellow" },
      { label: "Use", value: "Disposal of infectious waste from hospitals and labs" },
      { label: "Properties", value: "Durable, cost-effective, hygienic containment" },
      { label: "Sizes", value: "Customizable sizes" }
    ],
    sourcePage: "Catalogue page 16"
  },
  {
    name: "POULTRY CHICKEN BAG",
    category: "Plastic Bags",
    description:
      "Poultry chicken plastic bags tailored to ensure optimal freshness and hygiene for poultry products, from farm to table. They support both individual and bundled packaging solutions.",
    features: ["100% virgin food-grade plastic", "Clear visibility", "Steel wire bundled packaging"],
    application: "Poultry processors, retailers, wholesalers, individual poultry packaging, and bundled poultry transportation.",
    material: "100% virgin, food-grade plastic for durability and safety.",
    customization: "Custom sizes are available, with clear plastic options and bundle packaging tied with steel wire.",
    image: "/catalog/p40-01-X100.jpg",
    gallery: ["/catalog/p40-01-X100.jpg", "/catalog/p40-02-X101.jpg", "/catalog/p40-03-X102.jpg", "/catalog/p40-04-X103.jpg", "/catalog/p40-05-X104.jpg"],
    specs: [
      { label: "Material", value: "100% virgin, food-grade plastic" },
      { label: "Packaging", value: "Individual and bundled packaging solutions" },
      { label: "Bundling", value: "Bundles tied with steel wire" },
      { label: "Options", value: "Clear visibility and customizable sizes" }
    ],
    sourcePage: "Catalogue page 40"
  },
  {
    name: "WARNING TAPES",
    category: "Warning & Safety Products",
    description:
      "PE warning tapes recognized for quality and reliability. Crafted from SABIC 100% virgin PE material and produced through stringent quality processes for durability and effectiveness.",
    features: ["SABIC 100% virgin PE", "7.5 to 45 cm widths", "40 to 250 microns"],
    application: "Utility marking, buried service warnings, project safety, construction, excavation, and infrastructure identification.",
    material: "SABIC 100% virgin PE material.",
    customization: "Available in various sizes, colors, specifications, and customized according to customer specifications.",
    image: "/catalog/p11-02-X21.jpg",
    gallery: ["/catalog/p11-01-X20.jpg", "/catalog/p11-02-X21.jpg", "/catalog/p11-03-X22.jpg", "/catalog/p11-04-X23.jpg", "/catalog/p11-05-X24.jpg", "/catalog/p11-06-X25.jpg"],
    specs: [
      { label: "Standard Widths", value: "7.5, 10, 12, 15, 20, 30, and 45 cm" },
      { label: "Thickness", value: "40 to 250 micron" },
      { label: "Material", value: "SABIC 100% virgin PE" },
      { label: "Warnings", value: "Electric, potable water, sanitary sewer, telecommunication, instrumentation, fire water, irrigation, SEC contact and project-specific designs" }
    ],
    sourcePage: "Catalogue pages 11-12"
  },
  {
    name: "DETECTABLE WARNING TAPES",
    category: "Warning & Safety Products",
    description:
      "Underground detectable warning tapes designed for safety, clarity, and long-term durability. They mark and protect underground utilities by clearly identifying gas, water, electricity, and other utility lines.",
    features: ["150 mm width", "300 or 305 m length", "30-year minimum lifetime"],
    application: "Construction, excavation, gas lines, water lines, electricity lines, and underground utility identification.",
    material: "Durable combination of aluminium sheet, PE, and PET/OPP materials.",
    customization: "Warnings are available in Arabic and English with bright colors for easy spotting and reading.",
    image: "/catalog/p13-01-X33.jpg",
    gallery: ["/catalog/p13-01-X33.jpg"],
    specs: [
      { label: "Width", value: "150 mm" },
      { label: "Length", value: "300 or 305 meters" },
      { label: "Thickness", value: "100, 125, and 150 microns" },
      { label: "Lifetime", value: "Minimum lifetime of 30 years" }
    ],
    sourcePage: "Catalogue page 13"
  },
  {
    name: "BARRICADE TAPES",
    category: "Warning & Safety Products",
    description:
      "Barricade tapes made from non-adhesive polyethylene for marking hazardous areas and supporting safety compliance. Designed for long-lasting reliability and indoor or outdoor use.",
    features: ["Non-adhesive polyethylene", "200 m rolls", "Tear-resistant and waterproof"],
    application: "Construction sites, hazard zones, traffic control areas, restricted access, temporary barriers, and perimeter setting.",
    material: "Heavy-duty polyethylene plastic, tear-resistant and waterproof, with bright colors for high visibility.",
    customization: "Printed caution messages repeat along one side and can match specific safety requirements.",
    image: "/catalog/p14-02-X35.jpg",
    gallery: ["/catalog/p14-01-X34.jpg", "/catalog/p14-02-X35.jpg", "/catalog/p14-03-X36.jpg"],
    specs: [
      { label: "Widths", value: "7.5 cm, 10 cm, 12.5 cm, and 15 cm" },
      { label: "Length", value: "200 meters" },
      { label: "Material", value: "Non-adhesive polyethylene" },
      { label: "Options", value: "Biodegradable barricade tape options" }
    ],
    sourcePage: "Catalogue page 14"
  },
  {
    name: "SAFETY NETTING",
    category: "Warning & Safety Products",
    description:
      "Barrier fencing designed to enhance safety and minimize accidents at work sites by serving as a warning and signaling tool for obstacles, road work, building sites, crowd control, hazard notification, and temporary barricades.",
    features: ["Orange, Yellow, Blue, Green, Black", "Custom length and width", "Work site safety"],
    application: "Road work, building sites, crowd control, hazard notification, obstacles, and temporary event barricades.",
    material: "Safety netting produced for visibility, caution, and barrier fencing applications.",
    customization: "Length and width can be customized to suit specific safety requirements.",
    image: "/catalog/p26-02-X72.jpg",
    gallery: ["/catalog/p26-01-X71.jpg", "/catalog/p26-02-X72.jpg"],
    specs: [
      { label: "Colors", value: "Orange, Yellow, Blue, Green, and Black" },
      { label: "Customization", value: "Length and width customized to requirements" },
      { label: "Primary Use", value: "Warning and signaling tool for safety control" },
      { label: "Applications", value: "Work sites, crowd control, road work, temporary barricades" }
    ],
    sourcePage: "Catalogue page 26"
  },
  {
    name: "PE FILM ROLLS",
    category: "Industrial Packaging Products",
    description:
      "PE film rolls crafted to meet high standards of quality and designed for versatility across many industrial applications. Made from premium PE granules and tested to ensure reliability and durability.",
    features: ["Premium PE granules", "Industrial guideline compliance", "Reliability tested"],
    application: "Industrial wrapping, conversion, protection, production use, and general industrial film applications.",
    material: "Premium PE granules.",
    customization: "Supplied as high-grade PE film rolls for diverse industrial uses and client requirements.",
    image: "/catalog/p28-01-X74.jpg",
    gallery: ["/catalog/p28-01-X74.jpg", "/catalog/p28-02-X75.jpg"],
    specs: [
      { label: "Material", value: "Premium PE granules" },
      { label: "Quality", value: "Adheres to strict industrial guidelines" },
      { label: "Testing", value: "Rigorously tested for reliability and durability" },
      { label: "Use", value: "Versatile industrial applications" }
    ],
    sourcePage: "Catalogue page 28"
  },
  {
    name: "PE PLASTIC WRAPPING ROLL",
    category: "Industrial Packaging Products",
    description:
      "PE plastic wrapping rolls designed for superior protection and versatility in industrial packaging. Made from 100% virgin PE material for durability and strength during secure wrapping.",
    features: ["100% virgin PE", "3.5 kg and 5 kg rolls", "7.5 to 15 cm widths"],
    application: "Wrapping aluminium profiles, steel wire, steel profiles, and other industrial materials against dust, moisture, and damage.",
    material: "100% virgin PE material.",
    customization: "Custom size requirements can be accommodated for specific packaging needs.",
    image: "/catalog/p25-01-X69.jpg",
    gallery: ["/catalog/p25-01-X69.jpg", "/catalog/p25-02-X70.jpg"],
    specs: [
      { label: "Material", value: "100% virgin PE" },
      { label: "Widths", value: "7.5 cm, 10 cm, 12.5 cm, and 15 cm" },
      { label: "Roll Weights", value: "3.5 kg and 5 kg" },
      { label: "Protection", value: "Dust, moisture, and damage protection during storage or transport" }
    ],
    sourcePage: "Catalogue page 25"
  },
  {
    name: "LDPE STRETCH FILM FOR PALLET WRAP",
    category: "Industrial Packaging Products",
    description:
      "LDPE stretch film for pallet wrapping, used to secure bulk goods during transportation or warehouse storage. It is lightweight yet durable, with strong tenacity, excellent puncture resistance, and effective self-adhesiveness.",
    features: ["LDPE material", "Hand or machine wrapping", "Self-adhesive"],
    application: "Pallet wrapping, transport stabilization, warehouse storage, bulk goods protection, hand wrapping, and machine-assisted pre-stretch applications.",
    material: "LDPE, known for durability and flexibility.",
    customization: "Available for both hand wrapping and machine-assisted pre-stretch applications.",
    image: "/catalog/p31-01-X81.jpg",
    gallery: ["/catalog/p31-01-X81.jpg"],
    specs: [
      { label: "No. 1", value: "500 mm width, 300 m length, 17/20/23 micron, 50/76 core ID" },
      { label: "No. 2", value: "500 mm width, 500 m length, 17/20/23 micron, 50/76 core ID" },
      { label: "No. 3", value: "500 mm width, 1000 m length, 20/23 micron, 76 core ID" },
      { label: "No. 4", value: "500 mm width, 1200 m length, 20/23 micron, 76 core ID" }
    ],
    sourcePage: "Catalogue page 31"
  },
  {
    name: "JUMBO BAGS",
    category: "Industrial Packaging Products",
    description:
      "Jumbo bags tailored for industrial use and pallet packing. They provide an efficient material handling and storage solution for secure transportation and storage of bulk items.",
    features: ["LDPE + LLDPE", "Customizable size", "Bulk material handling"],
    application: "Industrial use, pallet packing, bulk material handling, secure transportation, and storage of bulk items.",
    material: "Robust LDPE+LLDPE composition for durability and strength.",
    customization: "Length and overall size can be adjusted according to requirements.",
    image: "/catalog/p32-02-X83.jpg",
    gallery: ["/catalog/p32-01-X82.jpg", "/catalog/p32-02-X83.jpg", "/catalog/p32-03-X84.jpg"],
    specs: [
      { label: "Material Composition", value: "LDPE+LLDPE" },
      { label: "Size", value: "Length and overall size adjustable as per requirement" },
      { label: "Types Shown", value: "Jumbo bags (PE or PE shrink) and Jumbo bags (PP)" },
      { label: "Purpose", value: "Industrial use and pallet packing" }
    ],
    sourcePage: "Catalogue page 32"
  },
  {
    name: "FIBC JUMBO BAGS- AB 72",
    category: "Industrial Packaging Products",
    description:
      "FIBC Jumbo Bags AB 72 data sheet product made from virgin PP fabric with circular construction, cross-corner lifting loops, inner PE liner, and heavy-duty safe working load for industrial bulk packaging.",
    features: ["180 GSM virgin PP", "1200 kg SWL", "PE liner inside"],
    application: "Industrial bulk packaging, palletized handling, safe storage, and high-volume material movement.",
    material: "180 GSM fabric made of virgin PP with PE liner inside.",
    customization: "Plain white configuration with nil printing; packed in bales of 100 or 200 pieces.",
    image: "/catalog/p33-01-X85.jpg",
    gallery: ["/catalog/p33-01-X85.jpg", "/catalog/p33-02-X86.jpg"],
    specs: [
      { label: "Size", value: "100 L x 100 W x 110 H cm (1100 ltrs)" },
      { label: "Fabric", value: "180 GSM, made of virgin PP" },
      { label: "UV Stabilized", value: "Yes" },
      { label: "SWL / Safety Factor", value: "1200 kg / 1.2 ton, 5:1" },
      { label: "Top", value: "Filling/top spout, spout size 63 x 58 cm, 80+20 GSM, spout panel 130 GSM" },
      { label: "Bottom", value: "Flat discharge/bottom, 220 GSM" },
      { label: "Loops", value: "4 cross corner lifting loops fully belted, 5 cm width x 30 cm free height" },
      { label: "Packing", value: "Bale of 100 or 200 pcs" }
    ],
    sourcePage: "Catalogue page 33"
  },
  {
    name: "FIBC JUMBO BAGS- AB 13",
    category: "Industrial Packaging Products",
    description:
      "FIBC Jumbo Bags AB 13 data sheet product made from virgin PP fabric with circular construction, PE liner, bottom spout with pyjama closure, and cross-corner lifting loops for industrial bulk handling.",
    features: ["160 GSM virgin PP", "1000 kg SWL", "Bottom spout"],
    application: "Industrial bulk packaging, discharge-controlled storage, and material handling where spout closure is required.",
    material: "160 GSM fabric made of virgin PP with PE liner.",
    customization: "Plain white configuration with nil printing; packed in bales of 100 pieces.",
    image: "/catalog/p34-01-X87.jpg",
    gallery: ["/catalog/p34-01-X87.jpg", "/catalog/p34-02-X88.jpg"],
    specs: [
      { label: "Size", value: "90 L x 90 W x 120 H cm" },
      { label: "Fabric", value: "160 GSM, made of virgin PP" },
      { label: "UV Stabilized", value: "Yes" },
      { label: "SWL / Safety Factor", value: "1000 kg / 1.0 ton, 5:1" },
      { label: "Top", value: "Filling/top spout" },
      { label: "Bottom", value: "Discharge/bottom spout, pyjama closure" },
      { label: "Loops", value: "4 cross corner lifting loops half, loop size 5 x 30 cm free height" },
      { label: "Packing", value: "Bale of 100 pcs" }
    ],
    sourcePage: "Catalogue page 34"
  },
  {
    name: "AIR BUBBLE WRAP",
    category: "Industrial Packaging Products",
    description:
      "Air bubble film made from low-density polyethylene, widely used in industries including flower shops, furniture, and metalworking. It protects objects against scratches, impacts, and shocks for internal and external packaging.",
    features: ["LDPE", "10 mm and 30 mm bubbles", "Up to 1500 mm x 5000 m"],
    application: "Flower shops, furniture, metalworking, internal packaging, external packaging, transport protection, and storage protection.",
    material: "Low-density polyethylene.",
    customization: "Customizable dimensions starting from 50 mm x 50 mm up to maximum width and length in roll form.",
    image: "/catalog/p29-01-X76.jpg",
    gallery: ["/catalog/p29-01-X76.jpg", "/catalog/p29-02-X77.jpg"],
    specs: [
      { label: "Bubble Diameter", value: "10 mm and 30 mm" },
      { label: "Minimum Size", value: "50 mm x 50 mm" },
      { label: "Maximum Roll", value: "Width up to 1500 mm and length up to 5000 meters" },
      { label: "Protection", value: "Protects against scratches, impacts, and shocks" }
    ],
    sourcePage: "Catalogue page 29"
  },
  {
    name: "POLYETHYLENE SHEETS",
    category: "Industrial Packaging Products",
    description:
      "Polyethylene sheets ideal for construction, covering wood, furniture, carpets, mattresses, and other objects. They can be plain or printed, with UV resistance available for special purposes.",
    features: ["25 to 1000 microns", "Up to 400 cm width", "UV resistance option"],
    application: "Construction, covering wood, furniture, carpets, mattresses, storage protection, and site protection.",
    material: "Polyethylene sheet material with zero tolerance or with tolerance options.",
    customization: "Length of each sheet roll is custom-made; plain, printed, and UV-resistant options are available.",
    image: "/catalog/p15-01-X37.jpg",
    gallery: ["/catalog/p15-01-X37.jpg"],
    specs: [
      { label: "Thickness", value: "25 to 1000 microns" },
      { label: "Width", value: "Up to maximum width of 400 cm" },
      { label: "Tolerance", value: "Zero tolerance or with tolerance" },
      { label: "Options", value: "Plain, printed, and UV resistance for special purposes" }
    ],
    sourcePage: "Catalogue page 15"
  },
  {
    name: "DUCTILE IRON PIPE PE SLEEVE",
    category: "Industrial Packaging Products",
    description:
      "PE sleeve film designed for wrapping ductile iron pipes, cast pipes, and specialized pipes. The film protects pipes during transportation and storage, ensuring durability and integrity.",
    features: ["LLDPE SABIC", "200 / 250 microns", "103 m length"],
    application: "Ductile iron pipes, cast pipes, specialized pipes, transportation protection, and storage protection.",
    material: "LLDPE SABIC + 2% UV stabilizer.",
    customization: "Film width is tailored to match pipe size. Clear and black film options are available.",
    image: "/catalog/p22-01-X63.jpg",
    gallery: ["/catalog/p22-01-X63.jpg", "/catalog/p22-02-X64.jpg", "/catalog/p22-03-X65.jpg", "/catalog/p22-04-X66.jpg"],
    specs: [
      { label: "Material", value: "LLDPE SABIC + 2% UV Stabilizer" },
      { label: "Length", value: "103 meters" },
      { label: "Thickness", value: "Clear 200 micron, Black 250 micron" },
      { label: "DN / Width", value: "DN 100: 31 cm; 150: 40 cm; 200: 56 cm; 300: 71 cm; 400: 90 cm; 500: 112 cm; 600: 125 cm; 700: 180 cm; 800: 186 cm; 1000: 224 cm" }
    ],
    sourcePage: "Catalogue pages 22-23"
  },
  {
    name: "PRINTED LONG TRAILER COVER SHEET",
    category: "Industrial Packaging Products",
    description:
      "Printed long trailer cover sheet designed to provide superior protection for trailers, keeping contents secure and sheltered during transit. Made from 100% virgin PE material sourced from SABIC.",
    features: ["100% virgin PE SABIC", "370 cm sheet width", "95 to 100 microns"],
    application: "Trailer protection, transportation coverage, contents sheltering, cargo protection, and branded transit coverage.",
    material: "High-grade 100% virgin PE (SABIC).",
    customization: "Primarily white with color customization available. One-side repeated print supports brand visibility or identification marks.",
    image: "/catalog/p24-01-X67.jpg",
    gallery: ["/catalog/p24-01-X67.jpg", "/catalog/p24-02-X68.jpg"],
    specs: [
      { label: "Sheet Width", value: "370 cm" },
      { label: "Roll Length", value: "110 meters" },
      { label: "Thickness", value: "95 to 100 microns" },
      { label: "Core Length", value: "100 cm" },
      { label: "Color", value: "White, with custom color options" },
      { label: "Print", value: "Repeated print on one side" }
    ],
    sourcePage: "Catalogue page 24"
  },
  {
    name: "PVC CLING FILM (FOOD GRADE)",
    category: "Food Packaging Products",
    description:
      "Food-grade PVC cling film for wrapping vegetables, fruits, meats, and other food products. Made from high-quality PVC with glossiness and clarity for secure preservation and appealing presentation.",
    features: ["Food-grade PVC", "300 / 450 mm widths", "1300 / 1500 m rolls"],
    application: "Vegetables, fruits, meats, culinary professionals, households, supermarkets, and food presentation.",
    material: "High-quality PVC suitable for direct food contact.",
    customization: "Supplied in width and roll-length options for different wrapping needs.",
    image: "/catalog/p30-02-X79.jpg",
    gallery: ["/catalog/p30-01-X78.jpg", "/catalog/p30-02-X79.jpg", "/catalog/p30-03-X80.jpg"],
    specs: [
      { label: "Material", value: "High-quality PVC, suitable for direct food contact" },
      { label: "Width", value: "300 mm and 450 mm" },
      { label: "Thickness", value: "11 microns" },
      { label: "Length", value: "1300 meters and 1500 meters" },
      { label: "Features", value: "Glossy finish and superior clarity" }
    ],
    sourcePage: "Catalogue page 30"
  },
  {
    name: "SUFRA",
    category: "Food Packaging Products",
    description:
      "Plastic Sufra food serve sheets made from high-quality LD/HD material, combining hygiene with convenience for household, catering, and food establishment serving needs.",
    features: ["LD / HD material", "Perforated rolls", "Customisable prints"],
    application: "Households, catering, food establishments, dining occasions, disposable serving, and simplified cleanup.",
    material: "High-quality LD/HD material.",
    customization: "Available in various sizes, standard print, customisable prints, and eco-friendly options.",
    image: "/catalog/p19-02-X50.jpg",
    gallery: ["/catalog/p19-01-X49.jpg", "/catalog/p19-02-X50.jpg", "/catalog/p19-03-X51.jpg"],
    specs: [
      { label: "Sizes", value: "100x100 mm, 110x110 mm, 120x120 mm, and 140x140 mm" },
      { label: "Material", value: "High-quality LD/HD material" },
      { label: "Roll Feature", value: "Perforation for easy tearing" },
      { label: "Options", value: "Standard print, customisable prints, eco-friendly options" }
    ],
    sourcePage: "Catalogue page 19"
  },
  {
    name: "PAPER CUP",
    category: "Food Packaging Products",
    description:
      "NOBLE CUPS premium paper cups designed for quality and reliability in disposable drinkware. Each cup is crafted for hot beverage functionality, aesthetic appeal, sturdiness, and leak-proof performance.",
    features: ["9 oz", "Food Grade Paper from Korea", "Custom printing"],
    application: "Coffee, tea, soup, hot beverages, disposable drinkware, brand promotion, cafes, offices, and events.",
    material: "High-quality Food Grade Paper sourced from Korea.",
    customization: "Custom printing is available so businesses can feature their logo and design on cups.",
    image: "/catalog/p35-01-X89.jpg",
    gallery: ["/catalog/p35-01-X89.jpg", "/catalog/p35-02-X90.jpg", "/catalog/p35-03-X91.jpg"],
    specs: [
      { label: "Size", value: "9 oz" },
      { label: "Top Diameter", value: "74 mm" },
      { label: "Bottom Diameter", value: "51 mm" },
      { label: "Height", value: "94 mm" },
      { label: "Packing", value: "20 packs of 50 pcs each" },
      { label: "Print", value: "Available in 2 color options; custom printing available" }
    ],
    sourcePage: "Catalogue page 35"
  },
  {
    name: "PAPER CUP SLEEVE",
    category: "Food Packaging Products",
    description:
      "Customizable paper cup sleeves for 9 oz hot coffee cups, providing comfort and protection from hot beverages while creating a branding opportunity.",
    features: ["Fits 9 oz cups", "1-2 color flexographic printing", "Biodegradable"],
    application: "Hot coffee cups, beverage service, cafes, brand promotion, takeaway service, and customer hand protection.",
    material: "100% virgin, food-grade materials.",
    customization: "Custom logo sleeves with 1-2 color flexographic printing. Design models can be supplied for production.",
    image: "/catalog/p36-01-X92.jpg",
    gallery: ["/catalog/p36-01-X92.jpg"],
    specs: [
      { label: "Cup Fit", value: "9 oz capacity cups" },
      { label: "Material", value: "100% virgin, food-grade materials" },
      { label: "Printing", value: "1-2 color flexographic printing" },
      { label: "Packaging", value: "Packaged in cartons and wrapped in plastic film" },
      { label: "Sustainability", value: "Biodegradable" }
    ],
    sourcePage: "Catalogue page 36"
  },
  {
    name: "WOODEN AND PLASTIC STIRRER",
    category: "Food Packaging Products",
    description:
      "Wooden and plastic stirrers designed for coffee shops, restaurants, office break rooms, and events. Wooden stirrers are biodegradable and compostable, while plastic stirrers are durable, heat-resistant, lightweight, and economical.",
    features: ["Wooden and plastic options", "Biodegradable wood", "Heat-resistant plastic"],
    application: "Coffee shops, restaurants, office break rooms, events, hot beverages, cold beverages, and takeaway services.",
    material: "Sustainably sourced wood or high-quality durable plastic.",
    customization: "Available in a variety of colors and designs; recyclable or biodegradable plastic options are available.",
    image: "/catalog/p39-02-X98.jpg",
    gallery: ["/catalog/p39-01-X97.jpg", "/catalog/p39-02-X98.jpg", "/catalog/p39-03-X99.jpg"],
    specs: [
      { label: "Wooden Stirrers", value: "Sustainably sourced, strong, smooth, biodegradable, and compostable" },
      { label: "Plastic Stirrers", value: "High-quality, durable, heat resistant, lightweight, and economical" },
      { label: "Options", value: "Variety of colors and designs" },
      { label: "Eco Options", value: "Recyclable or biodegradable plastic options" }
    ],
    sourcePage: "Catalogue page 39"
  },
  {
    name: "JERRY CANS",
    category: "Industrial Containers",
    description:
      "Jerry cans available in 5, 20, and 30-liter capacities, manufactured from HDPE 100% virgin blow moulding grade material sourced from SABIC. Designed for corrosion and chemical resistance, durability, and leak-proof handling.",
    features: ["5 / 20 / 30 liters", "HDPE 100% virgin", "Leak-proof lids"],
    application: "Liquid transportation, chemicals, industrial liquids, storage, handling, and safe commercial distribution.",
    material: "HDPE 100% virgin blow moulding grade material sourced from SABIC.",
    customization: "Available in a variety of colors based on customer requirements.",
    image: "/catalog/p27-01-X73.jpg",
    gallery: ["/catalog/p27-01-X73.jpg"],
    specs: [
      { label: "Capacities", value: "5, 20, and 30 liters" },
      { label: "Material", value: "HDPE 100% Virgin Blow Moulding Grade material from SABIC" },
      { label: "Resistance", value: "Excellent corrosion and chemical resistance" },
      { label: "Features", value: "Durable, dent-free, tight-fitting lids, leak-proof, easy handling and storage" }
    ],
    sourcePage: "Catalogue page 27"
  }
];

export const categories = [
  "All",
  "Plastic Bags",
  "Warning & Safety Products",
  "Industrial Packaging Products",
  "Food Packaging Products",
  "Industrial Containers"
];
