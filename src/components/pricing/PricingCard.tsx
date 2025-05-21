import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  popular = false,
  cta,
  ctaLink
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border transition-all duration-300 hover:shadow-lg ${
      popular 
        ? 'border-blue-500 dark:border-blue-400 transform hover:-translate-y-1' 
        : 'border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800'
    }`}>
      {popular && (
        <div className="bg-blue-600 text-white text-sm font-semibold text-center py-1">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="text-green-500 flex-shrink-0 mt-0.5 mr-2" size={18} />
              ) : (
                <X className="text-red-400 flex-shrink-0 mt-0.5 mr-2" size={18} />
              )}
              <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={ctaLink}
          className={`w-full block text-center py-2 px-4 rounded-lg font-medium transition-colors ${
            popular 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;