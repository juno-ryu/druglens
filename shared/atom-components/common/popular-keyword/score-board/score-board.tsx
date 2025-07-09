'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import { DesignIcon, Typography } from '@/core/design-systems';
import { PopularKeywordScoreBoardProps } from '@/shared/atom-components/common/popular-keyword/popular-keyword.type';
import {
  PopularKeywordScoreboardContainer,
  PopularKeywordScoreboardHeadline,
  PopularKeywordScoreboardList,
} from '@/shared/atom-components/common/popular-keyword/score-board/score-board.style';

const PopularKeywordScoreboard = forwardRef<HTMLDivElement, PopularKeywordScoreBoardProps>((props, ref) => {
  const { headlineText, data, className = '', ...restProps } = props;

  return (
    <PopularKeywordScoreboardContainer ref={ref} className={`${className}`} {...restProps}>
      {/* Headline */}
      <PopularKeywordScoreboardHeadline>
        <Typography component="strong" variant="body/body3" fontWeight={700} color="gray/800">
          {headlineText}
        </Typography>
        <Typography variant="label/label1" fontWeight={400} color="gray/400">
          {dayjs(data?.createdAt).format('YYYY.MM.DD HH:mm')} 기준
        </Typography>
      </PopularKeywordScoreboardHeadline>
      {/* List */}
      {!!data?.keywords?.length && (
        <PopularKeywordScoreboardList>
          {data?.keywords.map((item, index) => (
            <li key={`${item.rank}-${item.name}`} className="item">
              <Typography component={Link} href="#" variant="body/body5" color="gray/900" className="item-link">
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
        </PopularKeywordScoreboardList>
      )}
    </PopularKeywordScoreboardContainer>
  );
});

PopularKeywordScoreboard.displayName = 'PopularKeywordScoreboard';

export default PopularKeywordScoreboard;
