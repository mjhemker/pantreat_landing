import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support - Pantreat',
  description: 'Get help with Pantreat. Find answers to common questions, contact our support team, or report issues.',
}

export default function SupportPage() {
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
              Support
            </h1>
            <p className="text-body-lg text-dark-secondary max-w-2xl mx-auto">
              We&apos;re here to help you get the most out of Pantreat.
            </p>
          </div>

          {/* Support Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Email */}
            <div className="bg-dark-secondary rounded-2xl p-8 border border-dark hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-display-sm font-display text-dark-primary mb-3">
                Email Support
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                Have a question or need help? Send us an email and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:support@getpantreat.com"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                support@getpantreat.com
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-dark-secondary rounded-2xl p-8 border border-dark hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-display-sm font-display text-dark-primary mb-3">
                FAQ
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                Find quick answers to the most commonly asked questions about Pantreat.
              </p>
              <Link
                href="/#faq"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                View FAQ
              </Link>
            </div>

            {/* Feedback */}
            <div className="bg-dark-secondary rounded-2xl p-8 border border-dark hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h2 className="text-display-sm font-display text-dark-primary mb-3">
                Feedback
              </h2>
              <p className="text-body-md text-dark-secondary mb-4">
                Have ideas to improve Pantreat? We&apos;d love to hear your suggestions.
              </p>
              <a
                href="mailto:feedback@getpantreat.com"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                feedback@getpantreat.com
              </a>
            </div>
          </div>

          {/* Common Topics */}
          <div className="mb-16">
            <h2 className="text-display-sm font-display text-dark-primary mb-8 text-center">
              Common Topics
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-dark-secondary/50 rounded-xl p-6 border border-dark">
                <h3 className="text-body-lg font-semibold text-dark-primary mb-2">
                  Getting Started
                </h3>
                <p className="text-body-md text-dark-secondary">
                  Download Pantreat from the App Store and create your account to start tracking your pantry and discovering recipes.
                </p>
              </div>
              <div className="bg-dark-secondary/50 rounded-xl p-6 border border-dark">
                <h3 className="text-body-lg font-semibold text-dark-primary mb-2">
                  Account Issues
                </h3>
                <p className="text-body-md text-dark-secondary">
                  Having trouble logging in or managing your account? Email us at support@getpantreat.com for assistance.
                </p>
              </div>
              <div className="bg-dark-secondary/50 rounded-xl p-6 border border-dark">
                <h3 className="text-body-lg font-semibold text-dark-primary mb-2">
                  Recipe Suggestions
                </h3>
                <p className="text-body-md text-dark-secondary">
                  Our AI learns from your preferences. The more you use Pantreat, the better your recipe recommendations become.
                </p>
              </div>
              <div className="bg-dark-secondary/50 rounded-xl p-6 border border-dark">
                <h3 className="text-body-lg font-semibold text-dark-primary mb-2">
                  Privacy & Data
                </h3>
                <p className="text-body-md text-dark-secondary">
                  Your data is encrypted and secure. We never sell your personal information to third parties.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
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
