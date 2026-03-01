'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import styles from './Testimonials.module.css'
import { useRef } from 'react'

export default function Testimonials() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  const quotes = [
    { text: "The hardest part is just starting — the planning, the organization, all of it.", author: "Grocery Shopper" },
    { text: "Cooking is easy. The prep work — especially chopping onions — is what really takes time.", author: "Grocery Shopper" },
    { text: "I know I could buy pre-cut vegetables, but it's not worth the extra money.", author: "Grocery Shopper" },
    { text: "Meal planning takes advance thought. If I don't plan ahead, it falls apart.", author: "Home Cook" },
    { text: "Vegetable prep is the most time-consuming part. Cleaning and cutting everything slows it down.", author: "Home Cook" },
    { text: "I want to stumble upon recipes naturally, like flipping through a cookbook — not have to search for something specific.", author: "Ezra" },
    { text: "If I'm missing one ingredient, I'm probably not cooking.", author: "Ezra" },
    { text: "Cooking is like a 1.5-hour mental break for me. I enjoy the challenge of figuring out what tastes good.", author: "James" },
    { text: "When I was shopping once a week with a full plan, it worked.", author: "James" },
    { text: "After work, I don't want to think about what to cook. The decision-making is exhausting.", author: "Meina" },
    { text: "I'd cook more if I had the time and energy. I actually prefer it to ordering takeout for myself.", author: "Isabella" },
    { text: "Cooking for one is hard. Ingredients expire before I can use all of them.", author: "Mrs. Garrison" },
    { text: "I don't enjoy cooking. I only do it because I have to save money.", author: "Femi" },
    { text: "If I had unlimited money, I'd just eat at restaurants.", author: "Femi" },
    { text: "I can't keep groceries good in my house because I'm busy and I never know what I'm actually going to be able to cook.", author: "Working Professional" },
    { text: "I travel a lot for work, so I don't want a full fridge. Things just start wilting and going bad.", author: "Working Professional" },
    { text: "Now I have three huge packs of Indian spices I'll use again, but something like Worcestershire sauce? I used it twice and it's probably expired, but it's still sitting there.", author: "Home Cook" },
    { text: "Meal delivery services weren't worth it — portions were small and quality wasn't great.", author: "Home Cook" },
    { text: "Cooking feels creative and relaxing — it's one of the few times I get into a flow state.", author: "Ezra" },
  ]

  // Divide quotes into 3 rows
  const row1 = quotes.slice(0, 7)
  const row2 = quotes.slice(7, 13)
  const row3 = quotes.slice(13)

  const TickerRow = ({ quotes, duration }: { quotes: typeof row1, duration: number }) => {
    return (
      <div className={styles.tickerWrapper}>
        <div className={styles.ticker} style={{ animationDuration: `${duration}s` }}>
          {/* Render quotes twice for seamless loop */}
          {[...quotes, ...quotes].map((quote, index) => (
            <div
              key={index}
              className={`${styles.tickerItem} glass-effect rounded-2xl px-6 py-4 border border-dark-light`}
            >
              <p className="text-body-md text-dark-primary italic">
                &quot;{quote.text}&quot;
              </p>
              <p className="text-body-sm text-dark-secondary mt-2">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative section-padding bg-dark-secondary overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0 opacity-10" style={{ y: backgroundY }}>
        <Image
          src="/assets/pexels-cottonbro-4252142.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 max-w-[var(--max-width-content)] mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display-md text-dark-primary mb-6">
            The Kitchen Struggle Is Real
          </h2>
          <p className="text-body-lg text-dark-secondary max-w-2xl mx-auto">
            Real people sharing their cooking challenges
          </p>
        </motion.div>

        {/* Scrolling Ticker Rows */}
        <div className="space-y-6">
          <TickerRow quotes={row1} duration={40} />
          <TickerRow quotes={row2} duration={35} />
          <TickerRow quotes={row3} duration={38} />
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-body-md text-dark-secondary mt-16 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          These are the problems Pantreat solves — making cooking easier, reducing waste, and taking the stress out of meal planning.
        </motion.p>
      </div>
    </section>
  )
}
