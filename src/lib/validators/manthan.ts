import { z } from 'zod'

export const manthanInterestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  class_level: z.enum(['7', '8', '9', '10', '11', '12']).optional()
})

export type ManthanInterestInput = z.infer<typeof manthanInterestSchema>