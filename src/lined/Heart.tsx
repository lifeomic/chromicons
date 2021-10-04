import * as React from 'react';

const SvgHeart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgHeart"
    {...props}
  >
    <path
      d="M19.616 5.673a4.738 4.738 0 00-6.7 0L12 6.586l-.913-.913a4.739 4.739 0 00-6.7 6.7l.913.913 6.7 6.7 6.7-6.7.913-.913a4.738 4.738 0 000-6.7z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeart;
