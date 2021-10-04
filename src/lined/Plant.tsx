import * as React from 'react';

const SvgPlant = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPlant"
    {...props}
  >
    <path
      d="M12.2 20.99c-.066 0-.129.01-.2.01s-.132-.009-.2-.01m0 0a10.285 10.285 0 00.2-1.968m0-.064A10.264 10.264 0 003.562 8.893a8.973 8.973 0 008.24 12.1m.2-1.968v-.064m0 0v.064m0 0a10.285 10.285 0 00.2 1.968m0 0a8.971 8.971 0 008.242-12.1A10.267 10.267 0 0012 18.958m4.016-8.333a9.26 9.26 0 00-4-7.625 9.263 9.263 0 00-4 7.625"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPlant;
