import * as React from 'react';

const SvgDomainRecord = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgDomainRecord"
    {...props}
  >
    <path d="M12 22a10 10 0 119.55-12.976M2 12h12.36" />
    <path d="M12 22a15.3 15.3 0 01-4-10 15.3 15.3 0 014-10 15.306 15.306 0 013.572 6.712m3.417 3.4L23 23l-4.011-2.292L14.977 23l4.012-10.888z" />
  </svg>
);

export default SvgDomainRecord;
