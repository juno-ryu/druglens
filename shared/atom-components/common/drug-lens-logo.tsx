// shared/atom-components/common/drug-lens-logo.tsx
'use client';

import React from 'react';

import { Box } from 'core/design-systems';

// shared/atom-components/common/drug-lens-logo.tsx

// shared/atom-components/common/drug-lens-logo.tsx

// shared/atom-components/common/drug-lens-logo.tsx

// shared/atom-components/common/drug-lens-logo.tsx

// shared/atom-components/common/drug-lens-logo.tsx

interface DrugLensLogoProps {
  width?: number;
  height?: number;
  color?: string;
}

const DrugLensLogo: React.FC<DrugLensLogoProps> = ({ width = 150, height = 40, color = '#000000' }) => {
  return (
    <Box sx={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={width} height={height} viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Simple Lens/Target element */}
        <circle cx="20" cy="20" r="10" stroke={color} strokeWidth="2" />
        <line x1="20" y1="10" x2="20" y2="30" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="20" x2="30" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" />

        {/* Text "DrugLens" */}
        <text x="40" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fill={color}>
          DRUGLENS
        </text>
      </svg>
    </Box>
  );
};

export default DrugLensLogo;
