"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search } from "lucide-react"
import { assets } from "@/src/lib/mock/assets"
import { estates } from "@/src/lib/mock/estates"
import { formatCurrency, formatDate } from "@/lib/utils"
import Link from "next/link"

export default function AssetsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredAssets = assets.filter(asset => {
    if (searchQuery && !asset.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (typeFilter !== "all" && asset.type !== typeFilter) return false
    if (statusFilter !== "all" && asset.status !== statusFilter) return false
    return true
  })

  return (
    <AppShell>
      <PageHeader
        title="Assets"
        subtitle="Buildings, infrastructure, and equipment management"
        actions={
          <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
            <Plus className="mr-2 h-4 w-4" />
            New Asset
          </Button>
        }
      />

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search assets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="building">Building</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="equipment">Equipment</SelectItem>
                  <SelectItem value="utility">Utility</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="operational">Operational</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="damaged">Damaged</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredAssets.map((asset) => {
            const estate = estates.find(e => e.id === asset.estateId)
            return (
              <Card key={asset.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{asset.name}</CardTitle>
                      <CardDescription>{estate?.name}</CardDescription>
                    </div>
                    <Badge variant={asset.status === "operational" ? "success" : asset.status === "maintenance" ? "warning" : "destructive"}>
                      {asset.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Type</span>
                      <Badge variant="outline">{asset.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium">{asset.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Condition</span>
                      <Badge variant={asset.condition === "excellent" ? "success" : asset.condition === "good" ? "default" : "warning"}>
                        {asset.condition}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Value</span>
                      <span className="font-medium">{formatCurrency(asset.value)}</span>
                    </div>
                    {asset.nextMaintenance && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Next Maintenance</span>
                        <span className="font-medium">{formatDate(asset.nextMaintenance)}</span>
                      </div>
                    )}
                    <Link href={`/estates/${asset.estateId}`}>
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        View Estate
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </AppShell>
  )
}

