'use client';

import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { ToggleButton, ToggleButtonGroup } from '@/core/design-systems';
import { ToggleButtonGroupProps } from '@/core/design-systems/components/toggle-button-group';

const PRESET_TIMES: {
  value: string;
  label: string;
  getRange(): [Dayjs | undefined, Dayjs | undefined];
}[] = [
  {
    value: 'today',
    label: '오늘',
    getRange: () => [dayjs(dayjs().format('YYYY-MM-DD')), dayjs(dayjs().format('YYYY-MM-DD')).add(1, 'day').subtract(1, 'second')],
  },
  {
    value: '7days',
    label: '7일',
    getRange: () => [dayjs(dayjs().format('YYYY-MM-DD')).subtract(6, 'day'), dayjs(dayjs().format('YYYY-MM-DD')).add(1, 'day').subtract(1, 'second')],
  },
  {
    value: '15days',
    label: '15일',
    getRange: () => [dayjs(dayjs().format('YYYY-MM-DD')).subtract(14, 'day'), dayjs(dayjs().format('YYYY-MM-DD')).add(1, 'day').subtract(1, 'second')],
  },
  {
    value: '1month',
    label: '1개월',
    getRange: () => [dayjs(dayjs().format('YYYY-MM-DD')).subtract(1, 'month'), dayjs(dayjs().format('YYYY-MM-DD')).add(1, 'day').subtract(1, 'second')],
  },
  {
    value: '3months',
    label: '3개월',
    getRange: () => [dayjs(dayjs().format('YYYY-MM-DD')).subtract(3, 'month'), dayjs(dayjs().format('YYYY-MM-DD')).add(1, 'day').subtract(1, 'second')],
  },
  {
    value: '1year',
    label: '1년',
    getRange: () => [dayjs(dayjs().format('YYYY-MM-DD')).subtract(1, 'year'), dayjs(dayjs().format('YYYY-MM-DD')).add(1, 'day').subtract(1, 'second')],
  },
  {
    value: 'all',
    label: '전체',
    getRange: () => [undefined, undefined],
  },
];

const DateSelectPresetCore: React.ForwardRefRenderFunction<
  {
    /** DateRangePicker에서 날짜를 직접 설정할 경우 이 컴포넌트에서 버튼이 선택되어 있지 않게 하도록 선택을 풀어줄 때 사용합니다. */
    reset(): void;
  },
  ToggleButtonGroupProps & {
    setRange(range: [Dayjs | undefined, Dayjs | undefined]): void;
  }
> = (props, ref) => {
  const { setRange, ...restProps } = props;
  const [selected, setSelected] = React.useState<string | null>(null);

  React.useImperativeHandle(
    ref,
    () => ({
      reset() {
        setSelected(null);
      },
    }),
    [],
  );

  return (
    <ToggleButtonGroup value={selected} variant="outlined" orientation="horizontal" color="augment/red/600" size="small" fullWidth {...restProps}>
      {PRESET_TIMES.map(({ value, label, getRange }) => (
        <ToggleButton
          key={value}
          value={value}
          onClick={() => {
            setSelected(value);
            setRange(getRange());
          }}
          sx={{ flex: 1 }}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

const DateSelectPresetClient = React.forwardRef(DateSelectPresetCore);

export default DateSelectPresetClient;
