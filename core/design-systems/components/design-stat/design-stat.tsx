'use client';

import { forwardRef } from 'react';
import { useThemeProps } from '@mui/material/styles';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import { DesignStatComponent, DesignStatProps } from '@/core/design-systems/components/design-stat';
import { DesignStatRoot, DesignStatTypography, DesignStatUnit } from '@/core/design-systems/components/design-stat/design-stat.style';

// do: ref, component
// do-not: children
const DesignStat = forwardRef<HTMLDivElement, DesignStatProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'MuiDesignStat' });
  const { unit, slots, slotProps, children, classes, className = '', ...other } = props;
  const ownerState = { ...props };

  const rootClassList = Array.from(generatedClassList('MuiDesignStat', { root: true }, toPascalCase));
  const typographyClassList = Array.from(generatedClassList('MuiDesignStat', { typography: true }, toPascalCase));
  const unitClassList = Array.from(generatedClassList('MuiDesignStat', { unit: true }, toPascalCase));

  return (
    <DesignStatRoot ref={ref} className={`${rootClassList.join(' ')} ${classes?.root ?? ''} ${className}`} {...slotProps?.root} ownerState={ownerState} {...other}>
      <DesignStatTypography as={slots?.typography} className={`${typographyClassList.join(' ')} ${classes?.typography ?? ''}`} {...slotProps?.typography} ownerState={ownerState}>
        {children}
      </DesignStatTypography>
      <DesignStatUnit as={slots?.unit} className={`${unitClassList.join(' ')} ${classes?.unit ?? ''}`} {...slotProps?.unit} ownerState={ownerState}>
        {unit}
      </DesignStatUnit>
    </DesignStatRoot>
  );
});

DesignStat.displayName = 'DesignStat';

export default DesignStat as DesignStatComponent;
