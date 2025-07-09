'use client';

import React, { useEffect, useId, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import parse from 'html-react-parser';
import { Popover } from '@mui/material';
import { Box, Chip, DesignIcon, InputAdornment, Stack, TextField, Typography } from '@/core/design-systems';
import useFetch from '@/core/shared/hooks/data/use-fetch/use-fetch';
import useDebounced from '@/core/shared/hooks/effect/use-debounced/use-debounced';
import COMMON_APIS from '@/core/shared/service/common/common.service';
import { ProductTagOutput } from '@/core/shared/service/output/product-tag-output';
import { extractMatchedSubstring, generateCaseInsensitiveRegex } from '@/shared/business-components/product/controller/tags/tags.const';
import SectionTitleClient from '@/shared/business-components/product/layout/section-title.client';

type TagsClientProps = {
  initialTags: ProductTagOutput[];
};

const TagsClient = (props: TagsClientProps) => {
  const { initialTags } = props;
  const { setValue } = useFormContext();

  const tagComponentId = useId();
  const textfieldRef = React.useRef<HTMLInputElement>(null);
  const popoverListRef = React.useRef<HTMLDivElement>(null);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [current, setCurrent] = useState(0);

  const [tags, setTags] = useState<ProductTagOutput[]>([]);
  const [selectedTags, setSelectedTags] = useState(initialTags || []);

  const isPopoverOpen = Boolean(anchorEl);

  const searchKeyowrd = useDebounced(inputValue, { delay: 500 });

  useFetch(() => COMMON_APIS['tag/ac'].get(searchKeyowrd.value), {
    params: {},
    enabled: Boolean(!searchKeyowrd.isDelay && searchKeyowrd.value.length !== 0),
    onSuccess: (response) => {
      setTags(response.data || []);
    },
  });

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOnKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    e.stopPropagation();
    setAnchorEl(e.currentTarget);

    if (e.key === 'ArrowDown' && tags.length > 0 && tags.length - 1 > current) {
      const val = current + 1;
      setCurrent(val);
      if (popoverListRef?.current) {
        if (val > 4 && popoverListRef.current.scrollTop <= 34 * (val - 4)) popoverListRef.current.scrollTop = 34 * (val - 4);
      }
    }
    if (e.key === 'ArrowUp' && tags.length > 0 && current > 0) {
      const val = current - 1;
      setCurrent(val);
      if (popoverListRef?.current) {
        if (popoverListRef.current.scrollTop >= 34 * val) popoverListRef.current.scrollTop = 34 * val;
      }
    }
    if (e.key === 'Enter') {
      const target = tags.find((x) => x.word === tags[current]?.word);
      if (inputValue === null || inputValue === '' || inputValue === ' ' || !target) {
        setInputValue('');
        return false;
      }
      handleAddTag(target);
      handleOnResetState();
    }
  };

  const handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!anchorEl) setAnchorEl(e.currentTarget);
  };

  const handleAddTag = (tag: ProductTagOutput) => {
    if (selectedTags.find((x) => x.word === (tag.word || inputValue))) {
      //duplicateError 처리
      setInputValue('');
      return;
    }
    if (selectedTags.length >= 10) {
      // maxError 처리
      setInputValue('');
      return;
    }

    setSelectedTags([...selectedTags, tag].sort((a, b) => Number(a.id) - Number(b.id)));
    handleOnResetState();
  };

  const handleOnDeleteTag = (tag: ProductTagOutput) => {
    setSelectedTags(selectedTags.filter((x) => x.id !== tag.id));
  };

  const handleOnResetState = () => {
    setInputValue('');
    setAnchorEl(null);
    setTags([]);
    setCurrent(0);
  };

  const handleOnClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (selectedTags.length) {
      setValue(
        'tags',
        selectedTags.map((tag) => tag.id),
      );
    }
  }, [selectedTags]);

  return (
    <Stack direction="column" gap="20px">
      <SectionTitleClient
        title="태그 설정"
        description="더욱 원활한 상품 노출을 위해, 등록된 태그 내에서만 입력이 가능합니다. 최대 10개의 태그를 입력할 수 있으며 상품관 무관한 태그는 검토 중 임의 변경・삭제될 수 있습니다."
      />
      <TextField
        ref={textfieldRef}
        aria-describedby={tagComponentId}
        variant="outlined"
        size="medium"
        hiddenLabel
        placeholder="태그를 입력해 주세요"
        value={inputValue}
        onChange={handleOnChangeInput}
        onKeyDown={handleOnKeydown}
        onClick={handleOnClick}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <DesignIcon variant="Search" />
              </InputAdornment>
            ),
          },
        }}
      />

      <Popover
        id={tagComponentId}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        disableAutoFocus
        disableEnforceFocus
        autoFocus={false}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        elevation={16}
        onClose={handleOnClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: '8px',
              width: textfieldRef?.current?.clientWidth || 0,
            },
          },
        }}
      >
        {/* 검색 결과가 있을 때 */}
        {tags.length > 0 && (
          <Box
            ref={popoverListRef}
            p="6px"
            sx={{
              height: `${34 * 5}px`,
              overflowX: 'hidden',
              overflowY: 'scroll',
            }}
          >
            {tags.map((tag, idx) => {
              return (
                <Typography
                  component="div"
                  key={tag.id}
                  variant="body/body3"
                  color="gray/800"
                  fontWeight={400}
                  sx={(theme) => ({
                    p: '6px 8px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    '& span': { color: 'primary/600' },
                    ...(current === idx && {
                      background: theme.palette['gray/dim/100'],
                      borderRadius: '6px',
                    }),
                  })}
                  onClick={() => handleAddTag(tag)}
                >
                  {tag.word && parse(tag.word.replace(generateCaseInsensitiveRegex(inputValue), `<span>${extractMatchedSubstring(tag.word, inputValue)}</span>`))}
                </Typography>
              );
            })}
          </Box>
        )}
        {/* 검색 결과가 없을 때 */}
        {tags.length === 0 && inputValue.length > 0 && (
          <Box p="14px">
            <Typography variant="body/body3" color="gray/800" fontWeight={400}>
              검색어와 일치하는 테그가 없습니다.
            </Typography>
          </Box>
        )}
        {/* 검색 시작 전, TIP UI 표시 */}
        {tags.length === 0 && inputValue.length === 0 && (
          <Box p="14px">
            <Typography variant="body/body3" fontWeight="700" color="gray/500">
              테그 검색 TIP
            </Typography>
            <Box mt="4px" display="grid" gridTemplateColumns="auto 1fr">
              <Typography variant="body/body3" color="gray/400" padding="0 8px">
                •
              </Typography>
              <Typography variant="body/body3" color="gray/400">
                단어의 철자가 정확한지 확인해주세요.
              </Typography>
              <Typography variant="body/body3" color="gray/400" padding="0 8px">
                •
              </Typography>
              <Typography variant="body/body3" color="gray/400">
                다른 단어로 검색해보세요.
              </Typography>
            </Box>
          </Box>
        )}
      </Popover>

      <Stack direction="row" gap="8px" mt="-4px" p="0 16px">
        {selectedTags.map((tag) => (
          <Chip key={tag.id} color="augment/gray/100" variant="filled" label={tag.word} onDelete={() => handleOnDeleteTag(tag)} />
        ))}
      </Stack>
    </Stack>
  );
};

export default TagsClient;
