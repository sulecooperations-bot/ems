"use client"

import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function ShowcasePage() {
  const screens = [
    { name: "Dashboard", route: "/dashboard", description: "Overview with KPIs, charts, and activity timeline" },
    { name: "Estates List", route: "/estates", description: "Estate registry with search and filters" },
    { name: "Estate Detail", route: "/estates/est-001", description: "Comprehensive estate view with tabs" },
    { name: "Geospatial Console", route: "/estates/est-001?tab=map", description: "Interactive map with layer controls" },
    { name: "Maintenance", route: "/maintenance", description: "Work order management with triage mode" },
    { name: "Documents", route: "/documents", description: "Document vault with search and preview" },
    { name: "Finance - Invoices", route: "/finance/invoices", description: "Invoice management and tracking" },
    { name: "Finance - Payments", route: "/finance/payments", description: "Payment records and history" },
    { name: "Reports", route: "/reports", description: "Analytics hub and reporting" },
    { name: "Settings", route: "/settings", description: "System configuration" },
  ]

  return (
    <AppShell>
      <PageHeader
        title="Showcase"
        subtitle="Key screens and features gallery"
      />

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Screen Gallery</CardTitle>
            <CardDescription>
              Navigate to different screens to explore the SULECO EstateOS interface
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {screens.map((screen) => (
                <Card key={screen.route} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{screen.name}</CardTitle>
                    <CardDescription>{screen.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={screen.route}>
                      <Button variant="outline" className="w-full">
                        View Screen
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold">Estate Health Score</h3>
                <p className="text-sm text-muted-foreground">
                  Composite scoring system with breakdown visualization. See it in action on any estate detail page.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Geospatial Console</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive SVG-based map with layer toggles and parcel selection. Available in estate detail pages.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Smart Work Order Triage</h3>
                <p className="text-sm text-muted-foreground">
                  Priority-based grouping with recommended actions. Enable triage mode in the maintenance page.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Global Search</h3>
                <p className="text-sm text-muted-foreground">
                  Press Ctrl/Cmd + K anywhere to open the command palette for quick navigation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}

