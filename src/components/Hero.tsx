'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Background moves slower, more parallax due to taller section
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "40%"])
  // Content fades out more gradually over the taller section
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0])
  // Text moves up slightly as you scroll for extra depth
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '150vh' }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: backgroundY,
          height: '120%',
          top: '-10%'
        }}
      >
        <Image
          src="/assets/hero_image.png"
          alt="Cooking background"
          fill
          className="object-cover"
          style={{ filter: 'blur(3px)' }}
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.7))'
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[var(--max-width-content)] mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40"
        style={{ opacity, y: textY }}
      >
        <div className="max-w-4xl">
          {/* Main Headline - Large, Bold Typography */}
          <motion.h1
            className="text-display-xl text-dark-primary mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.55, 0.45, 0.16, 1] }}
          >
            Cook more.
            <br />
            <span className="text-primary">Waste less.</span>
            <br />
            Save money.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-body-xl text-dark-secondary mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.55, 0.45, 0.16, 1] }}
          >
            Why does cooking have to feel like a chore? Let's make it fun again.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.55, 0.45, 0.16, 1] }}
          >
            <motion.button
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-smooth flex items-center group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('pricing')}
            >
              Get Early Access
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{ opacity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-dark-secondary rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 bg-dark-secondary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
