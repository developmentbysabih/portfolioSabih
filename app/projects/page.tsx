import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "An application that allows users to search for recipes based on ingredients they have.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Spoonacular API", "CSS Modules"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
    {
      id: 6,
      title: "Budget Tracker",
      description: "A personal finance application for tracking income, expenses, and savings goals.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Express", "MongoDB", "D3.js"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Here's a collection of my recent projects. Each project represents different skills and technologies I've worked
        with. Click on a project to learn more about it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
          >
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="secondary">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub Repository</span>
                    </Button>
                  </Link>
                )}
                {project.demo && (
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="secondary">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </Button>
                  </Link>
                )}
              </div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover transition-transform group-hover:scale-105"
              />
              {project.featured && (
                <div className="absolute top-2 right-2 z-20">
                  <Badge variant="secondary">Featured</Badge>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <Link href={`/projects/${project.id}`}>
                  <h2 className="font-bold text-xl mb-2 hover:text-primary transition-colors">{project.title}</h2>
                </Link>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Link href={`/projects/${project.id}`} className="absolute inset-0">
              <span className="sr-only">View {project.title} details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

