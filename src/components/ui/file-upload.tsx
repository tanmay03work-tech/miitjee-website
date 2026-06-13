"use client"

import * as React from "react"
import { useState } from "react"
import { UploadCloud, X, Loader2, FileIcon } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  bucket: string
  value?: string | null
  onChange?: (url: string) => void
  onRemove?: () => void
  accept?: string
  className?: string
}

export function FileUpload({ bucket, value, onChange, onRemove, accept = "image/*", className }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const supabase = createClient()

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setError(null)

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`
      const filePath = `${fileName}`

      const { data, error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath)

      onChange?.(publicUrl)
    } catch (error: any) {
      console.error('Error uploading file:', error)
      setError(error.message || 'Error uploading file')
    } finally {
      setIsUploading(false)
    }
  }

  const isImage = value?.match(/\.(jpeg|jpg|gif|png|webp|avif)$/i) != null || accept.includes("image")

  return (
    <div className={cn("space-y-4 w-full", className)}>
      {error && <div className="text-sm text-destructive font-medium">{error}</div>}
      
      {value ? (
        <div className="relative rounded-md overflow-hidden border bg-muted flex items-center justify-center">
          {isImage ? (
            <div className="relative w-full aspect-video sm:aspect-auto sm:h-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={value} alt="Upload" className="object-cover w-full h-full" />
            </div>
          ) : (
            <div className="p-8 flex items-center gap-2">
              <FileIcon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium truncate max-w-[200px]">{value.split('/').pop()}</span>
            </div>
          )}
          
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full"
            onClick={onRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="relative border-2 border-dashed rounded-lg p-6 hover:bg-accent/50 transition-colors flex flex-col items-center justify-center gap-2 cursor-pointer group">
          <input
            type="file"
            accept={accept}
            onChange={handleUpload}
            disabled={isUploading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />
          
          {isUploading ? (
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="text-sm font-medium">Uploading...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
              <UploadCloud className="h-8 w-8" />
              <span className="text-sm font-medium">Click or drag file to upload</span>
              <span className="text-xs">
                {accept === "image/*" ? "Images only" : "Files allowed"}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
