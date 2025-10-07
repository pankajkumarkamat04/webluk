"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* 1) Hero */}
      <section className="hero-gradient min-h-[60vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[50vh] w-full">
          {/* Left Content Area */}
          <motion.div 
            className="hero-curve p-4 lg:p-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="water-droplet"></div>
            <div className="water-droplet"></div>
            <div className="water-droplet"></div>
            <div className="water-droplet"></div>
            <div className="water-ripple"></div>
            <div className="water-ripple"></div>
            <motion.div 
              className="max-w-md"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-3xl lg:text-5xl font-extrabold text-[var(--text-primary)] mb-2 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                Development
              </motion.h1>
              <motion.h2 
                className="text-base lg:text-lg text-[var(--text-secondary)] mb-3 font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                DIGITAL SOLUTIONS
              </motion.h2>
              <motion.p 
                className="text-[var(--text-secondary)] mb-4 leading-relaxed text-xs lg:text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              >
                We build scalable digital products that transform ideas into reality. 
                From web applications to mobile solutions, we deliver cutting-edge technology.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-2 items-center sm:items-start"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              >
                <motion.a 
                  href="/contact" 
                  className="btn btn-primary px-4 py-2 text-sm bg-gradient-to-r from-[var(--accent)] to-[#c44569] hover:from-[#c44569] hover:to-[var(--accent)] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  START PROJECT
                </motion.a>
                <motion.a 
                  href="/services" 
                  className="btn text-sm bg-transparent transition-all duration-300"
                  style={{ 
                    border: '2px solid #e53935',
                    color: '#e53935',
                    paddingLeft: 'calc(1rem - 2px)',
                    paddingRight: 'calc(1rem - 2px)',
                    paddingTop: 'calc(0.5rem - 2px)',
                    paddingBottom: 'calc(0.5rem - 2px)'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e53935';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#e53935';
                  }}
                >
                  OUR SERVICES
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Illustration Area */}
          <motion.div 
            className="isometric-container lg:block"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Laptop Illustration */}
            <motion.div 
              className="isometric-element laptop-illustration"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Image
                src="/hero-laptop.png"
                alt="Development laptop with cybersecurity theme"
                width={350}
                height={350}
                className="laptop-image"
              />
            </motion.div>

            {/* Binary Code Swing Effect */}
            <div className="binary-code">01001000</div>
            <div className="binary-code">11010101</div>
            <div className="binary-code">00110011</div>
            <div className="binary-code">10101010</div>
            <div className="binary-code">01100110</div>
            <div className="binary-code">11110000</div>
            <div className="binary-code">01010101</div>

            {/* Gear Icon */}
            <div className="isometric-element gear-icon"></div>

            {/* Camera Icon */}
            <div className="isometric-element camera-icon"></div>

            {/* Person Icon */}
            <div className="isometric-element person-icon"></div>

            {/* Chart Bars */}
            <div className="isometric-element chart-bars">
              <div className="chart-bar"></div>
              <div className="chart-bar"></div>
              <div className="chart-bar"></div>
            </div>

            {/* Pie Chart */}
            <div className="isometric-element pie-chart"></div>

            {/* Coins */}
            <div className="isometric-element coins">
              <div className="coin"></div>
              <div className="coin"></div>
              <div className="coin"></div>
            </div>

            {/* Magnifying Glass */}
            <div className="isometric-element magnifying-glass"></div>
          </motion.div>

            </div>
      </section>

      {/* 2) About */}
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container grid gap-6 lg:gap-8 lg:grid-cols-2 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-responsive-lg font-bold mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About us
            </motion.h2>
            <div className="text-[var(--text-secondary)] space-y-3">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Webluk Solutions is a development-first digital agency specializing in robust, scalable web applications. We bridge the gap between innovative ideas and technical execution, serving as a trusted partner for startups, small businesses, and enterprises looking to transform their digital presence.
              </motion.p>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Our core philosophy centers on clean, maintainable code and modern development practices. We architect systems that are secure, performant, and user-friendly, using cutting-edge technologies like React, Next.js, Node.js, and TypeScript.
              </motion.p>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Located in Kolkata, we serve clients globally while maintaining the personal touch of a local agency. Whether you need a simple landing page, complex e-commerce platform, or custom web application, we have the expertise and dedication to bring your vision to life.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="card overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/about.jpg" 
                alt="Webluk Solutions team working on development projects" 
                width={600}
                height={320}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 3) Services (3x3) */}
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2 
            className="text-responsive-lg font-bold text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our services
          </motion.h2>
          <div className="grid-responsive mt-4">
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
            ].map((s, index) => (
              <motion.div 
                key={s.name} 
                className="card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="text-3xl mb-2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {s.icon}
                </motion.div>
                <div className="font-semibold mt-2">{s.name}</div>
                <p className="text-[var(--text-muted)] mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4) Working Process */}
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h2 
            className="text-responsive-lg font-bold text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our working process
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
            {[
              {n: "1", t: "Discover", d: "Goals, users, constraints, KPIs"},
              {n: "2", t: "Design", d: "UX, UI, architecture"},
              {n: "3", t: "Build", d: "Sprints, QA, reviews"},
              {n: "4", t: "Grow", d: "Performance, SEO, analytics"},
            ].map((s, index) => (
              <motion.div 
                key={s.n} 
                className="card text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="text-2xl font-extrabold text-[var(--accent)]"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {s.n}
                </motion.div>
                <div className="font-semibold mt-2">{s.t}</div>
                <p className="text-[var(--text-muted)] mt-1">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5) Portfolio preview */}
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container text-center">
          <motion.h2 
            className="text-responsive-lg font-bold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Portfolio
          </motion.h2>
          <motion.p 
            className="text-[var(--text-secondary)] mt-2 max-w-[60ch] mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A glimpse of recent work. See the full case studies and live links on our portfolio page.
          </motion.p>
          <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {title: "Hosting Company Website (PHP + WHMCS)", image: "/portfolio-1.png"},
              {title: "POS System for Car Services (MERN)", image: "/portfolio-2.png"},
              {title: "Property Dealing Platform (MERN)", image: "/portfolio-3.png"},
              {title: "E‑commerce Platform", image: "/portfolio-4.png"},
              {title: "Software Selling Platform", image: "/portfolio-5.png"},
              {title: "WordPress ➜ MERN Migration", image: "/portfolio-6.png"},
            ].map((project, i) => (
              <motion.div 
                key={i} 
                className="card overflow-hidden rounded-none"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority={i < 3}
                    />
                  </motion.div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <a href="/portfolio" className="text-[var(--accent)] hover:underline text-sm font-medium">Read more →</a>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.a 
            href="/portfolio" 
            className="btn btn-primary mt-6 inline-block"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            See all projects
          </motion.a>
        </div>
      </motion.section>

      {/* 6) Contact */}
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="container card p-6 sm:p-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2 
            className="text-responsive-lg font-bold"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a project in mind?
          </motion.h2>
          <motion.p 
            className="text-[var(--text-secondary)] mt-2 max-w-[60ch] mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Tell us what you&apos;re building and we&apos;ll suggest the best approach.
          </motion.p>
          <motion.div 
            className="mt-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a 
              href="/contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
