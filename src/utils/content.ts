import matter from 'gray-matter'
import type { Project, BlogPost, ReadingItem } from '@/types'

// Function to load and parse markdown content
export async function loadMarkdownContent(path: string) {
  const content = await import(`@/content/${path}`)
  const { data, content: body } = matter(content.default)
  return { ...data, content: body }
}

// Load projects
export async function loadProjects(): Promise<Project[]> {
  const projects = import.meta.glob('@/content/projects/*.md')
  const projectsList = await Promise.all(
    Object.entries(projects).map(async ([path, loader]) => {
      const content = await loader() as { default: string }
      const slug = path.split('/').pop()?.replace('.md', '') || ''
      const { data } = matter(content.default)
      return {
        id: slug,
        ...data as Omit<Project, 'id'>
      }
    })
  )
  return projectsList
}

// Load blog posts
export async function loadBlogPosts(): Promise<BlogPost[]> {
  const posts = import.meta.glob('@/content/blog/*.md')
  const postsList = await Promise.all(
    Object.entries(posts).map(async ([path, loader]) => {
      const content = await loader() as { default: string }
      const slug = path.split('/').pop()?.replace('.md', '') || ''
      const { data, content: body } = matter(content.default)
      return {
        id: slug,
        content: body,
        ...data as Omit<BlogPost, 'id' | 'content'>
      }
    })
  )
  return postsList
}

// Load reading list
export async function loadReadingList(): Promise<ReadingItem[]> {
  const response = await import('@/content/reading/index.json')
  return response.default.items || []
} 