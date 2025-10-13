import React from "react";

interface UberEatsIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const UberEatsIcon = ({ className, ...props }: UberEatsIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      width="24" 
      height="24" 
      fill="currentColor" 
      className={className}
      {...props}
    >
      {/* Simplified Uber Eats logo */}
      <path d="M19.5,12c0,4.14-3.36,7.5-7.5,7.5S4.5,16.14,4.5,12S7.86,4.5,12,4.5S19.5,7.86,19.5,12z M11.25,7.5v4.5h-1.5V7.5h-1.5v6h3v1.5h-4.5v1.5h6v-9H11.25z M16.5,7.5h-3v9h3c2.49,0,4.5-2.01,4.5-4.5S18.99,7.5,16.5,7.5z M16.5,15h-1.5V9h1.5c1.66,0,3,1.34,3,3S18.16,15,16.5,15z"/>
    </svg>
  );
};

export default UberEatsIcon;