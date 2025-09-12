import { Calendar, Download, LayoutDashboard, Search, User, History } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
const items = [{
  title: "Dashboard",
  url: "/",
  icon: LayoutDashboard
}, {
  title: "Calendar",
  url: "/calendar",
  icon: Calendar
}, {
  title: "Profiles",
  url: "/profiles",
  icon: User
}, {
  title: "History",
  url: "/history",
  icon: History
}, {
  title: "Search",
  url: "/search",
  icon: Search
}, {
  title: "Downloads",
  url: "/downloads",
  icon: Download
}];
export function AppSidebar() {
  return <Sidebar className="border-r-0 w-64 shadow-2xl" variant="sidebar">
      <SidebarContent className="border-r border-border rounded-none bg-zinc-900 mx-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground font-bold text-lg mb-4 px-4 bg-zinc-800/0">
            MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => <SidebarMenuItem key={item.title}>
                  <NavLink to={item.url} end className={({
                isActive
              }) => `flex items-center gap-3 w-full text-left h-12 px-4 menu-item-hover rounded-none ${isActive ? 'text-primary font-medium' : 'text-foreground'}`}>
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.title}</span>
                  </NavLink>
                </SidebarMenuItem>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>;
}