'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(scrollY.get() > 64)
    const unsubscribe = scrollY.on('change', updateScrolled)
    updateScrolled()
    return unsubscribe
  }, [scrollY])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-neutral-200 py-3' 
          : 'bg-transparent py-6'
      }`}
      id="site-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div 
              className="text-2xl font-bold font-display text-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('hero')}
            >
              Pantreat
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              FAQ
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.button
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('pricing')}
              id="cta-primary"
            >
              Get Early Access
            </motion.button>
          </div>

          {/* Mobile Menu Button and CTA */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('pricing')}
            >
              Get App
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-neutral-200 mt-4">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block text-left w-full text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block text-left w-full text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block text-left w-full text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
            >
              FAQ
            </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}