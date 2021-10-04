import * as React from 'react';

const SvgCommand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCommand"
    {...props}
  >
    <path
      d="M12 9.023H6a3 3 0 01-3-3V6a3 3 0 013-3h.023a3 3 0 013 3v8M12 9.023h6a3 3 0 003-3V6a3 3 0 00-3-3h-.023a3 3 0 00-3 3v8M12 14.977H6a3 3 0 00-3 3V18a3 3 0 003 3h.023a3 3 0 003-3v-8m5.954 0v8a3 3 0 003 3H18a3 3 0 003-3v-.023a3 3 0 00-3-3h-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCommand;
