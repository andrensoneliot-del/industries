import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Oil Free Reciprocating Air Compressors | Airflow Industries",
    description: "Anest Iwata oil-free reciprocating air compressors in Mumbai. Clean, contamination-free air for pharmaceutical, medical, and food industries.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Oil Free Reciprocating Air Compressors"
            subtitle="100% oil-free, clean compressed air for sensitive industrial applications"
            emoji="💨"
            description="Anest Iwata oil-free reciprocating compressors deliver 100% oil-free air, making them ideal for applications where air purity is critical. The cylinders are fitted with PTFE-coated pistons and special piston rings that do not require lubrication, ensuring zero oil contamination in the compressed air stream. Compliant with ISO 8573-1 Class 0 air quality standards."
            features={[
                "100% oil-free air (ISO Class 0)",
                "PTFE piston rings – no lubrication",
                "1–30 HP range",
                "Suitable for clean room use",
                "Low maintenance costs",
                "Environmentally friendly",
                "Silent & low vibration",
                "Belt & direct drive options",
                "Thermal overload protection",
                "FDA-compliant for food use",
            ]}
            specs={[
                { label: "Power Range", value: "1 – 30 HP" },
                { label: "Air Quality", value: "ISO 8573-1 Class 0" },
                { label: "Pressure", value: "7 – 10 bar" },
                { label: "Air Delivery", value: "80 – 1800 LPM" },
                { label: "Lubrication", value: "Oil Free" },
                { label: "Cooling", value: "Air Cooled" },
                { label: "Noise Level", value: "< 65 dB(A)" },
                { label: "Brand", value: "Anest Iwata" },
            ]}
            applications={["Pharmaceutical", "Medical", "Food & Beverage", "Electronics", "Laboratories", "Dental", "Printing", "Textile"]}
        />
    );
}
