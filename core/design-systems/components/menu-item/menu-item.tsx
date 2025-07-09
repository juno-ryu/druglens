'use client';

import { forwardRef } from 'react';
import { MenuItem as MuiMenuItem } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import DesignIcon from '@/core/design-systems/components/design-icon';
import FormHelperText from '@/core/design-systems/components/form-helper-text';
import { MenuItemComponent, MenuItemProps } from '@/core/design-systems/components/menu-item';

// do: ref, component, children
// do-not: (empty)
const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  const { adornment, selected, success, error, disabled, helperText = [], children, ...restProps } = props;

  const rootClassList = Array.from(generatedClassList('MuiMenuItem', { root: true, success, error, disabled }, toPascalCase));
  const childClassList = Array.from(generatedClassList('MuiMenuItem', { child: true }, toPascalCase));
  const adornmentClassList = Array.from(generatedClassList('MuiMenuItem', { adornment: true }, toPascalCase));

  const startIcon = !selected ? adornment?.startIcon : (adornment?.selectedStartIcon ?? adornment?.startIcon);
  const endIcon = !selected ? adornment?.endIcon : (adornment?.selectedEndIcon ?? adornment?.endIcon);

  return (
    <MuiMenuItem ref={ref} selected={selected} disabled={disabled} classes={{ root: rootClassList.join(' ') }} {...restProps}>
      {startIcon && <DesignIcon variant={startIcon} className={adornmentClassList.join(' ')} aria-hidden={true} />}
      <span className={childClassList.join(' ')}>
        <>{children}</>
        <FormHelperText>
          {(helperText ?? [])
            ?.filter(({ value }) => Boolean(value))
            ?.map(({ key, withIcon, value, ...props }) => (
              <FormHelperText key={key} {...props}>
                {withIcon && <DesignIcon variant={error ? 'AlertFill' : success ? 'CheckFill' : disabled ? 'InformationFill' : 'NoticeFill'} aria-hidden={true} />}
                <span>{value}</span>
              </FormHelperText>
            ))}
        </FormHelperText>
      </span>
      {endIcon && <DesignIcon variant={endIcon} className={adornmentClassList.join(' ')} aria-hidden={true} />}
    </MuiMenuItem>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem as MenuItemComponent;
