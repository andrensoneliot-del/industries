"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => { setIsVisible(true); }, []);

    return (
        <section
            className="hero-section hero-pattern"
            style={{ padding: '5rem 0 4.5rem', minHeight: '480px' }}
        >
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

                    {/* Left: Text Content */}
                    <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
                        {/* Eyebrow label */}
                        <div style={{
                            display: 'inline-block', background: '#cc0000',
                            color: 'white', fontSize: '0.72rem', fontWeight: '700',
                            textTransform: 'uppercase', letterSpacing: '1px',
                            padding: '0.3rem 0.85rem', borderRadius: '3px', marginBottom: '1.25rem',
                        }}>
                            Authorized Distributor · Anest Iwata &amp; Festo
                        </div>

                        <h1 style={{
                            color: 'white', fontSize: 'clamp(2rem,4vw,2.85rem)',
                            fontWeight: '700', lineHeight: 1.2, marginBottom: '1.1rem',
                            fontFamily: 'Roboto, sans-serif',
                        }}>
                            Industrial Air<br />
                            <span style={{ color: '#cc0000' }}>Compressor Solutions</span>
                        </h1>

                        <p style={{
                            color: 'rgba(255,255,255,0.8)', fontSize: '0.97rem',
                            lineHeight: 1.8, marginBottom: '2rem', maxWidth: '480px',
                            fontWeight: '300',
                        }}>
                            Leading supplier &amp; distributor of industrial air compressors in Mumbai.
                            From reciprocating to screw compressors, oil-free systems to vacuum pumps —
                            we deliver reliable compressed air solutions for every industry.
                        </p>

                        {/* CTA Buttons — bimpex style */}
                        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
                            <Link
                                href="/contact"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    background: '#cc0000', color: 'white',
                                    padding: '0.7rem 1.75rem', borderRadius: '4px',
                                    fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none',
                                    textTransform: 'uppercase', letterSpacing: '0.5px',
                                    transition: 'background 0.2s',
                                    border: '2px solid #cc0000',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = '#aa0000')}
                                onMouseLeave={e => (e.currentTarget.style.background = '#cc0000')}
                            >
                                Get a Quote <ArrowRight size={15} />
                            </Link>
                            <Link
                                href="/products"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'transparent', color: 'white',
                                    padding: '0.7rem 1.75rem', borderRadius: '4px',
                                    fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none',
                                    border: '2px solid rgba(255,255,255,0.5)',
                                    textTransform: 'uppercase', letterSpacing: '0.5px',
                                    transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'white'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                            >
                                Our Products
                            </Link>
                        </div>

                        {/* Contact info strip */}
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                            <a href="tel:+919323464837" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.83rem' }}>
                                <Phone size={13} style={{ color: '#cc0000' }} />
                                Customer: +91-93234 64837
                            </a>
                            <a href="tel:+918104680015" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.83rem' }}>
                                <Phone size={13} style={{ color: '#cc0000' }} />
                                Sales: +91 81046 80015
                            </a>
                        </div>
                    </div>

                    {/* Right: Product Visual Card */}
                    <div className={isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'} style={{ position: 'relative' }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.07)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderLeft: '3px solid #cc0000',
                            borderRadius: '8px', padding: '2.5rem 2rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            minHeight: '320px', flexDirection: 'column', gap: '1.25rem',
                        }}>
                            {/* SVG compressor icon */}
                            <svg width="180" height="160" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="100" cy="140" rx="60" ry="18" fill="rgba(204,0,0,0.1)" />
                                <rect x="40" y="70" width="120" height="70" rx="8" fill="rgba(26,39,68,0.85)" stroke="#cc0000" strokeWidth="1.5" />
                                <rect x="55" y="135" width="10" height="25" rx="3" fill="#1a2744" />
                                <rect x="135" y="135" width="10" height="25" rx="3" fill="#1a2744" />
                                <rect x="60" y="30" width="80" height="48" rx="6" fill="rgba(204,0,0,0.2)" stroke="#cc0000" strokeWidth="1.5" />
                                <circle cx="100" cy="54" r="17" fill="rgba(26,39,68,0.9)" stroke="#cc0000" strokeWidth="2" />
                                <circle cx="100" cy="54" r="9" fill="#cc0000" />
                                <rect x="148" y="85" width="22" height="7" rx="3" fill="#cc0000" />
                                <rect x="166" y="76" width="7" height="25" rx="3" fill="#cc0000" />
                                <circle cx="75" cy="105" r="9" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                                <line x1="75" y1="100" x2="75" y2="105" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                            </svg>

                            {/* Stats chips */}
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {[
                                    { label: '35+ Years', sub: 'Experience' },
                                    { label: '1000+', sub: 'Installations' },
                                    { label: '11', sub: 'Industries' },
                                ].map(({ label, sub }) => (
                                    <div key={label} style={{
                                        background: 'rgba(204,0,0,0.15)', border: '1px solid rgba(204,0,0,0.3)',
                                        borderRadius: '5px', padding: '0.45rem 1rem', textAlign: 'center',
                                    }}>
                                        <div style={{ color: 'white', fontWeight: '700', fontSize: '0.95rem' }}>{label}</div>
                                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="animate-float" style={{
                            position: 'absolute', top: '-14px', right: '-14px',
                            background: 'white', borderRadius: '8px', padding: '0.65rem 0.9rem',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                        }}>
                            <div style={{ width: '30px', height: '30px', background: '#fff1f0', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>⚡</div>
                            <div>
                                <div style={{ color: '#1a2744', fontWeight: '700', fontSize: '0.82rem', fontFamily: 'Roboto, sans-serif' }}>Energy Efficient</div>
                                <div style={{ color: '#888', fontSize: '0.68rem' }}>Up to 35% savings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
