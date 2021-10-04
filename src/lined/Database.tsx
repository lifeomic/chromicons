import * as React from 'react';

const SvgDatabase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgDatabase"
    {...props}
  >
    <path
      d="M12 2.95a15.023 15.023 0 014.808.7c1.231.434 1.992 1.034 1.992 1.7s-.761 1.263-1.992 1.7a15.023 15.023 0 01-4.808.7 15.023 15.023 0 01-4.808-.7C5.961 6.613 5.2 6.013 5.2 5.35s.761-1.263 1.992-1.7A15.023 15.023 0 0112 2.95zm-6.8 2.4v13.2m13.6-13.2v13.3c0 .65-.75 1.25-1.975 1.688A14.909 14.909 0 0112 21.05a14.909 14.909 0 01-4.825-.712C5.95 19.9 5.2 19.3 5.2 18.65m13.6-6.9c0 .65-.75 1.25-1.975 1.688A14.909 14.909 0 0112 14.15a14.909 14.909 0 01-4.825-.712C5.95 13 5.2 12.4 5.2 11.75"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDatabase;
