'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus, DollarSign, Clock, Users, Loader2, ChefHat } from 'lucide-react'

interface Recipe {
  title: string
  time: string
  servings: string
  difficulty: string
  ingredients: string[]
  instructions: string[]
  tags: string[]
}

export default function InteractiveWidgets() {
  const [householdSize, setHouseholdSize] = useState(2)
  const [monthlySpend, setMonthlySpend] = useState(450)
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [customIngredient, setCustomIngredient] = useState('')
  const [difficulty, setDifficulty] = useState('any')
  const [timeNeeded, setTimeNeeded] = useState('any')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedRecipes, setGeneratedRecipes] = useState<Recipe[]>([])

  const ingredients = [
    'Eggs', 'Rice', 'Spinach', 'Chicken', 'Onion', 'Garlic', 
    'Tomatoes', 'Pasta', 'Cheese', 'Broccoli', 'Potatoes', 'Bell Peppers'
  ]

  // Calculate savings based on 15-25% waste reduction
  const calculateSavings = () => {
    const annualSpend = monthlySpend * 12
    const minSavings = Math.round(annualSpend * 0.15)
    const maxSavings = Math.round(annualSpend * 0.25)
    return { min: minSavings, max: maxSavings }
  }

  const savings = calculateSavings()

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : prev.length < 8 
        ? [...prev, ingredient]
        : prev
    )
  }

  const addCustomIngredient = () => {
    if (customIngredient.trim() && selectedIngredients.length < 8 && !selectedIngredients.includes(customIngredient.trim())) {
      setSelectedIngredients(prev => [...prev, customIngredient.trim()])
      setCustomIngredient('')
    }
  }

  const generateRecipes = async () => {
    if (selectedIngredients.length === 0) return

    setIsGenerating(true)
    setGeneratedRecipes([])

    try {
      const response = await fetch('/api/generate-recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: selectedIngredients,
          difficulty,
          timeNeeded,
        }),
      })

      if (response.ok) {
        const recipes = await response.json()
        setGeneratedRecipes(recipes)
      } else {
        console.error('Failed to generate recipes')
      }
    } catch (error) {
      console.error('Error generating recipes:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section 
      id="widgets" 
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[var(--max-width-content)] mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-900 mb-6">
            Try it yourself
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Get a preview of how Pantreat can transform your cooking
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 justify-items-center lg:justify-items-stretch">
          {/* Money Saved Calculator */}
          <motion.div
            className="widget-savings bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-display text-neutral-900 mb-2">
                How much could you save?
              </h3>
              <p className="text-neutral-600">
                Calculate your potential annual savings
              </p>
            </div>

            <div className="space-y-6">
              {/* Household Size */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Household size
                </label>
                <div className="flex items-center justify-center space-x-4">
                  <motion.button
                    className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors disabled:opacity-50"
                    onClick={() => setHouseholdSize(Math.max(1, householdSize - 1))}
                    disabled={householdSize <= 1}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Minus className="h-4 w-4" />
                  </motion.button>
                  
                  <div className="flex items-center space-x-2 min-w-[80px] justify-center">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-neutral-900">{householdSize}</span>
                  </div>
                  
                  <motion.button
                    className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors disabled:opacity-50"
                    onClick={() => setHouseholdSize(Math.min(6, householdSize + 1))}
                    disabled={householdSize >= 6}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>

              {/* Monthly Spend */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Monthly grocery spend
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type="number"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="450"
                  />
                </div>
              </div>

              {/* Results */}
              <motion.div 
                className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20"
                key={`${householdSize}-${monthlySpend}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold font-display text-primary mb-2">
                    ${savings.min.toLocaleString()} - ${savings.max.toLocaleString()}
                  </div>
                  <p className="text-neutral-700 font-medium mb-1">
                    Estimated annual savings
                  </p>
                  <p className="text-sm text-neutral-500">
                    Based on 15-25% food waste reduction
                  </p>
                </div>
              </motion.div>

              <p className="text-xs text-neutral-500 text-center">
                * Estimates for illustration only; results may vary based on shopping habits and food prices.
              </p>
            </div>
          </motion.div>

          {/* AI Recipe Generator */}
          <motion.div
            className="widget-pantry bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🥘
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold font-display text-neutral-900 mb-2">
                What can I cook with...
              </h3>
              <p className="text-neutral-600">
                Generate real recipes with AI
              </p>
            </div>

            <div className="space-y-6">
              {/* Ingredient Selection */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-3">
                  Choose ingredients (up to 8)
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {ingredients.map((ingredient) => (
                    <motion.button
                      key={ingredient}
                      onClick={() => toggleIngredient(ingredient)}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedIngredients.includes(ingredient)
                          ? 'bg-primary text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      } ${
                        selectedIngredients.length >= 8 && !selectedIngredients.includes(ingredient)
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                      disabled={selectedIngredients.length >= 8 && !selectedIngredients.includes(ingredient)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {ingredient}
                    </motion.button>
                  ))}
                </div>
                
                {/* Custom ingredient input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customIngredient}
                    onChange={(e) => setCustomIngredient(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addCustomIngredient()}
                    placeholder="Add your own ingredient..."
                    className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    disabled={selectedIngredients.length >= 8}
                  />
                  <motion.button
                    onClick={addCustomIngredient}
                    disabled={!customIngredient.trim() || selectedIngredients.length >= 8}
                    className="px-4 py-2 bg-primary text-white rounded-lg font-medium text-sm hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add
                  </motion.button>
                </div>
                
                <p className="text-xs text-neutral-500 mt-2">
                  {selectedIngredients.length}/8 ingredients selected
                </p>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Difficulty
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  >
                    <option value="any">Any difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Time needed
                  </label>
                  <select
                    value={timeNeeded}
                    onChange={(e) => setTimeNeeded(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                  >
                    <option value="any">Any time</option>
                    <option value="15">Under 15 minutes</option>
                    <option value="30">Under 30 minutes</option>
                    <option value="60">Under 1 hour</option>
                  </select>
                </div>
              </div>

              {/* Generate Button */}
              <motion.button
                onClick={generateRecipes}
                disabled={selectedIngredients.length === 0 || isGenerating}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                whileHover={{ scale: selectedIngredients.length > 0 ? 1.02 : 1 }}
                whileTap={{ scale: selectedIngredients.length > 0 ? 0.98 : 1 }}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Generating recipes...
                  </>
                ) : (
                  <>
                    <ChefHat className="h-5 w-5 mr-2" />
                    Generate 2 Recipes
                  </>
                )}
              </motion.button>

              {/* Generated Recipes */}
              {generatedRecipes.length > 0 && (
                <div className="space-y-4">
                  {generatedRecipes.map((recipe, index) => (
                    <motion.div
                      key={index}
                      className="bg-neutral-50 rounded-xl p-6 border border-neutral-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🍳</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-neutral-900 mb-2">
                            {recipe.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-3">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {recipe.time}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {recipe.servings}
                            </div>
                            <span className="px-2 py-1 bg-neutral-200 text-neutral-700 text-xs rounded-full">
                              {recipe.difficulty}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {recipe.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {selectedIngredients.length === 0 && (
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 text-center">
                  <p className="text-neutral-500">
                    Select some ingredients to generate AI recipes
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}