import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useState } from "react"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full relative">
        {/* Hover trigger area */}
        <div 
          className="fixed left-0 top-0 w-8 h-full z-40"
          onMouseEnter={() => setSidebarVisible(true)}
        />
        
        {/* Sidebar */}
        <div 
          className={`fixed left-0 top-0 h-full z-50 transition-transform duration-300 ${
            sidebarVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
          onMouseLeave={() => setSidebarVisible(false)}
        >
          <AppSidebar />
        </div>

        <main className="flex-1 w-full">
          <div className="flex-1">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  )
}