'use client';

import { forwardRef, useEffect, useRef } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import { AutoPlay } from '@egjs/flicking-plugins';
import Flicking, { FlickingOptions, FlickingProps } from '@egjs/react-flicking';
import { DesignIcon, Typography } from '@/core/design-systems';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { PopularKeywordFlickingContainer } from '@/shared/atom-components/common/popular-keyword/flicking/flicking.style';
import { PopularKeywordFlickingProps } from '@/shared/atom-components/common/popular-keyword/popular-keyword.type';

const PopularKeywordFlicking = forwardRef<HTMLDivElement, PopularKeywordFlickingProps>((props, ref) => {
  const { options, data, className = '', ...restProps } = props;

  const flickingRef = useRef<Nullable<Flicking>>(null);
  const flickingOption: Partial<FlickingProps & FlickingOptions> = {
    autoInit: false,
    circular: true,
    horizontal: false,
    plugins: [new AutoPlay()],
    cameraTag: 'ul',
    cameraClass: 'list',
    ...options,
  };

  const onInit = () => {
    if (!flickingRef?.current) return;
    if (flickingRef.current.initialized) return;
    flickingRef.current.init();
  };

  const onFocus = (event: React.FocusEvent) => {
    if (!flickingRef.current) return;
    if (flickingRef.current.initialized) flickingRef.current.destroy();
    if (flickingRef.current.element.contains(event.relatedTarget)) return;
    flickingRef.current.camera.element.removeAttribute('style');
    flickingRef.current.camera.element.scrollTop = 0;
    event.target?.scrollIntoView();
  };

  const onBlur = (event: React.FocusEvent) => {
    if (!flickingRef.current) return;
    if (flickingRef.current.element.contains(event.relatedTarget)) return;
    flickingRef.current.viewport.element.scrollTop = 0;
    onInit();
  };

  useEffect(() => {
    if (!flickingRef.current) return;
    if (!data?.keywords.length) return flickingRef.current.destroy();
    onInit();
  }, [data?.keywords]);

  return (
    <PopularKeywordFlickingContainer ref={ref} className={`${className}`} {...restProps}>
      {/* Headline */}
      <div className="sr-only">
        <strong>인기 검색어</strong>
        <span>{dayjs(data?.createdAt).format('YYYY.MM.DD HH:mm')} 기준</span>
      </div>
      {/* Flicking */}
      {Boolean(data?.keywords?.length) && (
        <Flicking ref={flickingRef} {...flickingOption}>
          {data?.keywords.map((item, index) => (
            <li key={`${item.rank}-${item.name}`} className="item">
              <Typography component={Link} href="#" variant="body/body5" color="gray/900" className="item-link" onFocus={onFocus} onBlur={onBlur}>
                <span className={`item-ranking ${index < 3 ? 'item-ranking-top' : ''}`}>{`${index + 1}.`}</span>
                <span className="item-keyword">{item.name}</span>
                <DesignIcon
                  variant={item.rank === 'increased' ? 'TrendUp' : item.rank === 'decreased' ? 'TrendDown' : 'TrendStay'}
                  color={item.rank === 'increased' ? 'orange/500' : item.rank === 'decreased' ? 'cyan/500' : 'gray/700'}
                  width="12px"
                  className="item-trend"
                />
              </Typography>
            </li>
          ))}
        </Flicking>
      )}
    </PopularKeywordFlickingContainer>
  );
});

PopularKeywordFlicking.displayName = 'PopularKeywordFlicking';

export default PopularKeywordFlicking;
