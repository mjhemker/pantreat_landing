import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  let ingredients: string[] = []
  let difficulty: string = 'any'
  let timeNeeded: string = 'any'

  try {
    const body = await request.json()
    ingredients = body.ingredients || []
    difficulty = body.difficulty || 'any'
    timeNeeded = body.timeNeeded || 'any'
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON in request body' },
      { status: 400 }
    )
  }

  if (!ingredients || ingredients.length === 0) {
    return NextResponse.json(
      { error: 'Ingredients are required' },
      { status: 400 }
    )
  }

  // Get OpenAI API key from environment variables
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY

  if (!OPENAI_API_KEY) {
    console.error('⚠️  OpenAI API key not configured')
    // Return fallback recipes instead of erroring
    return NextResponse.json(getFallbackRecipes(ingredients, difficulty, timeNeeded))
  }

  try {
    console.log('🤖 Generating recipes with OpenAI for ingredients:', ingredients)

    const difficultyFilter = difficulty !== 'any' ? ` Make it ${difficulty} difficulty.` : ''
    const timeFilter = timeNeeded !== 'any' ? ` Keep cooking time under ${timeNeeded} minutes.` : ''

    const prompt = `Create exactly 2 different recipes using primarily these ingredients: ${ingredients.join(', ')}.${difficultyFilter}${timeFilter}

Please format the response as a JSON array with exactly this structure:
[
  {
    "title": "Recipe Name",
    "time": "X minutes",
    "servings": "X servings", 
    "difficulty": "easy|medium|hard",
    "ingredients": ["ingredient 1", "ingredient 2", ...],
    "instructions": ["step 1", "step 2", ...],
    "tags": ["tag1", "tag2", "tag3"]
  },
  {
    // second recipe with same structure
  }
]

Make the recipes creative, practical, and focused on using the provided ingredients. Include cooking tips in the instructions where helpful. Ensure the difficulty matches what was requested.`

    console.log('🤖 Making OpenAI API request...')
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 1500,
        temperature: 0.8,
      }),
    })

    console.log('🤖 OpenAI API response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ OpenAI API error:', response.status, errorText)
      // Return fallback recipes instead of erroring
      return NextResponse.json(getFallbackRecipes(ingredients, difficulty, timeNeeded))
    }

    const data = await response.json()
    const content = data.choices[0]?.message?.content

    if (!content) {
      throw new Error('No content received from OpenAI')
    }

    try {
      // Try to parse the JSON response
      const recipes = JSON.parse(content)
      
      // Validate the response structure
      if (!Array.isArray(recipes) || recipes.length !== 2) {
        throw new Error('Invalid recipe format')
      }

      // Ensure each recipe has required fields
      const validatedRecipes = recipes.map(recipe => ({
        title: recipe.title || 'Unnamed Recipe',
        time: recipe.time || '30 minutes',
        servings: recipe.servings || '2 servings',
        difficulty: recipe.difficulty || 'medium',
        ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients : [],
        instructions: Array.isArray(recipe.instructions) ? recipe.instructions : [],
        tags: Array.isArray(recipe.tags) ? recipe.tags : ['Homemade'],
      }))

      console.log('✅ Successfully generated recipes with OpenAI')
      return NextResponse.json(validatedRecipes)
    } catch (parseError) {
      console.error('❌ Failed to parse OpenAI response:', parseError)
      // Return fallback recipes if parsing fails
      return NextResponse.json(getFallbackRecipes(ingredients, difficulty, timeNeeded))
    }
  } catch (error) {
    console.error('❌ Recipe generation error:', error)
    // Return generic fallback recipes as last resort
    return NextResponse.json([
      {
        title: 'Quick Stir-fry',
        time: '25 minutes',
        servings: '2 servings',
        difficulty: 'medium',
        ingredients: ['Mixed vegetables', 'Oil', 'Seasonings'],
        instructions: [
          'Heat oil in a large pan',
          'Add ingredients and cook for 5-10 minutes',
          'Season to taste and serve hot'
        ],
        tags: ['Quick', 'Easy', 'Healthy']
      },
      {
        title: 'Simple Medley',
        time: '30 minutes',
        servings: '2-3 servings',
        difficulty: 'easy',
        ingredients: ['Available ingredients', 'Basic seasonings'],
        instructions: [
          'Prepare ingredients',
          'Cook until tender',
          'Season and enjoy'
        ],
        tags: ['Comfort Food', 'Simple']
      }
    ])
  }
}

function getFallbackRecipes(ingredients: string[], difficulty: string, timeNeeded: string) {
  console.log('📝 Generating fallback recipes for:', ingredients)
  
  const fallbackRecipes = [
    {
      title: `${ingredients[0]} Stir-fry`,
      time: timeNeeded !== 'any' ? `${timeNeeded} minutes` : '25 minutes',
      servings: '2 servings',
      difficulty: difficulty !== 'any' ? difficulty : 'medium',
      ingredients: ingredients.slice(0, 5),
      instructions: [
        'Heat oil in a large pan over medium-high heat',
        `Add ${ingredients[0]} and cook for 3-5 minutes`,
        'Add remaining ingredients and stir-fry for 5-8 minutes',
        'Season with salt, pepper, and your favorite spices',
        'Serve hot over rice or noodles'
      ],
      tags: ['Quick', 'Homemade', 'Healthy']
    },
    {
      title: `${ingredients.length > 1 ? ingredients[1] : ingredients[0]} Medley`,
      time: timeNeeded !== 'any' ? `${Math.min(parseInt(timeNeeded) + 10, 60)} minutes` : '35 minutes',
      servings: '2-3 servings',
      difficulty: difficulty !== 'any' ? difficulty : 'easy',
      ingredients: ingredients,
      instructions: [
        'Prepare and chop all ingredients into similar sizes',
        'Heat a large skillet or pot over medium heat',
        'Add ingredients starting with the ones that take longest to cook',
        'Cook until all ingredients are tender and well combined',
        'Season to taste and serve warm'
      ],
      tags: ['Comfort Food', 'Filling', 'Family-friendly']
    }
  ]
  
  return fallbackRecipes
}