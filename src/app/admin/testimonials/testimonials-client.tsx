"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, Pencil, Trash2, Plus, Loader2, Star } from "lucide-react"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { upsertTestimonial, deleteTestimonial, toggleTestimonialStatus } from "../actions"

const testimonialSchema = z.object({
  id: z.string().optional(),
  student_name: z.string().min(1, "Name is required"),
  quote: z.string().min(1, "Quote is required"),
  programme: z.string().optional(),
  year: z.coerce.number().optional(),
  branch_name: z.string().optional(),
  rating: z.coerce.number().min(1).max(5).default(5),
  type: z.string().default("student"),
  photo_url: z.string().optional().nullable(),
  is_published: z.boolean().default(true),
})

type TestimonialFormValues = z.infer<typeof testimonialSchema>

export function TestimonialsClient({ initialData }: { initialData: any[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema) as any,
    defaultValues: {
      student_name: "",
      quote: "",
      programme: "",
      year: new Date().getFullYear(),
      branch_name: "",
      rating: 5,
      type: "student",
      photo_url: null,
      is_published: true,
    }
  })

  const openEdit = (item: any) => {
    form.reset({
      id: item.id,
      student_name: item.student_name,
      quote: item.quote,
      programme: item.programme || "",
      year: item.year || new Date().getFullYear(),
      branch_name: item.branch_name || "",
      rating: item.rating || 5,
      type: item.type || "student",
      photo_url: item.photo_url,
      is_published: item.is_published,
    })
    setEditingId(item.id)
    setIsOpen(true)
  }

  const openAdd = () => {
    form.reset({
      student_name: "",
      quote: "",
      programme: "",
      year: new Date().getFullYear(),
      branch_name: "",
      rating: 5,
      type: "student",
      photo_url: null,
      is_published: true,
    })
    setEditingId(null)
    setIsOpen(true)
  }

  const onSubmit = async (data: TestimonialFormValues) => {
    try {
      await upsertTestimonial(data)
      toast.success(editingId ? "Testimonial updated" : "Testimonial added")
      setIsOpen(false)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return
    try {
      await deleteTestimonial(id)
      toast.success("Testimonial deleted")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleToggle = async (id: string, currentValue: boolean) => {
    try {
      await toggleTestimonialStatus(id, currentValue)
      toast.success("Status updated")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Testimonials</h2>
          <p className="text-muted-foreground">Manage student and parent testimonials.</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAdd}><Plus className="mr-2 h-4 w-4" /> Add Testimonial</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="student_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="quote"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quote</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Testimonial content..." className="min-h-[100px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="programme"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Programme</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Programme" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="jee">JEE</SelectItem>
                            <SelectItem value="neet">NEET</SelectItem>
                            <SelectItem value="foundation">Foundation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="branch_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Branch</FormLabel>
                        <FormControl>
                          <Input placeholder="Sakchi" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="photo_url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Photo (Optional)</FormLabel>
                        <FormControl>
                          <FileUpload
                            bucket="miitjee-faculty"
                            value={field.value}
                            onChange={field.onChange}
                            onRemove={() => field.onChange(null)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rating (1-5)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={String(field.value)}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Rating" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {[1,2,3,4,5].map(num => (
                                <SelectItem key={num} value={String(num)}>{num} Stars</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="is_published"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-2 space-y-0 border p-4 rounded-md">
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Published</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {editingId ? "Save Changes" : "Add Testimonial"}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Photo</TableHead>
              <TableHead>Name / Type</TableHead>
              <TableHead>Programme</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead className="w-[300px]">Quote</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No testimonials found
                </TableCell>
              </TableRow>
            ) : (
              initialData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {item.photo_url ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={item.photo_url} alt="" className="h-10 w-10 rounded-full object-cover border" />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-xs">
                        {item.student_name.charAt(0)}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{item.student_name}</div>
                    <div className="text-xs text-muted-foreground capitalize">{item.type}</div>
                  </TableCell>
                  <TableCell>
                    <div className="capitalize">{item.programme || "-"}</div>
                    <div className="text-xs text-muted-foreground">{item.year || ""}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex text-yellow-500">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="line-clamp-2 text-sm text-muted-foreground" title={item.quote}>
                      {item.quote}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={item.is_published}
                      onCheckedChange={() => handleToggle(item.id, item.is_published)}
                    />
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEdit(item)}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={() => handleDelete(item.id)}>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
