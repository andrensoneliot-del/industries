import Link from "next/link";
import type { Metadata } from "next";
import industriesData from "@/data/industries.json";

export const metadata: Metadata = {
    title: "Industries Served | Airflow Industries",
    description: "Airflow Industries provides industrial compressed air solutions for automotive, medical, food & beverage, chemical, packaging, textile, pharmaceutical, glass, iron & steel, shipping, and pet bottling industries.",
};

export default function IndustriesPage() {
    return (
        <main>
            <div className="page-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Industries We Serve</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Specialized compressed air solutions for 11 key industrial sectors
                    </p>
                </div>
            </div>

            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        {industriesData.map((industry) => (
                            <Link key={industry.id} href={industry.href} style={{ textDecoration: 'none' }}>
                                <div className="industry-card">
                                    <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{industry.icon}</div>
                                    <h3 style={{ color: '#0f2341', fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                                        {industry.name}
                                    </h3>
                                    <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                                        {industry.description}
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
