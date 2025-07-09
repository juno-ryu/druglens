declare module 'editorjs-header-with-alignment' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const Header: ToolConstructable | undefined;
  export default Header;
}

declare module 'editorjs-paragraph-with-alignment' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const Paragraph: ToolConstructable | undefined;
  export default Paragraph;
}

declare module '@editorjs/underline' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const Underline: ToolConstructable | undefined;
  export default Underline;
}

declare module '@editorjs/marker' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const Marker: ToolConstructable | undefined;
  export default Marker;
}

declare module '@editorjs/list' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const List: ToolConstructable | undefined;
  export default List;
}

declare module '@editorjs/table' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const Table: ToolConstructable | undefined;
  export default Table;
}

declare module '@editorjs/delimiter' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const Delimiter: ToolConstructable | undefined;
  export default Delimiter;
}

declare module '@editorjs/image' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const Image: ToolConstructable | undefined;
  export default Image;
}

declare module '@editorjs/embed' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const Embed: ToolConstructable | undefined;
  export default Embed;
}

declare module '@editorjs/checklist' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const Checklist: ToolConstructable | undefined;
  export default Checklist;
}

declare module '@editorjs/link' {
  import { ToolConstructable } from '@editorjs/editorjs';
  const LinkTool: ToolConstructable | undefined;
  export default LinkTool;
}

declare module 'editorjs-color-picker' {
  import { ToolConstructable } from '@editorjs/editorjs';

  export const ColorPickerWithoutSanitize: ToolConstructable;
}
