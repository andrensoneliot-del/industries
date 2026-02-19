import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products | Airflow Industries",
    description: "Browse the complete range of industrial air compressors and pneumatic equipment from Airflow Industries – Anest Iwata and Festo authorized distributor, Mumbai.",
};

const categories = [
    { name: "Reciprocating Air Compressors", href: "/reciprocating-air-compressor", emoji: "🔩", range: "1 – 30 HP", desc: "Oil-lubricated, tank mounted compressors for intermittent use." },
    { name: "Oil Free Reciprocating Air Compressors", href: "/oil-free-reciprocating-air-compressors", emoji: "💨", range: "1 – 30 HP", desc: "Clean, oil-free air for sensitive applications like pharma and food." },
    { name: "Screw Air Compressors", href: "/screw-air-compressors", emoji: "⚙️", range: "7.5 – 250 HP", desc: "Rotary screw for continuous 24/7 industrial operations." },
    { name: "Scroll Oil Free Air Compressor", href: "/scroll-oil-free-air-compressor", emoji: "🌀", range: "1 – 15 HP", desc: "Ultra-quiet, oil-free for medical, dental, and lab use." },
    { name: "Vacuum Pump", href: "/vacuum-pump", emoji: "🔁", range: "3 – 10 HP", desc: "High-performance vacuum pumps for packaging, medical, and process." },
    { name: "Spares, Consumables & Accessories", href: "/spares-consumables-accessories", emoji: "🔧", range: "All Models", desc: "Air dryers, filters, receivers, and genuine OEM spare parts." },
    { name: "Pneumatic Grease Pumps", href: "/pneumatic-grease-pump", emoji: "🛢️", range: "Various", desc: "High-pressure pneumatic grease pumps for lubrication systems." },
    { name: "Car Washer Pump", href: "/car-washer-pump", emoji: "🚿", range: "Various", desc: "High-pressure car washing systems for automotive care." },
    { name: "Anest Iwata", href: "/anest-iwata-distributor", emoji: "🏭", range: "Full Range", desc: "Authorized distributor for the complete Anest Iwata product range." },
    { name: "Festo", href: "/festo", emoji: "🔬", range: "Full Range", desc: "Authorized distributor for Festo pneumatic and automation products." },
];

export default function ProductsPage() {
    return (
        <main>
            {/* Banner */}
            <div className="page-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Our Products</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Complete range of industrial air compressors and pneumatic equipment
                    </p>
                </div>
            </div>

            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {categories.map((cat) => (
                            <Link key={cat.name} href={cat.href} style={{ textDecoration: 'none' }}>
                                <div className="product-card" style={{ height: '100%', cursor: 'pointer' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{cat.emoji}</div>
                                    <div style={{
                                        display: 'inline-block', fontSize: '0.7rem', fontWeight: '600',
                                        color: '#1e3a8a', background: '#eff6ff',
                                        padding: '0.2rem 0.6rem', borderRadius: '999px', marginBottom: '0.5rem',
                                    }}>
                                        {cat.range}
                                    </div>
                                    <h3 style={{ color: '#0f2341', fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                        {cat.name}
                                    </h3>
                                    <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                                        {cat.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
