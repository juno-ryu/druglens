'use client';

import { useEffect, useRef, useState } from 'react';
import type EditorJS from '@editorjs/editorjs';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { parserPipe, removeHtmlTagSpaces } from '@/core/utils/helpers/html-parser';
import { TypeEditorOptions, TypeEditorStructure } from '@/core/shared/hooks/display/use-editor/use-editor.type';
import useMounted from '@/core/shared/hooks/effect/use-mounted/use-mounted';
import { editorSanitizerConfig, getTools } from '@/core/shared/components/general/editor/editor.const';

const useEditor = (options?: TypeEditorOptions) => {
  const { holder = 'carpen-editor', initialOutput, initialHtml, tools = {}, readOnly = false, enabled = true } = options ?? {};

  const containerRef = useRef<Nullable<HTMLDivElement>>(null);
  const instanceRef = useRef<Nullable<EditorJS>>(null);

  const { isMounted } = useMounted();
  const [structure, setStructure] = useState<TypeEditorStructure>({
    output: { blocks: [] },
    isLoading: true,
  });

  const getRenderHtml = (input: string = '') => {
    return parserPipe(removeHtmlTagSpaces)(input);
  };

  const onInit = async () => {
    if (instanceRef.current) return;
    if (typeof window === 'undefined') return;

    const EditorJS = (await import('@editorjs/editorjs')).default;
    const loadTools = await getTools(tools);

    const editor = new EditorJS({
      holder: holder,
      data: structure.output,
      sanitizer: editorSanitizerConfig,
      autofocus: false,
      readOnly: readOnly,
      inlineToolbar: !readOnly,
      defaultBlock: 'paragraph',
      tools: loadTools,
      onReady: async () => {
        await editor.isReady;
        instanceRef.current = editor;
        if (initialOutput && initialOutput?.blocks?.length) await instanceRef.current?.blocks?.render?.(initialOutput);
        else if (initialHtml && initialHtml?.length) await instanceRef.current?.blocks?.renderFromHTML?.(getRenderHtml(initialHtml));
        setStructure((prev) => ({ ...prev, isLoading: false }));
        options?.onCreate?.();
      },
      onChange: async (api, event) => {
        if (!instanceRef.current) throw new Error('editor is not ready');
        if (instanceRef.current?.readOnly?.isEnabled) throw new Error('editor is readonly');
        options?.onUpdate?.(api, event);
        await onSave();
      },
    });
  };

  const onRemove = () => {
    if (!instanceRef.current) return;
    instanceRef.current?.destroy();
    instanceRef.current = null;
  };

  const onSave = async () => {
    if (!instanceRef.current) throw new Error('editor is not ready');
    if (instanceRef.current?.readOnly?.isEnabled) throw new Error('editor is readonly');
    const saved = await instanceRef.current?.saver?.save?.();
    setStructure((prev) => ({ ...prev, output: saved }));
    // console.log(saved);
    options?.onCommit?.(saved);
  };

  const onToggleReadOnly = () => {
    instanceRef.current?.readOnly?.toggle();
  };

  const onReset = async () => {
    if (structure.isLoading) throw new Error('editor is not ready');
    if (!instanceRef.current) throw new Error('editor is not ready');
    if (instanceRef.current?.readOnly?.isEnabled) throw new Error('editor is readonly');
    await instanceRef.current?.blocks?.clear?.();
    // await onSave(); // Automatically triggered by EditorJS; do not call explicitly.
  };

  const onOverrideHtml = async (html: TypeEditorOptions['initialHtml']) => {
    if (!html || !html?.length) throw new Error('html is empty');
    if (structure.isLoading) throw new Error('editor is not ready');
    if (!instanceRef.current) throw new Error('editor is not ready');
    if (instanceRef.current?.readOnly?.isEnabled) throw new Error('editor is readonly');
    await instanceRef.current?.blocks?.render?.({ blocks: [{ type: 'paragraph', data: { text: '&nbsp;' } }] }); // Fake code for error prevention
    await instanceRef.current?.blocks?.renderFromHTML?.(getRenderHtml(html));
    // await onSave(); // Automatically triggered by EditorJS; do not call explicitly.
  };

  const onOverrideOutput = async (output: TypeEditorOptions['initialOutput']) => {
    if (!output || !output?.blocks?.length) throw new Error('output is empty');
    if (structure.isLoading) throw new Error('editor is not ready');
    if (!instanceRef.current) throw new Error('editor is not ready');
    if (instanceRef.current?.readOnly?.isEnabled) throw new Error('editor is readonly');
    await instanceRef.current?.blocks?.render?.(output);
    // console.log('overide output', output);
    await onSave(); // Not triggered by the editor; must be explicitly called.
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && isMounted && enabled) onInit();
    if (!isMounted) onRemove();
  }, [isMounted, enabled]);

  return {
    ...structure,
    containerRef,
    instanceRef,
    editorId: holder,
    onSave,
    onReset,
    onToggleReadOnly,
    onOverrideOutput,
    onOverrideHtml,
  };
};

export default useEditor;
