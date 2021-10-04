import * as React from 'react';

const SvgDollarSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgDollarSign"
    {...props}
  >
    <path
      d="M12 3a9 9 0 11-6.364 2.636A8.972 8.972 0 0112 3zm2.1 6.1a2.083 2.083 0 00-.863-.813A2.7 2.7 0 0012 8a2.656 2.656 0 00-1.687.587 1.8 1.8 0 00-.363 2.5 2.045 2.045 0 00.95.712 4.255 4.255 0 001.35.312 3.318 3.318 0 011.35.388 2.3 2.3 0 01.588.675A1.693 1.693 0 0114.4 14a1.848 1.848 0 01-.712 1.413 2.743 2.743 0 01-3.013.25A2.325 2.325 0 019.8 14.8M12 16v1.7m0-11.4V8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDollarSign;
