import * as React from 'react';

const SvgHeartFolder = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgHeartFolder"
    {...props}
  >
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    <path d="M12 10.8a1.541 1.541 0 01-.926-.309 2.319 2.319 0 00-1.645-.411 2.089 2.089 0 00-1.129.72 1.9 1.9 0 00-.514 1.337 5.58 5.58 0 00.823 2.571 7.018 7.018 0 002.674 2.469c.206.1.511.215.72.308.223-.1.514-.205.72-.308a7.018 7.018 0 002.674-2.469 5.58 5.58 0 00.823-2.571 1.9 1.9 0 00-.52-1.337 2.089 2.089 0 00-1.132-.72 2.319 2.319 0 00-1.645.411A1.541 1.541 0 0112 10.8z" />
  </svg>
);

export default SvgHeartFolder;
