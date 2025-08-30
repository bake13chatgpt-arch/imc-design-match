import { Calendar, Download, LayoutDashboard, Search, User, History } from "lucide-react"
import { NavLink } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Profiles", url: "/profiles", icon: User },
  { title: "History", url: "/history", icon: History },
  { title: "Search", url: "/search", icon: Search },
  { title: "Downloads", url: "/downloads", icon: Download },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0" variant="sidebar">
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground font-bold text-lg mb-4 px-4">
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12 px-4">
                    <NavLink 
                      to={item.url} 
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 w-full text-left menu-item-hover ${
                          isActive 
                            ? 'text-primary font-medium' 
                            : 'text-foreground hover:text-primary'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}