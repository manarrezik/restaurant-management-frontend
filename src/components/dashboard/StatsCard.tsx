import React from 'react';

interface StatsCardProps {
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative';
}

const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  change,
  changeType = 'positive'
}) => {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <span className="stats-card-label">{label}</span>
        <button className="stats-card-menu-btn">⋮</button>
      </div>
      <div className="stats-card-value-row">
        <h2 className="stats-card-value">{value}</h2>
        {change && (
          <span className={`stats-card-change stats-card-change-${changeType}`}>
            {changeType === 'positive' ? '↑' : '↓'} {change}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;