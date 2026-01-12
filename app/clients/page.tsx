"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Mail, Phone, Building2 } from "lucide-react"
import { clients } from "@/src/lib/mock/clients"
import { formatDate } from "@/lib/utils"

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")

  const filteredClients = clients.filter(client => {
    if (searchQuery && !client.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (typeFilter !== "all" && client.type !== typeFilter) return false
    return true
  })

  return (
    <AppShell>
      <PageHeader
        title="Clients"
        subtitle="Owners, tenants, and organizations"
        actions={
          <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
            <Plus className="mr-2 h-4 w-4" />
            New Client
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
                  placeholder="Search clients..."
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
                  <SelectItem value="owner">Owner</SelectItem>
                  <SelectItem value="tenant">Tenant</SelectItem>
                  <SelectItem value="organization">Organization</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredClients.map((client) => (
            <Card key={client.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{client.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-2">
                      <Building2 className="h-3 w-3" />
                      {client.type}
                    </CardDescription>
                  </div>
                  <Badge variant={client.status === "active" ? "success" : "secondary"}>
                    {client.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{client.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{client.phone}</span>
                  </div>
                  {client.address && (
                    <div className="text-sm text-muted-foreground pt-2 border-t">
                      {client.address}
                    </div>
                  )}
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  )
}

