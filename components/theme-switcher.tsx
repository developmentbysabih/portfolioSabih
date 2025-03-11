"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { ThemeToggleButton } from "@/components/theme-toggle-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
        <CardDescription>Choose your preferred theme mode</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <ThemeToggleButton theme="light" label="Light Mode" icon={<Sun className="h-4 w-4" />} />
        <ThemeToggleButton theme="dark" label="Dark Mode" icon={<Moon className="h-4 w-4" />} />
        <ThemeToggleButton theme="system" label="System Preference" icon={<Monitor className="h-4 w-4" />} />
      </CardContent>
    </Card>
  )
}

