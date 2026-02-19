"use client";

const galleryItems = [
    { id: 1, label: "Reciprocating Compressor – Automotive Plant", emoji: "🏭" },
    { id: 2, label: "Screw Compressor – Textile Mill", emoji: "🏗️" },
    { id: 3, label: "Oil-Free System – Pharmaceutical Unit", emoji: "💊" },
    { id: 4, label: "Vacuum Pump – Medical Hospital", emoji: "🏥" },
    { id: 5, label: "Industrial Setup – Food Processing", emoji: "🍽️" },
    { id: 6, label: "Compressor Room – Packaging Plant", emoji: "📦" },
];

export default function InstallationsGallery() {
    return (
        <section className="section section-light">
            <div className="container">
                <div className="section-header">
                    <div className="section-divider" />
                    <h2 style={{ color: '#0f2341', marginBottom: '0.75rem' }}>Installations</h2>
                    <p style={{ color: '#6b7280' }}>
                        A glimpse of our successful installations across various industries in Mumbai and across India.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                background: 'linear-gradient(135deg, #0f2341 0%, #1e3a8a 100%)',
                                borderRadius: '12px',
                                aspectRatio: '4/3',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                cursor: 'pointer',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                position: 'relative',
                                overflow: 'hidden',
                                padding: '1.5rem',
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 30px rgba(14,165,233,0.2)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                        >
                            {/* Background pattern */}
                            <div style={{
                                position: 'absolute', inset: 0, opacity: 0.1,
                                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(56,189,248,0.5) 1px, transparent 0)',
                                backgroundSize: '30px 30px',
                            }} />
                            <div style={{ fontSize: '3.5rem', zIndex: 1 }}>{item.emoji}</div>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', textAlign: 'center', zIndex: 1, lineHeight: 1.4 }}>
                                {item.label}
                            </p>
                            <div style={{ zIndex: 1, background: 'rgba(56,189,248,0.2)', border: '1px solid rgba(56,189,248,0.3)', color: '#7dd3fc', fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '999px', fontWeight: '600' }}>
                                Installed
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
