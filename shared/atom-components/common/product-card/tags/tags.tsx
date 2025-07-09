import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useResize from '@/core/shared/hooks/display/use-resize/use-resize';
import useTouch from '@/core/shared/hooks/display/use-touch/use-touch';
import { ProductCardTagsProps } from '@/shared/atom-components/common/product-card/product-card.type';
import { Tag, TagContainer, TagInner } from '@/shared/atom-components/common/product-card/tags/tags.styles';

/**
 * 기본 설정된 isDraggable = true의 경우 다음과 같습니다.
 * showEllipsisCount, showMaxCount 값은 무시한다.
 * mouse event 시 드래그 가능하다.
 * touch event 시 아무 일도 일어나지 않는다.
 * resize event 시 리셋한다.
 *
 * showEllipsisWidth = undefined, showEllipsisCount = 4, showMaxCount = 3의 경우 다음과 같습니다.
 * 태그가 4개 이상일 경우, 태그는 2개 노출하고 말줄임 문자 1개 노출합니다.
 *
 * @param tags 태그 명 배열
 * @param isDark 태그 아이템의 다크모드 여부
 * @param isDraggable 드래그 가능 여부
 * @param showEllipsisCount 말줄임 문자를 노출하기 위한 태그 개수
 * @param showMaxCount 말줄임 문자를 포함한 최대 노출가능 태그 개수
 */

export default function ProductCardTags(props: ProductCardTagsProps) {
  const { tags = [], tagIds = [], isDark, isDraggable = false, className = '', ...restProps } = props;
  const router = useRouter();

  // hooks
  const { touchRefs, touchInit, touchRemove } = useTouch({
    observeTypes: ['mouse'],
    onTouched: (structure) => {
      switch (structure.moved.directionX) {
        case -1: {
          const moveX = Math.max(structure.start.transformX + structure.moved.movedX, -1 * structure.container.scrollX);
          handleDrag({ moveX, scrollX: structure.container.scrollX });
          break;
        }
        case 1: {
          const moveX = Math.min(structure.start.transformX + structure.moved.movedX, 0);
          handleDrag({ moveX, scrollX: structure.container.scrollX });
          break;
        }
        case 0:
        default: {
          //
          break;
        }
      }

      if (structure.isScrambled && !structure.isTouched) {
        // 클릭감지
        if (Math.abs(structure.moved.movedX) < 10) {
          if (touchRefs.childRef.current) {
            handleTagClick(touchRefs.childRef.current);
          }
        } else {
          resizeInit();
        }
      }
    },
  });
  const { resizeRef, resizeInit, resizeRemove } = useResize({
    debounce: 500,
    onResize: ({ entries: [entry] }) => {
      handleDrag({ moveX: 0, scrollX: Math.max(entry.target.scrollWidth - entry.target.clientWidth, 0) });
      resizeRemove();
    },
  });

  // status
  const [structure, setStructure] = useState({
    draggableBefore: false,
    draggableAfter: isDraggable,
  });

  const handleDrag = ({ moveX, scrollX }: { moveX: number; scrollX: number }) => {
    if (!touchRefs.containerRef.current) return;
    touchRefs.containerRef.current.style.setProperty('transform', `translateX(${moveX}px)`);
    setStructure((prev) => ({ ...prev, draggableBefore: moveX < 0, draggableAfter: moveX > -1 * scrollX }));
  };

  const handleTagClick = (tagElement: HTMLDivElement) => {
    // clickTagLog({ alias: tagElement.innerText, tagType: 'prod card' });
    router.push(`/tag/${tagElement.getAttribute('data-tag-id')}/${tagElement.innerText}`);
  };

  useEffect(() => {
    if (!isDraggable) return;
    touchInit();
    return () => {
      touchRemove();
      resizeRemove();
    };
  }, []);

  if (!tags.length) {
    return null;
  }

  return (
    <TagContainer
      ref={resizeRef.containerRef}
      isDark={isDark}
      draggableBefore={structure.draggableBefore}
      draggableAfter={structure.draggableAfter}
      className={`${className}`}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      {...restProps}
    >
      <TagInner ref={touchRefs.containerRef}>
        {tags.map((tag, idx) =>
          tagIds.length > 0 ? (
            <Tag key={tag} data-tag-id={tagIds[idx]}>
              {tag}
            </Tag>
          ) : (
            <Tag key={idx}>{tag}</Tag>
          ),
        )}
      </TagInner>
    </TagContainer>
  );
}
