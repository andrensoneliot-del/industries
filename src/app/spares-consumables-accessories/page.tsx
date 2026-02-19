import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Spares, Consumables & Accessories | Airflow Industries",
    description: "Genuine spare parts, air dryers, filters, and accessories for Anest Iwata compressors and Festo pneumatic products from authorized distributor in Mumbai.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Spares, Consumables & Accessories"
            subtitle="Genuine OEM spare parts, air treatment accessories and consumables"
            emoji="🔧"
            description="Airflow Industries stocks a comprehensive range of genuine OEM spare parts for Anest Iwata air compressors and Festo pneumatic equipment. We also supply air treatment accessories including refrigerant air dryers, heatless desiccant dryers, inline filters, activated carbon filters, condensate drains, and air receivers. Using genuine parts ensures optimal performance and warranty compliance."
            features={[
                "Genuine Anest Iwata OEM parts",
                "Genuine Festo spare parts",
                "Refrigerant air dryers",
                "Heatless desiccant dryers",
                "After-filters & pre-filters",
                "Activated carbon filters",
                "Electronic condensate drains",
                "Horizontal & vertical receivers",
                "Compressor oil (Anest Iwata)",
                "V-belts, valves, gaskets",
            ]}
            specs={[
                { label: "Dryers", value: "Refrigerant / Heatless" },
                { label: "Pressure Dew Point", value: "2°C to -40°C" },
                { label: "Filter Classes", value: "G, A, K, H (ISO 8573)" },
                { label: "Receiver Sizes", value: "50 – 5000 Litres" },
                { label: "Drain Types", value: "Manual / Auto / Electronic" },
                { label: "Brands", value: "Anest Iwata, Festo" },
                { label: "Warranty", value: "OEM Backed" },
                { label: "Delivery", value: "Mumbai Same Day" },
            ]}
            applications={["All Compressor Models", "Pneumatic Systems", "Air Treatment", "Maintenance", "AMC Contracts", "Retrofits"]}
        />
    );
}
