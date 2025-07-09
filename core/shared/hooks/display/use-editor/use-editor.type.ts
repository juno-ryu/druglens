import { EditorConfig, OutputData } from '@editorjs/editorjs';
import { EnumSupportEditorTool } from '@/core/shared/components/general/editor/editor.const';

export type TypeEditorOptions = {
  holder: string;
  enabled?: boolean;
  readOnly?: boolean;
  initialHtml?: string;
  initialOutput?: OutputData;
  tools?: { [key in EnumSupportEditorTool]?: boolean };
  onCreate?: () => void;
  onUpdate?: EditorConfig['onChange'];
  onCommit?: (output: OutputData) => void;
};

export type TypeEditorStructure = {
  isLoading: boolean;
  output: OutputData;
};
