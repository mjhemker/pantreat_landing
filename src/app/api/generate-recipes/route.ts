import { NextRequest, NextResponse } from 'next/server'

const OPENAI_API_KEY = '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'

export async function POST(request: NextRequest) {
  try {
    const { ingredients, difficulty, timeNeeded } = await request.json()

    if (!ingredients || ingredients.length === 0) {
      return NextResponse.json(
        { error: 'Ingredients are required' },
        { status: 400 }
      )
    }

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

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
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

      return NextResponse.json(validatedRecipes)
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', parseError)
      
      // Fallback to mock recipes if parsing fails
      const fallbackRecipes = [
        {
          title: `${ingredients[0]} Stir-fry`,
          time: timeNeeded !== 'any' ? `${timeNeeded} minutes` : '25 minutes',
          servings: '2 servings',
          difficulty: difficulty !== 'any' ? difficulty : 'medium',
          ingredients: ingredients.slice(0, 5),
          instructions: [
            'Heat oil in a large pan',
            'Add ingredients and cook for 5-10 minutes',
            'Season to taste',
            'Serve hot'
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
            'Prepare all ingredients',
            'Combine in a cooking vessel',
            'Cook until tender',
            'Adjust seasoning and serve'
          ],
          tags: ['Comfort Food', 'Filling', 'Family-friendly']
        }
      ]
      
      return NextResponse.json(fallbackRecipes)
    }
  } catch (error) {
    console.error('Recipe generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate recipes' },
      { status: 500 }
    )
  }
}