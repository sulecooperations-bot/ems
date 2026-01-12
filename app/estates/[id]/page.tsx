"use client"

import Link from "next/link"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Building2, Package, Users, Wrench, ClipboardCheck, FileText, DollarSign, Activity, ArrowLeft } from "lucide-react"
import { estates } from "@/src/lib/mock/estates"
import { parcels } from "@/src/lib/mock/parcels"
import { assets } from "@/src/lib/mock/assets"
import { contracts } from "@/src/lib/mock/contracts"
import { workOrders } from "@/src/lib/mock/workOrders"
import { inspections } from "@/src/lib/mock/inspections"
import { documents } from "@/src/lib/mock/documents"
import { invoices } from "@/src/lib/mock/finance"
import { formatCurrency, formatDate } from "@/lib/utils"
import { MapCanvas } from "@/components/map-canvas"

export default function EstateDetailPage({ params }: { params: { id: string } }) {
  const { id } = params
  const estate = estates.find(e => e.id === id)

  if (!estate) {
    return (
      <AppShell>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-2">Estate not found</h1>
          <p className="text-muted-foreground mb-4">The estate you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/estates">
            <Button>Back to Estates</Button>
          </Link>
        </div>
      </AppShell>
    )
  }

  const estateParcels = parcels.filter(p => p.estateId === estate.id)
  const estateAssets = assets.filter(a => a.estateId === estate.id)
  const estateContracts = contracts.filter(c => c.estateId === estate.id)
  const estateWorkOrders = workOrders.filter(wo => wo.estateId === estate.id)
  const estateInspections = inspections.filter(i => i.estateId === estate.id)
  const estateDocuments = documents.filter(d => d.estateId === estate.id)
  const estateInvoices = invoices.filter(inv => inv.estateId === estate.id)

  const healthBreakdown = {
    compliance: 90,
    maintenance: 85,
    occupancy: 88,
    financial: 82,
    risk: 75,
  }

  return (
    <AppShell>
      <div className="mb-4">
        <Link href="/estates">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Estates
          </Button>
        </Link>
      </div>

      <PageHeader
        title={estate.name}
        subtitle={estate.location}
        actions={
          <div className="flex gap-2">
            <Button variant="outline">Edit Estate</Button>
            <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
              Quick Actions
            </Button>
          </div>
        }
      />

      {/* Hero Summary */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Estate Health Score</CardTitle>
              <Badge variant={estate.healthScore >= 80 ? "success" : estate.healthScore >= 60 ? "warning" : "destructive"}>
                {estate.healthScore >= 80 ? "Excellent" : estate.healthScore >= 60 ? "Good" : "Needs Attention"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="text-6xl font-bold">{estate.healthScore}</div>
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-suleco-cyan to-suleco-blue transition-all"
                    style={{ width: `${estate.healthScore}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {Object.entries(healthBreakdown).map(([key, value]) => (
                    <Badge key={key} variant="outline" className="gap-1">
                      {key.charAt(0).toUpperCase() + key.slice(1)}: {value}%
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Area</span>
              <span className="font-medium">{estate.area} acres</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Parcels</span>
              <span className="font-medium">{estateParcels.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Assets</span>
              <span className="font-medium">{estateAssets.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Active Contracts</span>
              <span className="font-medium">{estateContracts.filter(c => c.status === "active").length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Open Work Orders</span>
              <span className="font-medium">{estateWorkOrders.filter(wo => wo.status !== "completed").length}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="map">Map & Boundaries</TabsTrigger>
          <TabsTrigger value="parcels">Parcels ({estateParcels.length})</TabsTrigger>
          <TabsTrigger value="assets">Assets ({estateAssets.length})</TabsTrigger>
          <TabsTrigger value="occupancy">Occupancy</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="inspections">Inspections</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Estate Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Owner</span>
                  <span className="font-medium">{estate.owner}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">{estate.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coordinates</span>
                  <span className="font-medium font-mono text-sm">
                    {estate.coordinates.lat.toFixed(4)} N, {estate.coordinates.lng.toFixed(4)} E
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant={estate.status === "active" ? "success" : "secondary"}>
                    {estate.status}
                  </Badge>
                </div>
                {estate.description && (
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground">{estate.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health Score Breakdown</CardTitle>
                <CardDescription>Click &quot;Explain&quot; to see calculation details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(healthBreakdown).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="capitalize">{key}</span>
                        <span className="font-medium">{value}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-suleco-cyan to-suleco-blue transition-all"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">Explain Score</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="map" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Geospatial Console</CardTitle>
              <CardDescription>Interactive map view with layer controls</CardDescription>
            </CardHeader>
            <CardContent>
              <MapCanvas parcels={estateParcels} estate={estate} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="parcels" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Parcels</CardTitle>
              <CardDescription>{estateParcels.length} parcels in this estate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {estateParcels.map((parcel) => (
                  <div key={parcel.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{parcel.parcelNumber}</div>
                      <div className="text-sm text-muted-foreground">
                        {parcel.area} m² • {parcel.landUse} • {parcel.status}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{formatCurrency(parcel.value)}</div>
                      {parcel.tenant && (
                        <div className="text-sm text-muted-foreground">Tenant: {parcel.tenant}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assets</CardTitle>
              <CardDescription>{estateAssets.length} assets registered</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {estateAssets.map((asset) => (
                  <div key={asset.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{asset.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {asset.type} • {asset.category} • {asset.status}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{formatCurrency(asset.value)}</div>
                      <Badge variant={asset.condition === "excellent" ? "success" : asset.condition === "good" ? "default" : "warning"}>
                        {asset.condition}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="occupancy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Occupancy</CardTitle>
              <CardDescription>Current tenants and occupants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {estateContracts.filter(c => c.status === "active").map((contract) => (
                  <div key={contract.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{contract.clientName}</div>
                      <div className="text-sm text-muted-foreground">
                        {contract.type} • {formatDate(contract.startDate)} - {formatDate(contract.endDate)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{formatCurrency(contract.monthlyAmount)}/mo</div>
                      <Badge variant="success">Active</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Work Orders</CardTitle>
              <CardDescription>Maintenance and repair requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {estateWorkOrders.map((wo) => (
                  <div key={wo.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{wo.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {wo.category} • Due: {formatDate(wo.dueDate)}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={wo.priority === "urgent" ? "destructive" : wo.priority === "high" ? "warning" : "default"}>
                        {wo.priority}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">{wo.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inspections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inspections</CardTitle>
              <CardDescription>Inspection history and scheduled inspections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {estateInspections.map((inspection) => (
                  <div key={inspection.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{inspection.type} Inspection</div>
                      <div className="text-sm text-muted-foreground">
                        {inspection.inspectorName} • {formatDate(inspection.scheduledDate)}
                      </div>
                    </div>
                    <div className="text-right">
                      {inspection.score && (
                        <div className="font-medium mb-1">Score: {inspection.score}</div>
                      )}
                      <Badge variant={inspection.passed ? "success" : "destructive"}>
                        {inspection.passed ? "Passed" : "Failed"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>{estateDocuments.length} documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {estateDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{doc.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {doc.type} • {formatDate(doc.uploadedDate)}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Records</CardTitle>
              <CardDescription>Invoices and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {estateInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{invoice.clientName}</div>
                      <div className="text-sm text-muted-foreground">
                        {invoice.type} • Due: {formatDate(invoice.dueDate)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{formatCurrency(invoice.amount)}</div>
                      <Badge variant={invoice.status === "paid" ? "success" : invoice.status === "overdue" ? "destructive" : "default"}>
                        {invoice.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Recent activity for this estate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm">Work order #wo-002 assigned to Kamal Perera</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm">Inspection completed - Score: 92</p>
                    <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm">New contract signed with Tech Solutions Ltd</p>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppShell>
  )
}

