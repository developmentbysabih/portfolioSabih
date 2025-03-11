"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Settings } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Sabih Ullah</span>
          </Link>
          <DesktopNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="/settings">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>
            <ThemeToggle />
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Resume
              </Button>
            </Link>
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}

function DesktopNav() {
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/tech-stack", label: "Tech Stack" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="hidden gap-6 md:flex">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`flex items-center text-sm font-medium transition-colors ${
            pathname === route.href ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

