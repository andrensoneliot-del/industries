import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Screw Air Compressors | Airflow Industries",
    description: "Anest Iwata rotary screw air compressors in Mumbai (7.5–250HP). Energy-efficient, quiet, and designed for 24/7 industrial operations.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Screw Air Compressors"
            subtitle="Rotary screw compressors for continuous 24/7 industrial production"
            emoji="⚙️"
            description="Anest Iwata rotary screw compressors are designed for heavy-duty, continuous-duty industrial applications. Unlike reciprocating compressors, screw compressors operate on a rotary mechanism that provides smooth, pulse-free air delivery at extremely low noise levels. With IE3 energy-efficient motors and an integrated inverter option, they are the preferred choice for large-scale industrial operations."
            features={[
                "7.5 – 250 HP range",
                "Continuous 100% duty cycle",
                "Integrated inverter (VFD) option",
                "IE3 energy-efficient motor",
                "Low noise: 65–72 dB(A)",
                "Smart PLC controller",
                "Remote monitoring capable",
                "Oil-flood cooled rotors",
                "Minimal vibration",
                "Compact footprint",
            ]}
            specs={[
                { label: "Power Range", value: "7.5 – 250 HP" },
                { label: "Pressure", value: "7 – 13 bar" },
                { label: "Air Delivery", value: "300 – 12,000 LPM" },
                { label: "Duty Cycle", value: "100% Continuous" },
                { label: "Noise Level", value: "65 – 72 dB(A)" },
                { label: "Drive", value: "Direct / Belt / VFD" },
                { label: "Cooling", value: "Air / Water Cooled" },
                { label: "Brand", value: "Anest Iwata" },
            ]}
            applications={["Automotive", "Textile", "Chemical", "Packaging", "Iron & Steel", "Cement", "Paper Mills", "Large Manufacturing"]}
        />
    );
}
