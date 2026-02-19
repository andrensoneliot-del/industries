import Link from "next/link";

const customers = [
    "Bajaj Auto", "Tata Motors", "Mahindra", "ONGC", "Reliance Industries",
    "Sun Pharma", "Cipla", "Dr. Reddy's", "Asian Paints", "Berger Paints",
    "Gujarat Glass", "Hindustan Coca-Cola", "Nestlé India", "ITC Ltd", "Marico",
];

export default function ClientsCarousel() {
    const doubled = [...customers, ...customers];

    return (
        <section style={{ background: '#f9fafb', padding: '4rem 0' }}>
            <div className="container" style={{ marginBottom: '2.5rem' }}>
                <div className="section-header">
                    <div className="section-divider" />
                    <h2 style={{ color: '#0f2341', marginBottom: '0.75rem' }}>Our Customers</h2>
                    <p style={{ color: '#6b7280' }}>
                        Trusted by leading companies across India for reliable compressed air solutions.
                    </p>
                </div>
            </div>

            {/* Marquee */}
            <div style={{ overflow: 'hidden', padding: '0.5rem 0' }}>
                <div style={{ display: 'flex', gap: '1.5rem', width: 'max-content' }} className="animate-marquee">
                    {doubled.map((customer, i) => (
                        <div
                            key={i}
                            style={{
                                background: 'white',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                padding: '0.75rem 1.5rem',
                                whiteSpace: 'nowrap',
                                color: '#374151',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                            }}
                        >
                            {customer}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <Link
                    href="/contact"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: '#dc2626', color: 'white',
                        padding: '0.75rem 2rem', borderRadius: '5px',
                        fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none',
                    }}
                >
                    Get a Quick Quote
                </Link>
            </div>
        </section>
    );
}
