export default function ServicesPage() {
    return (
        <section className="section">
            <div className="container">
                {/* Hero */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Services</h1>
                    <p className="text-[var(--text-secondary)] text-lg">
                        Development is at the heart of what we do. We engineer robust, scalable solutions and surround them with the creative and growth services your product needs to succeed.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
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
                        <div key={i} className="card p-6">
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                            <p className="text-[var(--text-secondary)] mb-4">{service.desc}</p>
                            <ul className="space-y-1">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="text-sm text-[var(--text-muted)] flex items-center">
                                        <span className="text-[var(--accent)] mr-2">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Process */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Development Process</h2>
                    <div className="grid gap-6 md:grid-cols-4">
                        {[
                            {step: "01", title: "Discovery", desc: "Understanding your requirements and technical constraints"},
                            {step: "02", title: "Planning", desc: "Creating detailed roadmaps and technical specifications"},
                            {step: "03", title: "Development", desc: "Iterative development with regular demos and feedback"},
                            {step: "04", title: "Launch", desc: "Deployment, testing, and ongoing support and maintenance"},
                        ].map((item, i) => (
                            <div key={i} className="card p-6 text-center">
                                <div className="text-2xl font-extrabold text-[var(--accent)] mb-3">{item.step}</div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="card p-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to start your project?</h2>
                    <p className="text-[var(--text-secondary)] mb-6 max-w-[60ch] mx-auto">
                        We&apos;re flexible with engagement models — fixed scope, monthly retainer, or on‑demand support. Let&apos;s discuss what works best for your needs.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/contact" className="btn btn-primary">Get Started</a>
                        <a href="/portfolio" className="btn card">View Our Work</a>
                    </div>
                </div>
            </div>
        </section>
    );
}