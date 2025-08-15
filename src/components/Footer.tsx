'use client'

import { motion } from 'framer-motion'
import { Twitter, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'How it works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Beta access', href: '#pricing' }
    ],
    support: [
      { name: 'Help center', href: '#' },
      { name: 'Contact us', href: 'mailto:pantreatapp@gmail.com' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Status', href: '#' }
    ],
    legal: [
      { name: 'Privacy policy', href: '#' },
      { name: 'Terms of service', href: '#' },
      { name: 'Cookie policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/pantreat' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/pantreat' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/pantreat' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/pantreat' }
  ]

  const scrollToSection = (id: string) => {
    if (id.startsWith('#')) {
      const element = document.getElementById(id.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer 
      id="site-footer" 
      className="bg-neutral-900 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[var(--max-width-content)] mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-3xl font-bold font-display text-primary">
                Pantreat
              </div>
            </div>
            
            <p className="text-neutral-300 mb-8 leading-relaxed">
              Your AI-powered kitchen assistant that turns pantry ingredients into personalized recipes, 
              reduces food waste, and saves you money.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center text-neutral-300">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <a href="mailto:pantreatapp@gmail.com" className="hover:text-primary transition-colors">
                  pantreatapp@gmail.com
                </a>
              </div>
              <div className="flex items-center text-neutral-300">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-neutral-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-neutral-400 text-sm">
              © {currentYear} Pantreat. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-neutral-400 text-sm mr-2">Follow us</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.div
                    key={index}
                    className="text-neutral-500 cursor-not-allowed"
                    whileHover={{ scale: 1.1 }}
                    aria-label={`${social.name} (Coming soon)`}
                    title="Coming soon"
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Newsletter signup mini */}
          <motion.div 
            className="mt-8 pt-8 border-t border-neutral-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <p className="text-neutral-300 text-sm mb-4">
                Get cooking tips and product updates delivered to your inbox
              </p>
              <motion.button
                onClick={() => scrollToSection('#pricing')}
                className="bg-primary/10 border border-primary/20 text-primary px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join our newsletter
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}