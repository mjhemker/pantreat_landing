'use client'

import { motion } from 'framer-motion'
import { Camera, ChefHat, Timer } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      image: "/pantry.png",
      title: "Add your pantry",
      description: "Add your pantry in minutes—text, voice, or receipt scan.",
      features: ["Text input", "Voice recognition", "Receipt scanning"]
    },
    {
      icon: ChefHat,
      image: "/salad_bowl.png",
      title: "Get recipes",
      description: "Pantreat curates recipes tailored to your time, diet, and cuisine.",
      features: ["Custom filters", "Dietary preferences", "Time constraints"]
    },
    {
      icon: Timer,
      image: "/cooking_utensils.png",
      title: "Cook with AI",
      description: "Cook step-by-step with hands-free voice and built-in timers.",
      features: ["Voice guidance", "Smart timers", "Step-by-step instructions"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section 
      id="how-it-works" 
      className="section-how py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[var(--max-width-content)] mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 mb-6">
            How it works
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Transform your cooking experience in three simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="space-y-16 lg:space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div 
                  key={index}
                  className="relative text-center group"
                  variants={itemVariants}
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-1/2 z-0" />
                  )}
                  
                  {/* Step Content */}
                  <div className="relative z-10">
                    {/* Step Number */}
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white text-lg font-bold rounded-full mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {index + 1}
                    </motion.div>
                    
                    {/* Food Image */}
                    <motion.div 
                      className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-2xl mb-6 p-4 relative overflow-hidden"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={step.image} 
                        alt="" 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply rounded-2xl"></div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold font-display text-neutral-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-6 max-w-xs mx-auto">
                      {step.description}
                    </p>
                    
                    {/* Feature List */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-neutral-500 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0 sm:text-left"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center">
                    {/* Step Number */}
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 bg-primary text-white text-lg font-bold rounded-full mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {index + 1}
                    </motion.div>
                    
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    {/* Icon */}
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="h-8 w-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold font-display text-neutral-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4">
                      {step.description}
                    </p>
                    
                    {/* Feature List */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-neutral-500 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}