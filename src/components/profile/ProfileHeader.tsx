import { useState, useRef } from "react";
import { Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
interface ProfileHeaderProps {
  profileData: any;
  onProfileUpdate: (data: any) => void;
}
export function ProfileHeader({
  profileData
}: ProfileHeaderProps) {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState({
    x: 0,
    y: 0
  });
  const [imageScale, setImageScale] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setProfileImage(e.target?.result as string);
        setIsEditing(true);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageAdjust = (type: 'position' | 'scale', value: any) => {
    if (type === 'position') {
      setImagePosition(value);
    } else if (type === 'scale') {
      setImageScale(value);
    }
  };
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Profile Photo */}
      <div className="space-y-4">
        <div className="relative w-48 h-48 mx-auto">
          <div className="w-full h-full rounded-full border-2 border-dashed border-muted-foreground bg-card flex items-center justify-center overflow-hidden mx-[98px] my-0 py-px">
            {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" style={{
            transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${imageScale})`
          }} /> : <div className="text-center">
                <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Placeholder profile photo</p>
              </div>}
          </div>
          <Button size="icon" className="absolute bottom-2 right-2" onClick={() => fileInputRef.current?.click()}>
            <Upload className="h-4 w-4" />
          </Button>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </div>
        
        {/* Image Adjustment Controls */}
        {isEditing && profileImage && <Card className="p-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Position X</label>
                <input type="range" min="-50" max="50" value={imagePosition.x} onChange={e => handleImageAdjust('position', {
              ...imagePosition,
              x: parseInt(e.target.value)
            })} className="w-full" />
              </div>
              <div>
                <label className="text-sm font-medium">Position Y</label>
                <input type="range" min="-50" max="50" value={imagePosition.y} onChange={e => handleImageAdjust('position', {
              ...imagePosition,
              y: parseInt(e.target.value)
            })} className="w-full" />
              </div>
              <div>
                <label className="text-sm font-medium">Scale</label>
                <input type="range" min="0.5" max="2" step="0.1" value={imageScale} onChange={e => handleImageAdjust('scale', parseFloat(e.target.value))} className="w-full" />
              </div>
              <Button onClick={() => setIsEditing(false)} className="w-full">
                Done
              </Button>
            </div>
          </Card>}
      </div>

      {/* Statistics */}
      <div className="md:col-span-2">
        <div className="grid grid-cols-5 gap-4 text-center">
          <div>
            <div className="text-sm text-muted-foreground mb-1 mx-[400px]">PLANES DOWNED</div>
            <div className="text-3xl font-bold mx-[400px]">{profileData.statistics.planesDownd}</div>
          </div>
          <div className="mx-0">
            <div className="text-sm text-muted-foreground mb-1 mx-[500px]">GROUND TARGETS</div>
            <div className="text-3xl font-bold mx-[500px]">{profileData.statistics.groundTargets}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1 mx-[600px]">SHIPS SUNK</div>
            <div className="text-3xl font-bold mx-[600px]">{profileData.statistics.shipsSunk}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1 mx-[700px]">MISSIONS FLOWN</div>
            <div className="text-3xl font-bold mx-[700px]">{profileData.statistics.missionsFlown}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1 mx-[800px]">COMBAT HOURS</div>
            <div className="text-3xl font-bold mx-[800px]">{profileData.statistics.combatHours}</div>
          </div>
        </div>
      </div>
    </div>;
}