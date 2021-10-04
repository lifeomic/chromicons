import * as React from 'react';

const SvgPlanet = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgPlanet"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 6.063H4m3.439 3h-5m18.577-1h-6m6.871 5.437h-3.168a3.427 3.427 0 01-2.443-.912 3.856 3.856 0 00-2.662-.895 3.857 3.857 0 00-2.663.895 3.426 3.426 0 01-2.442.912H5.551m15.434 2.893h-2.427a3.427 3.427 0 00-2.443.912 3.856 3.856 0 01-2.662.895 3.857 3.857 0 01-2.663-.895 3.426 3.426 0 00-2.442-.912h-.676" />
  </svg>
);

export default SvgPlanet;
