import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reciprocating Air Compressors | Airflow Industries",
    description: "Buy Anest Iwata reciprocating air compressors (1–30HP) in Mumbai. Oil-lubricated, tank mounted compressors for industrial use. Authorized distributor.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Reciprocating Air Compressors"
            subtitle="Oil-lubricated, tank-mounted piston compressors for industrial applications"
            emoji="🔩"
            description="Anest Iwata reciprocating (piston) air compressors are designed for intermittent-duty industrial applications. Available in both single-stage and two-stage configurations, these compressors are known for their robust build quality, energy efficiency, and low maintenance requirements. Suitable for workshops, manufacturing units, automotive, and general industrial use."
            features={[
                "Available 1–30 HP range",
                "Single & two-stage options",
                "Belt-driven and direct-drive models",
                "Horizontal & vertical tank options",
                "Low vibration & noise",
                "Easy access for maintenance",
                "Energy-efficient motor",
                "Durable cast iron cylinder",
                "Thermal overload protection",
                "CAGI data sheet available",
            ]}
            specs={[
                { label: "Power Range", value: "1 – 30 HP" },
                { label: "Pressure", value: "8 – 15 bar" },
                { label: "Air Delivery", value: "80 – 2200 LPM" },
                { label: "Drive", value: "Belt / Direct" },
                { label: "Tank Capacity", value: "50 – 500 Litres" },
                { label: "Lubrication", value: "Oil Lubricated" },
                { label: "Cooling", value: "Air Cooled" },
                { label: "Brand", value: "Anest Iwata" },
            ]}
            applications={["Automotive", "Workshops", "Construction", "Manufacturing", "Printing", "Packaging", "Spray Painting", "Woodworking"]}
        />
    );
}
