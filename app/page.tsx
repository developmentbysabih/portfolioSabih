import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pb-16 pt-12 md:pb-20 md:pt-16 lg:pb-32 lg:pt-24">
        {/* Decorative elements */}
        <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>

        <div className="container relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image container - Order changed for mobile/tablet */}
            <div className="relative mx-auto order-first lg:order-last lg:mx-0">
              {/* Main image with enhanced styling */}
              <div className="relative mx-auto h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 p-2 animate-[spin_30s_linear_infinite]"></div>

                {/* Decorative dots */}
                <div className="absolute -right-4 top-1/4 h-6 w-6 rounded-full bg-primary/80"></div>
                <div className="absolute -left-4 bottom-1/4 h-4 w-4 rounded-full bg-primary/60"></div>
                <div className="absolute -top-4 left-1/3 h-5 w-5 rounded-full bg-primary/70"></div>

                {/* Image container with shadow and border effects */}
                <div className="absolute inset-5 overflow-hidden rounded-full bg-gradient-to-br from-background to-muted p-1 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                  <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/10">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Sabih Ullah"
                      fill
                      priority
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Floating skill badges - Hidden on smallest screens */}
              <div className="absolute -right-4 top-1/4 hidden sm:block animate-bounce-slow rounded-full bg-background px-3 py-1 text-sm font-medium shadow-md">
                React
              </div>
              <div className="absolute -left-6 bottom-1/3 hidden sm:block animate-bounce-slow animation-delay-500 rounded-full bg-background px-3 py-1 text-sm font-medium shadow-md">
                HTML/CSS
              </div>
              <div className="absolute -bottom-2 right-1/4 hidden sm:block animate-bounce-slow animation-delay-1000 rounded-full bg-background px-3 py-1 text-sm font-medium shadow-md">
                JavaScript
              </div>
            </div>

            {/* Text content - Order changed for mobile/tablet */}
            <div className="flex flex-col space-y-6 text-center order-last lg:order-first lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Hi, I'm Sabih Ullah
                </h1>
                <div className="relative">
                  <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-primary pr-5 text-2xl font-bold text-primary sm:text-3xl">
                    React Developer
                  </span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground sm:text-xl">
                I build accessible, responsive, and intuitive user interfaces with modern web technologies.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
                <Link href="/projects">
                  <Button size="lg" className="group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center gap-4 lg:justify-start">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/sabihullah" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:sabihullah0001@gmail.com">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Featured Projects</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here are some of my recent projects. Check out my projects page for more.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Project {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    A brief description of project {i} and the technologies used.
                  </p>
                </div>
              </div>
              <div className="flex items-center p-2">
                <div className="flex flex-1 justify-between">
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
                      React
                    </div>
                  </div>
                  <Link href={`/projects/project-${i}`}>
                    <Button variant="ghost" size="sm">
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/projects">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
      </section>
      <section className="container space-y-6 bg-muted py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Latest Blog Posts</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I write about web development, design, and other topics.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Link key={i} href={`/blog/${i}`}>
              <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <div className="space-y-2">
                    <h3 className="font-bold">Blog Post {i}</h3>
                    <p className="text-sm text-muted-foreground">
                      A brief description of blog post {i} and what it's about.
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog">
            <Button variant="outline">View All Posts</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

