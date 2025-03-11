"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <div className="flex flex-col gap-6 px-2 py-6">
          <Link href="/" className="flex items-center text-lg font-bold" onClick={() => setOpen(false)}>
            Sabih Ullah
          </Link>
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`transition-colors ${
                  pathname === route.href
                    ? "text-foreground font-medium"
                    : "text-foreground/60 hover:text-foreground/80"
                }`}
                onClick={() => setOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Link
              href="/settings"
              className={`flex items-center gap-2 transition-colors ${
                pathname === "/settings" ? "text-foreground font-medium" : "text-foreground/60 hover:text-foreground/80"
              }`}
              onClick={() => setOpen(false)}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
          <div className="flex items-center">
            <span className="text-sm mr-2">Toggle theme:</span>
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

