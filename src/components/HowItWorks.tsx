'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const steps = [
    {
      number: '01',
      title: 'Know what you have',
      description: 'No guessing. No duplicates.'
    },
    {
      number: '02',
      title: 'We decide what to cook',
      description: 'Based on your pantry, time, and preferences.'
    },
    {
      number: '03',
      title: 'Just follow along',
      description: 'And we handle the rest.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.55, 0.45, 0.16, 1] as const }
    }
  }

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative section-padding bg-dark-secondary overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0 opacity-10" style={{ y: backgroundY }}>
        <Image
          src="/assets/pexels-cottonbro-3296580.jpg"
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
            How it actually works
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-10 md:justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group flex w-full justify-center"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex w-full max-w-[20rem] flex-col items-center text-center sm:max-w-[22rem]">
                {/* Step Number */}
                <motion.div
                  className="text-display-sm text-primary mb-6 opacity-60"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.div>

                {/* Step Title */}
                <h3 className="text-display-sm text-dark-primary mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-body-md text-dark-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
