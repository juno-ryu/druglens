'use client';

import { forwardRef } from 'react';
import { Box, Typography } from '@/core/design-systems';
import { EditorContainer } from '@/core/shared/components/general/editor/editor.style';
import { EditorProps } from '@/core/shared/components/general/editor/editor.type';
import EditorToolbar from '@/core/shared/components/general/editor/toolbar/toolbar';

const Editor = forwardRef<HTMLDivElement, EditorProps>((props, ref) => {
  const { instanceRef, isLoading, editorId, className = '', ...restProps } = props;

  return (
    <>
      {isLoading && <Typography>Loading...</Typography>}
      {!isLoading && <EditorToolbar instanceRef={instanceRef} />}
      <EditorContainer as={Box} ref={ref} id={editorId} className={`${className}`} {...restProps} />
    </>
  );
});

Editor.displayName = 'Editor';

export default Editor;
