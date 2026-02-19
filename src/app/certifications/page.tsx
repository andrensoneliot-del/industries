import Link from "next/link";
import { Award, Shield, CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Certifications | Airflow Industries",
    description: "Airflow Industries holds ISO 9001, ISO 14001, CE and ISO 8573-1 Class 0 certifications for quality compressed air solutions.",
};

const certs = [
    { id: "iso-9001", name: "ISO 9001:2015", issuer: "Bureau Veritas", validUntil: "2027", description: "Quality Management System ensuring consistent quality in manufacturing processes." },
    { id: "iso-14001", name: "ISO 14001:2015", issuer: "Bureau Veritas", validUntil: "2027", description: "Environmental Management System for sustainable manufacturing practices." },
    { id: "ce-mark", name: "CE Marking", issuer: "European Commission", validUntil: "Ongoing", description: "Conformity marking indicating compliance with EU health, safety and environmental requirements." },
    { id: "iso-8573", name: "ISO 8573-1 Class 0", issuer: "TÜV SÜD", validUntil: "2026", description: "Air quality certification for oil-free compressors — essential for pharmaceutical and food industries." },
];

const qualityFeatures = [
    "100% factory tested before dispatch",
    "Premium grade components sourced globally",
    "Advanced CNC machining for precision",
    "Multi-stage quality inspection process",
    "Comprehensive performance testing",
    "Detailed quality documentation",
    "Traceable component sourcing",
    "Continuous process improvement",
];

export default function CertificationsPage() {
    return (
        <main>
            {/* Page Banner */}
            <div className="page-banner">
                <div className="container">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>›</span>
                            <span style={{ color: '#cc0000', fontSize: '0.8rem' }}>Certifications</span>
                        </div>
                        <h1 style={{ color: 'white', fontSize: 'clamp(1.8rem,3.5vw,2.75rem)', fontWeight: '800', marginBottom: '0.75rem' }}>
                            Certifications &amp; Quality Standards
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '600px' }}>
                            Our commitment to quality is backed by internationally recognized certifications and rigorous quality control.
                        </p>
                    </div>
                </div>
            </div>

            {/* Certifications Grid */}
            <div style={{ background: '#f9fafb', padding: '3rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        {certs.map((cert) => (
                            <div key={cert.id} style={{ background: 'white', borderRadius: '12px', padding: '1.75rem', border: '1px solid #e5e7eb', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{ width: '52px', height: '52px', background: 'rgba(204,0,0,0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Award size={24} style={{ color: '#cc0000' }} />
                                    </div>
                                    <div>
                                        <h3 style={{ color: '#111827', fontSize: '1.05rem', fontWeight: '800', marginBottom: '0.4rem' }}>{cert.name}</h3>
                                        <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>{cert.description}</p>
                                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem' }}>
                                            <span style={{ color: '#6b7280' }}>Issuer: <strong style={{ color: '#374151' }}>{cert.issuer}</strong></span>
                                            <span style={{ color: '#6b7280' }}>Valid: <strong style={{ color: '#16a34a' }}>{cert.validUntil}</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quality Commitment */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', background: 'white', borderRadius: '12px', padding: '2.5rem', border: '1px solid #e5e7eb' }}>
                        <div>
                            <div style={{ width: '40px', height: '4px', background: '#cc0000', borderRadius: '2px', marginBottom: '1.25rem' }} />
                            <h2 style={{ color: '#111827', fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem' }}>Our Quality Commitment</h2>
                            <p style={{ color: '#6b7280', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                                Quality is at the heart of everything we do. From raw material selection to final testing, every step is designed to deliver products that exceed industry standards.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                                {qualityFeatures.map((f) => (
                                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <CheckCircle size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                                        <span style={{ color: '#374151', fontSize: '0.83rem' }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: 'linear-gradient(135deg,#0a1628,#0f2341)', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
                            <Shield size={72} style={{ color: '#cc0000', margin: '0 auto 1rem' }} />
                            <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>Quality Guaranteed</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Every product, every time</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{ background: '#0f2341', padding: '3.5rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                        Request Certification Documents
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
                        Need copies of our certifications for your compliance requirements? Contact us and we'll provide the necessary documentation.
                    </p>
                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#cc0000', color: 'white', padding: '0.75rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>
                        Contact Us <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
