"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, FileText, Download } from "lucide-react"
import { invoices } from "@/src/lib/mock/finance"
import { formatCurrency, formatDate } from "@/lib/utils"

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredInvoices = invoices.filter(inv => {
    if (searchQuery && !inv.clientName.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (statusFilter !== "all" && inv.status !== statusFilter) return false
    return true
  })

  const totalRevenue = invoices.filter(inv => inv.status === "paid").reduce((sum, inv) => sum + inv.amount, 0)
  const pendingAmount = invoices.filter(inv => inv.status === "sent" || inv.status === "draft").reduce((sum, inv) => sum + inv.amount, 0)
  const overdueAmount = invoices.filter(inv => inv.status === "overdue").reduce((sum, inv) => sum + inv.amount, 0)

  return (
    <AppShell>
      <PageHeader
        title="Invoices"
        subtitle="Financial invoicing and payment tracking"
        actions={
          <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
            <Plus className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
        }
      />

      <div className="space-y-6">
        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{formatCurrency(totalRevenue)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Pending</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{formatCurrency(pendingAmount)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Overdue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{formatCurrency(overdueAmount)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by client name..."
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
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Invoices List */}
        <Card>
          <CardHeader>
            <CardTitle>Invoices</CardTitle>
            <CardDescription>{filteredInvoices.length} invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredInvoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="font-medium">{invoice.clientName}</div>
                      <Badge variant={invoice.status === "paid" ? "success" : invoice.status === "overdue" ? "destructive" : "default"}>
                        {invoice.status}
                      </Badge>
                      <Badge variant="outline">{invoice.type}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {invoice.description} • Due: {formatDate(invoice.dueDate)}
                    </div>
                    {invoice.paidDate && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Paid: {formatDate(invoice.paidDate)}
                      </div>
                    )}
                  </div>
                  <div className="text-right ml-4">
                    <div className="font-medium text-lg mb-2">{formatCurrency(invoice.amount)}</div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      View
                    </Button>
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

