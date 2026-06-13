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
import { MoreHorizontal, Pencil, Trash2, Plus, Loader2 } from "lucide-react"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { upsertFaculty, deleteFaculty, toggleFacultyStatus } from "../actions"

const facultySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  designation: z.string().optional(),
  subject: z.string().optional(),
  qualification: z.string().optional(),
  credential: z.string().optional(),
  experience_yrs: z.preprocess((val) => val === "" || val == null ? undefined : Number(val), z.number().optional()),
  bio: z.string().optional(),
  photo_url: z.string().optional().nullable(),
  sort_order: z.preprocess((val) => Number(val), z.number().default(0)),
  is_published: z.boolean().default(true),
})

type FacultyFormValues = z.infer<typeof facultySchema>

export function FacultyClient({ initialData }: { initialData: any[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const form = useForm<FacultyFormValues>({
    resolver: zodResolver(facultySchema) as any,
    defaultValues: {
      name: "",
      designation: "",
      subject: "",
      qualification: "",
      credential: "",
      experience_yrs: 0,
      bio: "",
      photo_url: null,
      sort_order: 0,
      is_published: true,
    }
  })

  const openEdit = (faculty: any) => {
    form.reset({
      id: faculty.id,
      name: faculty.name,
      designation: faculty.designation || "",
      subject: faculty.subject || "",
      qualification: faculty.qualification || "",
      credential: faculty.credential || "",
      experience_yrs: faculty.experience_yrs || 0,
      bio: faculty.bio || "",
      photo_url: faculty.photo_url,
      sort_order: faculty.sort_order || 0,
      is_published: faculty.is_published,
    })
    setEditingId(faculty.id)
    setIsOpen(true)
  }

  const openAdd = () => {
    form.reset({
      name: "",
      designation: "",
      subject: "",
      qualification: "",
      credential: "",
      experience_yrs: 0,
      bio: "",
      photo_url: null,
      sort_order: 0,
      is_published: true,
    })
    setEditingId(null)
    setIsOpen(true)
  }

  const onSubmit = async (data: FacultyFormValues) => {
    try {
      await upsertFaculty(data)
      toast.success(editingId ? "Faculty updated" : "Faculty added")
      setIsOpen(false)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this faculty member?")) return
    try {
      await deleteFaculty(id)
      toast.success("Faculty deleted")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleToggle = async (id: string, currentValue: boolean) => {
    try {
      await toggleFacultyStatus(id, currentValue)
      toast.success("Status updated")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Faculty</h2>
          <p className="text-muted-foreground">Manage faculty profiles and team order.</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAdd}><Plus className="mr-2 h-4 w-4" /> Add Faculty</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Faculty" : "Add Faculty"}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Dr. Sharma" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="designation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Designation</FormLabel>
                        <FormControl>
                          <Input placeholder="HOD Physics" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Physics" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="credential"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credential (e.g. IIT Kharagpur)</FormLabel>
                        <FormControl>
                          <Input placeholder="B.Tech, IIT KGP" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="qualification"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Qualification</FormLabel>
                        <FormControl>
                          <Input placeholder="M.Sc., Ph.D." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience_yrs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience (Years)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Short biography..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="photo_url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profile Photo</FormLabel>
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
                      name="sort_order"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sort Order</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
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
                    {editingId ? "Save Changes" : "Add Faculty"}
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
              <TableHead>Name</TableHead>
              <TableHead>Designation / Subject</TableHead>
              <TableHead>Credentials</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Sort Order</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No faculty found
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
                        {item.name.charAt(0)}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{item.designation || "-"}</span>
                      <span className="text-xs text-muted-foreground">{item.subject || "-"}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{item.credential || "-"}</span>
                      <span className="text-xs text-muted-foreground">{item.qualification || "-"}</span>
                    </div>
                  </TableCell>
                  <TableCell>{item.experience_yrs ? `${item.experience_yrs} yrs` : "-"}</TableCell>
                  <TableCell>{item.sort_order}</TableCell>
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
