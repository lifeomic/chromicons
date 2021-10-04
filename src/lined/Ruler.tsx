import * as React from 'react';

const SvgRuler = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRuler"
    {...props}
  >
    <path
      d="M16.384 2.984l4.632 4.632-13.4 13.4-4.632-4.632zm-10.9 11.3l1.686 1.693m1.247-4.625l.858.859m2.134-3.738l1.672 1.672m1.263-4.607l.856.862"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRuler;
