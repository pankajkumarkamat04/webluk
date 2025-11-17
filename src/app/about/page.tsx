"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
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
            About Webluk Solutions
          </motion.h1>
          <motion.p 
            className="text-[var(--text-secondary)] text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Development‑first digital partner building products that perform
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div 
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-responsive-lg font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our Story
            </motion.h2>
            <div className="text-[var(--text-secondary)] space-y-4 max-w-3xl mx-auto">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Webluk Solutions is a development‑first digital agency that specializes in creating robust, scalable web applications. We bridge the gap between innovative ideas and technical execution, serving as a trusted partner for startups, small businesses, and enterprises looking to transform their digital presence.
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Our core philosophy centers on clean, maintainable code and modern development practices. We architect systems that are secure, performant, and user-friendly, using cutting-edge technologies like React, Next.js, Node.js, and TypeScript.
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Located in Kolkata, we serve clients globally while maintaining the personal touch of a local agency. Whether you need a simple landing page, complex e-commerce platform, or custom web application, we have the expertise and dedication to bring your vision to life.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* How We Work */}
        <div className="mb-16">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
            transition={{ duration: 0.6 }}
          >
            How we work
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {step: "01", title: "Discover", desc: "Understanding your goals, users, and technical requirements through detailed workshops and research."},
              {step: "02", title: "Plan", desc: "Creating lean technical roadmaps with clear milestones and measurable KPIs for success."},
              {step: "03", title: "Build", desc: "Iterative development with regular demos, testing, and transparent communication throughout."},
              {step: "04", title: "Scale", desc: "Post-launch monitoring, optimization, and ongoing support to ensure continued growth."},
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="card p-6 text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
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

        {/* Values */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {icon: "🎯", title: "Mission", desc: "Build useful, reliable software that helps businesses grow and scale efficiently."},
            {icon: "⚡", title: "Values", desc: "Clarity, craft, ownership, and measurable outcomes in everything we do."},
            {icon: "🚀", title: "Approach", desc: "Small, senior teams shipping in short, value-focused development cycles."},
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="card p-8 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-[var(--text-secondary)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


