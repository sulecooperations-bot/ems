"use client"

import { useState } from "react"
import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, MapPin, TrendingUp, AlertTriangle } from "lucide-react"
import { estates } from "@/src/lib/mock/estates"
import { formatCurrency } from "@/lib/utils"

export default function EstatesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredEstates = estates.filter(estate =>
    estate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    estate.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "success"
      case "medium": return "warning"
      case "high": return "destructive"
      default: return "default"
    }
  }

  return (
    <AppShell>
      <PageHeader
        title="Estates"
        subtitle="Manage and monitor all estate properties"
        actions={
          <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
            <Plus className="mr-2 h-4 w-4" />
            New Estate
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
                  placeholder="Search estates by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estates Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredEstates.map((estate) => (
            <Link key={estate.id} href={`/estates/${estate.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{estate.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-2">
                        <MapPin className="h-3 w-3" />
                        {estate.location}
                      </CardDescription>
                    </div>
                    <Badge variant={getRiskColor(estate.riskLevel) as any}>
                      {estate.riskLevel}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Health Score</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">{estate.healthScore}</span>
                        <div className="h-2 w-16 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-suleco-cyan to-suleco-blue transition-all"
                            style={{ width: `${estate.healthScore}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Area</span>
                      <span className="font-medium">{estate.area} acres</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Owner</span>
                      <span className="font-medium truncate ml-2">{estate.owner}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Status</span>
                      <Badge variant={estate.status === "active" ? "success" : "secondary"}>
                        {estate.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredEstates.length === 0 && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <p className="text-muted-foreground">No estates found matching your search.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppShell>
  )
}

