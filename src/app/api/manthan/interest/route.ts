import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, class_level } = body;

    if (!name || !phone || !class_level) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { error } = await supabase.from("manthan_interest").insert([
      {
        name,
        phone,
        class_level,
      },
    ]);

    if (error) {
      console.error("Error inserting interest:", error);
      return NextResponse.json(
        { error: "Failed to save interest" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}