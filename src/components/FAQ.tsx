'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does Pantreat track expiration dates?",
      answer: "Pantreat uses a combination of receipt scanning, voice input, and a comprehensive database of average food shelf lives. You can also manually adjust dates for specific items. Our AI learns your usage patterns to provide more accurate predictions over time."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. We use industry-standard encryption and never sell your personal data. Your recipes, pantry inventory, and usage patterns stay private. You can export or delete your data at any time. We're committed to transparency in our privacy practices."
    },
    {
      question: "What dietary restrictions and cuisines are supported?",
      answer: "Pantreat supports all major dietary preferences including vegetarian, vegan, gluten-free, keto, paleo, and more. Our recipe database spans global cuisines from Italian and Mexican to Thai and Indian. You can set multiple dietary filters simultaneously."
    },
    {
      question: "Which platforms will Pantreat be available on?",
      answer: "We're launching on iOS and Android first, with a web app to follow. The mobile apps will have full functionality including voice commands, camera features, and offline access to your saved recipes and pantry."
    },
    {
      question: "How accurate are the money-saving estimates?",
      answer: "Our estimates are based on USDA data showing that average households waste 15-25% of purchased food. Your actual savings depend on current waste levels, grocery prices in your area, and how actively you use Pantreat's features."
    },
    {
      question: "Will there be a premium version after the beta?",
      answer: "Yes, we plan to offer both free and premium tiers. The free version will include basic recipe generation and pantry tracking. Premium will add advanced features like meal planning, shopping list optimization, and priority customer support."
    },
    {
      question: "Can I use Pantreat without voice features?",
      answer: "Absolutely! While voice commands are convenient during cooking, all features are fully accessible through touch interface. You can add ingredients by typing, navigate recipes with touch, and set timers manually."
    },
    {
      question: "How does the AI recipe generation work?",
      answer: "Our AI analyzes your available ingredients, dietary preferences, cooking time, and skill level to generate personalized recipes. It draws from a curated database of tested recipes and can suggest ingredient substitutions based on what you have."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq" 
      className="section-faq py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50/50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about Pantreat
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              >
                <span className="font-semibold text-neutral-900 text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-6 w-6 text-neutral-500" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-neutral-100">
                        <p className="text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions? */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold font-display text-neutral-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-neutral-600 mb-6">
            We&apos;re here to help! Reach out to our team.
          </p>
          <motion.button
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = 'mailto:pantreatapp@gmail.com'
            }}
          >
            Contact Support
            <HelpCircle className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}