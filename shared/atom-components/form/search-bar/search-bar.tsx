'use client';

import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { DesignIcon, InputAdornment } from '@/core/design-systems';
import useFetch from '@/core/shared/hooks/data/use-fetch/use-fetch';
import useDropdown from '@/core/shared/hooks/display/use-dropdown/use-dropdown';
import useDebounced from '@/core/shared/hooks/effect/use-debounced/use-debounced';
import MOCK_APIS from '@/core/shared/service/mock/mock.service';
import { useRecentSearchActions, useRecentSearchState } from '@/shared/stores/search/use-recent-search/use-recent-search.hook';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import SearchKeywordAutoComplete from '@/shared/atom-components/common/search-keyword/auto-complete/auto-complete';
import SearchKeywordRecent from '@/shared/atom-components/common/search-keyword/recent/recent';
import { SearchBarContainer, SearchBarDropDown, SearchBarForm } from '@/shared/atom-components/form/search-bar/search-bar.styles';
import { SearchBarProps, TypeSearchBarForm } from '@/shared/atom-components/form/search-bar/search-bar.type';

const SearchBar = (props: SearchBarProps) => {
  const { className = '', onSubmit, ...restProps } = props;

  const router = useRouter();
  const formData = useForm<TypeSearchBarForm>({
    defaultValues: {
      keyword: '',
    },
  });

  const { value: debouncedKeyword } = useDebounced(formData.watch('keyword'), { delay: 500 });
  const { dropdownTriggerRef, dropdownTargetRef, isOpen, onOpen, onLeave } = useDropdown<HTMLFormElement, HTMLDivElement>();

  const recentSearchState = useRecentSearchState();
  const recentSearchActions = useRecentSearchActions();
  const { data: searchKeywordData } = useFetch(MOCK_APIS['search/search-keyword'].get, {
    params: { keyword: debouncedKeyword },
    enabled: Boolean(debouncedKeyword.length),
  });

  const onValid = async (data: TypeSearchBarForm) => {
    const searchParams = new URLSearchParams();
    searchParams.append('keyword', data.keyword);
    recentSearchActions.updateKeyword(data.keyword);
    router.push(`/search?${searchParams.toString()}`);
    onSubmit?.(data);
  };

  return (
    <SearchBarContainer className={`${className}`}>
      {/* Form */}
      <SearchBarForm ref={dropdownTriggerRef} noValidate onFocus={onOpen} onBlur={onLeave} onSubmit={formData.handleSubmit(onValid)} {...restProps}>
        <ControlledTextField
          control={formData.control}
          variant="outlined"
          name="keyword"
          rules={{}}
          size="small"
          hiddenLabel={true}
          placeholder="작업 시간을 비약적으로 아껴보세요"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <DesignIcon component="button" type="submit" variant="Search" color="gray/800" titleAccess="Search" />
                </InputAdornment>
              ),
              sx: (theme) => ({
                height: '46px',
                paddingRight: '20px',
                input: {
                  paddingLeft: '20px',
                  fontSize: theme.typography['body/body5'].fontSize,
                  lineHeight: theme.typography['body/body5'].lineHeight,
                  letterSpacing: theme.typography['body/body5'].letterSpacing,
                  fontWeight: 500,
                },
                '.MuiInputAdornment-root': {
                  marginLeft: '20px',
                  '.MuiDesignIcon-root': { width: '20px' },
                },
              }),
            },
          }}
        />
      </SearchBarForm>
      {/* Dropdown */}
      {isOpen && (
        <SearchBarDropDown ref={dropdownTargetRef} tabIndex={0} onFocus={onOpen} onBlur={onLeave}>
          {!debouncedKeyword?.length ? (
            <SearchKeywordRecent
              headlineText="최근 검색어"
              highlight={debouncedKeyword}
              data={recentSearchState?.keywords}
              onReset={recentSearchActions.resetKeywords}
              onDelete={recentSearchActions.deleteKeyword}
            />
          ) : (
            <Fragment>
              <SearchKeywordAutoComplete headlineText="브랜드" highlight={debouncedKeyword} data={searchKeywordData?.brand} makeItemLink={(string: string) => `/brand/${string}`} />
              <SearchKeywordAutoComplete
                headlineText="검색어"
                highlight={debouncedKeyword}
                data={searchKeywordData?.keywords}
                makeItemLink={(string: string) => `/search?keyword=${string}`}
              />
            </Fragment>
          )}
        </SearchBarDropDown>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
