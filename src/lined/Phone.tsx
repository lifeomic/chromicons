import * as React from 'react';

const SvgPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPhone"
    {...props}
  >
    <path
      d="M14.36 15.948l.7-1.576a1.315 1.315 0 011.535-.741c1.245.327 2.055.556 3.316.781a1.319 1.319 0 011.063 1.55l-.662 3.352a2.065 2.065 0 01-2.224 1.674A17.054 17.054 0 013.014 5.9a2.067 2.067 0 011.659-2.218l3.186-.655a1.318 1.318 0 011.557 1.037c.268 1.355.388 1.883.768 3.415a1.32 1.32 0 01-.7 1.5l-.984.484a18.541 18.541 0 002.123 3.254"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPhone;
