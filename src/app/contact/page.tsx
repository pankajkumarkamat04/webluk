"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.' });
        form.reset();
      } else {
        setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again or contact us directly.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="fe1acc9a-8573-4a63-a110-d993fd7726ed" />
              
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-md ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-500' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-500'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" 
                  placeholder="John Doe" 
                  required 
                  disabled={isSubmitting}
                />
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
                  name="email"
                  className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors" 
                  placeholder="john@example.com" 
                  required 
                  disabled={isSubmitting}
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Message</label>
                <textarea 
                  name="message"
                  className="w-full bg-transparent border border-[var(--border)] rounded-md px-4 py-3 h-32 outline-none focus:border-[var(--accent)] transition-colors resize-none" 
                  placeholder="Tell us about your project, goals, and any specific requirements..." 
                  required 
                  disabled={isSubmitting}
                />
              </motion.div>
              
              <motion.button 
                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


