"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import companiesData from "@/data/companies.json";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Products",
        href: "/products",
        children: [
            {
                heading: "Products By Category",
                items: [
                    { name: "Reciprocating Air Compressors", href: "/reciprocating-air-compressor" },
                    { name: "Oil Free Reciprocating Air Compressors", href: "/oil-free-reciprocating-air-compressors" },
                    { name: "Screw Air Compressors", href: "/screw-air-compressors" },
                    { name: "Scroll Oil Free Air Compressor", href: "/scroll-oil-free-air-compressor" },
                    { name: "Vacuum Pump", href: "/vacuum-pump" },
                    { name: "Spares, Consumables & Accessories", href: "/spares-consumables-accessories" },
                    { name: "Pneumatic Grease Pumps", href: "/pneumatic-grease-pump" },
                    { name: "Car Washer Pump", href: "/car-washer-pump" },
                ],
            },
            {
                heading: "Brands",
                items: [
                    { name: "Anest Iwata", href: "/anest-iwata-distributor" },
                    { name: "Festo", href: "/festo" },
                ],
            },
        ],
    },
    {
        name: "Industries",
        href: "/industries",
        children: [
            {
                heading: "Industries We Serve",
                items: [
                    { name: "Automotive Industry", href: "/industries/automotive-industry" },
                    { name: "Medical Industry", href: "/industries/medical-industry" },
                    { name: "Food And Beverage Industry", href: "/industries/food-and-beverage-industry" },
                    { name: "Chemical Industry", href: "/industries/chemical-industry" },
                    { name: "Packaging Industry", href: "/industries/packaging-industry" },
                    { name: "Textile Industry", href: "/industries/textile-industry" },
                    { name: "Pharmaceutical Industry", href: "/industries/pharmaceutical-industry" },
                    { name: "Glass Industry", href: "/industries/glass-industry" },
                    { name: "Iron And Steel Industry", href: "/industries/iron-and-steel-industry" },
                    { name: "Shipping Industry", href: "/industries/shipping-industry" },
                    { name: "Pet Bottling Industry", href: "/industries/pet-bottling-industry" },
                ],
            },
        ],
    },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

type NavItem = typeof navigation[number];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    return (
        <header className="fixed top-0 left-0 right-0" style={{ zIndex: 1000 }}>

            {/* ===== ROW 1: Top Bar — RED like bimpex ===== */}
            <div style={{ backgroundColor: '#cc0000', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '38px' }}>
                        {/* Left: contact info */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <a href={`mailto:${companiesData.parent.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.78rem', textDecoration: 'none' }}>
                                <Mail size={12} />
                                <span>Email: {companiesData.parent.email}</span>
                            </a>
                            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>|</span>
                            <a href={`tel:${companiesData.parent.customerService}`} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.78rem', textDecoration: 'none' }}>
                                <Phone size={12} />
                                <span>Customer Service No. {companiesData.parent.customerService}</span>
                            </a>
                            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }} className="hidden md:inline">|</span>
                            <a href={`tel:${companiesData.parent.sales}`} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.9)', fontSize: '0.78rem', textDecoration: 'none' }} className="hidden md:flex">
                                <Phone size={12} />
                                <span>Sales No. {companiesData.parent.sales}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== ROW 2: Logo Bar — WHITE ===== */}
            <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                        {/* Logo */}
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                            <div style={{ width: '46px', height: '46px', background: 'linear-gradient(135deg, #cc0000, #ff3333)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1rem', flexShrink: 0 }}>
                                AI
                            </div>
                            <div>
                                <div style={{ color: '#111', fontSize: '1.2rem', fontWeight: '900', lineHeight: 1.2, letterSpacing: '-0.01em', fontFamily: 'Roboto, sans-serif' }}>Airflow Industries</div>
                                <div style={{ color: '#888', fontSize: '0.66rem', letterSpacing: '0.07em', textTransform: 'uppercase', fontFamily: 'Roboto, sans-serif' }}>Powering Industries Since 1990</div>
                            </div>
                        </Link>

                        {/* Desktop: Get a Quote in logo row */}
                        <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '1rem' }}>
                            <Link
                                href="/contact"
                                style={{
                                    backgroundColor: '#cc0000', color: 'white',
                                    fontSize: '0.82rem', fontWeight: '700',
                                    padding: '0.5rem 1.4rem', borderRadius: '4px',
                                    textDecoration: 'none', letterSpacing: '0.02em',
                                    border: '2px solid #cc0000',
                                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                                }}
                            >
                                GET A QUOTE ↗
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden"
                            style={{ padding: '0.5rem', color: '#111827', background: 'none', border: 'none', cursor: 'pointer' }}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ===== ROW 3: Navigation Bar — Dark Navy ===== */}
            <nav className="hidden lg:block" style={{ backgroundColor: '#1a2744', borderBottom: '3px solid #cc0000' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        {navigation.map((item: NavItem) => (
                            <div
                                key={item.name}
                                style={{ position: 'relative' }}
                                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.2rem',
                                        padding: '0 0.9rem', height: '50px',
                                        color: 'rgba(255,255,255,0.92)', fontSize: '0.8rem',
                                        fontWeight: '600', textDecoration: 'none',
                                        textTransform: 'uppercase', letterSpacing: '0.5px',
                                        borderBottom: activeDropdown === item.name ? '3px solid #cc0000' : '3px solid transparent',
                                        transition: 'all 0.15s ease',
                                        fontFamily: 'Roboto, sans-serif',
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#cc0000'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.92)'; }}
                                >
                                    {item.name}
                                    {item.children && <ChevronDown size={13} style={{ opacity: 0.6 }} />}
                                </Link>

                                {/* Dropdown */}
                                {item.children && activeDropdown === item.name && (
                                    <div style={{
                                        position: 'absolute', top: '100%', left: 0,
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderTop: '2px solid #cc0000',
                                        borderRadius: '0 0 6px 6px',
                                        padding: '1rem',
                                        minWidth: '280px',
                                        zIndex: 100,
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                                        display: 'flex', gap: '1.5rem',
                                    }}>
                                        {'children' in item && item.children && Array.isArray(item.children) && (item.children as Array<{ heading: string; items: Array<{ name: string; href: string }> }>).map((group) => (
                                            <div key={group.heading}>
                                                <div style={{ fontSize: '0.68rem', fontWeight: '700', color: '#cc0000', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', paddingBottom: '0.4rem', borderBottom: '1px solid #f3f4f6' }}>
                                                    {group.heading}
                                                </div>
                                                {group.items.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        style={{ display: 'block', padding: '0.35rem 0.5rem', color: '#374151', fontSize: '0.83rem', textDecoration: 'none', borderRadius: '4px', transition: 'all 0.15s' }}
                                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#fff1f0'; (e.currentTarget as HTMLElement).style.color = '#cc0000'; }}
                                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ===== Mobile Menu ===== */}
            {mobileMenuOpen && (
                <div className="lg:hidden" style={{ backgroundColor: '#1a2744', borderBottom: '3px solid #cc0000', maxHeight: '80vh', overflowY: 'auto', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
                    <div className="container" style={{ paddingTop: '0.5rem', paddingBottom: '1rem' }}>
                        {navigation.map((item: NavItem) => (
                            <div key={item.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Link
                                        href={item.href}
                                        onClick={() => !item.children && setMobileMenuOpen(false)}
                                        style={{ flex: 1, display: 'block', padding: '0.875rem 0', color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children && (
                                        <button
                                            onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                                            style={{ padding: '0.875rem 0.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}
                                        >
                                            <ChevronDown size={16} style={{ transform: mobileExpanded === item.name ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                                        </button>
                                    )}
                                </div>
                                {item.children && mobileExpanded === item.name && (
                                    <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                                        {'children' in item && item.children && Array.isArray(item.children) && (item.children as Array<{ heading: string; items: Array<{ name: string; href: string }> }>).map((group) => (
                                            <div key={group.heading}>
                                                <div style={{ fontSize: '0.68rem', color: '#ff9999', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.5rem 0 0.25rem', fontWeight: '700' }}>
                                                    {group.heading}
                                                </div>
                                                {group.items.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        style={{ display: 'block', padding: '0.4rem 0', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'none' }}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div style={{ paddingTop: '1rem' }}>
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ display: 'block', textAlign: 'center', padding: '0.75rem', background: '#cc0000', color: 'white', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}
                            >
                                GET A QUOTE ↗
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
