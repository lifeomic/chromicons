import * as React from 'react';

const SvgSpaceship = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgSpaceship"
    {...props}
  >
    <path d="M21.457 1.14l-2.891.16a1.335 1.335 0 00-.871.389l-4.833 4.828a2.029 2.029 0 01-1.436.594H8.384c-1.531.041-2.068.96-3.055 1.946l-.613.613a.289.289 0 000 .409L6.05 11.41a1.883 1.883 0 01.408 2.031c-.078.2-.11.364-.038.436l1.852 1.851 1.851 1.852c.072.072.238.04.436-.038a1.883 1.883 0 012.031.408l1.334 1.334a.289.289 0 00.409 0l.613-.613c.986-.987 1.9-1.524 1.946-3.055v-3.042a2.029 2.029 0 01.594-1.436l4.833-4.833a1.335 1.335 0 00.389-.871l.155-2.891a1.333 1.333 0 00-1.406-1.403zM11.31 12.69l-3.038 3.038M19.08 4.92h0M6.795 22.862l2.121-2.121m-6.364.707l3.536-3.536m-4.95-.707l2.121-2.121" />
  </svg>
);

export default SvgSpaceship;
