import type { Project, BlogPost } from '@/types'

export function searchContent<T>(items: T[], query: string): T[] {
  if (!query.trim()) return items
  
  const searchTerm = query.toLowerCase()
  return items.filter(item => 
    Object.values(item).some(value => 
      String(value).toLowerCase().includes(searchTerm)
    )
  )
} 