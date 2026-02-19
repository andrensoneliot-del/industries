import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Festo Pneumatics Mumbai | Airflow Industries",
    description: "Airflow Industries is an authorized Festo distributor in Mumbai – supplying pneumatic cylinders, valves, FRLs, sensors, and industrial automation components.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Festo"
            subtitle="Authorized Distributor – Pneumatics, Automation & Electrical Control Systems"
            emoji="🔬"
            description="Airflow Industries is an authorized distributor for Festo pneumatic and automation products in Mumbai. Festo is a globally recognized German company, a leader in pneumatic and electrical automation technology present in over 60 countries. We supply the complete Festo range including cylinders, directional control valves, FRL combinations, grippers, sensors, servo drives, and process valves — all backed by local technical support and genuine spare parts."
            features={[
                "Authorized Festo distributor – Mumbai",
                "Complete pneumatic product range",
                "Electrical automation components",
                "Genuine Festo spare parts",
                "Technical application support",
                "CAD drawings & documentation",
                "Smart factory & IIoT ready products",
                "ISO 8573 compliant components",
                "60+ countries global support network",
                "Energy-efficient product designs",
            ]}
            specs={[
                { label: "Brand Origin", value: "Germany" },
                { label: "Product Categories", value: "Pneumatic, Automation, Electric" },
                { label: "Service Area", value: "Mumbai, Maharashtra" },
                { label: "Key Products", value: "Cylinders, Valves, Sensors" },
                { label: "Global Presence", value: "60+ Countries" },
                { label: "R&D Investment", value: "8% of turnover" },
                { label: "Delivery", value: "Ex-Stock Mumbai" },
                { label: "Support", value: "Technical + After Sales" },
            ]}
            applications={["Industrial Automation", "Packaging", "Automotive Assembly", "Food & Beverage", "Pharmaceutical GMP", "Material Handling", "Robotics", "Process Control"]}
        />
    );
}
