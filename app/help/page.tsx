"use client"

import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Book, MessageCircle, FileQuestion } from "lucide-react"

export default function HelpPage() {
  const knowledgeBase = [
    { id: "1", title: "Getting Started with EstateOS", category: "Getting Started" },
    { id: "2", title: "Managing Estates and Parcels", category: "Estates" },
    { id: "3", title: "Creating and Tracking Work Orders", category: "Maintenance" },
    { id: "4", title: "Financial Management Guide", category: "Finance" },
    { id: "5", title: "Understanding Health Scores", category: "Analytics" },
    { id: "6", title: "Setting Up Inspections", category: "Inspections" },
  ]

  return (
    <AppShell>
      <PageHeader
        title="Help & Support"
        subtitle="Knowledge base and support resources"
      />

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search help articles..."
                className="pl-9"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                <CardTitle>Knowledge Base</CardTitle>
              </div>
              <CardDescription>Browse help articles and guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {knowledgeBase.map((article) => (
                  <div key={article.id} className="p-3 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
                    <div className="font-medium">{article.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{article.category}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <CardTitle>Support Tickets</CardTitle>
              </div>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8 text-muted-foreground">
                  <FileQuestion className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-4">No open tickets</p>
                  <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
                    Create Support Ticket
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}

