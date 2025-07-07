import React from 'react';

type IntroductionTextItemProps = {
  label: string;
  value: string;
  labelWidthClassName?: string; 
  textClassName?: string;       
};

const IntroductionTextItem: React.FC<IntroductionTextItemProps> = ({
  label,
  value,
  labelWidthClassName = "w-1/10", 
  textClassName = "text-3xl", 
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline overflow-hidden"> 
      <span 
        className={`
          ${labelWidthClassName} 
          font-semibold 
          whitespace-nowrap 
          mr-0 sm:mr-6 
          mb-1 sm:mb-0
          text-sm sm:text-base md:text-lg lg:text-xl
          text-blue-300
        `}
        title={label} 
      >
        {label}
      </span>
      <span className={`hidden sm:inline text-sm sm:text-base md:text-lg lg:text-xl mr-2`}>:</span>
      <span 
        className={`
          flex-1 
          min-w-0
          text-sm sm:text-base md:text-lg lg:text-xl
          break-words
          leading-relaxed
        `}
        title={value} 
      >
        {value}
      </span>
    </div>
  );
};

export default IntroductionTextItem;