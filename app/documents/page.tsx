"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, FileText, Image, File, Download } from "lucide-react"
import { documents } from "@/src/lib/mock/documents"
import { formatDate } from "@/lib/utils"

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")

  const filteredDocuments = documents.filter(doc => {
    if (searchQuery && !doc.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (selectedType !== "all" && doc.type !== selectedType) return false
    return true
  })

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf": return FileText
      case "image": return Image
      default: return File
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB"
    return (bytes / (1024 * 1024)).toFixed(1) + " MB"
  }

  return (
    <AppShell>
      <PageHeader
        title="Documents"
        subtitle="Document vault and file management"
        actions={
          <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
            <Plus className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        }
      />

      <div className="space-y-6">
        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="all">All Types</option>
                <option value="contract">Contract</option>
                <option value="inspection">Inspection</option>
                <option value="maintenance">Maintenance</option>
                <option value="legal">Legal</option>
                <option value="financial">Financial</option>
                <option value="certificate">Certificate</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Documents Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDocuments.map((doc) => {
            const Icon = getFileIcon(doc.fileType)
            return (
              <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted rounded-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base truncate">{doc.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {formatDate(doc.uploadedDate)}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Type</span>
                      <Badge variant="outline">{doc.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Size</span>
                      <span className="font-medium">{formatFileSize(doc.size)}</span>
                    </div>
                    {doc.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-2 border-t">
                        {doc.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      <Download className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredDocuments.length === 0 && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No documents found.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppShell>
  )
}

