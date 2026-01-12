"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Building2,
  MapPin,
  Package,
  Users,
  FileText,
  ClipboardCheck,
  Wrench,
  FileSearch,
  DollarSign,
  BarChart3,
  Settings,
  HelpCircle,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { brand } from "@/src/brand/brand"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Estates", href: "/estates", icon: Building2 },
  { name: "Parcels", href: "/parcels", icon: MapPin },
  { name: "Assets", href: "/assets", icon: Package },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Contracts", href: "/contracts", icon: FileText },
  { name: "Inspections", href: "/inspections", icon: ClipboardCheck },
  { name: "Maintenance", href: "/maintenance", icon: Wrench },
  { name: "Documents", href: "/documents", icon: FileSearch },
  { name: "Finance", href: "/finance/invoices", icon: DollarSign },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help", href: "/help", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <div className={cn(
        "hidden md:flex flex-col border-r bg-card transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}>
        <div className="flex h-16 items-center border-b px-4">
          {!collapsed ? (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-suleco-cyan to-suleco-blue flex items-center justify-center text-white font-bold">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">SULECO</span>
                <span className="text-xs text-muted-foreground">EstateOS</span>
              </div>
            </div>
          ) : (
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-suleco-cyan to-suleco-blue flex items-center justify-center text-white font-bold mx-auto">
              S
            </div>
          )}
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>
        <div className="border-t p-4">
          <Button
            variant="ghost"
            size="icon"
            className="w-full"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </>
  )
}

