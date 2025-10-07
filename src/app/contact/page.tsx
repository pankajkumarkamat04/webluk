"use client";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-[var(--text-secondary)] text-lg">
            Tell us about your project and the outcomes you&apos;re aiming for. We&apos;ll reply within one business day.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Let&apos;s talk about your project</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Whether you have a clear vision or just an idea, we&apos;re here to help you bring it to life. 
                Our team specializes in turning complex requirements into elegant, scalable solutions.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="card p-6">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-[var(--text-muted)]">Green Village, Kolkata — 700150</p>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a className="text-[var(--accent)] hover:underline" href="tel:+917292932411">+91 7292932411</a>
                  </div>
                </div>
              </div>
              
              <div className="card p-6">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a className="text-[var(--accent)] hover:underline" href="mailto:info@webluksolutions.com">info@webluksolutions.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent)]/5">
              <h3 className="font-bold text-lg mb-2">Why choose us?</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">✓</span>
                  Free initial consultation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">✓</span>
                  Transparent pricing and timelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">✓</span>
                  Ongoing support and maintenance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent)]">✓</span>
                  Modern tech stack and best practices
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">First Name</label>
                  <input 
                    className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" 
                    placeholder="John" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Last Name</label>
                  <input 
                    className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" 
                    placeholder="Doe" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" 
                  placeholder="john@example.com" 
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Project Type</label>
                <select className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors">
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>E-commerce Solution</option>
                  <option>UI/UX Design</option>
                  <option>DevOps & Cloud</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Budget Range</label>
                <select className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors">
                  <option>Under $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000 - $50,000</option>
                  <option>$50,000+</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Message</label>
                <textarea 
                  className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 h-32 outline-none focus:border-[var(--accent)] transition-colors resize-none" 
                  placeholder="Tell us about your project, goals, and any specific requirements..." 
                  required 
                />
              </div>
              
              <button className="btn btn-primary w-full" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


