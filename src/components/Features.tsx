'use client'

import { motion } from 'framer-motion'
import { 
  ChefHat, 
  Package, 
  Filter, 
  Users, 
  Bot, 
  Mic 
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: ChefHat,
      title: "Recipe from what you have",
      description: "Generate personalized recipes using ingredients already in your pantry.",
      color: "from-primary/20 to-primary-dark/20"
    },
    {
      icon: Package,
      title: "Inventory + alerts",
      description: "Track expiration dates and get smart reminders to use ingredients before they spoil.",
      color: "from-accent/20 to-orange-500/20"
    },
    {
      icon: Filter,
      title: "Powerful filters",
      description: "Filter recipes by time, diet, nutrition, cuisine, and cooking skill level.",
      color: "from-blue-400/20 to-blue-600/20"
    },
    {
      icon: Users,
      title: "Social & gamified",
      description: "Share meals with friends, compete on leaderboards, and earn cooking achievements.",
      color: "from-purple-400/20 to-purple-600/20"
    },
    {
      icon: Bot,
      title: "AI cooking guide",
      description: "Get step-by-step guidance with smart timing and cooking tips from your AI assistant.",
      color: "from-pink-400/20 to-pink-600/20"
    },
    {
      icon: Mic,
      title: "Hands-free voice",
      description: "Control the app with voice commands while your hands are busy cooking.",
      color: "from-green-400/20 to-green-600/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section 
      id="features" 
      className="section-features py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50/50 relative overflow-hidden"
    >
      {/* Floating Food Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src="/apple_pie.png"
          alt=""
          className="absolute top-20 right-16 w-44 h-44 opacity-10"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img
          src="/kebabs.png"
          alt=""
          className="absolute bottom-32 left-20 w-48 h-48 opacity-12"
          animate={{
            x: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
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
            Everything you need to cook smarter
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Powerful features that transform your kitchen experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Icon with gradient background */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br ${feature.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="h-8 w-8 text-neutral-700" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold font-display text-neutral-900 mb-4 group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-600 mb-6">
            Ready to experience the future of cooking?
          </p>
          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-200 inline-flex items-center group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('widgets')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Try our interactive demos
            <ChefHat className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}