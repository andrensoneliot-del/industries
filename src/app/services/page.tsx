"use client";

import { useState } from "react";
import companiesData from "@/data/companies.json";

export default function ServicesPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", issue: "" });

    return (
        <main>
            <div className="page-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Services</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Expert after-sales service, AMC, spare parts supply, and installation support
                    </p>
                </div>
            </div>

            <section className="section section-light">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start' }}>
                        {/* Services List */}
                        <div>
                            <div className="section-divider-left" />
                            <h2 style={{ color: '#0f2341', marginBottom: '1.5rem' }}>What We Offer</h2>
                            {[
                                { emoji: '🔧', title: 'Compressor Installation', desc: 'Professional installation of air compressors, complete with piping, panel setup, and commissioning.' },
                                { emoji: '🛠️', title: 'Annual Maintenance Contract (AMC)', desc: 'Scheduled preventive maintenance to maximize uptime and compressor life.' },
                                { emoji: '⚡', title: 'Breakdown Service', desc: 'Rapid response emergency repair services for all brands of air compressors.' },
                                { emoji: '📦', title: 'Spare Parts Supply', desc: 'Genuine OEM spare parts for Anest Iwata and Festo products with fast delivery.' },
                                { emoji: '🎓', title: 'Operator Training', desc: 'On-site training for your team on safe compressor operation and basic maintenance.' },
                                { emoji: '📋', title: 'Energy Audit', desc: 'Compressed air system energy audit to identify savings and optimize performance.' },
                            ].map(({ emoji, title, desc }) => (
                                <div key={title} style={{
                                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                                    padding: '1.25rem 0', borderBottom: '1px solid #f3f4f6',
                                }}>
                                    <div style={{ fontSize: '2rem', flexShrink: 0 }}>{emoji}</div>
                                    <div>
                                        <h3 style={{ color: '#0f2341', fontSize: '1rem', fontWeight: '700', marginBottom: '0.3rem' }}>{title}</h3>
                                        <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Service Request Form */}
                        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '2rem' }}>
                            <h2 style={{ color: '#0f2341', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                                Service Request
                            </h2>

                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                    <h3 style={{ color: '#0f2341' }}>Request Received!</h3>
                                    <p style={{ color: '#6b7280' }}>Our service team will contact you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Full Name *</label>
                                        <input required type="text" className="form-input" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Phone *</label>
                                            <input required type="tel" className="form-input" placeholder="+91 98765..." value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Email</label>
                                            <input type="email" className="form-input" placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Product / Model *</label>
                                        <input required type="text" className="form-input" placeholder="e.g. Anest Iwata Screw Compressor 10HP" value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Issue / Requirement *</label>
                                        <textarea required rows={4} className="form-input" placeholder="Describe the issue or service needed..." value={form.issue} onChange={e => setForm({ ...form, issue: e.target.value })} style={{ resize: 'vertical' }} />
                                    </div>
                                    <button type="submit" style={{ padding: '0.75rem', background: '#dc2626', color: 'white', border: 'none', borderRadius: '5px', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer' }}>
                                        Submit Service Request
                                    </button>
                                    <p style={{ color: '#9ca3af', fontSize: '0.78rem', textAlign: 'center', margin: 0 }}>
                                        Or call us directly: <a href={`tel:${companiesData.parent.customerService}`} style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none' }}>{companiesData.parent.customerService}</a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
