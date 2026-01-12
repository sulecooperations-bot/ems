"use client"

import { useState } from "react"
import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Plus, Filter, AlertCircle } from "lucide-react"
import { workOrders } from "@/src/lib/mock/workOrders"
import { formatCurrency, formatDate } from "@/lib/utils"

export default function MaintenancePage() {
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [priorityFilter, setPriorityFilter] = useState<string>("all")
  const [triageMode, setTriageMode] = useState(false)

  const filteredWorkOrders = workOrders.filter(wo => {
    if (statusFilter !== "all" && wo.status !== statusFilter) return false
    if (priorityFilter !== "all" && wo.priority !== priorityFilter) return false
    return true
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "destructive"
      case "high": return "warning"
      case "medium": return "default"
      case "low": return "secondary"
      default: return "default"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "success"
      case "in-progress": return "default"
      case "assigned": return "default"
      case "open": return "secondary"
      default: return "default"
    }
  }

  const urgentWorkOrders = filteredWorkOrders.filter(wo => wo.priority === "urgent" && wo.status !== "completed")
  const highPriorityWorkOrders = filteredWorkOrders.filter(wo => wo.priority === "high" && wo.status !== "completed")

  return (
    <AppShell>
      <PageHeader
        title="Maintenance"
        subtitle="Work orders and maintenance management"
        actions={
          <div className="flex gap-2">
            <Button
              variant={triageMode ? "default" : "outline"}
              onClick={() => setTriageMode(!triageMode)}
            >
              <AlertCircle className="mr-2 h-4 w-4" />
              {triageMode ? "Exit Triage" : "Triage Mode"}
            </Button>
            <Button className="bg-gradient-to-r from-suleco-cyan to-suleco-blue">
              <Plus className="mr-2 h-4 w-4" />
              New Work Order
            </Button>
          </div>
        }
      />

      <div className="space-y-6">
        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="assigned">Assigned</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Triage Mode View */}
        {triageMode && (
          <div className="grid gap-4 md:grid-cols-2">
            {urgentWorkOrders.length > 0 && (
              <Card className="border-red-200 dark:border-red-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="h-5 w-5" />
                    Urgent Priority
                  </CardTitle>
                  <CardDescription>Immediate action required</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {urgentWorkOrders.map((wo) => (
                      <div key={wo.id} className="p-3 border rounded-lg bg-red-50 dark:bg-red-950/20">
                        <div className="font-medium">{wo.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Due: {formatDate(wo.dueDate)} • SLA: {wo.slaHours}h
                        </div>
                        <Button size="sm" className="mt-2 w-full">Take Action</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {highPriorityWorkOrders.length > 0 && (
              <Card className="border-yellow-200 dark:border-yellow-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-600">
                    <AlertCircle className="h-5 w-5" />
                    High Priority
                  </CardTitle>
                  <CardDescription>Action needed soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {highPriorityWorkOrders.map((wo) => (
                      <div key={wo.id} className="p-3 border rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
                        <div className="font-medium">{wo.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Due: {formatDate(wo.dueDate)} • SLA: {wo.slaHours}h
                        </div>
                        <Button size="sm" variant="outline" className="mt-2 w-full">Review</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Work Orders List */}
        <Card>
          <CardHeader>
            <CardTitle>Work Orders</CardTitle>
            <CardDescription>{filteredWorkOrders.length} work orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredWorkOrders.map((wo) => (
                <div key={wo.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="font-medium">{wo.title}</div>
                      <Badge variant={getPriorityColor(wo.priority) as any}>
                        {wo.priority}
                      </Badge>
                      <Badge variant={getStatusColor(wo.status) as any}>
                        {wo.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {wo.description} • Due: {formatDate(wo.dueDate)} • SLA: {wo.slaHours}h
                    </div>
                    {wo.assignedToName && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Assigned to: {wo.assignedToName}
                      </div>
                    )}
                  </div>
                  <div className="text-right ml-4">
                    <div className="font-medium mb-1">{formatCurrency(wo.estimatedCost)}</div>
                    <Badge variant={wo.slaStatus === "on-time" ? "success" : wo.slaStatus === "at-risk" ? "warning" : "destructive"}>
                      {wo.slaStatus}
                    </Badge>
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

