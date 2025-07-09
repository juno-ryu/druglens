'use client';

import { forwardRef } from 'react';
import { useThemeProps } from '@mui/material/styles';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import { DesignLabelComponent, DesignLabelProps } from '@/core/design-systems/components/design-label';
import { DesignLabelRoot, DesignLabelTypography } from '@/core/design-systems/components/design-label/design-label.style';

// do: ref, component
// do-not: children
const DesignLabel = forwardRef<HTMLDivElement, DesignLabelProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'MuiDesignLabel' });
  const { slots, slotProps, children, classes, className = '', relaxBorder, ...other } = props;
  const ownerState = { ...props };

  const rootClassList = Array.from(generatedClassList('MuiDesignLabel', { root: true, relaxBorder }, toPascalCase));
  const typographyClassList = Array.from(generatedClassList('MuiDesignLabel', { typography: true }, toPascalCase));

  return (
    <DesignLabelRoot ref={ref} ownerState={ownerState} className={`${rootClassList.join(' ')} ${classes?.root ?? ''} ${className}`} {...slotProps?.root} {...other}>
      <DesignLabelTypography as={slots?.typography} ownerState={ownerState} className={`${typographyClassList.join(' ')} ${classes?.typography ?? ''}`} {...slotProps?.typography}>
        {children}
      </DesignLabelTypography>
    </DesignLabelRoot>
  );
});

DesignLabel.displayName = 'DesignLabel';

export default DesignLabel as DesignLabelComponent;
