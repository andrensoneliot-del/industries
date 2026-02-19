"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "What is an industrial air compressor?",
        answer: "An industrial air compressor is a mechanical device that converts power (using a motor, diesel, or gasoline engine) into potential energy stored in pressurized air. Industrial air compressors are used in a wide range of applications such as pneumatic tools, spray painting, sandblasting, and powering machinery in manufacturing plants.",
    },
    {
        question: "What are the types of air compressors?",
        answer: "The main types of industrial air compressors are: (1) Reciprocating (Piston) Compressors – suitable for intermittent use, (2) Rotary Screw Compressors – ideal for continuous, heavy-duty use, (3) Scroll Compressors – oil-free and quiet, suitable for sensitive environments, (4) Centrifugal Compressors – for very large-scale, high-flow applications. Each type has specific advantages depending on pressure requirements, flow rates, and application environment.",
    },
    {
        question: "How does an industrial air compressor work?",
        answer: "An industrial air compressor works by drawing in atmospheric air and compressing it to a higher pressure using pistons (reciprocating), rotating screws (screw compressors), or scroll mechanisms. The compressed air is then stored in a receiver tank and delivered to the point of use through a distribution system. Filters and dryers are used to clean and dry the air before it reaches pneumatic tools or processes.",
    },
    {
        question: "Where are industrial air compressors used?",
        answer: "Industrial air compressors are used across many sectors including automotive (painting, assembly), pharmaceutical (clean air), food and beverage (packaging, bottling), textile (spinning, weaving), chemical processing, medical (hospital air), packaging, construction (drilling, pneumatic tools), and any industry requiring a reliable source of compressed air for operations.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section" style={{ background: '#f5f5f5' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    <div className="section-divider" />
                    <h2 style={{ color: '#1a1a1a', marginBottom: '0.75rem', fontFamily: 'Roboto, sans-serif' }}>Frequently Asked Questions</h2>
                    <p style={{ color: '#777', fontSize: '0.9rem' }}>
                        Everything you need to know about industrial air compressors.
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-item">
                            <button
                                className={`faq-question ${openIndex === i ? 'open' : ''}`}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600, color: openIndex === i ? '#cc0000' : '#1a1a1a', fontSize: '0.95rem' }}>{faq.question}</span>
                                {openIndex === i
                                    ? <ChevronUp size={18} style={{ flexShrink: 0, color: '#cc0000' }} />
                                    : <ChevronDown size={18} style={{ flexShrink: 0, color: '#888' }} />
                                }
                            </button>
                            {openIndex === i && (
                                <div className="faq-answer">
                                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
