'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-dark py-12">
      <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex flex-col items-center mb-4">
            <div className="relative w-16 h-16 mb-3 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/app_cover.png"
                alt="Pantreat Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-2xl font-bold font-display text-dark-primary">
              Pantreat
            </div>
          </div>

          {/* Tagline */}
          <p className="text-body-md text-dark-secondary mb-6 max-w-md mx-auto">
            Cook more. Waste less. Save money.
          </p>

          {/* Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <Link
              href="/support"
              className="text-body-sm text-dark-secondary hover:text-dark-primary transition-colors"
            >
              Support
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-body-sm text-dark-muted">
            © {currentYear} Pantreat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
