'use client'

import { useState } from 'react'
import { Plus, Trash2, Eye, EyeOff, Video, ArrowUp, ArrowDown } from 'lucide-react'
import { insertReel, deleteReel, toggleReelStatus, updateReelSortOrder } from '../actions'

type Reel = {
  id: string
  url: string
  is_published: boolean | null
  sort_order: number | null
  created_at: string | null
}

export function ReelsClient({ initialData }: { initialData: Reel[] }) {
  const [reels, setReels] = useState<Reel[]>(initialData)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newUrl, setNewUrl] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      if (!newUrl.includes('instagram.com/reel')) {
        throw new Error('Please enter a valid Instagram Reel URL.')
      }

      await insertReel({
        url: newUrl,
        is_published: true,
        sort_order: reels.length,
      })
      
      setIsAddModalOpen(false)
      setNewUrl('')
      window.location.reload()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this reel?')) return
    try {
      await deleteReel(id)
      setReels(reels.filter(r => r.id !== id))
    } catch (error) {
      console.error('Error deleting reel:', error)
      alert('Failed to delete reel')
    }
  }

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    try {
      await toggleReelStatus(id, currentStatus)
      setReels(reels.map(r => r.id === id ? { ...r, is_published: !currentStatus } : r))
    } catch (error) {
      console.error('Error toggling status:', error)
      alert('Failed to update status')
    }
  }

  const handleSort = async (id: string, currentOrder: number, direction: 'up' | 'down') => {
    const currentIndex = reels.findIndex(r => r.id === id)
    if (direction === 'up' && currentIndex === 0) return
    if (direction === 'down' && currentIndex === reels.length - 1) return

    const swapIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1
    const swapReel = reels[swapIndex]

    try {
      await updateReelSortOrder(id, swapReel.sort_order || swapIndex)
      await updateReelSortOrder(swapReel.id, currentOrder)
      
      const newReels = [...reels]
      newReels[currentIndex] = { ...newReels[currentIndex], sort_order: swapReel.sort_order || swapIndex }
      newReels[swapIndex] = { ...swapReel, sort_order: currentOrder }
      setReels(newReels.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0)))
    } catch (error) {
      console.error('Error updating sort order:', error)
      alert('Failed to update sort order')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Featured Reels</h1>
          <p className="text-muted-foreground">Manage Instagram Reels displayed on the homepage.</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors shadow"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Reel
        </button>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-inter">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
              <tr>
                <th className="px-6 py-4 font-semibold">Order</th>
                <th className="px-6 py-4 font-semibold">Instagram URL</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reels.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No reels added yet. Click "Add Reel" to get started.
                  </td>
                </tr>
              ) : (
                reels.map((reel, index) => (
                  <tr key={reel.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <span className="w-4 text-center">{index + 1}</span>
                        <div className="flex flex-col">
                          <button 
                            onClick={() => handleSort(reel.id, reel.sort_order || index, 'up')}
                            disabled={index === 0}
                            className="text-gray-400 hover:text-blue disabled:opacity-30"
                          >
                            <ArrowUp className="w-3 h-3" />
                          </button>
                          <button 
                            onClick={() => handleSort(reel.id, reel.sort_order || index, 'down')}
                            disabled={index === reels.length - 1}
                            className="text-gray-400 hover:text-blue disabled:opacity-30"
                          >
                            <ArrowDown className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center max-w-md">
                        <Video className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                        <a 
                          href={reel.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline truncate"
                        >
                          {reel.url}
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        reel.is_published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {reel.is_published ? 'Published' : 'Hidden'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-3">
                        <button
                          onClick={() => handleTogglePublish(reel.id, !!reel.is_published)}
                          className="text-gray-500 hover:text-blue transition-colors"
                          title={reel.is_published ? "Hide" : "Publish"}
                        >
                          {reel.is_published ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                        <button
                          onClick={() => handleDelete(reel.id)}
                          className="text-gray-500 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold tracking-tight">Add Instagram Reel</h3>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Instagram Reel URL
                </label>
                <input
                  type="url"
                  required
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://www.instagram.com/reel/..."
                  className="w-full px-3 py-2 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {error && (
                <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                  {error}
                </div>
              )}

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
                >
                  {isSubmitting ? 'Adding...' : 'Add Reel'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
