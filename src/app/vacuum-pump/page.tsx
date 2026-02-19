import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vacuum Pump | Airflow Industries",
    description: "Industrial vacuum pumps from Anest Iwata in Mumbai. High-performance vacuum solutions for medical, packaging, printing, and process industries.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Vacuum Pump"
            subtitle="High-performance industrial vacuum pumps for process and medical applications"
            emoji="🔁"
            description="Anest Iwata industrial vacuum pumps deliver reliable and consistent vacuum levels for a wide range of applications including medical suction, packaging, printing, and industrial process uses. Available in oil-lubricated and dry-running models, these pumps offer excellent suction capacity with low power consumption and quiet operation."
            features={[
                "Oil-lubricated & dry models",
                "High suction capacity",
                "Quiet operation",
                "Compact design",
                "Low maintenance",
                "Thermal protection built-in",
                "Wide vacuum range available",
                "Durable cast iron body",
                "Single & two-stage options",
                "Long service life",
            ]}
            specs={[
                { label: "Power Range", value: "0.75 – 11 kW" },
                { label: "Vacuum Level", value: "Up to -700 mmHg" },
                { label: "Pumping Speed", value: "50 – 1500 L/min" },
                { label: "Drive", value: "Direct / Belt" },
                { label: "Cooling", value: "Air Cooled" },
                { label: "Noise Level", value: "< 68 dB(A)" },
                { label: "Brand", value: "Anest Iwata" },
                { label: "Models", value: "Oil / Oil-Free" },
            ]}
            applications={["Medical Suction", "Packaging", "Printing", "Plastic Forming", "Chemical Process", "Bakery", "Semiconductor", "Laboratories"]}
        />
    );
}
