'use client'

import { motion } from 'framer-motion'
import { 
  ChefHat, 
  Bot, 
  Package, 
  Users, 
  Sparkles,
  Timer,
  Bell,
  Trophy
} from 'lucide-react'

export default function DeepDiveSections() {
  const sections = [
    {
      id: 'section-recipe3d',
      title: 'AI Recipe Generation',
      subtitle: 'From pantry to plate in seconds',
      description: 'Watch as our AI transforms your available ingredients into delicious, personalized recipes tailored to your preferences.',
      features: [
        { icon: Sparkles, text: 'Uses your exact pantry inventory' },
        { icon: ChefHat, text: 'Filters for time, diet, and cuisine' },
        { icon: Bot, text: 'Smart ingredient substitutions' }
      ],
      video: '/recipes.mp4',
      gradient: 'from-primary/20 to-primary-dark/30'
    },
    {
      id: 'section-cooking3d',
      title: 'AI Cooking Experience',
      subtitle: 'Your personal sous chef',
      description: 'Get guided through every step with smart timers, voice commands, and real-time cooking assistance.',
      features: [
        { icon: Timer, text: 'Step-by-step guidance with smart timers' },
        { icon: Bot, text: 'Voice commands for hands-free control' },
        { icon: Sparkles, text: 'Adaptive cooking tips and techniques' }
      ],
      video: '/cooking_walkthrough.mp4',
      gradient: 'from-blue-400/20 to-blue-600/30'
    },
    {
      id: 'section-pantry3d',
      title: 'Smart Inventory Tracking',
      subtitle: 'Never waste food again',
      description: 'Automatically track expiration dates, get timely reminders, and optimize your grocery shopping.',
      features: [
        { icon: Package, text: 'Receipt scan and voice input' },
        { icon: Bell, text: 'Smart expiration reminders' },
        { icon: Bot, text: 'Automated shopping list generation' }
      ],
      video: '/MyPantry.mp4',
      gradient: 'from-orange-400/20 to-orange-600/30'
    },
    {
      id: 'section-social3d',
      title: 'Social Cooking Community',
      subtitle: 'Cook, share, compete',
      description: 'Join a community of home cooks, share your creations, and unlock achievements as you improve.',
      features: [
        { icon: Users, text: 'Share meals with friends and family' },
        { icon: Trophy, text: 'Cooking challenges and leaderboards' },
        { icon: Sparkles, text: 'Achievement system and badges' }
      ],
      video: '/posting_feed.mov',
      gradient: 'from-purple-400/20 to-purple-600/30'
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
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="py-20">
      {sections.map((section, index) => (
        <section 
          key={section.id}
          id={section.id}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${
            index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
          }`}
        >
          <div className="max-w-[var(--max-width-content)] mx-auto">
            <motion.div 
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Demo Video Column */}
              <motion.div 
                className={`relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} flex justify-center lg:justify-start`}
                variants={itemVariants}
              >
                <div className="relative aspect-[9/16] max-w-sm mx-auto lg:mx-0">
                  {/* Demo Video */}
                  <motion.div 
                    className="w-full h-full rounded-3xl overflow-hidden shadow-2xl relative bg-neutral-900"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      style={{
                        borderRadius: '1.5rem'
                      }}
                    >
                      <source src={section.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none rounded-3xl" />
                    
                    {/* Play indicator */}
                    <motion.div 
                      className="absolute top-4 right-4 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[3px] border-y-transparent ml-0.5" />
                    </motion.div>
                  </motion.div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} rounded-3xl blur-2xl opacity-40 -z-10 scale-110`} />
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                variants={itemVariants}
              >
                <div className="max-w-xl">
                  <motion.div
                    className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    {section.subtitle}
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 mb-6">
                    {section.title}
                  </h2>

                  <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                    {section.description}
                  </p>

                  <div className="space-y-4">
                    {section.features.map((feature, featureIndex) => {
                      const IconComponent = feature.icon
                      return (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-4"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-neutral-700 font-medium">
                            {feature.text}
                          </p>
                        </motion.div>
                      )
                    })}
                  </div>

                  <motion.button
                    className="mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.getElementById('pricing')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    Try it now
                    <ChefHat className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}