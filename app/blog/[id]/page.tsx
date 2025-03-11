import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API or database
  const posts = [
    {
      id: "1",
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
      content: `
      # Getting Started with Next.js

      Next.js is a React framework that enables server-side rendering, static site generation, and more. It's designed to make building React applications easier and more efficient.

      ## Why Next.js?

      Next.js provides several benefits over a standard React application:

      - **Server-side rendering (SSR)**: Renders pages on the server, improving performance and SEO.
      - **Static site generation (SSG)**: Pre-renders pages at build time for even better performance.
      - **File-based routing**: Creates routes based on the file structure in the pages directory.
      - **API routes**: Allows you to create API endpoints as part of your Next.js application.
      - **Built-in CSS and Sass support**: Simplifies styling your application.
      - **Image optimization**: Automatically optimizes images for better performance.

      ## Setting Up a Next.js Project

      To create a new Next.js project, you can use the create-next-app command:

      \`\`\`bash
      npx create-next-app@latest my-next-app
      cd my-next-app
      npm run dev
      \`\`\`

      This will create a new Next.js project and start the development server. You can then open http://localhost:3000 to see your application.

      ## File-Based Routing

      Next.js uses a file-based routing system. Files in the pages directory automatically become routes. For example:

      - \`pages/index.js\` becomes the root route (/)
      - \`pages/about.js\` becomes the /about route
      - \`pages/blog/[id].js\` becomes a dynamic route for blog posts

      ## Data Fetching

      Next.js provides several methods for fetching data:

      - \`getStaticProps\`: Fetch data at build time for static site generation.
      - \`getStaticPaths\`: Specify dynamic routes to pre-render based on data.
      - \`getServerSideProps\`: Fetch data on each request for server-side rendering.

      ## Conclusion

      Next.js is a powerful framework that makes building React applications easier and more efficient. It provides many features out of the box that would otherwise require additional configuration and setup.

      In future articles, we'll explore more advanced features of Next.js, such as API routes, authentication, and deployment.
    `,
      date: "2023-10-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=600&width=1200",
      category: "Web Development",
      tags: ["Next.js", "React", "JavaScript"],
      author: {
        name: "John Doe",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Full Stack Developer with a passion for building modern web applications.",
      },
    },
    {
      id: "2",
      title: "Mastering Tailwind CSS",
      excerpt:
        "Discover how to use Tailwind CSS to build beautiful, responsive user interfaces without writing custom CSS.",
      content: `
      # Mastering Tailwind CSS

      Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without writing custom CSS. It provides low-level utility classes that let you build completely custom designs.

      ## Why Tailwind CSS?

      Tailwind CSS offers several advantages:

      - **No more naming things**: You don't have to come up with class names for everything.
      - **Consistent design**: Tailwind provides a design system with consistent spacing, colors, etc.
      - **Responsive design**: Built-in responsive modifiers make it easy to build responsive interfaces.
      - **Dark mode**: Easy implementation of dark mode with dark: variant.
      - **Customizable**: Tailwind is highly customizable through its configuration file.

      ## Getting Started with Tailwind CSS

      To add Tailwind CSS to your project:

      \`\`\`bash
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      \`\`\`

      Configure your template paths in tailwind.config.js:

      \`\`\`js
      module.exports = {
        content: [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
      \`\`\`

      Add the Tailwind directives to your CSS:

      \`\`\`css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      \`\`\`

      ## Utility-First Workflow

      Tailwind encourages a utility-first workflow where you use utility classes to build your designs:

      \`\`\`jsx
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      \`\`\`

      ## Conclusion

      Tailwind CSS is a powerful tool for building custom user interfaces. Its utility-first approach allows for rapid development and consistent designs.

      In future articles, we'll explore more advanced Tailwind CSS features, such as creating custom components, using plugins, and optimizing for production.
    `,
      date: "2023-09-28",
      readTime: "8 min read",
      image: "/placeholder.svg?height=600&width=1200",
      category: "CSS",
      tags: ["Tailwind CSS", "CSS", "Web Design"],
      author: {
        name: "John Doe",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Full Stack Developer with a passion for building modern web applications.",
      },
    },
    {
      id: "3",
      title: "Building API Routes with Next.js",
      excerpt:
        "A comprehensive guide to building API routes using Next.js App Router and handling data with server components.",
      content: `
      # Building API Routes with Next.js

      In this article, we'll explore how to build API routes using Next.js App Router. Next.js provides a powerful way to create backend APIs directly within your frontend application.

      ## What are Next.js API Routes?

      API Routes in Next.js allow you to create serverless API endpoints as part of your Next.js application. With the App Router, you can create route handlers that respond to HTTP requests.

      ## Setting Up the Project

      First, let's create a new Next.js project:

      \`\`\`bash
      npx create-next-app@latest my-next-api
      cd my-next-api
      \`\`\`

      ## Creating API Routes with App Router

      In the App Router, API routes are created using Route Handlers. Let's create a simple API for managing items:

      Create a file at \`app/api/items/route.ts\`:

      \`\`\`typescript
      import { NextResponse } from 'next/server';

      // Sample data (in a real app, you would use a database)
      let items = [
        { id: '1', name: 'Item 1', description: 'Description for Item 1' },
        { id: '2', name: 'Item 2', description: 'Description for Item 2' },
        { id: '3', name: 'Item 3', description: 'Description for Item 3' },
      ];

      // GET handler - Get all items
      export async function GET() {
        return NextResponse.json(items);
      }

      // POST handler - Create a new item
      export async function POST(request: Request) {
        const body = await request.json();
        
        // Validate the request body
        if (!body.name) {
          return NextResponse.json(
            { error: 'Name is required' },
            { status: 400 }
          );
        }
        
        // Create a new item
        const newItem = {
          id: Date.now().toString(),
          name: body.name,
          description: body.description || '',
        };
        
        // Add the new item to the array
        items.push(newItem);
        
        return NextResponse.json(newItem, { status: 201 });
      }
      \`\`\`

      ## Creating Dynamic API Routes

      For operations on specific items, we can create dynamic API routes. Create a file at \`app/api/items/[id]/route.ts\`:

      \`\`\`typescript
      import { NextResponse } from 'next/server';

      // Sample data (in a real app, you would use a database)
      let items = [
        { id: '1', name: 'Item 1', description: 'Description for Item 1' },
        { id: '2', name: 'Item 2', description: 'Description for Item 2' },
        { id: '3', name: 'Item 3', description: 'Description for Item 3' },
      ];

      // GET handler - Get a specific item
      export async function GET(
        request: Request,
        { params }: { params: { id: string } }
      ) {
        const item = items.find(item => item.id === params.id);
        
        if (!item) {
          return NextResponse.json(
            { error: 'Item not found' },
            { status: 404 }
          );
        }
        
        return NextResponse.json(item);
      }

      // PATCH handler - Update a specific item
      export async function PATCH(
        request: Request,
        { params }: { params: { id: string } }
      ) {
        const body = await request.json();
        const itemIndex = items.findIndex(item => item.id === params.id);
        
        if (itemIndex === -1) {
          return NextResponse.json(
            { error: 'Item not found' },
            { status: 404 }
          );
        }
        
        // Update the item
        items[itemIndex] = {
          ...items[itemIndex],
          ...body,
          id: params.id, // Ensure the ID doesn't change
        };
        
        return NextResponse.json(items[itemIndex]);
      }

      // DELETE handler - Delete a specific item
      export async function DELETE(
        request: Request,
        { params }: { params: { id: string } }
      ) {
        const itemIndex = items.findIndex(item => item.id === params.id);
        
        if (itemIndex === -1) {
          return NextResponse.json(
            { error: 'Item not found' },
            { status: 404 }
          );
        }
        
        // Remove the item from the array
        const deletedItem = items[itemIndex];
        items = items.filter(item => item.id !== params.id);
        
        return NextResponse.json(
          { message: 'Item deleted successfully', item: deletedItem }
        );
      }
      \`\`\`

      ## Using API Routes with React Components

      Now let's create a simple UI to interact with our API. Create a file at \`app/items/page.tsx\`:

      \`\`\`tsx
      'use client';

      import { useState, useEffect } from 'react';
      import { Button } from '@/components/ui/button';
      import { Input } from '@/components/ui/input';
      import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
      import { Textarea } from '@/components/ui/textarea';

      interface Item {
        id: string;
        name: string;
        description: string;
      }

      export default function ItemsPage() {
        const [items, setItems] = useState<Item[]>([]);
        const [newItem, setNewItem] = useState({ name: '', description: '' });
        const [loading, setLoading] = useState(true);

        // Fetch all items
        const fetchItems = async () => {
          setLoading(true);
          try {
            const response = await fetch('/api/items');
            const data = await response.json();
            setItems(data);
          } catch (error) {
            console.error('Error fetching items:', error);
          } finally {
            setLoading(false);
          }
        };

        // Create a new item
        const createItem = async (e: React.FormEvent) => {
          e.preventDefault();
          try {
            const response = await fetch('/api/items', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newItem),
            });
            
            if (response.ok) {
              setNewItem({ name: '', description: '' });
              fetchItems();
            }
          } catch (error) {
            console.error('Error creating item:', error);
          }
        };

        // Delete an item
        const deleteItem = async (id: string) => {
          try {
            const response = await fetch(\`/api/items/\${id}\`, {
              method: 'DELETE',
            });
            
            if (response.ok) {
              fetchItems();
            }
          } catch (error) {
            console.error('Error deleting item:', error);
          }
        };

        // Load items on component mount
        useEffect(() => {
          fetchItems();
        }, []);

        return (
          <div className="container py-10">
            <h1 className="text-4xl font-bold mb-8">Item Manager</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Item</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={createItem} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input
                        id="name"
                        value={newItem.name}
                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="description" className="text-sm font-medium">Description</label>
                      <Textarea
                        id="description"
                        value={newItem.description}
                        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                      />
                    </div>
                    <Button type="submit">Add Item</Button>
                  </form>
                </CardContent>
              </Card>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Items</h2>
                {loading ? (
                  <p>Loading items...</p>
                ) : (
                  <div className="space-y-4">
                    {items.length === 0 ? (
                      <p>No items found. Add some items to get started.</p>
                    ) : (
                      items.map((item) => (
                        <Card key={item.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-bold">{item.name}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                              </div>
                              <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => deleteItem(item.id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }
      \`\`\`

      ## Conclusion

      We've built a simple API using Next.js API routes with the App Router. This approach allows you to create full-stack applications with a single codebase, simplifying development and deployment.

      In a real-world application, you would connect to a database like MongoDB, PostgreSQL, or MySQL instead of using an in-memory array. You might also add authentication to protect your API endpoints.

      Next.js API routes are a powerful feature that enables you to build full-stack applications without needing a separate backend server.
    `,
      date: "2023-08-12",
      readTime: "12 min read",
      image: "/placeholder.svg?height=600&width=1200",
      category: "Backend",
      tags: ["Next.js", "API Routes", "App Router", "Server Components"],
      author: {
        name: "John Doe",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Full Stack Developer with a passion for building modern web applications.",
      },
    },
  ]

  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  // Format the content (in a real app, you would use a markdown parser)
  const formattedContent = post.content.split("\n\n").map((paragraph, index) => {
    if (paragraph.startsWith("# ")) {
      return (
        <h1 key={index} className="text-3xl font-bold my-6">
          {paragraph.substring(2)}
        </h1>
      )
    } else if (paragraph.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-bold my-5">
          {paragraph.substring(3)}
        </h2>
      )
    } else if (paragraph.startsWith("- ")) {
      return (
        <ul key={index} className="list-disc pl-6 my-4">
          {paragraph.split("\n").map((item, i) => (
            <li key={i} className="text-muted-foreground my-1">
              {item.substring(2)}
            </li>
          ))}
        </ul>
      )
    } else if (paragraph.startsWith("```")) {
      const code = paragraph.split("\n").slice(1, -1).join("\n")
      return (
        <pre key={index} className="bg-muted p-4 rounded-lg my-4 overflow-x-auto">
          <code>{code}</code>
        </pre>
      )
    } else {
      return (
        <p key={index} className="text-muted-foreground my-4">
          {paragraph}
        </p>
      )
    }
  })

  return (
    <div className="container py-10">
      <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Badge>{post.category}</Badge>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">{formattedContent}</div>

        <div className="border-t border-b py-8 my-8">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">{post.author.name}</h3>
              <p className="text-muted-foreground">{post.author.bio}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share Article
          </Button>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                <Badge variant="outline">{tag}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

