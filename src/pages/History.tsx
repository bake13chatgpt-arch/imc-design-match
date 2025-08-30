import { Layout } from "@/components/Layout"

const History = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold tracking-wider text-foreground mb-8">
            HISTORY
          </h1>
          <div className="bg-card rounded-lg p-6 border border-border">
            <p className="text-muted-foreground">History functionality will be implemented here.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default History