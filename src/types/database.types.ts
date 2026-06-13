export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      branches: {
        Row: {
          id: string
          name: string
          slug: string
          address: string
          city: string
          phone: string[] | null
          whatsapp: string | null
          email: string | null
          maps_url: string | null
          is_active: boolean | null
          sort_order: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          slug: string
          address: string
          city: string
          phone?: string[] | null
          whatsapp?: string | null
          email?: string | null
          maps_url?: string | null
          is_active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          address?: string
          city?: string
          phone?: string[] | null
          whatsapp?: string | null
          email?: string | null
          maps_url?: string | null
          is_active?: boolean | null
          sort_order?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          id: string
          name: string
          phone: string
          email: string | null
          class_level: string | null
          programme: string | null
          branch_pref: string | null
          source: string | null
          message: string | null
          status: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          phone: string
          email?: string | null
          class_level?: string | null
          programme?: string | null
          branch_pref?: string | null
          source?: string | null
          message?: string | null
          status?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          email?: string | null
          class_level?: string | null
          programme?: string | null
          branch_pref?: string | null
          source?: string | null
          message?: string | null
          status?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      test_series_leads: {
        Row: {
          id: string
          name: string
          phone: string
          email: string | null
          series_type: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          phone: string
          email?: string | null
          series_type?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          email?: string | null
          series_type?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      manthan_interest: {
        Row: {
          id: string
          name: string
          phone: string
          class_level: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          phone: string
          class_level?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          class_level?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      results: {
        Row: {
          id: string
          student_name: string
          photo_url: string | null
          exam: string
          year: number
          rank_score: string | null
          institute: string | null
          programme: string
          branch_name: string | null
          is_featured: boolean | null
          is_published: boolean | null
          sort_order: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          student_name: string
          photo_url?: string | null
          exam: string
          year: number
          rank_score?: string | null
          institute?: string | null
          programme: string
          branch_name?: string | null
          is_featured?: boolean | null
          is_published?: boolean | null
          sort_order?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          student_name?: string
          photo_url?: string | null
          exam?: string
          year?: number
          rank_score?: string | null
          institute?: string | null
          programme?: string
          branch_name?: string | null
          is_featured?: boolean | null
          is_published?: boolean | null
          sort_order?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      faculty: {
        Row: {
          id: string
          name: string
          designation: string | null
          subject: string | null
          qualification: string | null
          credential: string | null
          experience_yrs: number | null
          bio: string | null
          photo_url: string | null
          sort_order: number | null
          is_published: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          designation?: string | null
          subject?: string | null
          qualification?: string | null
          credential?: string | null
          experience_yrs?: number | null
          bio?: string | null
          photo_url?: string | null
          sort_order?: number | null
          is_published?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          designation?: string | null
          subject?: string | null
          qualification?: string | null
          credential?: string | null
          experience_yrs?: number | null
          bio?: string | null
          photo_url?: string | null
          sort_order?: number | null
          is_published?: boolean | null
          created_at?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          id: string
          student_name: string
          photo_url: string | null
          quote: string
          programme: string | null
          year: number | null
          branch_name: string | null
          rating: number | null
          type: string | null
          is_published: boolean | null
          sort_order: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          student_name: string
          photo_url?: string | null
          quote: string
          programme?: string | null
          year?: number | null
          branch_name?: string | null
          rating?: number | null
          type?: string | null
          is_published?: boolean | null
          sort_order?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          student_name?: string
          photo_url?: string | null
          quote?: string
          programme?: string | null
          year?: number | null
          branch_name?: string | null
          rating?: number | null
          type?: string | null
          is_published?: boolean | null
          sort_order?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      gallery: {
        Row: {
          id: string
          title: string
          photo_url: string
          category: string | null
          is_published: boolean | null
          sort_order: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          title: string
          photo_url: string
          category?: string | null
          is_published?: boolean | null
          sort_order?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          photo_url?: string
          category?: string | null
          is_published?: boolean | null
          sort_order?: number | null
          created_at?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          key: string
          value: string | null
          updated_at: string | null
        }
        Insert: {
          key: string
          value?: string | null
          updated_at?: string | null
        }
        Update: {
          key?: string
          value?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
