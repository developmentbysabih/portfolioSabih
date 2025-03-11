"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface ThemeToggleButtonProps {
  theme: "light" | "dark" | "system"
  label: string
  icon: React.ReactNode
}

export function ThemeToggleButton({ theme, label, icon }: ThemeToggleButtonProps) {
  const { theme: currentTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isActive = currentTheme === theme

  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={() => setTheme(theme)}
      className="w-full justify-start gap-2"
    >
      {icon}
      {label}
      {isActive && <span className="ml-auto">✓</span>}
    </Button>
  )
}

