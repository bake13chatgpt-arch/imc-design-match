import React from 'react';

interface StatItemProps {
  label: string;
  value: number;
}

const StatItem = ({ label, value }: StatItemProps) => (
  <div className="text-center">
    <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
      {label}
    </div>
    <div className="text-3xl font-bold text-foreground">
      {value}
    </div>
  </div>
);

const SquadronStats = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-8 tracking-wide">
        SQUADRON STATISTICS
      </h2>
      <div className="squadron-stats-grid max-w-2xl mx-auto">
        <StatItem label="ACTIVE PILOTS" value={0} />
        <StatItem label="PLANES DOWNED" value={0} />
        <StatItem label="SHIPS SUNK" value={0} />
        <StatItem label="GROUND TARGETS" value={0} />
      </div>
    </div>
  );
};

export default SquadronStats;