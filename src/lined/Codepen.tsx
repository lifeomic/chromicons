import * as React from 'react';

const SvgCodepen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCodepen"
    {...props}
  >
    <path
      d="M12 21l-9-5.867V8.884L12 3v0l9 5.885v6.249L12 21zM3.041 8.845L12 15.151v0l8.959-6.306m-.115 6.1L12 8.718h0l-8.844 6.227M12 3v5.714m0 6.437V21"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCodepen;
