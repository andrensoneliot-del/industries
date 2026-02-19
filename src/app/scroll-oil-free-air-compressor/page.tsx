import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Scroll Oil Free Air Compressor | Airflow Industries",
    description: "Anest Iwata scroll oil-free compressors in Mumbai – silent, vibration-free clean air for medical, dental, and laboratory applications.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Scroll Oil Free Air Compressor"
            subtitle="Ultra-quiet, vibration-free, 100% oil-free scroll compressors"
            emoji="🌀"
            description="Anest Iwata scroll compressors use two spiral-shaped scrolls — one fixed and one orbiting — to compress air without any reciprocating motion. This results in extremely quiet, vibration-free operation with 100% oil-free delivery. Ideal for environments where noise and air purity are critical, such as hospitals, dental clinics, laboratories, and electronic manufacturing."
            features={[
                "100% oil-free (ISO Class 0)",
                "Ultra-low noise: ≤ 55 dB(A)",
                "No vibration – no foundation required",
                "1–15 HP range",
                "Compact & lightweight design",
                "No oil change maintenance",
                "Long service intervals",
                "Suitable for clean room use",
                "Imported scroll profiles (Japan)",
                "Electronic controller included",
            ]}
            specs={[
                { label: "Power Range", value: "1 – 15 HP" },
                { label: "Air Quality", value: "ISO 8573-1 Class 0" },
                { label: "Noise Level", value: "≤ 55 dB(A)" },
                { label: "Pressure", value: "7 – 10 bar" },
                { label: "Air Delivery", value: "80 – 800 LPM" },
                { label: "Vibration", value: "Negligible" },
                { label: "Cooling", value: "Air Cooled" },
                { label: "Brand", value: "Anest Iwata" },
            ]}
            applications={["Medical / Hospital", "Dental Clinics", "Laboratories", "Electronics", "Semiconductor", "Optics", "Research Centres", "Printing"]}
        />
    );
}
