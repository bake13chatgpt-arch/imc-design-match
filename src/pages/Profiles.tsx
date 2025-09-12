import { Layout } from "@/components/Layout";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { ProfileTimeline } from "@/components/profile/ProfileTimeline";
import { useState } from "react";
const Profiles = () => {
  const [profileData, setProfileData] = useState({
    name: "BAKE",
    placeOfBirth: "Rotterdam",
    dateOfBirth: "15-02-1991",
    age: 34,
    allegiance: "Luftwaffe",
    planeNumber: 13,
    rank: "Unterfeldwebel",
    statistics: {
      planesDownd: 71,
      groundTargets: 0,
      shipsSunk: 0,
      missionsFlown: 46,
      combatHours: 65
    }
  });
  const [timelineEvents, setTimelineEvents] = useState([{
    id: 1,
    date: "14/03/2025",
    type: "Mission",
    title: "3x Spitfire LF Mk.IX shot down NE of Caen at 2800m - Recorded on gun cam",
    description: "T/O - Saint-Andre-de-l'Eure\nLDG - Argentan",
    result: "Success"
  }, {
    id: 2,
    date: "10/02/2025",
    type: "Mission",
    title: "Got shot down W of P-Trap today, managed to ditch roughly 1KM short of friendly lines.",
    description: "T/O - Conches\nLDG - P-Trap (crash landing)",
    result: "Failure"
  }, {
    id: 3,
    date: "01/01/2025",
    type: "Mission",
    title: "Successful CAP",
    description: "T/O - Saint-Andre-de-l'Eure\nLDG - Saint-Andre-de-l'Eure",
    result: "Success"
  }, {
    id: 4,
    date: "24/12/2024",
    type: "Promotion",
    title: 'Promoted to "Unterfeldwebel"',
    description: "",
    result: "Success"
  }, {
    id: 5,
    date: "14/09/2023",
    type: "Award",
    title: 'Awarded with the "Knights Cross of the Iron Cross" for 50 aerial victories.',
    description: "",
    result: "Success"
  }]);
  return <Layout>
      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="container mx-auto max-w-7xl bg-zinc-900">
          <h1 className="text-4xl font-bold tracking-wider text-foreground mb-8 my-[86px] py-[40px]">
            PROFILES
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="space-y-6">
              <ProfileHeader profileData={profileData} onProfileUpdate={setProfileData} />
              <ProfileCard profileData={profileData} onProfileUpdate={setProfileData} />
            </div>

            {/* Right Column - Timeline */}
            <div className="lg:col-span-2">
              <ProfileTimeline events={timelineEvents} onEventsUpdate={setTimelineEvents} />
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Profiles;