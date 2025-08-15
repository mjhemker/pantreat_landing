'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingDown, Clock } from 'lucide-react'

export default function SocialProof() {
  const stats = [
    {
      icon: DollarSign,
      image: "/groceries_1.png",
      value: "$1,500 saved/yr",
      description: "Average annual savings"
    },
    {
      icon: TrendingDown,
      image: "/zero_waste_bag.png", 
      value: "15-25% less waste",
      description: "Reduction in food waste"
    },
    {
      icon: Clock,
      image: "/fork.png",
      value: "5 min setup",
      description: "To your first meal plan"
    }
  ]

  const logos = [
    { name: "TechCrunch", width: "w-32" },
    { name: "Product Hunt", width: "w-28" },
    { name: "Forbes", width: "w-24" },
    { name: "Fast Company", width: "w-36" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section 
      id="social-proof" 
      className="section-proof py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50/50"
    >
      <div className="max-w-[var(--max-width-content)] mx-auto">
        {/* Trust Statement */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-600 text-lg">
            Join the many home cooks saving money with Pantreat
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 justify-items-center sm:justify-items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            return (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4 p-3 relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src={stat.image} 
                    alt="" 
                    className="w-full h-full object-contain opacity-80"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply rounded-2xl"></div>
                </motion.div>
                <div className="text-2xl font-bold font-display text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-neutral-600 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}