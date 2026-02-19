import Link from "next/link";
import { Quote, Star, ArrowRight, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Airflow Industries",
    description: "See how leading companies transformed their operations with Airflow Industries compressed air solutions.",
};

const caseStudies = [
    {
        id: 1,
        client: "Tata Steel",
        industry: "Iron & Steel",
        challenge: "Required high-capacity compressed air for blast furnace operations with 24/7 reliability.",
        solution: "Installed 5 units of 100HP Variable Speed Screw Compressors with redundancy design.",
        results: ["35% reduction in energy costs", "Zero unplanned downtime in 2 years", "ROI achieved in 18 months"],
        testimonial: "AirFlow's VSD compressors have transformed our compressed air system. The energy savings alone justified the investment.",
        author: "Rajesh Kumar", role: "Plant Manager",
    },
    {
        id: 2,
        client: "Cipla Pharmaceuticals",
        industry: "Pharmaceutical",
        challenge: "Needed Class 0 oil-free air for drug manufacturing to meet FDA compliance requirements.",
        solution: "Deployed oil-free scroll compressors with multi-stage filtration and drying systems.",
        results: ["ISO 8573-1 Class 0 compliance", "FDA audit passed", "50% quieter operation"],
        testimonial: "For pharmaceutical manufacturing, air quality is non-negotiable. AirFlow delivered exactly what we needed.",
        author: "Dr. Priya Sharma", role: "Quality Director",
    },
    {
        id: 3,
        client: "Bajaj Auto",
        industry: "Automotive",
        challenge: "Multiple production lines needed centralized compressed air with varying pressure requirements.",
        solution: "Designed a centralized system with zone-based pressure regulation and smart controls.",
        results: ["20% improvement in uptime", "Centralized monitoring", "Reduced maintenance costs"],
        testimonial: "The smart monitoring system gives us complete visibility into our compressed air network.",
        author: "Amit Patel", role: "Operations Head",
    },
    {
        id: 4,
        client: "Asian Paints",
        industry: "Chemical",
        challenge: "Required precise pressure control for paint mixing operations with variable demand patterns.",
        solution: "VSD compressors with IoT-enabled monitoring and predictive maintenance capabilities.",
        results: ["35% energy savings", "Real-time monitoring", "Predictive maintenance alerts"],
        testimonial: "The variable speed technology adapts perfectly to our fluctuating demand patterns.",
        author: "Sunita Reddy", role: "Technical Manager",
    },
];

export default function CaseStudiesPage() {
    return (
        <main>
            {/* Page Banner */}
            <div className="page-banner">
                <div className="container">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>›</span>
                            <span style={{ color: '#cc0000', fontSize: '0.8rem' }}>Case Studies</span>
                        </div>
                        <h1 style={{ color: 'white', fontSize: 'clamp(1.8rem,3.5vw,2.75rem)', fontWeight: '800', marginBottom: '0.75rem' }}>
                            Case Studies &amp; Testimonials
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '600px' }}>
                            See how leading companies across industries have transformed their operations with our compressed air solutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Case Studies */}
            <div style={{ background: '#f9fafb', padding: '3rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {caseStudies.map((study, index) => (
                            <div key={study.id} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', display: 'grid', gridTemplateColumns: '1fr 320px' }}>
                                {/* Main Content */}
                                <div style={{ padding: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <div style={{ width: '48px', height: '48px', background: 'rgba(204,0,0,0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Building2 size={22} style={{ color: '#cc0000' }} />
                                        </div>
                                        <div>
                                            <h3 style={{ color: '#111827', fontSize: '1.15rem', fontWeight: '800' }}>{study.client}</h3>
                                            <span style={{ display: 'inline-block', background: 'rgba(204,0,0,0.08)', color: '#cc0000', fontSize: '0.72rem', fontWeight: '600', padding: '0.2rem 0.65rem', borderRadius: '999px' }}>{study.industry}</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                        <div>
                                            <h4 style={{ color: '#374151', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>Challenge</h4>
                                            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6 }}>{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 style={{ color: '#374151', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>Solution</h4>
                                            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6 }}>{study.solution}</p>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '1.25rem' }}>
                                        <h4 style={{ color: '#374151', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>Results</h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {study.results.map((r) => (
                                                <span key={r} style={{ background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0', fontSize: '0.78rem', fontWeight: '600', padding: '0.25rem 0.7rem', borderRadius: '999px' }}>{r}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div style={{ background: '#0f2341', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Quote size={28} style={{ color: '#cc0000', marginBottom: '1rem' }} />
                                    <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                                        &ldquo;{study.testimonial}&rdquo;
                                    </p>
                                    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} style={{ color: '#fbbf24', fill: '#fbbf24' }} />)}
                                    </div>
                                    <p style={{ color: 'white', fontWeight: '700', fontSize: '0.9rem' }}>{study.author}</p>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{study.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{ background: '#0f2341', padding: '3.5rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                        Ready to Write Your Success Story?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
                        Join hundreds of satisfied customers who have transformed their operations with our compressed air solutions.
                    </p>
                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#cc0000', color: 'white', padding: '0.75rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>
                        Start Your Project <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
