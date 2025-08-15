'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Load animation data
  const [animationData, setAnimationData] = useState(null)
  
  useEffect(() => {
    fetch('/iphone-animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error))
  }, [])

  return (
    <section 
      id="hero"
      className="section-hero min-h-screen relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-neutral-50 to-background"
    >
      {/* Animated Food Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Food Items */}
        <motion.img
          src="/acai_bowl.png"
          alt=""
          className="absolute top-16 left-12 w-48 h-48 opacity-15"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img
          src="/orange_fridge.png"
          alt=""
          className="absolute bottom-40 left-20 w-56 h-56 opacity-12"
          animate={{
            y: [-10, 10, -10],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating Orange Orbs for depth */}
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 bg-primary/8 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-20 h-20 bg-primary/6 rounded-full blur-lg"
          animate={{
            y: [20, -20, 20],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Subtle Food Pattern Overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 132, 24, 0.1) 2px, transparent 2px),
                             radial-gradient(circle at 80% 70%, rgba(255, 132, 24, 0.05) 1px, transparent 1px)`,
            backgroundSize: '120px 120px, 80px 80px'
          }} />
        </div>
      </div>
      {/* iPhone Animation - Positioned to the Right */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 z-0">
        <div className="max-w-[var(--max-width-content)] w-full flex items-center justify-end">
          <motion.div 
            className="h-[70vh] sm:h-[80vh] flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut" 
          }}
        >
          {animationData ? (
            <div className="w-full h-full overflow-visible relative flex items-center justify-center">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-auto h-full max-w-none"
                style={{ 
                  filter: 'drop-shadow(0 25px 50px rgba(255, 132, 24, 0.15))'
                }}
              />
            </div>
          ) : (
            /* Fallback while loading */
            <motion.div 
              className="w-80 h-[60vh] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-[3rem] flex items-center justify-center relative shadow-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotateY: [-2, 2, -2]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="w-72 h-[55vh] bg-black rounded-[2rem] flex items-center justify-center">
                <div className="w-64 h-[50vh] bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-[1.5rem] flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="text-primary font-semibold text-lg mb-2">Pantreat App</div>
                  <div className="text-neutral-600 text-sm">Your AI Kitchen Assistant</div>
                  
                  {/* Mock UI Elements */}
                  <div className="mt-6 space-y-3 w-full">
                    <div className="h-3 bg-primary/30 rounded-full"></div>
                    <div className="h-3 bg-primary/20 rounded-full w-3/4"></div>
                    <div className="h-3 bg-primary/10 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-xl opacity-50 -z-10"></div>
            </motion.div>
          )}
        </motion.div>
        </div>
      </div>

      {/* Foreground Content Card - Centered on Mobile, Left-aligned on Desktop */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-[var(--max-width-content)] w-full mx-auto flex items-center justify-center lg:justify-start">
          <motion.div
            className="backdrop-blur-lg bg-white/80 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-md lg:max-w-lg text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Headline */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-neutral-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>Cook more.</div>
              <div><span className="text-primary">Waste less.</span></div>
              <div>Save money.</div>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg sm:text-xl text-neutral-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Pantreat turns your pantry into personalized recipes—complete with 
              waste alerts, filters, and an AI cooking guide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-primary-dark transition-all duration-200 flex items-center justify-center group whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('pricing')}
              >
                Get Early Access
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button
                className="border-2 border-neutral-300 bg-white/60 backdrop-blur-sm text-neutral-700 px-6 py-3 rounded-lg font-semibold text-base hover:border-primary hover:text-primary transition-all duration-200 whitespace-nowrap"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('how-it-works')}
              >
                See how it works
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}