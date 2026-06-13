import { NextRequest, NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validators/lead'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Validate with Zod
    const result = leadSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const supabase = await createClient()
    const { error } = await supabase
      .from('leads')
      .insert(result.data)

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { success: false, error: 'Database error occurred' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}