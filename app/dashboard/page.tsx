"use client"

import { AppShell } from "@/components/app-shell"
import { PageHeader } from "@/components/page-header"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, FileText, Wrench, TrendingUp, AlertCircle } from "lucide-react"
import { estates } from "@/src/lib/mock/estates"
import { workOrders } from "@/src/lib/mock/workOrders"
import { contracts } from "@/src/lib/mock/contracts"
import { clients } from "@/src/lib/mock/clients"
import { formatCurrency } from "@/lib/utils"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { name: "Jan", revenue: 12000000, expenses: 4500000 },
  { name: "Feb", revenue: 13500000, expenses: 5200000 },
  { name: "Mar", revenue: 14200000, expenses: 4800000 },
  { name: "Apr", revenue: 15800000, expenses: 5500000 },
  { name: "May", revenue: 16500000, expenses: 5100000 },
  { name: "Jun", revenue: 17200000, expenses: 5800000 },
]

const activityData = [
  { id: "1", type: "work_order", message: "Work order #wo-002 assigned to Kamal Perera", time: "2 hours ago" },
  { id: "2", type: "payment", message: "Payment received from Tech Solutions Ltd", time: "5 hours ago" },
  { id: "3", type: "inspection", message: "Inspection completed for Estate est-001", time: "1 day ago" },
  { id: "4", type: "contract", message: "New contract signed with Resort Development", time: "2 days ago" },
]

export default function DashboardPage() {
  const totalEstates = estates.length
  const activeEstates = estates.filter(e => e.status === "active").length
  const totalClients = clients.length
  const activeContracts = contracts.filter(c => c.status === "active").length
  const openWorkOrders = workOrders.filter(wo => wo.status === "open" || wo.status === "in-progress" || wo.status === "assigned").length
  const urgentWorkOrders = workOrders.filter(wo => wo.priority === "urgent" && (wo.status === "open" || wo.status === "in-progress" || wo.status === "assigned")).length

  const avgHealthScore = Math.round(
    estates.reduce((sum, e) => sum + e.healthScore, 0) / estates.length
  )

  return (
    <AppShell>
      <PageHeader
        title="Dashboard"
        subtitle="Overview of your estate management operations"
      />

      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Estates"
            value={totalEstates}
            icon={Building2}
            trend={{ value: 5, label: "from last month", isPositive: true }}
          />
          <StatCard
            title="Active Clients"
            value={totalClients}
            icon={Users}
            trend={{ value: 12, label: "from last month", isPositive: true }}
          />
          <StatCard
            title="Active Contracts"
            value={activeContracts}
            icon={FileText}
            trend={{ value: 8, label: "from last month", isPositive: true }}
          />
          <StatCard
            title="Open Work Orders"
            value={openWorkOrders}
            icon={Wrench}
            trend={{ value: -3, label: "from last month", isPositive: false }}
          />
        </div>

        {/* Health Score & Urgent Alerts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Estate Health Score</CardTitle>
              <CardDescription>Average health across all estates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold">{avgHealthScore}</div>
                <div className="flex-1">
                  <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-suleco-cyan to-suleco-blue transition-all"
                      style={{ width: `${avgHealthScore}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {avgHealthScore >= 80 ? "Excellent" : avgHealthScore >= 60 ? "Good" : "Needs Attention"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Urgent Alerts</CardTitle>
              <CardDescription>Items requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Urgent Work Orders</p>
                      <p className="text-sm text-muted-foreground">{urgentWorkOrders} items</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-900">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="font-medium">Overdue Invoices</p>
                      <p className="text-sm text-muted-foreground">1 invoice</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Expenses</CardTitle>
              <CardDescription>Monthly financial overview</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Legend />
                  <Bar dataKey="revenue" fill="#3857F9" name="Revenue" />
                  <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estate Health Trend</CardTitle>
              <CardDescription>Average health score over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData.map((d, i) => ({ name: d.name, score: 75 + i * 2 }))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#28F0F1" strokeWidth={2} name="Health Score" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates across the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityData.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
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

