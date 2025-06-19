import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  color: string;
  size?: 'small' | 'medium' | 'large';
}

export const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  color, 
  size = 'medium' 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-20 h-20 text-xs';
      case 'large':
        return 'w-32 h-32 text-lg';
      default:
        return 'w-24 h-24 text-sm';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className={`${getSizeClasses()} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
        style={{ backgroundColor: color }}
      >
        {value}
      </div>
      <span className="mt-2 text-sm font-medium text-gray-600 text-center">
        {title}
      </span>
    </div>
  );
};