'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  const features = [
    {
      title: 'We tell you what to cook',
      description: 'Based on what you already have.',
      image: '/assets/featured_image_1.jpg'
    },
    {
      title: 'Stop wasting food you forgot you had',
      description: 'We remind you before it's too late.',
      image: '/assets/featured_image_2.jpg'
    },
    {
      title: 'Meals that fit your life',
      description: 'Time, diet, allergies, whatever.',
      image: '/assets/featured_image_3.jpg'
    },
    {
      title: 'Just follow along',
      description: 'Like someone cooking with you.',
      image: '/assets/featured_image_4.jpg'
    },
    {
      title: 'See it. Save it. Make it.',
      description: 'Turn scrolling into cooking.',
      image: '/assets/featured_image_5.jpg'
    },
    {
      title: 'Spend less without trying',
      description: 'Cook more. Order less.',
      image: '/assets/featured_image_6.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.55, 0.45, 0.16, 1] as const }
    }
  }

  return (
    <section
      ref={ref}
      id="features"
      className="relative section-padding bg-dark overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0 opacity-5" style={{ y: backgroundY }}>
        <Image
          src="/assets/pexels-cottonbro-4543005.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 max-w-[var(--max-width-content)] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-display-md text-dark-primary mb-6">
            From "what should I make?" to "that was easy."
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-dark-secondary hover-scale cursor-pointer"
              variants={itemVariants}
            >
              {/* Feature Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/30 group-hover:from-dark group-hover:via-dark/85 transition-all duration-500" />
              </div>

              {/* Feature Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-display-sm text-dark-primary mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-body-md text-white">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
