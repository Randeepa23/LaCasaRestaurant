import React from "react";

interface TripAdvisorIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const TripAdvisorIcon = ({ className, ...props }: TripAdvisorIconProps) => {
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
      {/* TripAdvisor owl-like logo */}
      <path d="M12,4.3c-5.1,0-9.4,2.5-12,6.2c2.6,3.7,6.9,6.2,12,6.2s9.4-2.5,12-6.2C21.4,6.8,17.1,4.3,12,4.3z M7.5,13.3c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S9.2,13.3,7.5,13.3z M12,12.3c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,12.3,12,12.3z M16.5,13.3c-1.6,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S18.2,13.3,16.5,13.3z M7.5,9.9c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5S7.8,9.9,7.5,9.9z M16.5,9.9c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5S16.8,9.9,16.5,9.9z"/>
    </svg>
  );
};

export default TripAdvisorIcon;