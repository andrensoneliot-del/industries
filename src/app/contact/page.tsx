"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import companiesData from "@/data/companies.json";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "", email: "", phone: "", company: "", subject: "", message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main>
            {/* Banner */}
            <div className="page-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ color: 'white', marginBottom: '0.5rem' }}>Get In Touch</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                        We would love to hear from you. Reach out for product enquiries, quotes, or service requests.
                    </p>
                </div>
            </div>

            {/* Contact Cards */}
            <section className="section section-gray">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        {[
                            {
                                Icon: Phone,
                                title: 'Office Phone',
                                lines: [companiesData.parent.phone, companiesData.parent.phoneAlt],
                                href: `tel:${companiesData.parent.phone}`,
                            },
                            {
                                Icon: Phone,
                                title: 'Customer Service',
                                lines: [companiesData.parent.customerService, `Sales: ${companiesData.parent.sales}`],
                                href: `tel:${companiesData.parent.customerService}`,
                            },
                            {
                                Icon: Mail,
                                title: 'Email Us',
                                lines: [companiesData.parent.email],
                                href: `mailto:${companiesData.parent.email}`,
                            },
                            {
                                Icon: MapPin,
                                title: 'Our Office',
                                lines: [companiesData.parent.address],
                                href: '#map',
                            },
                            {
                                Icon: Clock,
                                title: 'Business Hours',
                                lines: ['Mon – Sat: 9:30 AM – 6:30 PM', 'Sunday: Closed'],
                                href: null,
                            },
                        ].map(({ Icon, title, lines, href }) => (
                            <div
                                key={title}
                                style={{
                                    background: 'white', border: '1px solid #e5e7eb',
                                    borderRadius: '10px', padding: '1.5rem',
                                    borderTop: '3px solid #1e3a8a',
                                }}
                            >
                                <Icon size={22} style={{ color: '#0ea5e9', marginBottom: '0.75rem' }} />
                                <div style={{ color: '#0f2341', fontWeight: '700', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{title}</div>
                                {lines.map((line, i) => href && i === 0 ? (
                                    <a key={i} href={href} style={{ display: 'block', color: '#6b7280', fontSize: '0.85rem', textDecoration: 'none' }}>{line}</a>
                                ) : (
                                    <p key={i} style={{ color: '#6b7280', fontSize: '0.85rem', margin: 0 }}>{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Form + Map row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {/* Contact Form */}
                        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '2rem' }}>
                            <h2 style={{ color: '#0f2341', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                                Message Us
                            </h2>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                    <h3 style={{ color: '#0f2341' }}>Thank You!</h3>
                                    <p style={{ color: '#6b7280' }}>Your enquiry has been received. We will get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Full Name *</label>
                                            <input
                                                required type="text" className="form-input"
                                                placeholder="Your full name"
                                                value={form.name}
                                                onChange={e => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Phone Number *</label>
                                            <input
                                                required type="tel" className="form-input"
                                                placeholder="+91 98765..."
                                                value={form.phone}
                                                onChange={e => setForm({ ...form, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Email Address</label>
                                        <input
                                            type="email" className="form-input"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={e => setForm({ ...form, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Company / Organisation</label>
                                        <input
                                            type="text" className="form-input"
                                            placeholder="Your company name"
                                            value={form.company}
                                            onChange={e => setForm({ ...form, company: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Subject *</label>
                                        <select
                                            required className="form-input"
                                            value={form.subject}
                                            onChange={e => setForm({ ...form, subject: e.target.value })}
                                        >
                                            <option value="">Select a subject</option>
                                            <option>Product Enquiry</option>
                                            <option>Price Quote</option>
                                            <option>Service Request</option>
                                            <option>Spare Parts</option>
                                            <option>General Enquiry</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', color: '#374151', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.4rem' }}>Message *</label>
                                        <textarea
                                            required rows={4} className="form-input"
                                            placeholder="Describe your requirement..."
                                            value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                            style={{ resize: 'vertical' }}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        style={{
                                            padding: '0.75rem 2rem', background: '#dc2626',
                                            color: 'white', border: 'none', borderRadius: '5px',
                                            fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer',
                                        }}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Map Placeholder */}
                        <div id="map">
                            <div style={{
                                background: 'linear-gradient(135deg, #0f2341 0%, #1e3a8a 100%)',
                                borderRadius: '12px', overflow: 'hidden', height: '100%', minHeight: '400px',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                gap: '1rem', padding: '2rem',
                            }}>
                                <div style={{ fontSize: '4rem' }}>📍</div>
                                <h3 style={{ color: 'white', textAlign: 'center' }}>Airflow Industries</h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', fontSize: '0.9rem' }}>
                                    {companiesData.parent.address}
                                </p>
                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(companiesData.parent.address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        marginTop: '0.5rem', padding: '0.6rem 1.5rem',
                                        background: '#dc2626', color: 'white', borderRadius: '5px',
                                        textDecoration: 'none', fontWeight: '600', fontSize: '0.85rem',
                                    }}
                                >
                                    Open in Google Maps
                                </a>

                                {/* Branch office */}
                                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.15)', width: '100%', textAlign: 'center' }}>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Branch Office</p>
                                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{companiesData.parent.addressBranch}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
