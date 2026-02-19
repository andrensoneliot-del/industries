import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Car Washer Pump | Airflow Industries",
    description: "High-pressure car washer and surface cleaning pumps from Airflow Industries Mumbai.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Car Washer Pump"
            subtitle="High-pressure cleaning and car washing pump systems"
            emoji="🚿"
            description="Our car washer pump systems deliver high-pressure water jet cleaning solutions for automotive care centres, workshops, and vehicle cleaning applications. These pumps produce consistent water pressure ideal for washing vehicles, heavy equipment, and industrial surfaces. Available in electric and petrol-driven options for maximum versatility."
            features={[
                "High pressure output",
                "Electric & petrol drive options",
                "Adjustable pressure settings",
                "Trigger gun & lance included",
                "Durable brass pump head",
                "Thermal overload protection",
                "Compact portable design",
                "Quick-connect fittings",
                "Low water usage",
                "Long service life",
            ]}
            specs={[
                { label: "Pressure", value: "100 – 250 bar" },
                { label: "Flow Rate", value: "6 – 20 L/min" },
                { label: "Power", value: "1.5 – 4 kW" },
                { label: "Drive", value: "Electric / Petrol" },
                { label: "Hose Length", value: "5 – 10 m" },
                { label: "Weight", value: "15 – 35 kg" },
                { label: "Voltage", value: "220V / 415V" },
                { label: "Warranty", value: "1 Year" },
            ]}
            applications={["Car Wash Centres", "Vehicle Workshops", "Fleet Maintenance", "Surface Cleaning", "Industrial Equipment", "Construction Sites"]}
        />
    );
}
