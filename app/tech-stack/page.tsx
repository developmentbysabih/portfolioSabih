import Image from "next/image"

export default function TechStackPage() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        {
          name: "React",
          description: "JavaScript library for building user interfaces",
          icon: "/placeholder.svg?height=60&width=60",
        },
        { name: "Next.js", description: "React framework for production", icon: "/placeholder.svg?height=60&width=60" },
        {
          name: "TypeScript",
          description: "Typed superset of JavaScript",
          icon: "/placeholder.svg?height=60&width=60",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework",
          icon: "/placeholder.svg?height=60&width=60",
        },
        {
          name: "Framer Motion",
          description: "Animation library for React",
          icon: "/placeholder.svg?height=60&width=60",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          description: "JavaScript runtime built on Chrome's V8 engine",
          icon: "/placeholder.svg?height=60&width=60",
        },
        {
          name: "Express",
          description: "Web application framework for Node.js",
          icon: "/placeholder.svg?height=60&width=60",
        },
        { name: "MongoDB", description: "NoSQL database", icon: "/placeholder.svg?height=60&width=60" },
        { name: "PostgreSQL", description: "Relational database", icon: "/placeholder.svg?height=60&width=60" },
        { name: "GraphQL", description: "Query language for APIs", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", description: "Version control system", icon: "/placeholder.svg?height=60&width=60" },
        {
          name: "Docker",
          description: "Platform for developing, shipping, and running applications",
          icon: "/placeholder.svg?height=60&width=60",
        },
        { name: "GitHub Actions", description: "CI/CD platform", icon: "/placeholder.svg?height=60&width=60" },
        { name: "Vercel", description: "Deployment and hosting platform", icon: "/placeholder.svg?height=60&width=60" },
        { name: "VS Code", description: "Code editor", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
    {
      category: "Testing",
      items: [
        { name: "Jest", description: "JavaScript testing framework", icon: "/placeholder.svg?height=60&width=60" },
        {
          name: "React Testing Library",
          description: "Testing utilities for React",
          icon: "/placeholder.svg?height=60&width=60",
        },
        { name: "Cypress", description: "End-to-end testing framework", icon: "/placeholder.svg?height=60&width=60" },
      ],
    },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-4">My Tech Stack</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        These are the technologies and tools I use to build modern, performant, and scalable web applications. I'm
        constantly learning and exploring new technologies to improve my skills and deliver better solutions.
      </p>

      <div className="space-y-16">
        {technologies.map((tech) => (
          <section key={tech.category} className="space-y-6">
            <h2 className="text-2xl font-bold">{tech.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tech.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start p-6 rounded-lg border bg-background hover:shadow-md transition-shadow"
                >
                  <div className="mr-4">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 p-8 rounded-lg border bg-muted">
        <h2 className="text-2xl font-bold mb-4">My Development Philosophy</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            I believe in building applications that are not only functional but also accessible, performant, and
            maintainable. My approach to development is centered around these key principles:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
              <span>
                <strong>User-Centered Design:</strong> Focusing on creating intuitive and accessible interfaces that
                provide a great user experience.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
              <span>
                <strong>Clean Code:</strong> Writing maintainable, readable, and well-documented code that follows best
                practices.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
              <span>
                <strong>Performance Optimization:</strong> Ensuring applications load quickly and run smoothly on all
                devices.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
              <span>
                <strong>Continuous Learning:</strong> Staying up-to-date with the latest technologies and best practices
                in web development.
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
              <span>
                <strong>Testing:</strong> Implementing comprehensive testing strategies to ensure reliability and catch
                issues early.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

