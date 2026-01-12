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
import { contracts } from "@/src/lib/mock/contracts"
import { formatCurrency, formatDate } from "@/lib/utils"

export default function ContractsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredContracts = contracts.filter(contract => {
    if (searchQuery && !contract.clientName.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (statusFilter !== "all" && contract.status !== statusFilter) return false
    return true
  })

  return (
    <AppShell>
      <PageHeader
        title="Contracts"
        subtitle="Leases, agreements, and service contracts"
        actions={
          <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
            <Plus className="mr-2 h-4 w-4" />
            New Contract
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
                  placeholder="Search contracts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="terminated">Terminated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contracts</CardTitle>
            <CardDescription>{filteredContracts.length} contracts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredContracts.map((contract) => (
                <div key={contract.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="font-medium">{contract.clientName}</div>
                      <Badge variant={contract.status === "active" ? "success" : "secondary"}>
                        {contract.status}
                      </Badge>
                      <Badge variant="outline">{contract.type}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {contract.terms} • {formatDate(contract.startDate)} - {formatDate(contract.endDate)}
                    </div>
                    {contract.autoRenew && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Auto-renewal enabled
                      </div>
                    )}
                  </div>
                  <div className="text-right ml-4">
                    <div className="font-medium mb-1">{formatCurrency(contract.monthlyAmount)}/mo</div>
                    <div className="text-sm text-muted-foreground">Total: {formatCurrency(contract.totalAmount)}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}

