import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EditProfileDialog } from "./EditProfileDialog";
interface ProfileCardProps {
  profileData: any;
  onProfileUpdate: (data: any) => void;
}
export function ProfileCard({
  profileData,
  onProfileUpdate
}: ProfileCardProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const navigate = useNavigate();
  const handleUserHistory = () => {
    navigate("/history");
  };
  return <div className="space-y-6">
      {/* Profile Information Card */}
      <Card className="bg-card/80 backdrop-blur">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{profileData.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Place of Birth:</span>
              <span>{profileData.placeOfBirth}</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Date of Birth:</span>
              <span>{profileData.dateOfBirth}</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Age:</span>
              <span>{profileData.age}</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Allegiance:</span>
              <span>{profileData.allegiance}</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Plane Number:</span>
              <span>{profileData.planeNumber}</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Rank:</span>
              <span>{profileData.rank}</span>
            </div>
          </div>

          {/* Rank Stars */}
          <div className="flex justify-center space-x-1 my-4">
            
          </div>

          {/* Rank Sleeve Patch Placeholder */}
          <div className="bg-muted/50 rounded border-2 border-dashed border-muted-foreground p-8 text-center">
            <p className="text-muted-foreground">Placeholder Rank Sleeve Patch</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button onClick={() => setIsEditDialogOpen(true)} className="flex-1">
              EDIT PROFILE
            </Button>
            <Button variant="outline" onClick={handleUserHistory} className="flex-1">
              USER HISTORY
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* User Uniform Placeholder */}
      <Card className="bg-card/50">
        <CardContent className="p-8">
          <div className="bg-muted/30 rounded border-2 border-dashed border-muted-foreground p-12 text-center min-h-[300px] flex items-center justify-center">
            <div>
              <p className="text-muted-foreground text-lg mb-2">Placeholder User Uniform</p>
              <p className="text-sm text-muted-foreground">Dutch, IMC 4 Uniform</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <EditProfileDialog isOpen={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)} profileData={profileData} onSave={onProfileUpdate} />
    </div>;
}