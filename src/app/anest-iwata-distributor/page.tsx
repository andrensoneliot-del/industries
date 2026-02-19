import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anest Iwata Distributor Mumbai | Airflow Industries",
    description: "Airflow Industries is an authorized distributor of Anest Iwata air compressors, vacuum pumps, and spray equipment in Mumbai and across India.",
};

export default function Page() {
    return (
        <ProductDetailTemplate
            title="Anest Iwata"
            subtitle="Authorized Distributor – Air Compressors, Vacuum Pumps & Spray Equipment"
            emoji="🏭"
            description="Airflow Industries is an authorized distributor of Anest Iwata products in Mumbai and Maharashtra. Anest Iwata is a global Japanese manufacturer of air compressors, vacuum pumps, and spray finishing equipment. Their compressors are manufactured in India and exported to Japan, USA, and other countries — a testament to their world-class quality. We stock and supply the complete Anest Iwata range including reciprocating, oil-free, scroll, and screw compressors along with genuine spare parts."
            features={[
                "Authorized distributor – Mumbai & Maharashtra",
                "Complete product range in stock",
                "Genuine OEM spare parts available",
                "Factory-trained service engineers",
                "Warranty support & AMC",
                "Made in India, Japan quality",
                "Export quality products",
                "ISO 9001 certified manufacturer",
                "Energy Star rated products",
                "Local same-day service support",
            ]}
            specs={[
                { label: "Brand Origin", value: "Japan (Made in India)" },
                { label: "Distributor Since", value: "1990" },
                { label: "Product Range", value: "Compressors, Vacuum Pumps" },
                { label: "Service Area", value: "Mumbai, Maharashtra" },
                { label: "Certification", value: "ISO 9001, BIS" },
                { label: "Warranty", value: "12 – 24 months" },
                { label: "After Sales", value: "Service + AMC" },
                { label: "Spares", value: "Genuine OEM in stock" },
            ]}
            applications={["All Industrial Sectors", "Medical", "Automotive", "Pharmaceutical", "Food Industry", "Textile", "Chemical", "Packaging"]}
        />
    );
}
