import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Phone, ChevronRight } from "lucide-react";
import industriesData from "@/data/industries.json";

/* ---------- Static params: pre-render all 11 slugs ---------- */
export function generateStaticParams() {
    return industriesData.map((ind) => ({ slug: ind.slug }));
}

/* ---------- Per-industry rich content ---------- */
const industryContent: Record<string, {
    headline: string;
    intro: string;
    supplies: string[];
    applications: { title: string; desc: string }[];
    products: { name: string; href: string }[];
    whyUs: string[];
}> = {
    "automotive-industry": {
        headline: "Compressed Air Solutions for the Automotive Sector",
        intro: "From chassis assembly to paint booths, automotive manufacturing depends on reliable, high-quality compressed air. Airflow Industries supplies Anest Iwata and Festo-certified systems that meet the precision demands of modern automobile plants.",
        supplies: [
            "Oil-lubricated & oil-free screw compressors for body shops",
            "High-pressure systems for tyre inflation and clamping",
            "Precision Festo pneumatics for robotic assembly arms",
            "Air dryers and filtration for paint-shop quality air",
        ],
        applications: [
            { title: "Paint & Coating Booths", desc: "Contamination-free, dry air at consistent pressure for flawless finishes." },
            { title: "Robotic Assembly Lines", desc: "Festo actuators and valves for fast, repeatable pneumatic positioning." },
            { title: "Tyre & Brake Testing", desc: "High-pressure air systems for quality-control testing equipment." },
            { title: "Body Shop Tooling", desc: "Reliable air supply for impact wrenches, grinders and sanders." },
        ],
        products: [
            { name: "Screw Air Compressors", href: "/screw-air-compressors" },
            { name: "Anest Iwata Oil-Free Reciprocating", href: "/oil-free-reciprocating-air-compressors" },
            { name: "Festo Pneumatics & Valves", href: "/festo" },
            { name: "Spares & Accessories", href: "/spares-consumables-accessories" },
        ],
        whyUs: [
            "35+ years supplying automotive OEMs across Mumbai & Maharashtra",
            "Anest Iwata authorised distributor — genuine spares always in stock",
            "AMC (Annual Maintenance Contracts) available",
            "24-hour breakdown support",
        ],
    },
    "medical-industry": {
        headline: "Medical-Grade Compressed Air for Hospitals & Clinics",
        intro: "Medical applications demand absolute air purity. Airflow Industries supplies ISO 8573-1 Class 0 oil-free compressors, ensuring patient safety, regulatory compliance, and zero risk of contamination in surgical theatres, dental clinics, and pharmaceutical labs.",
        supplies: [
            "Class 0 oil-free scroll and reciprocating compressors",
            "Medical air plant systems for hospital pipelines",
            "Ultra-dry air with integrated refrigeration dryers",
            "HEPA filtration and micro-filter assemblies",
        ],
        applications: [
            { title: "Surgical & ICU Rooms", desc: "Pulsation-free, oil-free medical air meeting HTM 02-01 standards." },
            { title: "Dental Clinics", desc: "Silent, clean air compressors for dental chairs and instruments." },
            { title: "Respiratory Equipment", desc: "Continuous duty oil-free systems for ventilators and nebulisers." },
            { title: "Laboratory Analysis", desc: "Instrument-grade air for gas chromatography and analytical devices." },
        ],
        products: [
            { name: "Scroll Oil-Free Air Compressor", href: "/scroll-oil-free-air-compressor" },
            { name: "Oil-Free Reciprocating Compressors", href: "/oil-free-reciprocating-air-compressors" },
            { name: "Anest Iwata Range", href: "/anest-iwata-distributor" },
            { name: "Spares & Consumables", href: "/spares-consumables-accessories" },
        ],
        whyUs: [
            "Only Class 0 oil-free technology — no contamination risk",
            "Compliance with IS 7396, HTM 02-01, and NABH guidelines",
            "Redundant setup design for zero downtime hospitals",
            "Dedicated service engineers for critical care facilities",
        ],
    },
    "food-and-beverage-industry": {
        headline: "Hygienic Compressed Air for Food & Beverage Plants",
        intro: "Contaminated compressed air in food processing means product recalls, health risks, and regulatory penalties. We supply fully oil-free, food-safe compressed air systems that comply with FDA, FSSAI, and GMP requirements.",
        supplies: [
            "Oil-free screw and scroll compressors (ISO 8573-1 Class 0)",
            "Food-grade lubricants for contact-air applications",
            "Activated carbon filters for odour removal",
            "Stainless steel pipework and fittings",
        ],
        applications: [
            { title: "Packaging & Sealing", desc: "Clean dry air for form-fill-seal machines and blister packaging." },
            { title: "Conveying & Sorting", desc: "Pneumatic conveyors for grains, powders, and granules." },
            { title: "Blow Moulding (PET)", desc: "High-pressure oil-free air for PET bottle blow-moulding plants." },
            { title: "Fermentation & Aeration", desc: "Consistent sterile air supply for brewing, dairy, and fermentation." },
        ],
        products: [
            { name: "Scroll Oil-Free Compressors", href: "/scroll-oil-free-air-compressor" },
            { name: "Screw Air Compressors", href: "/screw-air-compressors" },
            { name: "Festo Pneumatics", href: "/festo" },
            { name: "Spares & Consumables", href: "/spares-consumables-accessories" },
        ],
        whyUs: [
            "All supplied units are Class 0 certified — zero oil carry-over",
            "FSSAI and GMP-compliant installation documentation",
            "Turnkey project execution including piping and dryers",
            "Emergency spares available same-day in Mumbai",
        ],
    },
    "chemical-industry": {
        headline: "Robust Compressors for Harsh Chemical Environments",
        intro: "Chemical processing demands compressors that can withstand corrosive atmospheres, extreme temperatures, and hazardous materials. We supply ATEX-compatible, stainless-fitted compressed air systems built for the toughest chemical plants.",
        supplies: [
            "Corrosion-resistant screw and reciprocating compressors",
            "ATEX-rated motors for hazardous area classification",
            "Stainless steel after-coolers and separator vessels",
            "Inert gas boosting solutions",
        ],
        applications: [
            { title: "Reactor Instrumentation", desc: "Instrument-quality dry air for control valves, actuators, and sensors." },
            { title: "Tank Blanketing", desc: "Continuous nitrogen and air supply for explosive atmosphere management." },
            { title: "Conveying of Powders", desc: "Dense-phase pneumatic conveying for chemical powders and pellets." },
            { title: "Process Agitation", desc: "High-volume compressed air for mixing and agitation in reaction vessels." },
        ],
        products: [
            { name: "Reciprocating Air Compressor", href: "/reciprocating-air-compressor" },
            { name: "Screw Air Compressors", href: "/screw-air-compressors" },
            { name: "Spares, Consumables & Accessories", href: "/spares-consumables-accessories" },
            { name: "Service & AMC", href: "/services" },
        ],
        whyUs: [
            "ATEX-compatible equipment for Zone 1 and Zone 2 areas",
            "30+ years of chemical plant project experience",
            "Corrosion-proof enclosures and stainless internals available",
            "On-site risk assessment before installation",
        ],
    },
    "packaging-industry": {
        headline: "High-Efficiency Air for Packaging Lines",
        intro: "Modern packaging lines operate at high speeds and need a reliable, uninterrupted compressed air supply. Airflow Industries provides compact, energy-efficient compressors and Festo pneumatics for end-of-line packaging automation.",
        supplies: [
            "Variable-speed screw compressors matching demand fluctuations",
            "Festo pneumatic cylinders, grippers, and valves",
            "Desiccant dryers for moisture-sensitive packaging",
            "Remote monitoring and IoT-ready systems",
        ],
        applications: [
            { title: "Blow Moulding", desc: "High-pressure oil-free air up to 40 bar for PET and HDPE blow moulding." },
            { title: "Labelling & Printing", desc: "Instrument-quality air for inkjet coders and labelling systems." },
            { title: "Vacuum Packaging", desc: "Vacuum pumps integrated with compressor systems for modified atmosphere." },
            { title: "Pick & Place Robotics", desc: "Festo multi-axis systems for flexible packaging automation." },
        ],
        products: [
            { name: "Screw Air Compressors", href: "/screw-air-compressors" },
            { name: "Vacuum Pump", href: "/vacuum-pump" },
            { name: "Festo Pneumatics", href: "/festo" },
            { name: "Pneumatic Grease Pumps", href: "/pneumatic-grease-pump" },
        ],
        whyUs: [
            "Variable-speed drives reduce energy costs by up to 35%",
            "Festo authorised distributor — pneumatic components stocked locally",
            "24/7 emergency breakdown cover for production-critical lines",
            "System audits to eliminate air leaks and cut waste",
        ],
    },
    "textile-industry": {
        headline: "Oil-Free, Continuous Air for Textile Manufacturing",
        intro: "Textile production runs around the clock and cannot tolerate oil-contaminated air that would ruin fabrics and damage machinery. We deliver dust-free, oil-free compressed air systems engineered for spinning, weaving, and dyeing applications.",
        supplies: [
            "Oil-free reciprocating and scroll compressors",
            "High-flow low-pressure blowers for air-jet looms",
            "Dust-filtered intake systems for lint environments",
            "Energy-efficient VFD-controlled units",
        ],
        applications: [
            { title: "Air-Jet Weaving Looms", desc: "Large volumes of clean, dry air at precise pressure for weft insertion." },
            { title: "Yarn Texturising", desc: "Consistent air supply for false-twist and air-texturising processes." },
            { title: "Pneumatic Conveyors", desc: "Fibre and yarn transport between spinning frames and winding machines." },
            { title: "Dyeing & Finishing", desc: "Oil-free air for jigger, jet, and beam dyeing machines." },
        ],
        products: [
            { name: "Oil-Free Reciprocating Compressors", href: "/oil-free-reciprocating-air-compressors" },
            { name: "Screw Air Compressors", href: "/screw-air-compressors" },
            { name: "Anest Iwata Range", href: "/anest-iwata-distributor" },
            { name: "Spares & Consumables", href: "/spares-consumables-accessories" },
        ],
        whyUs: [
            "Zero oil carry-over — protects fabric quality and machinery",
            "Low-noise units suitable for continuous shift operations",
            "Lint-resistant intake filters and housings",
            "Energy audit and optimisation service for existing plants",
        ],
    },
    "pharmaceutical-industry": {
        headline: "ISO-Compliant Compressed Air for Pharma Manufacturing",
        intro: "Pharmaceutical manufacturing requires the highest air purity standards. Airflow Industries supplies ISO 8573-1 Class 0 oil-free compressors, validated to meet WHO-GMP, US FDA, and EU GMP requirements for drug manufacturing facilities.",
        supplies: [
            "Class 0 oil-free scroll and screw compressors",
            "Pharmaceutical-grade stainless piping and fittings",
            "Sterile compressed air systems with HEPA point-of-use filters",
            "Validation documentation (IQ/OQ/PQ) available",
        ],
        applications: [
            { title: "Tablet Coating", desc: "Controlled, dry air for coating pans ensuring uniform drug film coating." },
            { title: "Lyophilisation", desc: "Clean instrument air for freeze-dryer controls and isolator blowers." },
            { title: "Cleanroom Pressurisation", desc: "HVAC-integrated air supply maintaining positive pressure in Grade A/B rooms." },
            { title: "Packaging (Blister / Vial)", desc: "Oil-free air for blister pack sealing and vial filling machines." },
        ],
        products: [
            { name: "Scroll Oil-Free Compressor", href: "/scroll-oil-free-air-compressor" },
            { name: "Oil-Free Reciprocating Compressors", href: "/oil-free-reciprocating-air-compressors" },
            { name: "Anest Iwata Distributor", href: "/anest-iwata-distributor" },
            { name: "Spares & Consumables", href: "/spares-consumables-accessories" },
        ],
        whyUs: [
            "IQ/OQ/PQ validation documentation provided on request",
            "WHO-GMP, US FDA and EU GMP compliant installations",
            "Dedicated pharma service team with cGMP training",
            "Stainless steel compressed air distribution frameworks",
        ],
    },
    "glass-industry": {
        headline: "High-Pressure Air Systems for Glass Manufacturing",
        intro: "Glass forming and tempering processes require large volumes of high-pressure, oil-free air at precise conditions. We supply robust reciprocating and screw compressors rated for continuous duty in high-temperature glass plant environments.",
        supplies: [
            "High-pressure reciprocating compressors (up to 40 bar)",
            "Heavy-duty screw compressors for blow and press moulding",
            "After-coolers and moisture separators for hot environments",
            "Robust inlet filtration for dusty glass plant conditions",
        ],
        applications: [
            { title: "Blank Mould Pressing", desc: "High-pressure air for IS machine gob pressing and neck forming." },
            { title: "Tempering Furnaces", desc: "High-volume air quenching for flat glass toughening lines." },
            { title: "Lehr Cooling", desc: "Controlled air flow for annealing lehrs in container glass production." },
            { title: "Cullet Conveying", desc: "Pneumatic transport of glass cullet to batch houses and furnaces." },
        ],
        products: [
            { name: "Reciprocating Air Compressor", href: "/reciprocating-air-compressor" },
            { name: "Screw Air Compressors", href: "/screw-air-compressors" },
            { name: "Spares & Consumables", href: "/spares-consumables-accessories" },
            { name: "Service & AMC", href: "/services" },
        ],
        whyUs: [
            "High-temperature rated after-coolers for glass plant environments",
            "Inter-stage cooling options for multi-stage high-pressure duty",
            "Heavy-duty inlet filtration for dusty atmospheres",
            "Rapid spares availability minimising production downtime",
        ],
    },
    "iron-and-steel-industry": {
        headline: "Heavy-Duty Compressors for Iron & Steel Plants",
        intro: "Iron and steel production demands the most rugged compressed air systems. Airflow Industries provides heavy-duty, high-capacity compressors and pneumatic solutions for blast furnaces, rolling mills, and continuous casting lines.",
        supplies: [
            "Large-capacity reciprocating and screw compressors",
            "Blast furnace instrument air systems",
            "High-pressure boosters for converter lancing",
            "Plant-wide compressed air auditing and optimisation",
        ],
        applications: [
            { title: "Blast Furnace Instrumentation", desc: "Dry instrument air for control systems in BF and stove operations." },
            { title: "Oxygen Converter (BOF)", desc: "High-pressure air for lance cooling and pneumatic control systems." },
            { title: "Continuous Casting", desc: "Mould oscillation and cooling sprays driven by precision pneumatics." },
            { title: "Rolling Mill Automation", desc: "Festo pneumatics for roll changing, clamping, and guide systems." },
        ],
        products: [
            { name: "Reciprocating Air Compressor", href: "/reciprocating-air-compressor" },
            { name: "Screw Air Compressors", href: "/screw-air-compressors" },
            { name: "Festo Pneumatics", href: "/festo" },
            { name: "Service & AMC", href: "/services" },
        ],
        whyUs: [
            "Heavy-duty units rated for 24/7 continuous-production duty",
            "On-site project team for large-scale plant installations",
            "Compressed air audits to reduce losses in legacy plants",
            "Nationwide service network for steel plant locations",
        ],
    },
    "shipping-industry": {
        headline: "Marine-Grade Compressed Air for Ports & Shipyards",
        intro: "Harsh marine environments demand corrosion-resistant, reliable compressed air equipment. Airflow Industries supplies marine-grade systems for port operations, ship repair yards, and onboard auxiliary systems.",
        supplies: [
            "Marine-rated corrosion-resistant reciprocating compressors",
            "Breathing air systems (CABA) for confined space entry",
            "Portable diesel-driven compressors for dockside use",
            "High-pressure starting air systems for marine engines",
        ],
        applications: [
            { title: "Engine Starting Air", desc: "High-pressure compressed air receivers and systems for main engine starts." },
            { title: "Ship Repair Blasting", desc: "Large-volume air for abrasive blasting during dry-dock maintenance." },
            { title: "Port Pneumatic Tools", desc: "Reliable air supply for caulking, chipping, and grinding at berths." },
            { title: "Breathing Air (CABA)", desc: "Breathing-quality compressed air for ship maintenance personnel." },
        ],
        products: [
            { name: "Reciprocating Air Compressor", href: "/reciprocating-air-compressor" },
            { name: "Screw Air Compressors", href: "/screw-air-compressors" },
            { name: "Spares & Consumables", href: "/spares-consumables-accessories" },
            { name: "Service & AMC", href: "/services" },
        ],
        whyUs: [
            "Corrosion-resistant enclosures for salt-air marine environments",
            "Breathing air compressors compliant with EN 12021",
            "Rapid response service for Mumbai Port Trust and JNPT area",
            "Portable diesel units for remote dry-dock locations",
        ],
    },
    "pet-bottling-industry": {
        headline: "High-Pressure Compressors for PET Bottle Blowing",
        intro: "PET bottle blowing requires very high pressure (25–40 bar) oil-free compressed air at high flow rates. Airflow Industries supplies specialist oil-free high-pressure compressors from Anest Iwata that are purpose-built for PET blow-moulding applications.",
        supplies: [
            "Oil-free high-pressure compressors (25–40 bar)",
            "Multi-stage booster systems for stretch blow moulding",
            "Integrated air drying and purification skids",
            "Low-pressure supply for preform conveying and plant utilities",
        ],
        applications: [
            { title: "Stretch Blow Moulding (SBM)", desc: "40 bar oil-free air for single and two-stage SBM machines." },
            { title: "Extrusion Blow Moulding", desc: "Clean continuous air for HDPE and PP extrusion blow processes." },
            { title: "Preform Handling", desc: "Low-pressure air for pneumatic preform conveyors and orientors." },
            { title: "Cap & Closure Production", desc: "Precision air for injection moulding of closures and tamper bands." },
        ],
        products: [
            { name: "Scroll Oil-Free Compressor", href: "/scroll-oil-free-air-compressor" },
            { name: "Oil-Free Reciprocating Compressors", href: "/oil-free-reciprocating-air-compressors" },
            { name: "Anest Iwata Distributor", href: "/anest-iwata-distributor" },
            { name: "Spares & Consumables", href: "/spares-consumables-accessories" },
        ],
        whyUs: [
            "Purpose-built high-pressure oil-free units for PET blowing",
            "Anest Iwata authorised — genuine spares always available",
            "Integrated booster packages delivered as a single skid",
            "Expert sizing service — we match CFM and pressure to your machine",
        ],
    },
};

/* ---------- Dynamic Metadata ---------- */
export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const industry = industriesData.find((i) => i.slug === slug);
    if (!industry) return { title: "Industry Not Found" };
    return {
        title: `${industry.name} Industry | Airflow Industries`,
        description: industry.description,
    };
}

/* ---------- Page Component ---------- */
export default async function IndustryDetailPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const industry = industriesData.find((i) => i.slug === slug);
    if (!industry) notFound();

    const content = industryContent[slug];
    if (!content) notFound();

    const otherIndustries = industriesData.filter((i) => i.slug !== slug).slice(0, 5);

    return (
        <main>
            {/* Page Banner */}
            <div className="page-banner">
                <div className="container">
                    {/* Breadcrumb */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                        <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/industries" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Industries</Link>
                        <ChevronRight size={12} />
                        <span style={{ color: "rgba(255,255,255,0.9)" }}>{industry.name}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "3rem" }}>{industry.icon}</span>
                        <div>
                            <div style={{ display: "inline-block", background: "#cc0000", color: "white", fontSize: "0.68rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", padding: "0.2rem 0.65rem", borderRadius: "3px", marginBottom: "0.6rem" }}>
                                Industry
                            </div>
                            <h1 style={{ color: "white", marginBottom: "0.5rem", fontFamily: "Roboto, sans-serif" }}>
                                {industry.name} Industry
                            </h1>
                            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", margin: 0, maxWidth: "560px" }}>
                                {industry.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro + What We Supply */}
            <section style={{ background: "white", padding: "3.5rem 0" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "3rem", alignItems: "start" }} className="industry-detail-grid">
                        {/* Left */}
                        <div>
                            <div className="section-divider" style={{ margin: "0 0 1.25rem" }} />
                            <h2 style={{ color: "#1a1a1a", marginBottom: "1rem", fontFamily: "Roboto, sans-serif", fontSize: "1.6rem" }}>
                                {content.headline}
                            </h2>
                            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2rem" }}>
                                {content.intro}
                            </p>

                            <h3 style={{ color: "#1a2744", fontSize: "1.1rem", fontWeight: "700", marginBottom: "1rem", fontFamily: "Roboto, sans-serif" }}>
                                What We Supply
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2.5rem" }}>
                                {content.supplies.map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
                                        <CheckCircle size={17} style={{ color: "#cc0000", flexShrink: 0, marginTop: "2px" }} />
                                        <span style={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Key Applications */}
                            <h3 style={{ color: "#1a2744", fontSize: "1.1rem", fontWeight: "700", marginBottom: "1.25rem", fontFamily: "Roboto, sans-serif" }}>
                                Key Applications
                            </h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                                {content.applications.map((app, i) => (
                                    <div key={i} style={{ background: "#f9f9f9", border: "1px solid #e0e0e0", borderLeft: "3px solid #cc0000", borderRadius: "4px", padding: "1rem 1.1rem" }}>
                                        <div style={{ fontWeight: "700", color: "#1a1a1a", fontSize: "0.9rem", marginBottom: "0.4rem", fontFamily: "Roboto, sans-serif" }}>{app.title}</div>
                                        <div style={{ color: "#666", fontSize: "0.83rem", lineHeight: 1.6 }}>{app.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <aside>
                            {/* Recommended Products */}
                            <div style={{ background: "#1a2744", borderRadius: "6px", padding: "1.5rem", marginBottom: "1.25rem" }}>
                                <h4 style={{ color: "white", fontSize: "0.95rem", fontWeight: "700", marginBottom: "1.1rem", fontFamily: "Roboto, sans-serif" }}>
                                    Recommended Products
                                </h4>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {content.products.map((p) => (
                                        <Link key={p.href} href={p.href} style={{
                                            display: "flex", alignItems: "center", justifyContent: "space-between",
                                            background: "rgba(255,255,255,0.08)", borderRadius: "4px",
                                            padding: "0.65rem 0.85rem", color: "rgba(255,255,255,0.85)",
                                            fontSize: "0.83rem", fontWeight: "500", textDecoration: "none",
                                            transition: "background 0.15s",
                                        }}>
                                            {p.name}
                                            <ArrowRight size={13} style={{ color: "#cc0000", flexShrink: 0 }} />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div style={{ border: "1px solid #e0e0e0", borderTop: "3px solid #cc0000", borderRadius: "4px", padding: "1.25rem" }}>
                                <h4 style={{ color: "#1a1a1a", fontSize: "0.95rem", fontWeight: "700", marginBottom: "1rem", fontFamily: "Roboto, sans-serif" }}>
                                    Why Airflow Industries?
                                </h4>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                    {content.whyUs.map((point, i) => (
                                        <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                            <CheckCircle size={14} style={{ color: "#cc0000", flexShrink: 0, marginTop: "3px" }} />
                                            <span style={{ color: "#444", fontSize: "0.83rem", lineHeight: 1.6 }}>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Get a Quote */}
                            <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <Link href="/contact" style={{
                                    display: "block", textAlign: "center",
                                    background: "#cc0000", color: "white", padding: "0.8rem",
                                    borderRadius: "4px", fontWeight: "700", fontSize: "0.85rem",
                                    textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px",
                                }}>
                                    Get a Free Quote
                                </Link>
                                <a href="tel:+919876480015" style={{
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                                    background: "#1a2744", color: "white", padding: "0.7rem",
                                    borderRadius: "4px", fontWeight: "600", fontSize: "0.83rem",
                                    textDecoration: "none",
                                }}>
                                    <Phone size={14} /> Call Our Experts
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Other Industries */}
            <section style={{ background: "#f5f5f5", padding: "3rem 0", borderTop: "1px solid #e0e0e0" }}>
                <div className="container">
                    <h3 style={{ color: "#1a1a1a", fontSize: "1.1rem", fontWeight: "700", marginBottom: "1.25rem", fontFamily: "Roboto, sans-serif" }}>
                        Other Industries We Serve
                    </h3>
                    <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                        {otherIndustries.map((ind) => (
                            <Link key={ind.slug} href={ind.href} style={{
                                display: "flex", alignItems: "center", gap: "0.5rem",
                                background: "white", border: "1px solid #e0e0e0",
                                borderRadius: "4px", padding: "0.55rem 1rem",
                                color: "#333", fontSize: "0.83rem", fontWeight: "600",
                                textDecoration: "none",
                            }}>
                                {ind.icon} {ind.name}
                            </Link>
                        ))}
                        <Link href="/industries" style={{
                            display: "flex", alignItems: "center", gap: "0.4rem",
                            background: "#cc0000", color: "white", border: "1px solid #cc0000",
                            borderRadius: "4px", padding: "0.55rem 1rem",
                            fontSize: "0.83rem", fontWeight: "700", textDecoration: "none",
                        }}>
                            View All <ArrowRight size={13} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: "#1a2744", padding: "3.5rem 0", borderTop: "4px solid #cc0000" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="section-divider" style={{ background: "#cc0000" }} />
                    <h2 style={{ color: "white", marginBottom: "0.75rem", fontFamily: "Roboto, sans-serif" }}>
                        Need a Solution for Your {industry.name} Plant?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "480px", margin: "0 auto 2rem", fontSize: "0.92rem" }}>
                        Our compressed air specialists will assess your requirements and recommend the most cost-effective solution.
                    </p>
                    <div style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            background: "#cc0000", color: "white", padding: "0.75rem 2rem",
                            borderRadius: "4px", fontWeight: "700", fontSize: "0.85rem",
                            textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px",
                        }}>
                            Get a Free Quote
                        </Link>
                        <Link href="/products" style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            background: "transparent", color: "white", padding: "0.75rem 2rem",
                            borderRadius: "4px", fontWeight: "700", fontSize: "0.85rem",
                            textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px",
                            border: "2px solid rgba(255,255,255,0.4)",
                        }}>
                            View Products
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
