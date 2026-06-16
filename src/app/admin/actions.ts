"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

// --- RESULTS ACTIONS ---
export async function upsertResult(data: any) {
  const supabase = await createClient()
  const { id, ...rest } = data
  
  if (id) {
    const { error } = await supabase.from('results').update(rest).eq('id', id)
    if (error) throw new Error(error.message)
  } else {
    const { error } = await supabase.from('results').insert(rest)
    if (error) throw new Error(error.message)
  }
  revalidatePath('/admin/results')
}

export async function deleteResult(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('results').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/results')
}

export async function toggleResultStatus(id: string, field: 'is_published' | 'is_featured', currentValue: boolean) {
  const supabase = await createClient()
  const payload = { [field]: !currentValue } as any
  const { error } = await supabase.from('results').update(payload).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/results')
}

// --- RESULT IMAGES ACTIONS ---
export async function upsertResultImage(data: any) {
  const supabase = await createClient()
  const { id, ...rest } = data
  
  if (id) {
    const { error } = await supabase.from('result_images').update(rest).eq('id', id)
    if (error) throw new Error(error.message)
  } else {
    const { error } = await supabase.from('result_images').insert(rest)
    if (error) throw new Error(error.message)
  }
  revalidatePath('/admin/results')
  revalidatePath('/results')
  revalidatePath('/')
}

export async function deleteResultImage(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('result_images').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/results')
  revalidatePath('/results')
  revalidatePath('/')
}

export async function toggleResultImageStatus(id: string, currentValue: boolean) {
  const supabase = await createClient()
  const { error } = await supabase.from('result_images').update({ is_published: !currentValue }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/results')
  revalidatePath('/results')
  revalidatePath('/')
}

// --- FACULTY ACTIONS ---
export async function upsertFaculty(data: any) {
  const supabase = await createClient()
  const { id, ...rest } = data
  
  if (id) {
    const { error } = await supabase.from('faculty').update(rest).eq('id', id)
    if (error) throw new Error(error.message)
  } else {
    const { error } = await supabase.from('faculty').insert(rest)
    if (error) throw new Error(error.message)
  }
  revalidatePath('/admin/faculty')
  revalidatePath('/faculty')
}

export async function deleteFaculty(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('faculty').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/faculty')
  revalidatePath('/faculty')
}

export async function toggleFacultyStatus(id: string, currentValue: boolean) {
  const supabase = await createClient()
  const { error } = await supabase.from('faculty').update({ is_published: !currentValue }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/faculty')
  revalidatePath('/faculty')
}

export async function updateFacultySortOrder(id: string, newOrder: number) {
  const supabase = await createClient()
  const { error } = await supabase.from('faculty').update({ sort_order: newOrder }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/faculty')
  revalidatePath('/faculty')
}

// --- GALLERY ACTIONS ---
export async function insertGalleryItem(data: any) {
  const supabase = await createClient()
  const { error } = await supabase.from('gallery').insert(data)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/gallery')
  revalidatePath('/gallery')
}

export async function deleteGalleryItem(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('gallery').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/gallery')
  revalidatePath('/gallery')
}

export async function toggleGalleryStatus(id: string, currentValue: boolean) {
  const supabase = await createClient()
  const { error } = await supabase.from('gallery').update({ is_published: !currentValue }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/gallery')
  revalidatePath('/gallery')
}

// --- TESTIMONIALS ACTIONS ---
export async function upsertTestimonial(data: any) {
  const supabase = await createClient()
  const { id, ...rest } = data
  
  if (id) {
    const { error } = await supabase.from('testimonials').update(rest).eq('id', id)
    if (error) throw new Error(error.message)
  } else {
    const { error } = await supabase.from('testimonials').insert(rest)
    if (error) throw new Error(error.message)
  }
  revalidatePath('/admin/testimonials')
  revalidatePath('/testimonials')
}

export async function deleteTestimonial(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('testimonials').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/testimonials')
  revalidatePath('/testimonials')
}

export async function toggleTestimonialStatus(id: string, currentValue: boolean) {
  const supabase = await createClient()
  const { error } = await supabase.from('testimonials').update({ is_published: !currentValue }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/testimonials')
  revalidatePath('/testimonials')
}

// --- SITE SETTINGS ACTIONS ---
export async function updateSiteSetting(key: string, value: string) {
  const supabase = await createClient()
  
  // Try to update first, if no rows updated, insert it.
  const { error: updateError, data } = await supabase
    .from('site_settings')
    .update({ value, updated_at: new Date().toISOString() })
    .eq('key', key)
    .select()

  if (updateError) throw new Error(updateError.message)

  if (data && data.length === 0) {
    // Doesn't exist yet, insert
    const { error: insertError } = await supabase
      .from('site_settings')
      .insert({ key, value })
      
    if (insertError) throw new Error(insertError.message)
  }

  revalidatePath('/admin/settings')
  revalidatePath('/') // settings often affect homepage
}

// --- FEATURED REELS ACTIONS ---
export async function insertReel(data: any) {
  const supabase = await createClient()
  const { error } = await supabase.from('featured_reels').insert(data)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/reels')
  revalidatePath('/')
}

export async function deleteReel(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from('featured_reels').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/reels')
  revalidatePath('/')
}

export async function toggleReelStatus(id: string, currentValue: boolean) {
  const supabase = await createClient()
  const { error } = await supabase.from('featured_reels').update({ is_published: !currentValue }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/reels')
  revalidatePath('/')
}

export async function updateReelSortOrder(id: string, newOrder: number) {
  const supabase = await createClient()
  const { error } = await supabase.from('featured_reels').update({ sort_order: newOrder }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/admin/reels')
  revalidatePath('/')
}
