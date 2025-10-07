"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
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
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-[var(--text-secondary)] text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tell us about your project and the outcomes you&apos;re aiming for. We&apos;ll reply within one business day.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <motion.h2 
                className="text-responsive-lg font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let&apos;s talk about your project
              </motion.h2>
              <motion.p 
                className="text-[var(--text-secondary)] mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Whether you have a clear vision or just an idea, we&apos;re here to help you bring it to life. 
                Our team specializes in turning complex requirements into elegant, scalable solutions.
              </motion.p>
            </div>

            <div className="grid gap-4">
              {[
                { icon: "📍", title: "Address", value: "Green Village, Kolkata — 700150", link: null },
                { icon: "📞", title: "Phone", value: "+91 7292932411", link: "tel:+917292932411" },
                { icon: "✉️", title: "Email", value: "info@webluksolutions.com", link: "mailto:info@webluksolutions.com" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="card p-6"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.link ? (
                        <a className="text-[var(--accent)] hover:underline" href={item.link}>{item.value}</a>
                      ) : (
                        <p className="text-[var(--text-muted)]">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="card p-6 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accent)]/5"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-bold text-lg mb-2">Why choose us?</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {[
                  "Free initial consultation",
                  "Transparent pricing and timelines",
                  "Ongoing support and maintenance",
                  "Modern tech stack and best practices",
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.4 + i * 0.1 }}
                  >
                    <span className="text-[var(--accent)]">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="card p-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2 
              className="text-xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Send us a message
            </motion.h2>
            <form className="space-y-6" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
              <motion.div 
                className="form-grid"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
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
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" 
                  placeholder="john@example.com" 
                  required 
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Project Type</label>
                <select className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors">
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>E-commerce Solution</option>
                  <option>UI/UX Design</option>
                  <option>DevOps & Cloud</option>
                  <option>Other</option>
                </select>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Budget Range</label>
                <select className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors">
                  <option>Under $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000 - $50,000</option>
                  <option>$50,000+</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Message</label>
                <textarea 
                  className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 h-32 outline-none focus:border-[var(--accent)] transition-colors resize-none" 
                  placeholder="Tell us about your project, goals, and any specific requirements..." 
                  required 
                />
              </motion.div>
              
              <motion.button 
                className="btn btn-primary w-full" 
                type="submit"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


