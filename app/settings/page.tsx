import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SettingsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <div className="grid gap-8 max-w-md">
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Toggle between light and dark mode</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span>Theme Mode</span>
              <ThemeToggle />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

