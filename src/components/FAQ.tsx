'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does Pantreat work?",
      answer: "Pantreat scans your pantry ingredients and uses AI to suggest personalized recipes. You can take photos of your items or manually add them. Our algorithm considers expiration dates, dietary preferences, and your cooking history to provide the best suggestions."
    },
    {
      question: "Is Pantreat free?",
      answer: "Yes! Pantreat is completely free during our beta period. Beta testers get full access to all features at no cost. We'll notify you well in advance of any pricing changes."
    },
    {
      question: "What platforms will Pantreat be available on?",
      answer: "We're launching on iOS first, with Android coming shortly after. We're also developing a web app so you can access your pantry and recipes from any device."
    },
    {
      question: "How does the waste tracking work?",
      answer: "Pantreat tracks expiration dates for all your ingredients and sends notifications before items go bad. It prioritizes recipes that use ingredients nearing expiration, helping you reduce waste significantly."
    },
    {
      question: "Can I customize recipes for dietary restrictions?",
      answer: "Absolutely! You can filter recipes by dietary preferences including vegetarian, vegan, gluten-free, dairy-free, and more. You can also exclude specific allergens or ingredients you don't like."
    },
    {
      question: "When will Pantreat be available?",
      answer: "We're in beta testing now and rolling out access in waves. Join our waitlist to get early access and be among the first to try Pantreat."
    }
  ]

  return (
    <section
      id="faq"
      className="section-padding bg-dark-secondary"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display-md text-dark-primary mb-6">
            Questions?
          </h2>
          <p className="text-body-lg text-dark-secondary">
            Everything you need to know about Pantreat
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-dark rounded-lg border border-dark-light overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-dark-tertiary transition-colors"
              >
                <span className="text-body-lg text-dark-primary font-semibold pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-dark-secondary flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-body-md text-dark-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
