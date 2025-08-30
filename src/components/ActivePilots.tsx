import React from 'react';

const ActivePilots = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-8 tracking-wide">
        ACTIVE PILOTS
      </h2>
      <div className="min-h-[200px] flex items-center justify-center">
        <p className="text-muted-foreground italic">
          No active pilots at this time
        </p>
      </div>
    </div>
  );
};

export default ActivePilots;