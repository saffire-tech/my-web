import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className={`w-20 h-1 bg-blue-600 dark:bg-blue-500 my-4 ${center ? 'mx-auto' : ''}`}></div>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;