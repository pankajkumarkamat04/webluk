"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <section className="section">
            <div className="container">
                {/* Hero */}
                <motion.div 
                    className="text-center max-w-4xl mx-auto mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1 
                        className="text-responsive-xl font-extrabold mb-4"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p 
                        className="text-[var(--text-secondary)] text-lg"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Development is at the heart of what we do. We engineer robust, scalable solutions and surround them with the creative and growth services your product needs to succeed.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid-responsive mb-16">
                    {[
                        {name: "Web Development", icon: "🌐", desc: "Custom web apps, dashboards and admin panels", features: ["React/Next.js", "TypeScript", "Responsive Design"]},
                        {name: "Mobile App Development", icon: "📱", desc: "iOS, Android and cross-platform applications", features: ["React Native", "Flutter", "Native Performance"]},
                        {name: "E‑commerce Solutions", icon: "🛒", desc: "Online stores and payment integrations", features: ["Headless Commerce", "Payment Gateways", "Inventory Management"]},
                        {name: "API & Backend Development", icon: "⚡", desc: "RESTful APIs, microservices and databases", features: ["Node.js/Python", "Database Design", "Cloud Integration"]},
                        {name: "DevOps & Cloud", icon: "☁️", desc: "Deployment, CI/CD, monitoring and cloud infrastructure", features: ["AWS/Azure", "Docker/Kubernetes", "Monitoring & Security"]},
                        {name: "UI/UX Design", icon: "🎨", desc: "User interface design and user experience optimization", features: ["Figma/Adobe XD", "Prototyping", "User Research"]},
                        {name: "Performance & SEO", icon: "📈", desc: "Site optimization, Core Web Vitals and search rankings", features: ["Core Web Vitals", "Technical SEO", "Analytics Setup"]},
                        {name: "Integrations & Automation", icon: "🔗", desc: "Third-party integrations and workflow automation", features: ["API Integrations", "Workflow Automation", "Data Synchronization"]},
                        {name: "Maintenance & Support", icon: "🔧", desc: "Ongoing updates, security patches and technical support", features: ["24/7 Support", "Security Updates", "Performance Monitoring"]},
                    ].map((service, i) => (
                        <motion.div 
                            key={i} 
                            className="card"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <motion.div 
                                className="text-3xl mb-4"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                            <p className="text-[var(--text-secondary)] mb-4">{service.desc}</p>
                            <ul className="space-y-1">
                                {service.features.map((feature, j) => (
                                    <motion.li 
                                        key={j} 
                                        className="text-sm text-[var(--text-muted)] flex items-center"
                                        initial={{ x: -10, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: j * 0.1 }}
                                    >
                                        <span className="text-[var(--accent)] mr-2">•</span>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Process */}
                <div className="mb-16">
                    <motion.h2 
                        className="text-3xl font-bold text-center mb-8"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Development Process
                    </motion.h2>
                    <div className="grid gap-6 md:grid-cols-4">
                        {[
                            {step: "01", title: "Discovery", desc: "Understanding your requirements and technical constraints"},
                            {step: "02", title: "Planning", desc: "Creating detailed roadmaps and technical specifications"},
                            {step: "03", title: "Development", desc: "Iterative development with regular demos and feedback"},
                            {step: "04", title: "Launch", desc: "Deployment, testing, and ongoing support and maintenance"},
                        ].map((item, i) => (
                            <motion.div 
                                key={i} 
                                className="card p-6 text-center"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <motion.div 
                                    className="text-2xl font-extrabold text-[var(--accent)] mb-3"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {item.step}
                                </motion.div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div 
                    className="card p-8 text-center"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <motion.h2 
                        className="text-2xl sm:text-3xl font-bold mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ready to start your project?
                    </motion.h2>
                    <motion.p 
                        className="text-[var(--text-secondary)] mb-6 max-w-[60ch] mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        We&apos;re flexible with engagement models — fixed scope, monthly retainer, or on‑demand support. Let&apos;s discuss what works best for your needs.
                    </motion.p>
                    <motion.div 
                        className="flex gap-4 justify-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <motion.a 
                            href="/contact" 
                            className="btn btn-primary"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.a>
                        <motion.a 
                            href="/portfolio" 
                            className="btn card"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Our Work
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
