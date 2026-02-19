import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Airflow Industries",
    description: "Learn about Airflow Industries – Mumbai's trusted supplier of Anest Iwata compressors and Festo pneumatic equipment since 1990.",
};

export default function AboutPage() {
    return (
        <main>
            {/* Banner */}
            <div className="page-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>About Us</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>
                        Airflow Industries &mdash; Powering Industries Since 1990
                    </p>
                </div>
            </div>

            {/* Mission / Vision / Commitment */}
            <section className="section section-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div className="section-divider" />
                        <h2 style={{ color: '#0f2341', marginBottom: '0.75rem' }}>Who We Are</h2>
                        <p style={{ color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
                            Airflow Industries is a leading authorized distributor of Anest Iwata air compressors and
                            Festo pneumatic products, serving businesses across Mumbai and India since 1990. We specialise
                            in supplying, installing, and servicing the complete range of industrial compressed air equipment.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                emoji: '🎯',
                                title: 'Our Mission',
                                text: 'To be leaders in our field by consistently delivering superior compressed air and pneumatic solutions, backed by expert service and unwavering commitment to customer satisfaction.',
                            },
                            {
                                emoji: '🔭',
                                title: 'Our Vision',
                                text: 'To make industrial air compressors and pneumatics readily available, affordable, and dependable for every business in India — from small workshops to large manufacturing plants.',
                            },
                            {
                                emoji: '🤝',
                                title: 'Our Commitment',
                                text: 'Provide our customers with best-in-class equipment from globally trusted brands, backed by prompt after-sales services, genuine spare parts, and trained technical support.',
                            },
                        ].map(({ emoji, title, text }) => (
                            <div
                                key={title}
                                style={{
                                    background: '#f9fafb',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '12px',
                                    padding: '2rem 1.5rem',
                                    borderTop: '4px solid #1e3a8a',
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{emoji}</div>
                                <h3 style={{ color: '#0f2341', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                                    {title}
                                </h3>
                                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Partners */}
            <section className="section section-gray">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div className="section-divider" />
                        <h2 style={{ color: '#0f2341', marginBottom: '0.75rem' }}>Our Brand Partners</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                name: 'Anest Iwata',
                                tag: 'Authorized Distributor',
                                emoji: '🏭',
                                points: [
                                    'Made in India, exported to Japan & USA',
                                    'Designed for highest level of Safety',
                                    'Energy Efficient & Low Noise',
                                    'Highest Durability with global spare support',
                                ],
                                href: '/anest-iwata-distributor',
                            },
                            {
                                name: 'Festo',
                                tag: 'Pneumatics & Automation',
                                emoji: '🔬',
                                points: [
                                    'Pneumatic & electrical control systems',
                                    'Present in over 60 countries',
                                    'Consistent innovation in automation',
                                    'Best-in-class energy efficiency',
                                ],
                                href: '/festo',
                            },
                        ].map((brand) => (
                            <div
                                key={brand.name}
                                style={{
                                    background: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '12px',
                                    padding: '2rem',
                                    display: 'flex', flexDirection: 'column', gap: '1rem',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ fontSize: '2.5rem' }}>{brand.emoji}</div>
                                    <div>
                                        <div style={{ color: '#0f2341', fontWeight: '800', fontSize: '1.25rem' }}>{brand.name}</div>
                                        <div style={{ color: '#0ea5e9', fontSize: '0.8rem', fontWeight: '600' }}>{brand.tag}</div>
                                    </div>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {brand.points.map((p, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: '#4b5563', fontSize: '0.875rem' }}>
                                            <span style={{ color: '#0ea5e9', fontWeight: '700', flexShrink: 0 }}>✓</span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={brand.href}
                                    style={{
                                        display: 'inline-block', marginTop: '0.5rem',
                                        padding: '0.6rem 1.5rem', background: '#0f2341',
                                        color: 'white', borderRadius: '5px', fontWeight: '600',
                                        fontSize: '0.85rem', textDecoration: 'none', alignSelf: 'flex-start',
                                    }}
                                >
                                    View Products
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Events */}
            <section className="section section-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div className="section-divider" />
                        <h2 style={{ color: '#0f2341', marginBottom: '0.75rem' }}>Company Events</h2>
                        <p style={{ color: '#6b7280' }}>Highlights from our exhibitions, trade shows, and training programs.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
                        {[
                            { emoji: '🎪', label: 'EXCON Trade Show 2024', sub: 'Mumbai Exhibition Centre' },
                            { emoji: '🤝', label: 'Anest Iwata Distributor Meet', sub: 'Annual Conference 2023' },
                            { emoji: '🎓', label: 'Customer Training Program', sub: 'Compressor Maintenance Workshop' },
                            { emoji: '🏆', label: 'Best Distributor Award', sub: 'Anest Iwata Annual Awards 2022' },
                        ].map(item => (
                            <div
                                key={item.label}
                                style={{
                                    background: 'linear-gradient(135deg, #0f2341 0%, #1e3a8a 100%)',
                                    borderRadius: '12px', padding: '2rem 1.5rem',
                                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                                    textAlign: 'center', gap: '0.75rem',
                                }}
                            >
                                <div style={{ fontSize: '3rem' }}>{item.emoji}</div>
                                <div style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem' }}>{item.label}</div>
                                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>{item.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
