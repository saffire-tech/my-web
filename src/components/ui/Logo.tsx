import React from 'react';
import { Gem } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <div className="text-blue-600 dark:text-blue-400">
        <Gem size={32} />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
    </div>
  );
};

export default Logo;