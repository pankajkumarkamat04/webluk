import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* 1) Hero */}
      <section className="section">
        <div className="container grid gap-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold">We build scalable digital products</h1>
            <p className="text-[var(--text-secondary)]">Web apps, sites and platforms engineered for speed and growth.</p>
            <div className="flex gap-3 justify-center">
              <a href="/contact" className="btn btn-primary">Start a project</a>
              <a href="/services" className="btn card">Our services</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2) About */}
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About us</h2>
            <div className="text-[var(--text-secondary)] space-y-4">
              <p>Webluk Solutions is a development-first digital agency specializing in robust, scalable web applications. We bridge the gap between innovative ideas and technical execution, serving as a trusted partner for startups, small businesses, and enterprises looking to transform their digital presence.</p>
              
              <p>Our core philosophy centers on clean, maintainable code and modern development practices. We architect systems that are secure, performant, and user-friendly, using cutting-edge technologies like React, Next.js, Node.js, and TypeScript.</p>
              
              <p>Located in Kolkata, we serve clients globally while maintaining the personal touch of a local agency. Whether you need a simple landing page, complex e-commerce platform, or custom web application, we have the expertise and dedication to bring your vision to life.</p>
            </div>
            
          </div>
          
          <div className="relative">
            <div className="card overflow-hidden">
              <Image 
                src="/about.jpg" 
                alt="Webluk Solutions team working on development projects" 
                width={600}
                height={320}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3) Services (3x3) */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Our services</h2>
          <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {name: "Web Development", icon: "🌐", desc: "Custom web apps, dashboards and admin panels"},
              {name: "Mobile App Development", icon: "📱", desc: "iOS, Android and cross-platform applications"},
              {name: "E‑commerce Solutions", icon: "🛒", desc: "Online stores and payment integrations"},
              {name: "API & Backend Development", icon: "⚡", desc: "RESTful APIs, microservices and databases"},
              {name: "DevOps & Cloud", icon: "☁️", desc: "Deployment, CI/CD, monitoring and cloud infrastructure"},
              {name: "UI/UX Design", icon: "🎨", desc: "User interface design and user experience optimization"},
              {name: "Performance & SEO", icon: "📈", desc: "Site optimization, Core Web Vitals and search rankings"},
              {name: "Integrations & Automation", icon: "🔗", desc: "Third-party integrations and workflow automation"},
              {name: "Maintenance & Support", icon: "🔧", desc: "Ongoing updates, security patches and technical support"},
            ].map((s) => (
              <div key={s.name} className="card p-6">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-semibold mt-2">{s.name}</div>
                <p className="text-[var(--text-muted)] mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Working Process */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Our working process</h2>
          <div className="grid gap-4 md:grid-cols-4 mt-6">
            {[
              {n: "1", t: "Discover", d: "Goals, users, constraints, KPIs"},
              {n: "2", t: "Design", d: "UX, UI, architecture"},
              {n: "3", t: "Build", d: "Sprints, QA, reviews"},
              {n: "4", t: "Grow", d: "Performance, SEO, analytics"},
            ].map((s) => (
              <div key={s.n} className="card p-5 text-center">
                <div className="text-2xl font-extrabold text-[var(--accent)]">{s.n}</div>
                <div className="font-semibold mt-2">{s.t}</div>
                <p className="text-[var(--text-muted)] mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) Portfolio preview */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Portfolio</h2>
          <p className="text-[var(--text-secondary)] mt-2 max-w-[60ch] mx-auto">A glimpse of recent work. See the full case studies and live links on our portfolio page.</p>
          <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {title: "Hosting Company Website (PHP + WHMCS)", image: "/portfolio-1.png"},
              {title: "POS System for Car Services (MERN)", image: "/portfolio-2.png"},
              {title: "Property Dealing Platform (MERN)", image: "/portfolio-3.png"},
              {title: "E‑commerce Platform", image: "/portfolio-4.png"},
              {title: "Software Selling Platform", image: "/portfolio-5.png"},
              {title: "WordPress ➜ MERN Migration", image: "/portfolio-6.png"},
            ].map((project, i) => (
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
                  <a href="/portfolio" className="text-[var(--accent)] hover:underline text-sm font-medium">Read more →</a>
                </div>
              </div>
            ))}
          </div>
          <a href="/portfolio" className="btn btn-primary mt-8">See all projects</a>
        </div>
      </section>

      {/* 6) Contact */}
      <section className="section">
        <div className="container card p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Have a project in mind?</h2>
          <p className="text-[var(--text-secondary)] mt-2 max-w-[60ch] mx-auto">Tell us what you’re building and we’ll suggest the best approach.</p>
          <div className="mt-6">
            <a href="/contact" className="btn btn-primary">Contact us</a>
          </div>
    </div>
      </section>
    </>
  );
}
