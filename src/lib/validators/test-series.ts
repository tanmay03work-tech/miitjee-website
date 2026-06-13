import { z } from 'zod'

export const testSeriesLeadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  class_level: z.enum(['Class 11', 'Class 12', 'Dropper (ReNEET)']),
  target_year: z.enum(['2025', '2026']).optional(),
  city: z.string().optional(),
  branch_pref: z.string().optional(),
  series_type: z.string().default('neet')
})

export type TestSeriesLeadInput = z.infer<typeof testSeriesLeadSchema>