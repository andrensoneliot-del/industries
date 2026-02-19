import Link from "next/link";
import { Download, FileText, Book, Wrench, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Downloads | Airflow Industries",
    description: "Download product brochures, technical data sheets, and user manuals for Anest Iwata and Festo products.",
};

const downloadCategories = [
    { id: "brochures", name: "Product Brochures", icon: Book, description: "Detailed specifications and features of all our products" },
    { id: "manuals", name: "User Manuals", icon: FileText, description: "Installation, operation, and maintenance guides" },
    { id: "technical", name: "Technical Data Sheets", icon: Wrench, description: "In-depth technical specifications and drawings" },
];

const downloads = [
    { name: "Anest Iwata Reciprocating Compressor Brochure", type: "PDF", size: "2.4 MB", category: "brochures" },
    { name: "Oil Free Compressor Specification Sheet", type: "PDF", size: "1.8 MB", category: "technical" },
    { name: "Screw Compressor Installation Manual", type: "PDF", size: "4.1 MB", category: "manuals" },
    { name: "Scroll Compressor Technical Data", type: "PDF", size: "1.2 MB", category: "technical" },
    { name: "Vacuum Pump User Guide", type: "PDF", size: "2.7 MB", category: "manuals" },
    { name: "Festo Pneumatics Product Catalogue", type: "PDF", size: "8.3 MB", category: "brochures" },
    { name: "Compressor Maintenance Checklist", type: "PDF", size: "0.5 MB", category: "manuals" },
    { name: "Grease Pump Technical Specifications", type: "PDF", size: "1.1 MB", category: "technical" },
    { name: "Airflow Industries Company Profile", type: "PDF", size: "3.2 MB", category: "brochures" },
];

export default function DownloadsPage() {
    return (
        <main>
            {/* Page Banner */}
            <div className="page-banner">
                <div className="container">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>›</span>
                            <span style={{ color: '#cc0000', fontSize: '0.8rem' }}>Downloads</span>
                        </div>
                        <h1 style={{ color: 'white', fontSize: 'clamp(1.8rem,3.5vw,2.75rem)', fontWeight: '800', marginBottom: '0.75rem' }}>
                            Downloads &amp; Resources
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: '600px' }}>
                            Access product brochures, technical specifications, user manuals, and other resources.
                        </p>
                    </div>
                </div>
            </div>

            {/* Category Cards */}
            <div style={{ background: '#f9fafb', padding: '3rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        {downloadCategories.map((cat) => (
                            <div key={cat.id} style={{ background: 'white', borderRadius: '10px', padding: '1.5rem', border: '1px solid #e5e7eb', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                                <div style={{ width: '52px', height: '52px', background: 'rgba(204,0,0,0.1)', borderRadius: '12px', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <cat.icon size={24} style={{ color: '#cc0000' }} />
                                </div>
                                <h3 style={{ color: '#111827', fontWeight: '700', fontSize: '1rem', marginBottom: '0.4rem' }}>{cat.name}</h3>
                                <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>{cat.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Download List */}
                    <h2 style={{ color: '#111827', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Available Downloads</h2>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {downloads.map((file, i) => (
                            <div key={i} style={{ background: 'white', borderRadius: '8px', padding: '1rem 1.5rem', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(204,0,0,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <FileText size={18} style={{ color: '#cc0000' }} />
                                    </div>
                                    <div>
                                        <p style={{ color: '#111827', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.15rem' }}>{file.name}</p>
                                        <p style={{ color: '#9ca3af', fontSize: '0.75rem' }}>{file.type} • {file.size}</p>
                                    </div>
                                </div>
                                <a
                                    href="/contact"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#cc0000', color: 'white', padding: '0.45rem 1rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '600', whiteSpace: 'nowrap' }}
                                >
                                    <Download size={14} /> Request
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{ background: '#0f2341', padding: '3.5rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                        Need Custom Documentation?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>
                        Can't find what you're looking for? Contact us for specific technical documentation.
                    </p>
                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#cc0000', color: 'white', padding: '0.75rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>
                        Contact Us <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
