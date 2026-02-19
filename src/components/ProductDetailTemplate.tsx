import Link from "next/link";

interface Spec {
    label: string;
    value: string;
}

interface ProductDetailProps {
    title: string;
    subtitle: string;
    emoji: string;
    description: string;
    features: string[];
    specs: Spec[];
    applications: string[];
}

export default function ProductDetailTemplate({
    title, subtitle, emoji, description, features, specs, applications,
}: ProductDetailProps) {
    return (
        <main>
            {/* Banner */}
            <div className="page-banner">
                <div className="container">
                    <p style={{ color: '#38bdf8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                        <Link href="/products" style={{ color: '#38bdf8', textDecoration: 'none' }}>Products</Link> &rsaquo; {title}
                    </p>
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>{title}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>{subtitle}</p>
                </div>
            </div>

            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>

                        {/* Left: Main content */}
                        <div>
                            {/* Product visual */}
                            <div style={{
                                background: 'linear-gradient(135deg, #0f2341 0%, #1e3a8a 100%)',
                                borderRadius: '12px', padding: '3rem',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '2rem', gap: '1rem',
                            }}>
                                <div style={{ fontSize: '5rem' }}>{emoji}</div>
                                <div style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', textAlign: 'center' }}>{title}</div>
                            </div>

                            {/* Description */}
                            <h2 style={{ color: '#0f2341', marginBottom: '1rem', fontSize: '1.4rem' }}>Overview</h2>
                            <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: '2rem' }}>{description}</p>

                            {/* Features */}
                            <h2 style={{ color: '#0f2341', marginBottom: '1rem', fontSize: '1.4rem' }}>Key Features</h2>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                                {features.map((f, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: '#4b5563', fontSize: '0.875rem' }}>
                                        <span style={{ color: '#0ea5e9', fontWeight: '700', flexShrink: 0 }}>✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Applications */}
                            <h2 style={{ color: '#0f2341', marginBottom: '1rem', fontSize: '1.4rem' }}>Applications</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {applications.map((app, i) => (
                                    <span key={i} style={{
                                        background: '#eff6ff', color: '#1e3a8a',
                                        padding: '0.3rem 0.85rem', borderRadius: '999px',
                                        fontSize: '0.82rem', fontWeight: '600',
                                    }}>{app}</span>
                                ))}
                            </div>
                        </div>

                        {/* Right: Specs + CTA */}
                        <div style={{ position: 'sticky', top: '140px' }}>
                            {/* Specs table */}
                            <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' }}>
                                <h3 style={{ color: '#0f2341', fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>Specifications</h3>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <tbody>
                                        {specs.map(({ label, value }, i) => (
                                            <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                                <td style={{ padding: '0.6rem 0.5rem', color: '#6b7280', fontSize: '0.82rem', fontWeight: '600', width: '45%' }}>{label}</td>
                                                <td style={{ padding: '0.6rem 0.5rem', color: '#0f2341', fontSize: '0.85rem', fontWeight: '600' }}>{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* CTA */}
                            <div style={{ background: '#0f2341', borderRadius: '10px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: '700' }}>Enquire Now</h3>
                                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem' }}>Get pricing and availability for your requirement.</p>
                                <Link
                                    href="/contact"
                                    style={{
                                        display: 'block', textAlign: 'center',
                                        padding: '0.7rem', background: '#dc2626',
                                        color: 'white', borderRadius: '5px',
                                        fontWeight: '700', fontSize: '0.875rem', textDecoration: 'none',
                                    }}
                                >
                                    Get a Quote
                                </Link>
                                <Link
                                    href="/contact"
                                    style={{
                                        display: 'block', textAlign: 'center',
                                        padding: '0.7rem', background: 'transparent',
                                        color: 'rgba(255,255,255,0.8)', borderRadius: '5px',
                                        fontWeight: '600', fontSize: '0.875rem', textDecoration: 'none',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                    }}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
