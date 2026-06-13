"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { FileUpload } from "@/components/ui/file-upload"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trash2, Plus, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { insertGalleryItem, deleteGalleryItem, toggleGalleryStatus } from "../actions"

const gallerySchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().optional(),
  photo_url: z.string().min(1, "Photo is required"),
  is_published: z.boolean().default(true),
})

type GalleryFormValues = z.infer<typeof gallerySchema>

export function GalleryClient({ initialData }: { initialData: any[] }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const form = useForm<GalleryFormValues>({
    resolver: zodResolver(gallerySchema) as any,
    defaultValues: {
      title: "",
      category: "campus",
      photo_url: "",
      is_published: true,
    }
  })

  const openAdd = () => {
    form.reset({
      title: "",
      category: "campus",
      photo_url: "",
      is_published: true,
    })
    setIsOpen(true)
  }

  const onSubmit = async (data: GalleryFormValues) => {
    try {
      await insertGalleryItem(data)
      toast.success("Photo added to gallery")
      setIsOpen(false)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this photo?")) return
    try {
      await deleteGalleryItem(id)
      toast.success("Photo deleted")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleToggle = async (id: string, currentValue: boolean) => {
    try {
      await toggleGalleryStatus(id, currentValue)
      toast.success("Status updated")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const categories = ["all", "campus", "classroom", "events", "results"]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Gallery</h2>
          <p className="text-muted-foreground">Manage website photo gallery.</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAdd}><Plus className="mr-2 h-4 w-4" /> Upload Photo</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Photo</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title / Caption</FormLabel>
                      <FormControl>
                        <Input placeholder="Annual Function 2025" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="campus">Campus</SelectItem>
                          <SelectItem value="classroom">Classroom</SelectItem>
                          <SelectItem value="events">Events</SelectItem>
                          <SelectItem value="results">Results</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="photo_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Photo</FormLabel>
                      <FormControl>
                        <FileUpload
                          bucket="miitjee-gallery"
                          value={field.value}
                          onChange={field.onChange}
                          onRemove={() => field.onChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="is_published"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Published</FormLabel>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-4">
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Upload
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} className="capitalize">{cat}</TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((cat) => {
          const filtered = cat === "all" ? initialData : initialData.filter(i => i.category === cat)
          return (
            <TabsContent key={cat} value={cat} className="mt-6">
              {filtered.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground border rounded-lg bg-card">
                  No photos found in this category.
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filtered.map((item) => (
                    <div key={item.id} className="group relative rounded-md overflow-hidden border bg-muted aspect-square">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.photo_url} alt={item.title} className="object-cover w-full h-full" />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground capitalize">
                            {item.category}
                          </span>
                          <Button 
                            variant="destructive" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div>
                          <p className="text-white font-medium text-sm truncate">{item.title}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Switch
                              checked={item.is_published}
                              onCheckedChange={() => handleToggle(item.id, item.is_published)}
                              className="data-[state=checked]:bg-green-500"
                            />
                            <span className="text-xs text-gray-300">
                              {item.is_published ? "Published" : "Hidden"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}
