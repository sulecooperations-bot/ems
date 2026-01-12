"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search } from "lucide-react"
import { parcels } from "@/src/lib/mock/parcels"
import { estates } from "@/src/lib/mock/estates"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"

export default function ParcelsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredParcels = parcels.filter(parcel =>
    parcel.parcelNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    estates.find(e => e.id === parcel.estateId)?.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <AppShell>
      <PageHeader
        title="Parcels"
        subtitle="Parcel registry and land management"
        actions={
          <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
            <Plus className="mr-2 h-4 w-4" />
            New Parcel
          </Button>
        }
      />

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search parcels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Parcels</CardTitle>
            <CardDescription>{filteredParcels.length} parcels registered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredParcels.map((parcel) => {
                const estate = estates.find(e => e.id === parcel.estateId)
                return (
                  <div key={parcel.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="font-medium">{parcel.parcelNumber}</div>
                        <Badge variant="outline">{parcel.landUse}</Badge>
                        <Badge variant={parcel.status === "owned" ? "default" : "secondary"}>
                          {parcel.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {estate?.name} • {parcel.area} m²
                      </div>
                      {parcel.tenant && (
                        <div className="text-sm text-muted-foreground mt-1">
                          Tenant: {parcel.tenant}
                        </div>
                      )}
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-medium">{formatCurrency(parcel.value)}</div>
                      <Link href={`/estates/${parcel.estateId}`}>
                        <Button variant="outline" size="sm" className="mt-2">
                          View Estate
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}

