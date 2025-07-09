'use client';

import { Box } from '@/core/design-systems';
import { hasElement } from '@/core/utils/helpers/style';
import useFetch from '@/core/shared/hooks/data/use-fetch/use-fetch';
import useDropdown from '@/core/shared/hooks/display/use-dropdown/use-dropdown';
import MOCK_APIS from '@/core/shared/service/mock/mock.service';
import PopularKeywordFlicking from '@/shared/atom-components/common/popular-keyword/flicking/flicking';
import { PopularKeywordContainer, PopularKeywordDropDown } from '@/shared/atom-components/common/popular-keyword/popular-keyword.style';
import { PopularKeywordProps } from '@/shared/atom-components/common/popular-keyword/popular-keyword.type';
import PopularKeywordScoreboard from '@/shared/atom-components/common/popular-keyword/score-board/score-board';

const PopularKeyword = (props: PopularKeywordProps) => {
  const { dropdownStyle = {}, className = '', ...restProps } = props;

  const { dropdownTriggerRef, dropdownTargetRef, isOpen, onOpen, onLeave } = useDropdown<HTMLDivElement, HTMLDivElement>();
  const { data: popularKeywordData } = useFetch(MOCK_APIS['search/popular-keyword'].get, {
    params: {},
  });

  if (!popularKeywordData) return null;
  if (!popularKeywordData?.keywords || !popularKeywordData?.keywords?.length) return null;

  return (
    <PopularKeywordContainer className={`${className}`} {...restProps}>
      {/* Flicking */}
      <PopularKeywordFlicking ref={hasElement(dropdownStyle) ? dropdownTriggerRef : null} data={popularKeywordData} onMouseOver={onOpen} onMouseOut={onLeave} onBlur={onLeave} />
      {/* DropDown */}
      {isOpen && (
        <Box component={PopularKeywordDropDown} ref={dropdownTargetRef} tabIndex={0} onMouseOver={onOpen} onMouseOut={onLeave} onBlur={onLeave} sx={dropdownStyle}>
          <PopularKeywordScoreboard headlineText="인기 검색어" data={popularKeywordData} />
        </Box>
      )}
    </PopularKeywordContainer>
  );
};

export default PopularKeyword;
