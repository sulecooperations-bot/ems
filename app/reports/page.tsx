"use client"

import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Download, TrendingUp } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    { id: "1", name: "Estate Health Report", description: "Comprehensive health scores across all estates", category: "Health" },
    { id: "2", name: "Financial Summary", description: "Revenue, expenses, and payment tracking", category: "Finance" },
    { id: "3", name: "Maintenance Analytics", description: "Work order trends and SLA performance", category: "Maintenance" },
    { id: "4", name: "Occupancy Report", description: "Tenant occupancy rates and lease analytics", category: "Occupancy" },
    { id: "5", name: "Compliance Audit", description: "Inspection results and compliance status", category: "Compliance" },
    { id: "6", name: "Asset Inventory", description: "Complete asset register with valuations", category: "Assets" },
  ]

  return (
    <AppShell>
      <PageHeader
        title="Reports"
        subtitle="Analytics hub and reporting dashboard"
      />

      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-muted rounded-lg">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{report.name}</CardTitle>
                    <CardDescription className="mt-1">{report.category}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Custom Reports</CardTitle>
            <CardDescription>Create custom reports with advanced filters</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
              <TrendingUp className="mr-2 h-4 w-4" />
              Create Custom Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}

