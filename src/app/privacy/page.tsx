import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Pantreat',
  description: 'Privacy Policy for Pantreat. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Header */}
      <header className="border-b border-dark py-4">
        <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/assets/app_cover.png"
                alt="Pantreat Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-bold font-display text-dark-primary">
              Pantreat
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="section-padding">
        <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-display-md font-display text-dark-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-body-lg text-dark-secondary max-w-2xl mx-auto">
              Last updated: April 15, 2025
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                Introduction
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                Pantreat (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
              <p className="text-body-md text-dark-secondary">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                Information We Collect
              </h2>

              <h3 className="text-body-lg font-semibold text-dark-primary mb-3">
                Personal Information
              </h3>
              <p className="text-body-md text-dark-secondary mb-4">
                We may collect personal information that you voluntarily provide when you register for an account, including:
              </p>
              <ul className="list-disc list-inside text-body-md text-dark-secondary mb-6 space-y-2">
                <li>Email address</li>
                <li>Name</li>
                <li>Account credentials</li>
              </ul>

              <h3 className="text-body-lg font-semibold text-dark-primary mb-3">
                Usage Data
              </h3>
              <p className="text-body-md text-dark-secondary mb-4">
                We automatically collect certain information when you use the app, including:
              </p>
              <ul className="list-disc list-inside text-body-md text-dark-secondary space-y-2">
                <li>Pantry items and inventory data you add</li>
                <li>Recipe preferences and interactions</li>
                <li>App usage patterns and features accessed</li>
                <li>Device information (device type, operating system)</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                How We Use Your Information
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-body-md text-dark-secondary space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Generate personalized recipe recommendations</li>
                <li>Track your pantry inventory and expiration dates</li>
                <li>Send you notifications about expiring items (if enabled)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to improve the app experience</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                Data Storage and Security
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. Your data is encrypted both in transit and at rest.
              </p>
              <p className="text-body-md text-dark-secondary">
                While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                Third-Party Services
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                We may use third-party services that collect information used to identify you. These services have their own privacy policies addressing how they use such information:
              </p>
              <ul className="list-disc list-inside text-body-md text-dark-secondary space-y-2">
                <li>Cloud storage providers for data backup</li>
                <li>Analytics services to improve app performance</li>
                <li>AI services for recipe generation</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                Data Sharing
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following situations:
              </p>
              <ul className="list-disc list-inside text-body-md text-dark-secondary space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in operating our app</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                Your Rights
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-body-md text-dark-secondary space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to delete your data</li>
                <li>The right to data portability</li>
                <li>The right to opt out of certain data processing</li>
              </ul>
              <p className="text-body-md text-dark-secondary mt-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@getpantreat.com" className="text-primary hover:text-primary-dark transition-colors">
                  privacy@getpantreat.com
                </a>
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-body-md text-dark-secondary">
                Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                Changes to This Policy
              </h2>
              <p className="text-body-md text-dark-secondary">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-display-sm font-display text-dark-primary mb-4">
                Contact Us
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-body-md text-dark-secondary space-y-2">
                <li>
                  Email:{' '}
                  <a href="mailto:privacy@getpantreat.com" className="text-primary hover:text-primary-dark transition-colors">
                    privacy@getpantreat.com
                  </a>
                </li>
                <li>
                  Support:{' '}
                  <Link href="/support" className="text-primary hover:text-primary-dark transition-colors">
                    Visit our Support page
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-flex items-center text-dark-secondary hover:text-dark-primary transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark border-t border-dark py-8">
        <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-body-sm text-dark-muted">
            &copy; {new Date().getFullYear()} Pantreat. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
