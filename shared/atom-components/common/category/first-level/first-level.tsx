/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Children, useMemo } from 'react';

import { Accordion, AccordionDetails, AccordionSummary, DesignIcon, Typography } from '@/core/design-systems';
import { DesignIconProps } from '@/core/design-systems/components/design-icon';
import { useRouter } from 'next/navigation';

import { CategoryFirstLevelProps } from '@/shared/atom-components/common/category/category.type';
import { CategoryFirstLevelDetail, CategoryFirstLevelSummary } from '@/shared/atom-components/common/category/first-level/first-level.style';

/* eslint-disable react-hooks/exhaustive-deps */

const CategoryFirstLevel = <C extends React.ElementType>(props: CategoryFirstLevelProps<C>) => {
  const { component, isSingle, data, expanded, defaultExpanded, children, className = '', toggleExpended, ...restProps } = props;

  const isChildren = Boolean(Children.count(children));

  const iconProps = useMemo(() => {
    const resultProps = { variant: 'Image', width: '24px', height: '24px' } as DesignIconProps;
    if (!data?.description) return { ...resultProps };
    if (isSingle) return { ...resultProps };
    if (expanded) return { ...resultProps, variant: data.description, color: 'transparent' } as DesignIconProps;
    if (!expanded) return { ...resultProps, variant: `${data.description}Base`, color: 'transparent' } as DesignIconProps;
    return resultProps;
  }, [data?.id, expanded]);

  return (
    <Accordion component={component} expanded={expanded} defaultExpanded={defaultExpanded} className={`${className}`} slots={{ heading: CategoryFirstLevelSummary }} {...restProps}>
      <AccordionSummary
        id={`header-${data?.id}`}
        onClick={() => {
          toggleExpended();
        }}
        expandIcon={!isSingle && isChildren ? <DesignIcon variant="ChevronDownBold" width="20px" height="20px" titleAccess={expanded ? '열기' : '접기'} /> : null}
        aria-controls={`content-${data?.id}`}
        sx={{ borderRadius: '6px' }}
      >
        {data?.description && <DesignIcon {...iconProps} sx={{ mr: 2 }} />}
        <Typography variant="body/body3" fontWeight={700} className={`${isSingle ? 'sr-only' : ''}`}>
          {data?.name}
        </Typography>
      </AccordionSummary>
      {isChildren && (
        <AccordionDetails>
          <CategoryFirstLevelDetail>{children}</CategoryFirstLevelDetail>
        </AccordionDetails>
      )}
    </Accordion>
  );
};

export default CategoryFirstLevel;
