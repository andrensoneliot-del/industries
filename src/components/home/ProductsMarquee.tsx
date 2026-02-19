import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
    {
        name: "Reciprocating Air Compressors",
        href: "/reciprocating-air-compressor",
        desc: "1–30HP tank mounted oil lubricated industrial compressors",
        emoji: "🔩",
        range: "1 – 30 HP",
    },
    {
        name: "Oil Free Reciprocating",
        href: "/oil-free-reciprocating-air-compressors",
        desc: "Oil-free reciprocating compressors for clean air applications",
        emoji: "💨",
        range: "1 – 30 HP",
    },
    {
        name: "Screw Air Compressors",
        href: "/screw-air-compressors",
        desc: "Rotary screw compressors for continuous industrial use",
        emoji: "⚙️",
        range: "7.5 – 250 HP",
    },
    {
        name: "Scroll Oil Free Compressor",
        href: "/scroll-oil-free-air-compressor",
        desc: "Ultra-quiet, oil-free scroll compressors for sensitive environments",
        emoji: "🌀",
        range: "1 – 15 HP",
    },
    {
        name: "Vacuum Pump",
        href: "/vacuum-pump",
        desc: "Industrial vacuum pumps for medical, packaging, and process industries",
        emoji: "🔁",
        range: "3 – 10 HP",
    },
    {
        name: "Pneumatic Grease Pumps",
        href: "/pneumatic-grease-pump",
        desc: "High-pressure pneumatic grease pumps for lubrication systems",
        emoji: "🛢️",
        range: "Various",
    },
    {
        name: "Car Washer Pump",
        href: "/car-washer-pump",
        desc: "High-pressure car washing and cleaning pump systems",
        emoji: "🚿",
        range: "Various",
    },
    {
        name: "Spares & Accessories",
        href: "/spares-consumables-accessories",
        desc: "Refrigerant dryers, heatless dryers, filters, receivers, and spare parts",
        emoji: "🔧",
        range: "All Models",
    },
];

export default function ProductsSection() {
    return (
        <section className="section section-gray">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-divider" />
                    <h2 style={{ color: '#0f2341', marginBottom: '0.75rem' }}>Our Products</h2>
                    <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                        We supply the complete range of Anest Iwata air compressors and Festo pneumatic equipment,
                        backed by expert after-sales support.
                    </p>
                </div>

                {/* Products Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                    {products.map((product) => (
                        <Link
                            key={product.name}
                            href={product.href}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="product-card" style={{ height: '100%', cursor: 'pointer' }}>
                                <div style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>{product.emoji}</div>
                                <div style={{
                                    display: 'inline-block', fontSize: '0.7rem', fontWeight: '600',
                                    color: '#1e3a8a', background: '#eff6ff',
                                    padding: '0.2rem 0.6rem', borderRadius: '999px', marginBottom: '0.5rem',
                                    textTransform: 'uppercase', letterSpacing: '0.05em',
                                }}>
                                    {product.range}
                                </div>
                                <h3 style={{ color: '#0f2341', fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                                    {product.name}
                                </h3>
                                <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                                    {product.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#1e3a8a', fontWeight: '600', fontSize: '0.82rem' }}>
                                    View Details <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All */}
                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <Link
                        href="/products"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: '#0f2341', color: 'white',
                            padding: '0.75rem 2rem', borderRadius: '5px',
                            fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none',
                        }}
                    >
                        View All Products <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
