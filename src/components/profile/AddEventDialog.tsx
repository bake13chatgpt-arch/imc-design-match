import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface Victory {
  id: number
  class: string
  type: string
  allegiance: string
}

interface AddEventDialogProps {
  isOpen: boolean
  onClose: () => void
  onAddEvent: (event: any) => void
}

export function AddEventDialog({ isOpen, onClose, onAddEvent }: AddEventDialogProps) {
  const [formData, setFormData] = useState({
    date: '',
    eventType: '',
    result: '',
    aircraftFlown: '',
    flightDuration: '',
    description: ''
  })

  const [victories, setVictories] = useState<Victory[]>([])
  const [showVictoryForm, setShowVictoryForm] = useState(false)

  const aircraftTypes = [
    'BF-109 K4',
    'Fw-190 A8', 
    'Fw-190 D9'
  ]

  const victoryClasses = ['Air', 'Ground', 'Ship', 'Facility', 'Balloon']
  
  const victoryTypes = [
    'Spitfire LF Mk. IX',
    'P-51 Mustang',
    'P-47 Thunderbolt',
    'F4U-1D Corsair',
    'B-17 Flying Fortress',
    'A-20 Havoc',
    'Mosquito FB VI',
    'C-47 Skytrain'
  ]

  const allegiances = ['RAF', 'USAAF']

  const addVictory = (victoryData: Omit<Victory, 'id'>) => {
    const victory = {
      ...victoryData,
      id: Math.max(...victories.map(v => v.id), 0) + 1
    }
    setVictories([...victories, victory])
    setShowVictoryForm(false)
  }

  const removeVictory = (id: number) => {
    setVictories(victories.filter(v => v.id !== id))
  }

  const handleSubmit = () => {
    const event = {
      date: formData.date,
      type: formData.eventType,
      title: generateEventTitle(),
      description: formData.description,
      result: formData.result,
      victories: victories,
      aircraftFlown: formData.aircraftFlown,
      flightDuration: formData.flightDuration
    }
    
    onAddEvent(event)
    onClose()
    resetForm()
  }

  const generateEventTitle = () => {
    if (formData.eventType === 'Mission' && victories.length > 0) {
      return `${victories.length}x ${victories[0].type} shot down`
    }
    return `${formData.eventType} Event`
  }

  const resetForm = () => {
    setFormData({
      date: '',
      eventType: '',
      result: '',
      aircraftFlown: '',
      flightDuration: '',
      description: ''
    })
    setVictories([])
    setShowVictoryForm(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">ADD NEW EVENT</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {/* Basic Event Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                placeholder="dd/mm/yyyy"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))}
              />
            </div>
            <div>
              <Label htmlFor="eventType">Event Type</Label>
              <Select value={formData.eventType} onValueChange={(value) => setFormData(prev => ({...prev, eventType: value}))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Award">Award</SelectItem>
                  <SelectItem value="Transfer">Transfer</SelectItem>
                  <SelectItem value="Promotion">Promotion</SelectItem>
                  <SelectItem value="Mission">Mission</SelectItem>
                  <SelectItem value="Wounded">Wounded</SelectItem>
                  <SelectItem value="POW">POW</SelectItem>
                  <SelectItem value="KIA">KIA</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="result">Result</Label>
              <Select value={formData.result} onValueChange={(value) => setFormData(prev => ({...prev, result: value}))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Success">Success</SelectItem>
                  <SelectItem value="Failure">Failure</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="aircraftFlown">Aircraft Flown</Label>
              <Select value={formData.aircraftFlown} onValueChange={(value) => setFormData(prev => ({...prev, aircraftFlown: value}))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {aircraftTypes.map(aircraft => (
                    <SelectItem key={aircraft} value={aircraft}>{aircraft}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="flightDuration">Duration of flight (min)</Label>
            <Input
              id="flightDuration"
              type="number"
              value={formData.flightDuration}
              onChange={(e) => setFormData(prev => ({...prev, flightDuration: e.target.value}))}
            />
          </div>

          {/* Victories Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Victories</h3>
              <Button onClick={() => setShowVictoryForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add a victory
              </Button>
            </div>

            {/* Victory Form */}
            {showVictoryForm && (
              <VictoryForm
                onAdd={addVictory}
                onCancel={() => setShowVictoryForm(false)}
                victoryClasses={victoryClasses}
                victoryTypes={victoryTypes}
                allegiances={allegiances}
              />
            )}

            {/* Victory List */}
            {victories.map(victory => (
              <div key={victory.id} className="flex items-center justify-between p-3 bg-muted rounded">
                <div className="text-sm">
                  <span className="font-medium">{victory.class}</span> - 
                  <span className="ml-1">{victory.type}</span> - 
                  <span className="ml-1">{victory.allegiance}</span>
                </div>
                <Button 
                  size="icon" 
                  variant="ghost"
                  onClick={() => removeVictory(victory.id)}
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Event description..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
            />
          </div>
        </div>

        {/* Dialog Actions */}
        <div className="flex justify-between">
          <Button variant="outline">Upload files</Button>
          <div className="flex gap-3">
            <Button onClick={handleSubmit} disabled={!formData.date || !formData.eventType}>
              Add to timeline
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface VictoryFormProps {
  onAdd: (victory: Omit<Victory, 'id'>) => void
  onCancel: () => void
  victoryClasses: string[]
  victoryTypes: string[]
  allegiances: string[]
}

function VictoryForm({ onAdd, onCancel, victoryClasses, victoryTypes, allegiances }: VictoryFormProps) {
  const [victoryData, setVictoryData] = useState({
    class: '',
    type: '',
    allegiance: ''
  })

  const handleAdd = () => {
    if (victoryData.class && victoryData.type && victoryData.allegiance) {
      onAdd(victoryData)
      setVictoryData({ class: '', type: '', allegiance: '' })
    }
  }

  return (
    <div className="p-4 bg-muted/50 rounded space-y-3">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Label>Class</Label>
          <Select value={victoryData.class} onValueChange={(value) => setVictoryData(prev => ({...prev, class: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {victoryClasses.map(cls => (
                <SelectItem key={cls} value={cls}>{cls}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Type</Label>
          <Select value={victoryData.type} onValueChange={(value) => setVictoryData(prev => ({...prev, type: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {victoryTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Allegiance</Label>
          <Select value={victoryData.allegiance} onValueChange={(value) => setVictoryData(prev => ({...prev, allegiance: value}))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {allegiances.map(allegiance => (
                <SelectItem key={allegiance} value={allegiance}>{allegiance}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={handleAdd} size="sm">Add Victory</Button>
        <Button onClick={onCancel} variant="outline" size="sm">Cancel</Button>
      </div>
    </div>
  )
}