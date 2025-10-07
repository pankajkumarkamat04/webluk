import Image from "next/image";

export default function PortfolioPage() {
  const projects = [
    { title: "Hosting Company Website", desc: "High-performance hosting website with full automation using WHMCS. Implemented automated product provisioning, invoicing, payment collection, ticketing, and renewals integrated with cPanel/WHM APIs.", image: "/portfolio-1.png", tech: "PHP, WHMCS, cPanel/WHM API, MySQL, Stripe/PayPal" },
    { title: "POS System for Car Services", desc: "MERN-based POS tailored for an auto workshop. Custom workshop module with automated stock updates, auto-billing, parts and inventory management, and end-to-end job card lifecycle handling. Role-based access, reports, and streamlined service workflows.", image: "/portfolio-2.png", tech: "MongoDB, Express.js, React/Next, Node.js (MERN)" },
    { title: "Property Dealing Platform", desc: "End-to-end property marketplace with tenant and rental management. Real-time booking and availability, listings with verification, lease workflows, and role-based dashboards for owners, tenants, and admins.", image: "/portfolio-3.png", tech: "MongoDB, Express.js, React/Next, Node.js (MERN), WebSockets" },
    { title: "E‑commerce Platform", desc: "Scalable e-commerce website with real-time inventory management, CMS for products and pages, multiple payment gateways, and live delivery tracking integration.", image: "/portfolio-4.png", tech: "React/Next, Node.js, MongoDB, Stripe/PayPal/Razorpay, CMS, Courier API" },
    { title: "Software Selling Platform", desc: "Marketplace for buyers, sellers, and developers with franchise system and API integrations. Fully contactless and automated from purchase to delivery: licensing, keys provisioning, invoicing, notifications, and vendor payouts.", image: "/portfolio-5.png", tech: "MERN (MongoDB, Express.js, React/Next, Node.js), Python services, Webhooks" },
    { title: "WordPress ➜ MERN Migration", desc: "Migrated a WordPress site to a modern MERN stack with a custom CMS. Used MySQL as the data source, built migration pipelines, and created management for website pages, projects, and product entities linked to the site.", image: "/portfolio-6.png", tech: "MERN (React/Next, Node.js, Express), MySQL, Migration scripts" },
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-4xl font-extrabold text-center">Portfolio</h1>
        <p className="text-[var(--text-secondary)] text-center mt-2 max-w-[70ch] mx-auto">
          A selection of recent projects showcasing our expertise across various industries and technologies.
        </p>
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div key={i} className="card overflow-hidden rounded-none">
              <div className="relative aspect-square">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={i < 3}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                {project.desc && (
                  <p className="text-[var(--text-muted)] text-sm mb-3">{project.desc}</p>
                )}
                {project.tech && (
                  <div className="text-xs text-[var(--accent)] font-medium">{project.tech}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


