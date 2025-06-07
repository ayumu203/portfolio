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
    <div className="flex items-baseline overflow-hidden mb-5"> 
      <span 
        className={`${labelWidthClassName} ${textClassName} font-semibold whitespace-nowrap mr-6 text-ellipsis`}
        title={label} 
      >
        {label}
      </span>
      <span className={`${textClassName} mr-2`}>:</span>
      <span 
        className={`flex-1 ${textClassName}  min-w-0`}
        title={value} 
      >
        {value}
      </span>
    </div>
  );
};

export default IntroductionTextItem;