"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import companiesData from "@/data/companies.json";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

const productLinks = [
    { name: "Reciprocating Air Compressor", href: "/reciprocating-air-compressor" },
    { name: "Oil Free Reciprocating Air Compressors", href: "/oil-free-reciprocating-air-compressors" },
    { name: "Screw Air Compressors", href: "/screw-air-compressors" },
    { name: "Scroll Oil Free Air Compressor", href: "/scroll-oil-free-air-compressor" },
    { name: "Vacuum Pump", href: "/vacuum-pump" },
    { name: "Spares, Consumables & Accessories", href: "/spares-consumables-accessories" },
    { name: "Pneumatic Grease Pumps", href: "/pneumatic-grease-pump" },
    { name: "Festo", href: "/festo" },
    { name: "Anest Iwata Distributor", href: "/anest-iwata-distributor" },
];

export default function Footer() {
    return (
        <footer className="footer">
            {/* Main footer grid */}
            <div className="container" style={{ paddingTop: '3.5rem', paddingBottom: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>

                    {/* Col 1: Logo + Official Info */}
                    <div>
                        {/* Logo */}
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
                            <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #1e3a8a, #0ea5e9)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1rem', flexShrink: 0 }}>
                                AI
                            </div>
                            <span style={{ color: 'white', fontWeight: '700', fontSize: '1.05rem', lineHeight: 1.2 }}>Airflow Industries</span>
                        </Link>

                        <h4 style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: '600' }}>
                            Official Info
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>
                                <MapPin size={14} style={{ flexShrink: 0, marginTop: '2px', color: '#38bdf8' }} />
                                <span>{companiesData.parent.address}</span>
                            </div>
                            <a href={`tel:${companiesData.parent.phone}`} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', textDecoration: 'none' }}>
                                <Phone size={13} style={{ color: '#38bdf8', flexShrink: 0 }} />
                                <span>{companiesData.parent.phone}</span>
                            </a>
                            <a href={`tel:${companiesData.parent.phoneAlt}`} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', textDecoration: 'none' }}>
                                <Phone size={13} style={{ color: '#38bdf8', flexShrink: 0 }} />
                                <span>{companiesData.parent.phoneAlt}</span>
                            </a>
                            <a href={`mailto:${companiesData.parent.email}`} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', textDecoration: 'none' }}>
                                <Mail size={13} style={{ color: '#38bdf8', flexShrink: 0 }} />
                                <span>{companiesData.parent.email}</span>
                            </a>
                        </div>

                        <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Customer Service No.</p>
                            <a href={`tel:${companiesData.parent.customerService}`} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', textDecoration: 'none' }}>
                                {companiesData.parent.customerService}
                            </a>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', margin: '0.4rem 0 0.25rem' }}>Sales No.</p>
                            <a href={`tel:${companiesData.parent.sales}`} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', textDecoration: 'none' }}>
                                {companiesData.parent.sales}
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="footer-link">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Our Products */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>Our Products</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="footer-link">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Follow Us + Newsletter */}
                    <div>
                        <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '700', marginBottom: '1rem' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            {[
                                { Icon: Facebook, href: '#', label: 'Facebook' },
                                { Icon: Twitter, href: '#', label: 'Twitter' },
                                { Icon: Instagram, href: '#', label: 'Instagram' },
                                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    style={{
                                        width: '36px', height: '36px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '6px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'rgba(255,255,255,0.7)',
                                        transition: 'all 0.2s',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#cc0000'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>

                        <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem' }}>Newsletter</h4>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                            Subscribe for updates on new products and services.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="email"
                                placeholder="Your email"
                                style={{
                                    flex: 1,
                                    padding: '0.55rem 0.75rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '4px',
                                    color: 'white',
                                    fontSize: '0.82rem',
                                }}
                            />
                            <button style={{
                                padding: '0.55rem 0.875rem',
                                background: '#0ea5e9',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                fontWeight: '600',
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                            }}>
                                Subscribe
                            </button>
                        </div>

                        {/* Get a Quote button */}
                        <div style={{ marginTop: '1.5rem' }}>
                            <Link
                                href="/contact"
                                style={{
                                    display: 'inline-block',
                                    padding: '0.65rem 1.5rem',
                                    background: '#cc0000',
                                    color: 'white',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.875rem',
                                }}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ paddingTop: '1.5rem', textAlign: 'center' }}>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', margin: 0 }}>
                        Copyright © {new Date().getFullYear()} All Rights Reserved | Airflow Industries
                    </p>
                </div>
            </div>
        </footer>
    );
}
