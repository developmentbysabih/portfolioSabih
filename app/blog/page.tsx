import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function BlogPage() {
  // In a real app, you would fetch this data from an API or database
  const posts = [
    {
      id: "1",
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
      date: "2023-10-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web Development",
      tags: ["Next.js", "React", "JavaScript"],
    },
    {
      id: "2",
      title: "Mastering Tailwind CSS",
      excerpt:
        "Discover how to use Tailwind CSS to build beautiful, responsive user interfaces without writing custom CSS.",
      date: "2023-09-28",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "CSS",
      tags: ["Tailwind CSS", "CSS", "Web Design"],
    },
    {
      id: "3",
      title: "Building a REST API with Node.js",
      excerpt: "A comprehensive guide to building a RESTful API using Node.js, Express, and MongoDB.",
      date: "2023-08-12",
      readTime: "12 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Backend",
      tags: ["Node.js", "Express", "MongoDB", "API"],
    },
    {
      id: "4",
      title: "Introduction to TypeScript",
      excerpt: "Learn the basics of TypeScript and how it can improve your JavaScript development experience.",
      date: "2023-07-05",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "JavaScript",
      tags: ["TypeScript", "JavaScript", "Web Development"],
    },
    {
      id: "5",
      title: "State Management in React",
      excerpt: "Explore different state management solutions in React, from Context API to Redux and Zustand.",
      date: "2023-06-20",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "React",
      tags: ["React", "State Management", "Redux", "Context API"],
    },
    {
      id: "6",
      title: "Optimizing Website Performance",
      excerpt: "Tips and techniques for improving the performance of your web applications.",
      date: "2023-05-15",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600",
      category: "Performance",
      tags: ["Web Performance", "Optimization", "Core Web Vitals"],
    },
  ]

  const categories = ["All", "Web Development", "CSS", "JavaScript", "React", "Backend", "Performance"]

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        I write about web development, design, and other tech-related topics. Browse my latest articles below or search
        for specific topics.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3">
          <div className="flex items-center mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search articles..." className="pl-8" />
            </div>
            <Button variant="ghost" className="ml-2">
              Search
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <article className="flex flex-col h-full overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge>{post.category}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h2 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={category === "All" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(posts.flatMap((post) => post.tags))).map((tag) => (
                  <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                    <Badge variant="outline">{tag}</Badge>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-bold mb-4">Subscribe</h2>
              <p className="text-muted-foreground mb-4">Get notified when I publish new articles. No spam, ever.</p>
              <form className="space-y-2">
                <Input type="email" placeholder="Enter your email" />
                <Button className="w-full">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

