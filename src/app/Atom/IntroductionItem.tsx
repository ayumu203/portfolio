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
  labelWidthClassName = "w-1/3 md:w-1/4 lg:w-1/5", 
  textClassName = "text-xl md:text-2xl lg:text-3xl", 
}) => {
  return (
    <div className="flex items-baseline overflow-hidden"> 
      <span 
        className={`${labelWidthClassName} ${textClassName} font-semibold whitespace-nowrap mr-6 text-ellipsis`}
        title={label} 
      >
        {label}
      </span>
      <span className={`${textClassName} mr-2`}>:</span>
      <span 
        className={`flex-1 ${textClassName} whitespace-nowrap overflow-hidden text-ellipsis min-w-0`}
        title={value} 
      >
        {value}
      </span>
    </div>
  );
};

export default IntroductionTextItem;