import { useState } from "react"
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

interface EditProfileDialogProps {
  isOpen: boolean
  onClose: () => void
  profileData: any
  onSave: (data: any) => void
}

export function EditProfileDialog({ isOpen, onClose, profileData, onSave }: EditProfileDialogProps) {
  const [formData, setFormData] = useState(profileData)

  const handleSave = () => {
    onSave(formData)
    onClose()
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">EDIT PROFILE</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Pilot Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="placeOfBirth">Place of Birth</Label>
              <Input
                id="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="allegiance">Allegiance</Label>
              <Select 
                value={formData.allegiance} 
                onValueChange={(value) => handleInputChange('allegiance', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Luftwaffe">Luftwaffe</SelectItem>
                  <SelectItem value="RAF">RAF</SelectItem>
                  <SelectItem value="USAAF">USAAF</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="planeNumber">Plane Number</Label>
              <Input
                id="planeNumber"
                type="number"
                value={formData.planeNumber}
                onChange={(e) => handleInputChange('planeNumber', parseInt(e.target.value))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="rank">Rank</Label>
            <Select 
              value={formData.rank} 
              onValueChange={(value) => handleInputChange('rank', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Gefreiter">Gefreiter</SelectItem>
                <SelectItem value="Obergefreiter">Obergefreiter</SelectItem>
                <SelectItem value="Unterfeldwebel">Unterfeldwebel</SelectItem>
                <SelectItem value="Feldwebel">Feldwebel</SelectItem>
                <SelectItem value="Oberfeldwebel">Oberfeldwebel</SelectItem>
                <SelectItem value="Leutnant">Leutnant</SelectItem>
                <SelectItem value="Oberleutnant">Oberleutnant</SelectItem>
                <SelectItem value="Hauptmann">Hauptmann</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}