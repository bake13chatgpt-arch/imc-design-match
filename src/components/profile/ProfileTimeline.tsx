import { useState } from "react"
import { Plus, Edit, X, CheckCircle, XCircle, Award, Users, TrendingUp, Plane, Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AddEventDialog } from "./AddEventDialog"

interface TimelineEvent {
  id: number
  date: string
  type: string
  title: string
  description: string
  result: string
}

interface ProfileTimelineProps {
  events: TimelineEvent[]
  onEventsUpdate: (events: TimelineEvent[]) => void
}

export function ProfileTimeline({ events, onEventsUpdate }: ProfileTimelineProps) {
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)

  const getTimelineIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'award':
        return <Award className="h-6 w-6 text-yellow-500" />
      case 'transfer':
        return <Users className="h-6 w-6 text-blue-500" />
      case 'promotion':
        return <TrendingUp className="h-6 w-6 text-green-500" />
      case 'mission':
        return <Plane className="h-6 w-6 text-blue-400" />
      case 'wounded':
        return <Heart className="h-6 w-6 text-red-500" />
      case 'pow':
        return <Shield className="h-6 w-6 text-orange-500" />
      default:
        return <Plane className="h-6 w-6 text-blue-400" />
    }
  }

  const getTimelineButtonText = (type: string) => {
    switch (type.toLowerCase()) {
      case 'award':
        return 'AWARD'
      case 'transfer':
        return 'TRANSFER'
      case 'promotion':
        return 'PROMOTION'
      case 'mission':
        return 'MISSION INFO'
      case 'wounded':
        return 'WOUNDED'
      case 'pow':
        return 'POW'
      default:
        return 'EVENT'
    }
  }

  const removeEvent = (id: number) => {
    onEventsUpdate(events.filter(event => event.id !== id))
  }

  const addEvent = (newEvent: Omit<TimelineEvent, 'id'>) => {
    const event = {
      ...newEvent,
      id: Math.max(...events.map(e => e.id), 0) + 1
    }
    onEventsUpdate([event, ...events])
  }

  return (
    <div className="space-y-6">
      {/* Timeline Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Timeline</h2>
        <Button onClick={() => setIsAddEventOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add new event
        </Button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border border-l-2 border-dashed border-white/50"></div>
        <div className="absolute left-7 top-0 w-3 h-3 bg-white transform rotate-45"></div>

        {/* Timeline Events */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="relative flex items-start">
              {/* Timeline Button */}
              <div className="relative z-10 flex items-center justify-center w-16 h-8 bg-primary text-primary-foreground text-xs font-bold rounded mr-4">
                {getTimelineButtonText(event.type)}
              </div>

              {/* Event Card */}
              <Card className="flex-1 bg-card/90 backdrop-blur">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {event.result === 'Success' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                        <span className="font-semibold">{event.type}</span>
                        <span className="text-sm text-muted-foreground ml-auto">{event.date}</span>
                      </div>
                      
                      <h3 className="font-medium mb-2">{event.title}</h3>
                      
                      {event.description && (
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {event.description}
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-1 ml-4">
                      <Button size="icon" variant="ghost" className="h-6 w-6">
                        <Edit className="h-3 w-3 text-green-500" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-6 w-6"
                        onClick={() => removeEvent(event.id)}
                      >
                        <X className="h-3 w-3 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <AddEventDialog
        isOpen={isAddEventOpen}
        onClose={() => setIsAddEventOpen(false)}
        onAddEvent={addEvent}
      />
    </div>
  )
}