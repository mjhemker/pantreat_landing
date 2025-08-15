'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      quote: "I cooked 4 nights this week and spent less on groceries. Pantreat completely changed how I think about meal planning.",
      name: "Sarah Chen",
      location: "San Francisco, CA",
      rating: 5,
      savings: "$180/month"
    },
    {
      quote: "Finally, an app that actually helps me use what I already have. No more throwing out expired vegetables!",
      name: "Michael Rodriguez",
      location: "Austin, TX", 
      rating: 5,
      savings: "$200/month"
    },
    {
      quote: "The voice guidance is a game-changer. I can cook while helping my kids with homework - hands completely free.",
      name: "Jennifer Park",
      location: "Seattle, WA",
      rating: 5,
      savings: "$150/month"
    },
    {
      quote: "As a busy professional, Pantreat saves me hours of meal planning. The AI suggestions are surprisingly good!",
      name: "David Thompson",
      location: "New York, NY",
      rating: 5,
      savings: "$220/month"
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  return (
    <section 
      id="testimonials" 
      className="section-testimonials py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50/50"
    >
      <div className="max-w-[var(--max-width-content)] mx-auto">

      </div>
    </section>
  )
}