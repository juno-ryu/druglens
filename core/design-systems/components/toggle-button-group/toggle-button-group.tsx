'use client';

import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { ToggleButtonGroup as MuiToggleButtonGroup } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import { ToggleButtonGroupComponent, ToggleButtonGroupProps } from '@/core/design-systems/components/toggle-button-group';

// do: ref, children
// do-not: component
const ToggleButtonGroup = forwardRef<HTMLButtonElement, ToggleButtonGroupProps>((props, ref) => {
  const { variant = 'outlined', children, ...restProps } = props;

  const rootClassList = Array.from(generatedClassList('MuiToggleButtonGroup', { variant }, toPascalCase));

  return (
    <MuiToggleButtonGroup ref={ref} classes={{ root: rootClassList.join(' ') }} {...restProps}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, { ...child.props, variant });
      })}
    </MuiToggleButtonGroup>
  );
});

ToggleButtonGroup.displayName = 'ToggleButtonGroup';

/** TODO: disabled이 걸려있을 경우 선택된 버튼과 선택되지 않은 버튼의 모습이 동일해지는 현상 해결해야 함 */
export default ToggleButtonGroup as ToggleButtonGroupComponent;
