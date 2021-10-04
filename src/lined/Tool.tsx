import * as React from 'react';

const SvgTool = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTool"
    {...props}
  >
    <path
      d="M18.423 8.519l2.158-2.158a5.5 5.5 0 01-7.206 7.206l-7.094 7.094a1.19 1.19 0 01-1.677 0l-1.122-1.122a1.191 1.191 0 010-1.678l7.051-7.05a5.491 5.491 0 017.291-7.292L14.9 6.441a1.985 1.985 0 000 2.8h0a1.985 1.985 0 002.8 0l.721-.721"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTool;
