export default function TermsPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-8">Terms of Service</h1>
        <p className="text-[var(--text-muted)] text-center mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-[var(--text-secondary)]">
                By accessing and using Webluk Solutions&apos; services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Webluk Solutions provides web development, mobile app development, UI/UX design, DevOps, and related digital services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Custom web application development</li>
                <li>Mobile app development (iOS, Android, Cross-platform)</li>
                <li>E-commerce solutions and integrations</li>
                <li>API and backend development</li>
                <li>UI/UX design services</li>
                <li>DevOps and cloud infrastructure</li>
                <li>Performance optimization and SEO</li>
                <li>Maintenance and support services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Provide accurate and complete information required for project execution</li>
                <li>Respond to requests for feedback and approval within agreed timeframes</li>
                <li>Provide necessary access to systems, accounts, and resources</li>
                <li>Make timely payments as per the agreed schedule</li>
                <li>Respect intellectual property rights and confidentiality</li>
                <li>Use the delivered services in compliance with applicable laws</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Projects may require an upfront deposit (typically 30-50%)</li>
                <li>Remaining payments are due upon milestone completion or project delivery</li>
                <li>Late payments may incur additional charges</li>
                <li>All prices are exclusive of applicable taxes</li>
                <li>Refunds are subject to our refund policy outlined in the project agreement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Unless otherwise specified in writing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Client retains ownership of all pre-existing intellectual property</li>
                <li>Webluk Solutions retains ownership of proprietary tools, frameworks, and methodologies</li>
                <li>Upon full payment, client receives ownership of custom-developed code and designs</li>
                <li>Third-party components remain subject to their respective licenses</li>
                <li>Webluk Solutions may use project work for portfolio and marketing purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
              <p className="text-[var(--text-secondary)]">
                Both parties agree to maintain confidentiality of sensitive information shared during the course of the project. This includes business strategies, technical specifications, user data, and any other proprietary information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-[var(--text-secondary)]">
                Webluk Solutions&apos; liability is limited to the total amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages. This limitation applies to the fullest extent permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Either party may terminate services with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Client pays for all work completed up to the termination date</li>
                <li>Webluk Solutions delivers all completed work and materials</li>
                <li>Confidentiality obligations continue indefinitely</li>
                <li>Intellectual property rights are transferred as per the agreement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="text-[var(--text-secondary)]">
                These terms are governed by the laws of India. Any disputes will be resolved through arbitration in Kolkata, West Bengal, India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="text-[var(--text-secondary)]">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </div>

            <div className="card p-6 mt-12">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <p className="text-[var(--text-secondary)] mb-2">
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="text-[var(--text-secondary)]">
                <strong>Email:</strong> info@webluksolutions.com<br />
                <strong>Phone:</strong> +91 7292932411<br />
                <strong>Address:</strong> Green Village, Kolkata — 700150
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
