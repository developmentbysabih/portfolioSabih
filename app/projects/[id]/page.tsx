import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)

  // In a real app, you would fetch this data from an API or database
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      longDescription: `
        This e-commerce platform was built to provide a complete online shopping experience. It includes features such as product browsing, 
        searching, filtering, user authentication, shopping cart, checkout process, and payment integration with Stripe.
        
        The frontend is built with React and Next.js, providing a fast and responsive user interface. The backend uses Node.js with Express 
        to handle API requests, and MongoDB for data storage. User authentication is implemented using JWT tokens, ensuring secure access to user accounts.
        
        One of the key challenges was implementing a real-time inventory management system that updates product availability as users add items to their carts. 
        This was solved using a combination of database transactions and websocket connections to ensure data consistency.
      `,
      image: "/placeholder.svg?height=600&width=1200",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      features: [
        "User authentication and profile management",
        "Product catalog with categories and filters",
        "Shopping cart and wishlist functionality",
        "Secure checkout process with Stripe integration",
        "Order history and tracking",
        "Admin dashboard for product and order management",
      ],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      longDescription: `
        This task management application was designed to help teams collaborate effectively on projects. It provides a visual interface 
        for creating, assigning, and tracking tasks across different stages of completion.
        
        The application is built with React for the frontend, using Redux for state management. Firebase is used as the backend, providing 
        real-time database capabilities, authentication, and cloud functions. This allows for instant updates when team members make changes to tasks.
        
        The UI is designed to be intuitive and responsive, with drag-and-drop functionality for moving tasks between different stages. 
        Users can create boards for different projects, add team members, set due dates, add attachments, and comment on tasks.
      `,
      image: "/placeholder.svg?height=600&width=1200",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      features: [
        "Real-time collaboration with multiple users",
        "Drag-and-drop interface for task management",
        "Project boards with customizable columns",
        "Task assignments, due dates, and priority levels",
        "File attachments and comments on tasks",
        "Email notifications for task updates",
      ],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    // Add more projects as needed
  ]

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </Link>
              )}
              {project.demo && (
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border mb-8">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-bold mb-4">Project Links</h2>
              <div className="space-y-3">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-foreground"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub Repository
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

