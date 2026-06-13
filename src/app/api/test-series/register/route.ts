import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Minimal server-side validation
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Insert into Supabase test_series_leads table
    // NOTE: Sending dummy values for removed fields to prevent 500 errors 
    // until the Supabase database schema is updated to remove these columns.
    const { error } = await supabase
      .from('test_series_leads')
      .insert([
        {
          name: body.name,
          phone: body.phone,
          email: body.email || null,
          series_type: 'neet',
          class_level: 'N/A', // Dummy value
          target_year: 'N/A', // Dummy value
          city: 'N/A', // Dummy value
          branch_pref: 'N/A' // Dummy value
        } as any
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to register lead' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}