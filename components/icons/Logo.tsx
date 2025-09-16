import React from 'react';

export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 200 50"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    aria-label="Ares Multimarcas Logo"
  >
    <text
      x="0"
      y="40"
      fontFamily="Inter, sans-serif"
      fontSize="40"
      fontWeight="800"
      fill="currentColor"
      letterSpacing="-2"
    >
      ARES
    </text>
     <text
      x="105"
      y="40"
      fontFamily="Inter, sans-serif"
      fontSize="16"
      fontWeight="500"
      fill="white"
      letterSpacing="0"
    >
      MULTIMARCAS
    </text>
  </svg>
);