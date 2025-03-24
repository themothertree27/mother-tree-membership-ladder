import React from 'react';
import { Check, X } from 'lucide-react';

interface MembershipCardProps {
  tier: string;
  name: string;
  price: string;
  description: string;
  benefits: string[];
  exclusions?: string[];
  accentColor: string;
  iconColor: string;
  bgGradient: string;
  icon: React.ReactNode;
  popular?: boolean;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  buttonBgColor?: string;
  clarificationText?: string;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  tier,
  name,
  price,
  description,
  benefits,
  exclusions,
  accentColor,
  iconColor,
  bgGradient,
  icon,
  popular = false,
  buttonText,
  buttonIcon,
  buttonBgColor,
  clarificationText
}) => {
  return <div className={`membership-card group z-10 ${popular ? 'scale-105 shadow-xl' : ''}`}>
      {popular && <div className="absolute top-0 right-0 bg-nature-leaf text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl z-20">Popular</div>}
      
      <div className={`flex flex-col h-full overflow-hidden rounded-3xl border bg-white ${popular ? 'border-nature-leaf' : 'border-gray-100'}`}>
        {/* Card header with gradient */}
        <div className={`px-6 py-8 ${bgGradient}`}>
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-white/80 mb-1">
                {tier}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {name}
              </h3>
            </div>
            <div className={`p-3 rounded-full ${iconColor}`}>
              {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 text-white" })}
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-white">{price}</span>
            </div>
          </div>
        </div>
        
        {/* Card content */}
        <div className="flex flex-col flex-1 p-6">
          <p className="text-gray-500 mb-6">{description}</p>
          
          <div className="space-y-3 flex-1">
            {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                <Check className={`h-5 w-5 mr-2 shrink-0 ${accentColor}`} />
                <span className="text-sm">{benefit}</span>
              </div>)}
            
            {exclusions && exclusions.map((exclusion, index) => <div key={`exclusion-${index}`} className="flex items-start">
                <X className="h-5 w-5 mr-2 shrink-0 text-red-500" />
                <span className="text-sm text-red-500">{exclusion}</span>
              </div>)}
          </div>
          
          <div className="mt-8">
            <button 
              className={`w-full py-3 rounded-full font-medium text-white transition-all duration-300 transform hover:scale-105 ${
                buttonBgColor ? buttonBgColor : 
                  popular 
                    ? 'bg-nature-leaf hover:shadow-lg hover:shadow-nature-leaf/20' 
                    : tier === "LEVEL 1" 
                      ? 'bg-[#C4A484] hover:shadow-lg hover:shadow-[#C4A484]/20' 
                      : `${accentColor.replace('text', 'bg')} hover:opacity-90`
              } hover:shadow-lg`}
            >
              <div className="flex items-center justify-center gap-2">
                {buttonIcon && React.cloneElement(buttonIcon as React.ReactElement, { className: "h-5 w-5 text-white" })}
                <span>{buttonText || `Choose ${name}`}</span>
              </div>
            </button>
            
            {clarificationText && (
              <div className="text-xs text-gray-500 text-center mt-2">
                {clarificationText}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>;
};

export default MembershipCard;
