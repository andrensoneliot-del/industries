import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pneumatic Grease Pumps | Airflow Industries",
    description: "High-pressure pneumatic grease pumps for industrial lubrication systems from Airflow Industries Mumbai.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Pneumatic Grease Pumps"
            subtitle="High-pressure pneumatic grease pumps for reliable lubrication systems"
            emoji="🛢️"
            description="Our pneumatic grease pumps are designed for industrial lubrication applications requiring reliable, high-pressure grease delivery. Powered by compressed air, these pumps eliminate the need for electric power at the lubrication point, making them ideal for use in hazardous or remote locations. Suitable for all types of industrial greases."
            features={[
                "Air-powered, no electricity needed",
                "High output pressure",
                "Durable all-metal construction",
                "Easy drum mounting system",
                "Wide grease compatibility",
                "Low maintenance design",
                "Built-in pressure relief valve",
                "Available with hose & gun kits",
                "50:1 to 70:1 ratio options",
                "Suitable for all NLGI grades",
            ]}
            specs={[
                { label: "Air Pressure", value: "4 – 8 bar" },
                { label: "Grease Output", value: "50:1 / 70:1 ratio" },
                { label: "Container Size", value: "20 kg / 200 kg drum" },
                { label: "Output Pressure", value: "Up to 560 bar" },
                { label: "Air Consumption", value: "Low cycle" },
                { label: "Material", value: "Cast Iron / SS" },
                { label: "NLGI Grade", value: "000 – 3" },
                { label: "Brands", value: "Authorized dealer" },
            ]}
            applications={["Automotive Workshops", "Heavy Machinery", "Construction Equipment", "Mining", "Steel Plants", "Agriculture", "Marine"]}
        />
    );
}
