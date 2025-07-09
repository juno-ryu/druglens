'use client';

import { forwardRef, useMemo } from 'react';
import * as CodexIcons from '@codexteam/icons';
import { Box, IconButton, Stack } from '@/core/design-systems';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import { EditorToolbarProps } from '@/core/shared/components/general/editor/editor.type';
import InsertEmbedDialog from '@/core/shared/components/general/editor/toolbar/insert-embed';

const EditorToolbar = forwardRef<HTMLDivElement, EditorToolbarProps>((props, ref) => {
  const { instanceRef, className = '', ...restProps } = props;
  const { onOpen, onClose } = useDialog();
  const isReadOnly = useMemo(() => instanceRef.current?.readOnly?.isEnabled, [instanceRef.current]);

  const handleOnOpenVideoDialog = () => {
    onOpen({
      key: 'dialog-video',
      onClose: () => {
        onClose('dialog-video');
      },
      slotProps: {
        paper: {
          sx: {
            borderRadius: '8px',
          },
        },
      },
      children: (
        <InsertEmbedDialog
          onClose={() => onClose('dialog-video')}
          onConfirm={(data) => {
            instanceRef.current?.blocks.insert('embed', data);
          }}
        />
      ),
    });
  };
  return (
    <Stack
      ref={ref}
      className={`${className} ${isReadOnly ? 'disabled' : ''}`}
      sx={(theme) => ({ flexDirection: 'row', gap: '10px', pb: '10px', mb: '10px', borderBottom: `1px solid ${theme.palette['gray/200']}` })}
      {...restProps}
    >
      {/* header */}
      {/* <IconButton
        onClick={() => {
          instanceRef.current?.blocks.insert('header');
        }}
      >
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconHeading }} />
      </IconButton> */}

      {/* paragraph */}
      {/* <IconButton
        onClick={() => {
          instanceRef.current?.blocks.insert('paragraph');
        }}
      >
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconText }} />
      </IconButton> */}

      {/* list */}
      {/* <IconButton
        onClick={() => {
          instanceRef.current?.blocks.insert('list');
        }}
      >
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconListBulleted }} />
      </IconButton> */}

      {/* list-ordered */}
      {/* <IconButton
        onClick={() => {
          instanceRef.current?.blocks?.insert('list', { style: 'ordered', items: [''] });
        }}
      >
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconListNumbered }} />
      </IconButton> */}

      {/* link */}
      <IconButton
        onClick={() => {
          // getMetaData();
          instanceRef.current?.blocks.insert('link', {
            // link: 'https://www.acon3d.com/ko',
            // meta: {
            //   description: '디지털 에셋 스토어. 드로잉을 위한 브러쉬부터 3D 인체모델, 배경, 포즈집까지 창작에 필요한 모든 에셋을 자유롭게 사용하세요.',
            //   image: 'https://www.acon3d.com/data/common/snsRepresentImage.png',
            //   title: 'ACON - 창작을 위한 디지털 에셋 스토어',
            //   url: 'www.acon3d.com',
            // },
          });
        }}
      >
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconLink }} />
      </IconButton>

      <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconPlay }} onClick={handleOnOpenVideoDialog} />
      </IconButton>
      <IconButton onClick={() => instanceRef.current?.blocks.insert('image', {})}>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconPicture }} />
      </IconButton>
      {/* <Divider orientation="vertical" sx={{ margin: '0 8px', height: '24px' }} /> */}

      {/* checklist */}
      {/* <IconButton
        onClick={() => {
          instanceRef.current?.blocks?.insert('checklist', {
            items: [{ text: '', checked: false }],
          });
        }}
      >
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconChecklist }} />
      </IconButton> */}

      {/* <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconBold }} />
      </IconButton>
      <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconItalic }} />
      </IconButton>
      <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconUnderline }} />
      </IconButton>
      <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconStrikethrough }} />
      </IconButton>
      <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconMarker }} />
      </IconButton>
      <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconColor }} />
      </IconButton> 
       */}

      {/* <Divider orientation="vertical" sx={{ margin: '0 8px', height: '24px' }} />
      <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconAlignLeft }} />
      </IconButton>
      <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconAlignCenter }} />
      </IconButton>
      <IconButton>
        <Box dangerouslySetInnerHTML={{ __html: CodexIcons.IconAlignRight }} />
      </IconButton> */}
    </Stack>
  );
});

EditorToolbar.displayName = 'EditorToolbar';

export default EditorToolbar;
