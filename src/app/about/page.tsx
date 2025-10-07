import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Webluk Solutions</h1>
          <p className="text-[var(--text-secondary)] text-lg">Development‑first digital partner building products that perform</p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Webluk Solutions is a development‑first digital agency that specializes in creating robust, scalable web applications. We bridge the gap between innovative ideas and technical execution, serving as a trusted partner for startups, small businesses, and enterprises looking to transform their digital presence.
              </p>
              <p className="text-[var(--text-secondary)] mb-4">
                Our core philosophy centers on clean, maintainable code and modern development practices. We architect systems that are secure, performant, and user-friendly, using cutting-edge technologies like React, Next.js, Node.js, and TypeScript.
              </p>
              <p className="text-[var(--text-secondary)] mb-6">
                Located in Kolkata, we serve clients globally while maintaining the personal touch of a local agency. Whether you need a simple landing page, complex e-commerce platform, or custom web application, we have the expertise and dedication to bring your vision to life.
              </p>
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

        {/* How We Work */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How we work</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {step: "01", title: "Discover", desc: "Understanding your goals, users, and technical requirements through detailed workshops and research."},
              {step: "02", title: "Plan", desc: "Creating lean technical roadmaps with clear milestones and measurable KPIs for success."},
              {step: "03", title: "Build", desc: "Iterative development with regular demos, testing, and transparent communication throughout."},
              {step: "04", title: "Scale", desc: "Post-launch monitoring, optimization, and ongoing support to ensure continued growth."},
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-2xl font-extrabold text-[var(--accent)] mb-3">{item.step}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-bold text-xl mb-3">Mission</h3>
            <p className="text-[var(--text-secondary)]">Build useful, reliable software that helps businesses grow and scale efficiently.</p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-xl mb-3">Values</h3>
            <p className="text-[var(--text-secondary)]">Clarity, craft, ownership, and measurable outcomes in everything we do.</p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-bold text-xl mb-3">Approach</h3>
            <p className="text-[var(--text-secondary)]">Small, senior teams shipping in short, value-focused development cycles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


