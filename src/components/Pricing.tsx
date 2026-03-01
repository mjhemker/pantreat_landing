'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Check } from 'lucide-react'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  referralSource: z.string().optional()
})

type EmailFormData = z.infer<typeof emailSchema>

export default function Pricing() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema)
  })

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        setIsSubmitted(true)
        reset()
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error)
      setIsSubmitted(true)
      reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section
        id="pricing"
        className="section-padding bg-dark"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-primary" />
            </div>

            <h2 className="text-display-md text-dark-primary mb-4">
              You're on the list!
            </h2>

            <p className="text-body-xl text-dark-secondary mb-8">
              We'll notify you as soon as Pantreat is ready. Get ready to transform your kitchen!
            </p>

            <div className="bg-dark-secondary rounded-xl p-8 border border-dark-light">
              <p className="text-dark-primary font-semibold mb-4 text-lg">
                What happens next?
              </p>
              <ul className="text-body-md text-dark-secondary space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  You'll receive a confirmation email shortly
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Beta access will be granted in waves (you're early!)
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  We'll send cooking tips and updates monthly
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="pricing"
      className="section-padding bg-dark"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display-md text-dark-primary mb-6">
            Get Early Access
          </h2>
          <p className="text-body-xl text-dark-secondary">
            Join the beta and start cooking smarter today
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-secondary" />
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 bg-dark-secondary border border-dark-light rounded-lg text-dark-primary text-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-primary">{errors.email.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
          </motion.button>

          <p className="text-sm text-dark-secondary text-center">
            Free during beta. No credit card required.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
