'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import { yupResolver } from '@hookform/resolvers/yup';
import { Paper, Popover } from '@mui/material';
import { Box, Button, DesignIcon, DesignLabel, Stack, Typography } from 'core/design-systems';
import dayjs from 'dayjs';
import Image from 'next/image';
import DrugLensLogo from 'shared/atom-components/common/drug-lens-logo';
import * as yup from 'yup';

type WikipediaSummary = {
  type: string;
  title: string;
  displaytitle: string;
  namespace: {
    id: number;
    text: string;
  };
  wikibase_item: string;
  titles: {
    canonical: string;
    normalized: string;
    display: string;
  };
  pageid: number;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  originalimage?: {
    source: string;
    width: number;
    height: number;
  };
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  content_urls: {
    desktop: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    };
    mobile: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    };
  };
  extract: string;
  extract_html: string;
};

const schema = yup
  .object({
    drugName: yup.string().required('약물 이름을 입력해주세요.'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

interface DrugSearchClientProps {
  lang: string;
}

export default function DrugSearchClient({ lang }: DrugSearchClientProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<WikipediaSummary | null>(null);

  const MAX_RECENT_SEARCHES = 20;
  const LOCAL_STORAGE_KEY = 'recentSearches';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSearches = localStorage.getItem(LOCAL_STORAGE_KEY);
      setRecentSearches(storedSearches ? JSON.parse(storedSearches) : []);
    }
  }, []);

  const addSearch = (searchTerm: string) => {
    setRecentSearches((prevSearches) => {
      const newSearches = [searchTerm, ...prevSearches.filter((s) => s !== searchTerm)];
      const limitedSearches = newSearches.slice(0, MAX_RECENT_SEARCHES);
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(limitedSearches));
      }
      return limitedSearches;
    });
  };

  const removeSearch = (searchTerm: string) => {
    setRecentSearches((prevSearches) => {
      const newSearches = prevSearches.filter((s) => s !== searchTerm);
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSearches));
      }
      return newSearches;
    });
  };

  const clearSearches = () => {
    setRecentSearches([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setSummary(null);

    try {
      const response = await fetch(`https://ko.wikipedia.org/api/rest_v1/page/summary/${data.drugName}`);

      if (!response.ok) {
        throw new Error('정보를 불러오는데 실패했습니다. 약물 이름을 확인해주세요.');
      }

      const result: WikipediaSummary = await response.json();
      setSummary(result);
      addSearch(data.drugName); // 검색 성공 시 최근 검색어에 추가
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack gap="20px">
      <DrugLensLogo width={150} height={40} />
      <Paper elevation={3} sx={{ mt: 2, p: 3, borderRadius: '8px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', height: '100%', gap: '10px' }}>
            <ControlledTextField
              name="drugName"
              control={control}
              variant="outlined"
              label="약물 이름으로 검색..."
              size="large"
              fullWidth
              error={!!errors.drugName}
              helperText={errors.drugName?.message ? [{ key: 'drugNameError', withIcon: false, value: errors.drugName.message }] : undefined}
            />
            <Button
              //
              type="submit"
              variant="contained"
              size="extraLarge"
              disabled={loading}
              sx={{ height: '56px', px: 2 }}
            >
              검색
            </Button>
          </Box>
        </form>

        {recentSearches.length > 0 && (
          <Stack gap="10px" sx={{ mt: 2 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="body/body5" component="h2">
                최근 검색어
              </Typography>
              <Button onClick={clearSearches} size="small" sx={{ ml: 2 }}>
                전체 삭제
              </Button>
            </Stack>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {recentSearches.map((term: string) => (
                <DesignLabel
                  key={term}
                  variant="outlined"
                  onClick={() => {
                    setValue('drugName', term);
                    handleSubmit(onSubmit)();
                  }}
                >
                  {term}
                  <DesignIcon
                    variant="CloseBold"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation(); // 이벤트 버블링 방지
                      removeSearch(term);
                    }}
                  />
                </DesignLabel>
              ))}
            </Box>
          </Stack>
        )}
      </Paper>
      {loading && <Typography sx={{ mt: 4 }}>검색 중...</Typography>}

      {error && (
        <Typography color="error" sx={{ mt: 4 }}>
          오류: {error}
        </Typography>
      )}
      {summary && (
        <Paper elevation={3} sx={{ mt: 4, p: 3, borderRadius: '8px' }}>
          <Typography variant="title/title1" component="h2" sx={{ mb: 2 }}>
            {summary.title}
          </Typography>
          {summary.originalimage && (
            <Box sx={{ mb: 2, borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src={summary.originalimage.source}
                alt={summary.title}
                width={summary.originalimage.width}
                height={summary.originalimage.height}
                layout="responsive"
                objectFit="contain"
              />
            </Box>
          )}
          <Typography variant="body/body3" dangerouslySetInnerHTML={{ __html: summary.extract_html }} />
          <Typography variant="label/label1" color="text.secondary" sx={{ mt: 2 }}>
            최종 업데이트: {dayjs(summary.timestamp).format('YYYY년 MM월 DD일 HH시 mm분')}
          </Typography>
          <Typography variant="label/label1" color="text.secondary" sx={{ mt: 1 }}>
            언어: {summary.lang.toUpperCase()}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button component="a" variant="text" size="small" href={summary.content_urls.desktop.page} target="_blank" rel="noopener noreferrer">
              위키백과 원문
            </Button>
            <Button component="a" variant="text" size="small" href={summary.content_urls.desktop.revisions} target="_blank" rel="noopener noreferrer">
              수정 기록
            </Button>
            <Button component="a" variant="text" size="small" href={summary.content_urls.desktop.edit} target="_blank" rel="noopener noreferrer">
              이 문서 편집
            </Button>
            <Button component="a" variant="text" size="small" href={summary.content_urls.desktop.talk} target="_blank" rel="noopener noreferrer">
              토론 페이지
            </Button>
          </Box>
        </Paper>
      )}
    </Stack>
  );
}
