"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Have a question or want to work together? Feel free to reach out to me using the form below or through my social
        media channels.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={6}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:john@example.com" className="text-muted-foreground hover:text-foreground">
                    john@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                <Twitter className="h-5 w-5" />
                Twitter
              </a>
              <a
                href="mailto:john@example.com"
                className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Availability</h2>
            <p className="text-muted-foreground mb-4">
              I'm currently available for freelance work and open to discussing new opportunities.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

