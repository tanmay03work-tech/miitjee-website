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
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { FileUpload } from "@/components/ui/file-upload"
import { MoreHorizontal, Pencil, Trash2, Plus, Loader2 } from "lucide-react"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { upsertResult, deleteResult, toggleResultStatus } from "../actions"

const resultSchema = z.object({
  id: z.string().optional(),
  student_name: z.string().min(1, "Name is required"),
  exam: z.string().min(1, "Exam is required"),
  year: z.coerce.number().min(2000),
  rank_score: z.string().optional(),
  institute: z.string().optional(),
  programme: z.string().min(1, "Programme is required"),
  branch_name: z.string().optional(),
  photo_url: z.string().optional().nullable(),
  is_featured: z.boolean().default(false),
  is_published: z.boolean().default(true),
})

type ResultFormValues = z.infer<typeof resultSchema>

export function ResultsClient({ initialData }: { initialData: any[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  const form = useForm<ResultFormValues>({
    resolver: zodResolver(resultSchema) as any,
    defaultValues: {
      student_name: "",
      exam: "",
      year: new Date().getFullYear(),
      rank_score: "",
      institute: "",
      programme: "",
      branch_name: "",
      photo_url: null,
      is_featured: false,
      is_published: true,
    }
  })

  const openEdit = (result: any) => {
    form.reset({
      id: result.id,
      student_name: result.student_name,
      exam: result.exam,
      year: result.year,
      rank_score: result.rank_score || "",
      institute: result.institute || "",
      programme: result.programme,
      branch_name: result.branch_name || "",
      photo_url: result.photo_url,
      is_featured: result.is_featured,
      is_published: result.is_published,
    })
    setEditingId(result.id)
    setIsOpen(true)
  }

  const openAdd = () => {
    form.reset({
      student_name: "",
      exam: "",
      year: new Date().getFullYear(),
      rank_score: "",
      institute: "",
      programme: "",
      branch_name: "",
      photo_url: null,
      is_featured: false,
      is_published: true,
    })
    setEditingId(null)
    setIsOpen(true)
  }

  const onSubmit = async (data: ResultFormValues) => {
    try {
      await upsertResult(data)
      toast.success(editingId ? "Result updated" : "Result added")
      setIsOpen(false)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this result?")) return
    try {
      await deleteResult(id)
      toast.success("Result deleted")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  const handleToggle = async (id: string, field: 'is_published' | 'is_featured', currentValue: boolean) => {
    try {
      await toggleResultStatus(id, field, currentValue)
      toast.success("Status updated")
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Results</h2>
          <p className="text-muted-foreground">Manage student results and achievements.</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAdd}><Plus className="mr-2 h-4 w-4" /> Add Result</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Result" : "Add Result"}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="student_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="exam"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Exam</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Exam" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="JEE Advanced">JEE Advanced</SelectItem>
                            <SelectItem value="JEE Main">JEE Main</SelectItem>
                            <SelectItem value="NEET">NEET</SelectItem>
                            <SelectItem value="NTSE">NTSE</SelectItem>
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
                    name="rank_score"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Score/Rank</FormLabel>
                        <FormControl>
                          <Input placeholder="AIR 147 or 680/720" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="programme"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Programme</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Programme" />
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
                    name="branch_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Branch (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Sakchi, Jamshedpur" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="institute"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institute Allotted (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="IIT Bombay" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="photo_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student Photo</FormLabel>
                      <FormControl>
                        <FileUpload
                          bucket="miitjee-results"
                          value={field.value}
                          onChange={field.onChange}
                          onRemove={() => field.onChange(null)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="is_featured"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-2 space-y-0 border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Featured Result</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="is_published"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-2 space-y-0 border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Published</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {editingId ? "Save Changes" : "Add Result"}
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
              <TableHead>Student Name</TableHead>
              <TableHead>Exam / Year</TableHead>
              <TableHead>Score/Rank</TableHead>
              <TableHead>Programme</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No results found
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
                  <TableCell className="font-medium">{item.student_name}</TableCell>
                  <TableCell>
                    {item.exam} ({item.year})
                  </TableCell>
                  <TableCell>{item.rank_score || "-"}</TableCell>
                  <TableCell className="capitalize">{item.programme}</TableCell>
                  <TableCell>
                    <Switch
                      checked={item.is_featured}
                      onCheckedChange={() => handleToggle(item.id, 'is_featured', item.is_featured)}
                    />
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={item.is_published}
                      onCheckedChange={() => handleToggle(item.id, 'is_published', item.is_published)}
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
