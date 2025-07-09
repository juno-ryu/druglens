'use client';

import Link from 'next/link';
import { Box, Typography } from '@/core/design-systems';
import { matchHighlight } from '@/core/utils/helpers/text';
import {
  SearchKeywordAutoCompleteContainer,
  SearchKeywordAutoCompleteHeadline,
  SearchKeywordAutoCompleteList,
} from '@/shared/atom-components/common/search-keyword/auto-complete/auto-complete.styles';
import { SearchKeywordAutoCompleteProps } from '@/shared/atom-components/common/search-keyword/search-keyword.type';

const SearchKeywordAutoComplete = (props: SearchKeywordAutoCompleteProps) => {
  const { headlineText, data, highlight, className = '', makeItemLink, ...restProps } = props;

  if (!data) return null;
  if (!data?.length) return null;

  return (
    <SearchKeywordAutoCompleteContainer className={`${className}`} {...restProps}>
      {/* Headline */}
      <SearchKeywordAutoCompleteHeadline>
        <Typography component="strong" variant="label/label1" fontWeight={600} color="gray/400">
          {headlineText}
        </Typography>
      </SearchKeywordAutoCompleteHeadline>
      {/* List */}
      <SearchKeywordAutoCompleteList>
        {data.map((item) => (
          <li key={item.name} className="item">
            <Typography
              component={Link}
              href={('id' in item ? makeItemLink?.(item?.id) : makeItemLink?.(item?.name)) ?? '#'}
              variant="body/body5"
              fontWeight={400}
              color="gray/800"
              noWrap={true}
              className="item-keyword"
            >
              {matchHighlight(item.name, highlight).map(({ isHighlight, value }, index) => (
                <Box component="span" key={`${value}-${index}`} color={isHighlight ? 'primary/600' : 'currentColor'}>
                  {value}
                </Box>
              ))}
            </Typography>
          </li>
        ))}
      </SearchKeywordAutoCompleteList>
    </SearchKeywordAutoCompleteContainer>
  );
};

export default SearchKeywordAutoComplete;
