'use client';

import Link from 'next/link';
import { DesignIcon, Typography } from '@/core/design-systems';
import {
  SearchKeywordRecentContainer,
  SearchKeywordRecentHeadline,
  SearchKeywordRecentList,
  SearchKeywordRecentReset,
} from '@/shared/atom-components/common/search-keyword/recent/recent.styles';
import { SearchKeywordRecentProps } from '@/shared/atom-components/common/search-keyword/search-keyword.type';

const SearchKeywordRecent = (props: SearchKeywordRecentProps) => {
  const { headlineText, highlight, data, makeItemLink, className = '', onReset, onDelete, ...restProps } = props;

  if (!data) return null;
  if (!data?.size) return null;

  return (
    <SearchKeywordRecentContainer className={`${className}`} {...restProps}>
      {/* Headline */}
      <SearchKeywordRecentHeadline>
        <Typography component="strong" variant="body/body3" fontWeight={700} color="gray/900">
          {headlineText}
        </Typography>
      </SearchKeywordRecentHeadline>
      {/* List */}
      <SearchKeywordRecentList>
        {Array.from(data.entries())
          .sort((prev, next) => next[1].date.getTime() - prev[1].date.getTime())
          .map(([key, item]) => (
            <li key={item.key} className="item">
              <Typography component={Link} href={makeItemLink?.(item.key) ?? '#'} variant="body/body5" fontWeight={400} color="gray/800" noWrap={true} className="item-keyword">
                {item.key}
              </Typography>
              <DesignIcon
                component="button"
                type="button"
                variant="CloseThin"
                width="20px"
                color="gray/800"
                titleAccess={`${item.key} Delete`}
                className="item-delete"
                onClick={() => onDelete?.(item.key)}
              />
            </li>
          ))}
      </SearchKeywordRecentList>
      {/* Reset */}
      <SearchKeywordRecentReset type="button" onClick={() => onReset?.()}>
        <Typography variant="label/label1" fontWeight={600} color="gray/500">
          전체 삭제
        </Typography>
      </SearchKeywordRecentReset>
    </SearchKeywordRecentContainer>
  );
};

export default SearchKeywordRecent;
