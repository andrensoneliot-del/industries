import Link from "next/link";
import industriesData from "@/data/industries.json";

export default function IndustriesGrid() {
    return (
        <section className="section section-gray">
            <div className="container">
                <div className="section-header">
                    <div className="section-divider" />
                    <h2 style={{ color: '#0f2341', marginBottom: '0.75rem' }}>Industries We Serve</h2>
                    <p style={{ color: '#6b7280' }}>
                        We provide specialized compressed air solutions across a wide range of industries,
                        ensuring reliability and efficiency for every application.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.25rem' }}>
                    {industriesData.map((industry) => (
                        <Link key={industry.id} href={industry.href} style={{ textDecoration: 'none' }}>
                            <div className="industry-card" style={{ padding: '1.5rem 1rem' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{industry.icon}</div>
                                <h3 style={{ color: '#0f2341', fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                                    {industry.name}
                                </h3>
                                <p style={{ color: '#6b7280', fontSize: '0.78rem', lineHeight: 1.5, margin: 0 }}>
                                    {industry.description.split('.')[0]}.
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
