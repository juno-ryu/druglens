'use client';

import React from 'react';
import { Divider } from '@mui/material';
import { OutputBlockData, OutputData } from '@editorjs/editorjs';
import { ChecklistOutput, HeaderOutput, ImageOutput, ListOutput, ParagraphOutput, TableOutput } from 'editorjs-react-renderer';
import { EditorViewerClassNames } from '@/core/shared/components/general/editor/editor.const';
import { EditorViewerContainer } from '@/core/shared/components/general/editor/editor.style';

type EditorViewerProps = {
  data: OutputData;
};

const EditorViewer = (props: EditorViewerProps) => {
  const { data } = props;
  if (!data.blocks) return null;
  return (
    <EditorViewerContainer>
      {Object.entries(data).map(([key, value]) => {
        if (key === 'version' || key === 'time') return null;
        if (!value) return null;
        const blocks = value as OutputBlockData[];
        return blocks.map((block) => {
          const { type, id, data } = block;

          if (type === 'header') {
            return <HeaderOutput key={id} data={data} classNames={EditorViewerClassNames.header} config={{ disableDefaultStyle: true }} />;
          }
          if (type === 'paragraph') {
            return <ParagraphOutput key={id} data={data} classNames={EditorViewerClassNames.paragraph} config={{ disableDefaultStyle: true }} />;
          }
          if (type === 'image') {
            return <ImageOutput key={id} data={data} classNames={EditorViewerClassNames.image} config={{ disableDefaultStyle: true }} />;
          }
          if (type === 'list') {
            const { style, items } = data;
            if (style === 'unordered') {
              const listData = items.map((item: any) => item.content);
              return (
                <ListOutput
                  key={id}
                  data={{ items: listData, style }}
                  classNames={{
                    ...EditorViewerClassNames.list,
                    container: 'cdx-list cdx-list-unordered',
                  }}
                />
              );
            } else if (style === 'ordered') {
              const listData = items.map((item: any) => item.content);
              return (
                <ListOutput
                  key={id}
                  data={{ items: listData, style }}
                  classNames={{
                    ...EditorViewerClassNames.list,
                    container: 'cdx-list cdx-list-ordered',
                  }}
                />
              );
            } else if (style === 'checklist') {
              const listData = items.map((item: any) => ({ text: item.content, checked: item.meta.checked }));
              return <ChecklistOutput key={id} data={{ items: listData }} classNames={EditorViewerClassNames.checklist} />;
            }
          } else if (type === 'table') {
            return <TableOutput key={id} data={{ content: data.content }} classNames={EditorViewerClassNames.table} config={{ disableDefaultStyle: true }} />;
          } else if (type === 'delimiter') {
            return <Divider key={id} sx={{ margin: '50px 0' }} />;
          } else if (type === 'embed') {
            return <iframe key={id} src={data.embed} width="100%" height="500px" />;
          }
        });
      })}
    </EditorViewerContainer>
  );
};

export default EditorViewer;
