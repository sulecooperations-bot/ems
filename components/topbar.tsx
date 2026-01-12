"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Search, Bell, Sun, Moon, User, Command } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut } from "@/components/ui/command"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

const notifications = [
  { id: "1", title: "New work order assigned", time: "5m ago", read: false },
  { id: "2", title: "Inspection scheduled for tomorrow", time: "1h ago", read: false },
  { id: "3", title: "Payment received from Tech Solutions Ltd", time: "2h ago", read: true },
]

export function Topbar() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const getBreadcrumbs = () => {
    const paths = pathname?.split("/").filter(Boolean) || []
    if (paths.length === 0 || (paths.length === 1 && paths[0] === "dashboard")) {
      return [{ label: "Dashboard", href: "/dashboard" }]
    }
    
    const breadcrumbs = [{ label: "Home", href: "/dashboard" }]
    let currentPath = ""
    
    paths.forEach((path, index) => {
      currentPath += `/${path}`
      const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ")
      breadcrumbs.push({ label, href: currentPath })
    })
    
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-6">
        <div className="flex flex-1 items-center gap-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <div key={`${crumb.href}-${index}`} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                <Link
                  href={crumb.href}
                  className={cn(
                    "hover:text-foreground transition-colors",
                    index === breadcrumbs.length - 1 && "text-foreground font-medium"
                  )}
                >
                  {crumb.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="hidden sm:flex"
          >
            <Search className="h-5 w-5" />
            <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {notifications.filter(n => !n.read).length}
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="flex flex-col items-start">
                  <div className="flex items-center justify-between w-full">
                    <span className={notification.read ? "" : "font-semibold"}>
                      {notification.title}
                    </span>
                    {!notification.read && (
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem>
              <Link href="/dashboard" className="flex items-center w-full">
                Dashboard
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/estates" className="flex items-center w-full">
                Estates
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/parcels" className="flex items-center w-full">
                Parcels
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/assets" className="flex items-center w-full">
                Assets
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/clients" className="flex items-center w-full">
                Clients
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/contracts" className="flex items-center w-full">
                Contracts
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/maintenance" className="flex items-center w-full">
                Maintenance
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/documents" className="flex items-center w-full">
                Documents
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/finance/invoices" className="flex items-center w-full">
                Finance
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/reports" className="flex items-center w-full">
                Reports
              </Link>
            </CommandItem>
            <CommandItem>
              <Link href="/settings" className="flex items-center w-full">
                Settings
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Actions">
            <CommandItem>
              <span>Create Estate</span>
              <CommandShortcut>⌘E</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Create Work Order</span>
              <CommandShortcut>⌘W</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>New Contract</span>
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

