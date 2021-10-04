import * as React from 'react';

const SvgSkull = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSkull"
    {...props}
  >
    <path
      d="M12.913 13.468h-1.691a1.732 1.732 0 01-1.732-1.732v-.693a1.732 1.732 0 011.732-1.732h1.691a1.731 1.731 0 011.732 1.732v.693a1.731 1.731 0 01-1.732 1.732zm4.933-1.732v-.693a1.731 1.731 0 011.731-1.732H21v-.155a6.143 6.143 0 00-6.143-6.143H9.4A6.314 6.314 0 003 8.964a6.141 6.141 0 002.989 5.467A6.184 6.184 0 019.132 19.7h0a1.291 1.291 0 001.29 1.29H19a2 2 0 002-2v-5.522h-1.423a1.731 1.731 0 01-1.731-1.732zM21 9.311v4.157m-4.474 1.8l-.613.613h1.164m-3.6 3.346v1.762m3.783-1.762v1.762m2.759 0"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSkull;
