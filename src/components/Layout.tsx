import { AppSidebar } from "@/components/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center px-6">
              <SidebarTrigger className="-ml-1" />
            </div>
          </div>
          <div className="flex-1">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  )
}