import * as React from 'react';

const SvgEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgEdit"
    {...props}
  >
    <path
      d="M20.1 3.9l-.085-.082a3.085 3.085 0 00-1.093-.65A3.2 3.2 0 0017.9 3a3.1 3.1 0 00-2.2.9l-6.35 6.35L3 16.6V21h4.4l6.35-6.35L20.1 8.3a3.1 3.1 0 00.9-2.2 3.173 3.173 0 00-.245-1.224A3.075 3.075 0 0020.1 3.9z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEdit;
