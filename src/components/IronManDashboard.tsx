import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import AuthModal from './AuthModal';
import SquadronStats from './SquadronStats';
import NewsSection from './NewsSection';
import ActivePilots from './ActivePilots';
import ironManLogo from '@/assets/iron-man-logo.png';

const IronManDashboard = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleAuth = (name: string, password: string) => {
    // For now, just log the credentials and close modal
    console.log('Auth attempt:', { name, password });
    setLoginOpen(false);
    setSignupOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Auth buttons */}
      <header className="p-6">
        <div className="flex items-start justify-start gap-4">
          <Button
            variant="outline"
            onClick={() => setSignupOpen(true)}
            className="border-muted-foreground text-foreground hover:bg-muted"
          >
            SIGN UP
          </Button>
          <Button
            variant="outline"
            onClick={() => setLoginOpen(true)}
            className="border-muted-foreground text-foreground hover:bg-muted"
          >
            LOGIN
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-wider text-foreground mb-8">
            IRON MAN CAMPAIGN DASHBOARD
          </h1>
        </div>

        {/* Photo Placeholder */}
        <div className="text-center mb-8">
          <div className="mx-auto w-32 h-32 rounded-full bg-muted border-2 border-dashed border-muted-foreground flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl text-muted-foreground mb-1">📷</div>
              <div className="text-xs text-muted-foreground">Photo</div>
            </div>
          </div>
          <p className="text-foreground font-medium mt-4 tracking-wide">
            Learn. Win. Keep learning!
          </p>
        </div>

        {/* Squadron Statistics */}
        <SquadronStats />

        {/* News Section */}
        <NewsSection />

        {/* Active Pilots */}
        <ActivePilots />
      </main>

      {/* Auth Modals */}
      <AuthModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        type="login"
        onSubmit={handleAuth}
      />
      
      <AuthModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        type="signup"
        onSubmit={handleAuth}
      />
    </div>
  );
};

export default IronManDashboard;