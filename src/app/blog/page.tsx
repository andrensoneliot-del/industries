"use client";

import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight, User } from "lucide-react";


const posts = [
    {
        slug: "how-to-choose-right-air-compressor",
        title: "How to Choose the Right Air Compressor for Your Industry",
        excerpt: "Selecting the correct air compressor is critical for efficiency and long-term savings. We break down the key factors — CFM, PSI, duty cycle, and application type — to help you make the right choice for your specific industry.",
        category: "Buying Guide",
        date: "February 15, 2026",
        readTime: "6 min read",
        author: "Airflow Industries",
        featured: true,
        image: null,
        tags: ["Air Compressor", "Buying Guide", "Industrial"],
    },
    {
        slug: "screw-vs-reciprocating-compressor",
        title: "Rotary Screw vs Reciprocating Compressor: Which is Better?",
        excerpt: "Both screw and reciprocating compressors serve important roles in industry, but choosing the wrong one can cost you significantly in energy and maintenance. Here's a comprehensive comparison to help you decide.",
        category: "Technical",
        date: "February 10, 2026",
        readTime: "8 min read",
        author: "Airflow Industries",
        featured: true,
        image: null,
        tags: ["Screw Compressor", "Reciprocating", "Comparison"],
    },
    {
        slug: "air-compressor-maintenance-tips",
        title: "10 Essential Air Compressor Maintenance Tips to Extend Equipment Life",
        excerpt: "Proper maintenance can double the lifespan of your air compressor and prevent costly breakdowns. Follow these 10 expert tips from our service team to keep your compressed air system running at peak performance.",
        category: "Maintenance",
        date: "February 5, 2026",
        readTime: "5 min read",
        author: "Airflow Industries",
        featured: false,
        image: null,
        tags: ["Maintenance", "Tips", "Service"],
    },
    {
        slug: "oil-free-compressor-pharmaceutical",
        title: "Why Oil-Free Compressors Are Essential for Pharmaceutical Manufacturing",
        excerpt: "Contaminated air can ruin pharmaceutical products and violate regulatory standards. Discover why ISO 8573-1 Class 0 oil-free compressors from Anest Iwata are the standard of choice for pharma manufacturers.",
        category: "Industry Application",
        date: "January 28, 2026",
        readTime: "7 min read",
        author: "Airflow Industries",
        featured: false,
        image: null,
        tags: ["Oil-Free", "Pharmaceutical", "Anest Iwata"],
    },
    {
        slug: "energy-saving-tips-compressed-air",
        title: "5 Ways to Reduce Energy Costs in Your Compressed Air System",
        excerpt: "Compressed air is one of the most expensive utilities in a manufacturing plant — accounting for up to 30% of total energy costs. Learn 5 proven strategies to cut your compressed air energy bill significantly.",
        category: "Energy Efficiency",
        date: "January 20, 2026",
        readTime: "6 min read",
        author: "Airflow Industries",
        featured: false,
        image: null,
        tags: ["Energy Efficiency", "Cost Saving", "Optimization"],
    },
    {
        slug: "festo-pneumatics-automation",
        title: "Festo Pneumatics: Powering the Future of Industrial Automation",
        excerpt: "As manufacturing moves toward Industry 4.0, pneumatic systems play a crucial role. Explore how Festo's latest pneumatic and electrical automation solutions are enabling smarter factories across India.",
        category: "Product Spotlight",
        date: "January 12, 2026",
        readTime: "5 min read",
        author: "Airflow Industries",
        featured: false,
        image: null,
        tags: ["Festo", "Pneumatics", "Automation"],
    },
];

const categoryColors: Record<string, string> = {
    "Buying Guide": "#cc0000",
    "Technical": "#1a2744",
    "Maintenance": "#2563eb",
    "Industry Application": "#059669",
    "Energy Efficiency": "#d97706",
    "Product Spotlight": "#7c3aed",
};

function BlogCard({ post, large = false }: { post: typeof posts[0]; large?: boolean }) {
    const catColor = categoryColors[post.category] || "#1a2744";
    return (
        <article style={{
            background: "white",
            border: "1px solid #e0e0e0",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.2s, transform 0.2s",
        }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
        >
            {/* Banner image placeholder */}
            <div style={{
                background: `linear-gradient(135deg, ${catColor}22, ${catColor}44)`,
                borderBottom: `3px solid ${catColor}`,
                padding: large ? "2.5rem 1.5rem" : "1.75rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: large ? 160 : 110,
                position: "relative",
                overflow: "hidden",
            }}>
                <div style={{ fontSize: large ? "4rem" : "3rem", opacity: 0.3, userSelect: "none" }}>
                    {post.category === "Buying Guide" ? "🏭" :
                        post.category === "Technical" ? "⚙️" :
                            post.category === "Maintenance" ? "🔧" :
                                post.category === "Industry Application" ? "💊" :
                                    post.category === "Energy Efficiency" ? "⚡" : "🔬"}
                </div>
                <div style={{
                    position: "absolute", top: "0.75rem", left: "0.75rem",
                    background: catColor, color: "white",
                    fontSize: "0.68rem", fontWeight: "700", textTransform: "uppercase",
                    letterSpacing: "0.5px", padding: "0.2rem 0.6rem", borderRadius: "3px",
                }}>
                    {post.category}
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: "1.4rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.85rem", flexWrap: "wrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#888", fontSize: "0.78rem" }}>
                        <Calendar size={12} /> {post.date}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#888", fontSize: "0.78rem" }}>
                        <Clock size={12} /> {post.readTime}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#888", fontSize: "0.78rem" }}>
                        <User size={12} /> {post.author}
                    </span>
                </div>

                <h3 style={{
                    color: "#1a1a1a", fontSize: large ? "1.2rem" : "1rem",
                    fontWeight: "700", lineHeight: 1.4, marginBottom: "0.75rem",
                    fontFamily: "Roboto, sans-serif",
                }}>
                    {post.title}
                </h3>

                <p style={{
                    color: "#666", fontSize: "0.875rem", lineHeight: 1.7,
                    marginBottom: "1.25rem", flex: 1,
                }}>
                    {post.excerpt}
                </p>

                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                    {post.tags.map(t => (
                        <span key={t} style={{
                            background: "#f5f5f5", border: "1px solid #e0e0e0",
                            color: "#555", fontSize: "0.7rem", fontWeight: "600",
                            padding: "0.15rem 0.5rem", borderRadius: "3px",
                            display: "flex", alignItems: "center", gap: "0.25rem",
                        }}>
                            <Tag size={9} />{t}
                        </span>
                    ))}
                </div>

                <Link
                    href={`/blog/${post.slug}`}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: "0.4rem",
                        color: "#cc0000", fontWeight: "700", fontSize: "0.82rem",
                        textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.4px",
                        transition: "gap 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "0.7rem"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "0.4rem"; }}
                >
                    Read Article <ArrowRight size={14} />
                </Link>
            </div>
        </article>
    );
}

export default function BlogPage() {
    const featured = posts.filter(p => p.featured);
    const regular = posts.filter(p => !p.featured);
    const categories = ["All", ...Array.from(new Set(posts.map(p => p.category)))];

    return (
        <main>
            {/* Page Banner */}
            <div className="page-banner">
                <div className="container" style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-block", background: "#cc0000", color: "white", fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", padding: "0.25rem 0.75rem", borderRadius: "3px", marginBottom: "1rem" }}>
                        Knowledge Hub
                    </div>
                    <h1 style={{ color: "white", marginBottom: "0.75rem", fontFamily: "Roboto, sans-serif" }}>Airflow Industries Blog</h1>
                    <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: "560px", margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.7 }}>
                        Expert insights on industrial air compressors, pneumatic systems, energy efficiency, and maintenance best practices.
                    </p>
                </div>
            </div>

            {/* Category filter pills */}
            <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e0e0e0", padding: "1rem 0" }}>
                <div className="container">
                    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "center" }}>
                        <span style={{ color: "#888", fontSize: "0.8rem", fontWeight: "600", marginRight: "0.25rem" }}>Filter:</span>
                        {categories.map((cat, i) => (
                            <span key={cat} style={{
                                padding: "0.3rem 0.9rem",
                                borderRadius: "3px",
                                fontSize: "0.78rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                background: i === 0 ? "#cc0000" : "white",
                                color: i === 0 ? "white" : "#555",
                                border: i === 0 ? "1px solid #cc0000" : "1px solid #e0e0e0",
                            }}>
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Posts */}
            <section style={{ background: "white", padding: "3.5rem 0 2rem" }}>
                <div className="container">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                        <div style={{ width: "4px", height: "24px", background: "#cc0000", borderRadius: "2px" }} />
                        <h2 style={{ color: "#1a1a1a", fontSize: "1.3rem", fontFamily: "Roboto, sans-serif" }}>Featured Articles</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                        {featured.map(post => <BlogCard key={post.slug} post={post} large />)}
                    </div>
                </div>
            </section>

            {/* All Posts */}
            <section style={{ background: "#f9f9f9", padding: "2rem 0 4rem" }}>
                <div className="container">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                        <div style={{ width: "4px", height: "24px", background: "#1a2744", borderRadius: "2px" }} />
                        <h2 style={{ color: "#1a1a1a", fontSize: "1.3rem", fontFamily: "Roboto, sans-serif" }}>More Articles</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                        {regular.map(post => <BlogCard key={post.slug} post={post} />)}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: "#1a2744", padding: "4rem 0", borderTop: "4px solid #cc0000" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="section-divider" style={{ background: "#cc0000" }} />
                    <h2 style={{ color: "white", marginBottom: "0.75rem", fontFamily: "Roboto, sans-serif" }}>
                        Need Expert Advice?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "480px", margin: "0 auto 2rem", fontSize: "0.95rem" }}>
                        Our team of compressed air specialists is ready to help you find the right solution for your application.
                    </p>
                    <div style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            background: "#cc0000", color: "white", padding: "0.75rem 2rem",
                            borderRadius: "4px", fontWeight: "700", fontSize: "0.85rem",
                            textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px",
                        }}>
                            Get Expert Advice
                        </Link>
                        <Link href="/products" style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            background: "transparent", color: "white", padding: "0.75rem 2rem",
                            borderRadius: "4px", fontWeight: "700", fontSize: "0.85rem",
                            textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.5px",
                            border: "2px solid rgba(255,255,255,0.4)",
                        }}>
                            View Products
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
