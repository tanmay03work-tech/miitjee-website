import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  class_level: z.string().optional(),
  programme: z.enum(['jee', 'neet', 'foundation', 'unsure']).optional(),
  branch_pref: z.string().optional(),
  source: z.string().default('homepage'),
  message: z.string().optional()
})

export type LeadInput = z.infer<typeof leadSchema>