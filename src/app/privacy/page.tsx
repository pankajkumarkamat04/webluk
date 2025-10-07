export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-8">Privacy Policy</h1>
        <p className="text-[var(--text-muted)] text-center mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Contact us through our website or email</li>
                <li>Request a quote or consultation</li>
                <li>Engage our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>
              <p className="text-[var(--text-secondary)] mt-4">
                This information may include your name, email address, phone number, company information, project details, and any other information you choose to provide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Monitor and analyze usage and trends</li>
                <li>Personalize and improve your experience</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-[var(--text-secondary)]">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Remember your preferences and settings</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Improve website functionality and user experience</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-[var(--text-secondary)] mt-4">
                You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
              <p className="text-[var(--text-secondary)]">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-[var(--text-secondary)]">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
              <p className="text-[var(--text-secondary)]">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-[var(--text-secondary)]">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-[var(--text-secondary)]">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this privacy policy periodically.
              </p>
            </div>

            <div className="card p-6 mt-12">
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
