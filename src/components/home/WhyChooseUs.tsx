import Link from "next/link";
import { CheckCircle } from "lucide-react";

const anestIwataPoints = [
    "The Compressors are made in India and are exported to Japan, USA etc., Anest Iwata, Japan therefore brings in its advanced technologies and expertise to maintain its standards.",
    "Designed for highest level of Safety",
    "Robust & reliable under extreme conditions",
    "Energy Efficient",
    "Highest Durability",
    "Best in class rotor profile, a benefactor for efficient performance",
    "Low noise level, a benefactor for health safety",
    "Easy maintenance, a benefactor for hassle free operation",
    "Global manufacturer having a strong global setup for aftersales support with availability of spares, manpower competence and adequate tool kits.",
];

const festoPoints = [
    "Festo is a globally recognized company, focused on technologies such as innovative automation technology, pneumatic industrial equipment, and electrical control systems.",
    "Assurance of higher quality, durability and reliability.",
    "Festo products offer lifelong consistent performance.",
    "Constant innovation in technology to stay ahead of the competition.",
    "Best-in-class after-sales service, with local support in over 60 countries.",
    "Best electric and pneumatic industrial devices for industrial automation.",
    "Emphasis on energy efficiency and sustainability.",
];

const BrandVisual = ({ title, subtitle, emoji, tags }: { title: string; subtitle: string; emoji: string; tags: string[] }) => (
    <div style={{
        background: 'linear-gradient(135deg, #1a2744 0%, #243360 100%)',
        borderRadius: '8px', padding: '2.5rem 2rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', minHeight: '300px', gap: '1.25rem',
        borderLeft: '4px solid #cc0000',
    }}>
        <div style={{ fontSize: '4.5rem', lineHeight: 1 }}>{emoji}</div>
        <div style={{ textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '700', fontFamily: 'Roboto, sans-serif' }}>{title}</div>
            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', marginTop: '0.3rem' }}>{subtitle}</div>
        </div>
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {tags.map(t => (
                <span key={t} style={{
                    background: 'rgba(204,0,0,0.2)', border: '1px solid rgba(204,0,0,0.35)',
                    color: '#ff9999', padding: '0.2rem 0.65rem', borderRadius: '3px',
                    fontSize: '0.72rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.3px',
                }}>{t}</span>
            ))}
        </div>
    </div>
);

export default function WhyChooseUs() {
    return (
        <section className="section section-light">
            <div className="container">

                {/* Why Anest Iwata */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '5rem' }}>
                    <BrandVisual
                        title="Anest Iwata"
                        subtitle="Authorized Distributor"
                        emoji="🏭"
                        tags={['Made in India', 'Exported Globally', 'ISO Certified']}
                    />
                    <div>
                        <div className="section-divider-left" />
                        <h2 style={{ color: '#1a1a1a', marginBottom: '1.25rem', fontFamily: 'Roboto, sans-serif' }}>Why Anest Iwata?</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem' }}>
                            {anestIwataPoints.map((point, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.65rem', alignItems: 'flex-start' }}>
                                    <CheckCircle size={16} style={{ color: '#cc0000', flexShrink: 0, marginTop: '3px' }} />
                                    <span style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7 }}>{point}</span>
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <Link href="/anest-iwata-distributor" style={{
                                display: 'inline-flex', alignItems: 'center',
                                background: '#1a2744', color: 'white', padding: '0.62rem 1.5rem',
                                borderRadius: '4px', fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none',
                                textTransform: 'uppercase', letterSpacing: '0.4px', border: '2px solid #1a2744',
                            }}>View Products</Link>
                            <Link href="/contact" style={{
                                display: 'inline-flex', alignItems: 'center',
                                background: '#cc0000', color: 'white', padding: '0.62rem 1.5rem',
                                borderRadius: '4px', fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none',
                                textTransform: 'uppercase', letterSpacing: '0.4px', border: '2px solid #cc0000',
                            }}>Contact Us</Link>
                        </div>
                    </div>
                </div>

                {/* Why FESTO */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div className="section-divider-left" />
                        <h2 style={{ color: '#1a1a1a', marginBottom: '1.25rem', fontFamily: 'Roboto, sans-serif' }}>Why FESTO?</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem' }}>
                            {festoPoints.map((point, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.65rem', alignItems: 'flex-start' }}>
                                    <CheckCircle size={16} style={{ color: '#cc0000', flexShrink: 0, marginTop: '3px' }} />
                                    <span style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7 }}>{point}</span>
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <Link href="/festo" style={{
                                display: 'inline-flex', alignItems: 'center',
                                background: '#1a2744', color: 'white', padding: '0.62rem 1.5rem',
                                borderRadius: '4px', fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none',
                                textTransform: 'uppercase', letterSpacing: '0.4px', border: '2px solid #1a2744',
                            }}>View Products</Link>
                            <Link href="/downloads" style={{
                                display: 'inline-flex', alignItems: 'center',
                                background: 'transparent', color: '#1a2744', padding: '0.62rem 1.5rem',
                                borderRadius: '4px', fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none',
                                textTransform: 'uppercase', letterSpacing: '0.4px', border: '2px solid #1a2744',
                            }}>Catalogue</Link>
                        </div>
                    </div>
                    <BrandVisual
                        title="Festo"
                        subtitle="Pneumatics & Automation"
                        emoji="🔬"
                        tags={['60+ Countries', 'IoT Ready', 'Energy Efficient']}
                    />
                </div>
            </div>
        </section>
    );
}
