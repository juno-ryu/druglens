'use client';

import { forwardRef } from 'react';
import { useThemeProps } from '@mui/material/styles';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import * as SvgIconComponents from '@/core/design-systems/components/design-icon/design-icon.import';
import { MuiDesignIconRoot, MuiDesignIconSvgIcon } from '@/core/design-systems/components/design-icon/design-icon.style';
import { DesignIconComponent, DesignIconProps } from '@/core/design-systems/components/design-icon/design-icon.type';

// do: ref, component
// do-not: children
const DesignIcon = forwardRef<HTMLDivElement, DesignIconProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'MuiDesignIcon' });
  const { variant, titleAccess, slotProps = {}, children, classes, className = '', ...other } = props;
  const ownerState = { ...props, variant };

  const rootClassList = Array.from(generatedClassList('MuiDesignIcon', { root: true, variant }, toPascalCase));

  return (
    <MuiDesignIconRoot
      ref={ref}
      ownerState={ownerState}
      className={`${rootClassList.join(' ')} ${classes?.root ?? ''} ${className}`}
      data-variant={variant}
      aria-label={titleAccess}
      {...slotProps?.root}
      {...other}
    >
      <MuiDesignIconSvgIcon role="img" as={SvgIconComponents[variant]} ownerState={ownerState} className={`${classes?.svgIcon ?? ''}`} {...slotProps?.svgIcon} />
      {children}
    </MuiDesignIconRoot>
  );
});

DesignIcon.displayName = 'DesignIcon';

export default DesignIcon as DesignIconComponent;
