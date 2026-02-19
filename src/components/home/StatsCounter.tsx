"use client";

import { useEffect, useRef, useState } from "react";
import companiesData from "@/data/companies.json";

const stats = [
    { value: companiesData.stats.installations, suffix: "+", label: "Installations", desc: "Successful installations across Mumbai & beyond" },
    { value: companiesData.stats.customers, suffix: "+", label: "Happy Customers", desc: "Satisfied clients trusting our service" },
    { value: companiesData.stats.years, suffix: "+", label: "Years Experience", desc: "Serving industries since 1990" },
    { value: companiesData.stats.industries, suffix: "", label: "Industries Served", desc: "Sectors powered by our solutions" },
];

function useCountUp(target: number, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

function StatItem({ stat, animate }: { stat: (typeof stats)[number]; animate: boolean }) {
    const count = useCountUp(stat.value, 1800, animate);
    return (
        <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
            <div style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '900',
                color: 'white',
                lineHeight: 1,
                marginBottom: '0.5rem',
            }}>
                {count}{stat.suffix}
            </div>
            <div style={{ color: 'white', fontWeight: '700', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                {stat.label}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem' }}>
                {stat.desc}
            </div>
        </div>
    );
}

export default function StatsCounter() {
    const [animate, setAnimate] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: '#1a2744', padding: '4.5rem 0', borderTop: '4px solid #cc0000' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div className="section-divider" style={{ background: '#cc0000' }} />
                    <h2 style={{ color: 'white', marginBottom: '0.5rem', fontFamily: 'Roboto, sans-serif' }}>Company Statistics</h2>
                    <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto', fontSize: '0.9rem' }}>
                        Numbers that speak to our decades of excellence in the compressed air industry.{' '}
                        <a href="/contact" style={{ color: '#cc0000', textDecoration: 'underline', fontSize: '0.9rem' }}>
                            reach out to us
                        </a>
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0', borderTop: '1px solid rgba(255,255,255,0.1)', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                    {stats.map((stat) => (
                        <div key={stat.label} style={{ borderRight: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <StatItem stat={stat} animate={animate} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
