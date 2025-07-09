import { MutableRefObject } from 'react';
import type EditorJS from '@editorjs/editorjs';
import { Nullable } from '@/core/utils/types/selector/flexible';

export interface EditorProps extends React.HTMLAttributes<HTMLDivElement> {
  instanceRef: MutableRefObject<Nullable<EditorJS>>;
  isLoading: boolean;
  editorId: string;
}

export interface EditorToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  //
  instanceRef: MutableRefObject<Nullable<EditorJS>>;
}

export type EditorInsertEmbedBlocksData = {
  service: string;
  source: string;
  embed: string | boolean;
};

export type EditorInsertEmbedDialogProps = {
  onClose: () => void;
  onConfirm: (data: EditorInsertEmbedBlocksData) => void;
};
