'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Check, Gift, Users, Sparkles } from 'lucide-react'

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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Email signup:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
  }

  const referralSources = [
    'Search engine',
    'Social media',
    'Friend or family',
    'Tech blog/news',
    'Other'
  ]

  const betaFeatures = [
    {
      icon: Gift,
      title: 'Free during beta',
      description: 'Full access to all features at no cost'
    },
    {
      icon: Users,
      title: 'Priority support',
      description: 'Direct line to our development team'
    },
    {
      icon: Sparkles,
      title: 'Shape the product',
      description: 'Your feedback influences new features'
    }
  ]

  if (isSubmitted) {
    return (
      <section 
        id="pricing" 
        className="section-pricing py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-primary" />
            </div>
            
            <h2 className="text-3xl font-bold font-display text-neutral-900 mb-4">
              You&apos;re on the list! 🎉
            </h2>
            
            <p className="text-xl text-neutral-600 mb-8">
              We&apos;ll notify you as soon as Pantreat is ready. Get ready to transform your kitchen!
            </p>
            
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <p className="text-neutral-700 mb-4">
                <strong>What happens next?</strong>
              </p>
              <ul className="text-sm text-neutral-600 space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  You&apos;ll receive a confirmation email shortly
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Beta access will be granted in waves (you&apos;re early!)
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  We&apos;ll send cooking tips and updates monthly
                </li>
              </ul>
            </div>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-primary hover:underline mt-6 text-sm"
            >
              Want to refer a friend?
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section 
      id="pricing" 
      className="section-pricing py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary-dark/10"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 mb-6">
            Join the beta
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Be among the first to experience the future of cooking. Free during beta with full access to all features.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Beta Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-display text-neutral-900 mb-8">
              What you get as a beta user:
            </h3>
            
            <div className="space-y-6">
              {betaFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-neutral-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 p-6 bg-white/50 rounded-xl border border-neutral-200">
              <p className="text-sm text-neutral-600">
                <strong className="text-neutral-900">Limited spots available.</strong> We&apos;re accepting a small group of beta users to ensure the best experience for everyone.
              </p>
            </div>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 mb-2">
                  Get early access
                </h3>
                <p className="text-neutral-600">
                  Join the waitlist for exclusive beta access
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-300' : 'border-neutral-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Referral Source */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    How did you hear about us? (optional)
                  </label>
                  <select
                    {...register('referralSource')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select an option</option>
                    {referralSources.map((source) => (
                      <option key={source} value={source}>
                        {source}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Joining...
                    </div>
                  ) : (
                    'Join the beta waitlist'
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-xs text-neutral-500 text-center">
                  We respect your privacy. Unsubscribe at any time.{' '}
                  <button className="text-primary hover:underline">
                    Privacy Policy
                  </button>
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-600 mb-6">
            Join the waitlist now!
          </p>
          <div className="flex justify-center space-x-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.1 
                }}
              >
                <span className="text-xs">👤</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}