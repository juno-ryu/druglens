import { matchRecord } from '@/core/utils/helpers/middleware-url';
import { INITIAL_INTERFACE_STATE } from '@/shared/stores/layout/use-viewport/use-viewport.const';
import { TypeInterfaceState } from '@/shared/stores/layout/use-viewport/use-viewport.type';

export type RecordInterfaceStateEntry = Partial<TypeInterfaceState> & { path: string };

export const RECORD_INTERFACE_STATE = (() => {
  const entries: RecordInterfaceStateEntry[] = [
    // {
    //   path: '^/:lang/test',
    //   isHideWorkspaceSidebar: true,
    //   workspaceContentStyle: {
    //     maxWidth: {
    //       desktop: 'calc(1200px + (var(--layout-guard-workspace-content-side) * 2))',
    //       tablet: 'calc(100% + (var(--layout-guard-workspace-content-side) * 2))',
    //       mobile: '100%',
    //     },
    //     padding: {
    //       desktop: '80px var(--layout-guard-workspace-content-side) 120px',
    //       tablet: '80px var(--layout-guard-workspace-content-side) 120px',
    //       mobile: '32px var(--layout-guard-workspace-content-side) 40px',
    //     },
    //   },
    // },
  ];
  return new Map<string, RecordInterfaceStateEntry>(entries.map((item) => [item.path, item]));
})();

export const getInterfaceState = (route: string) => {
  const record = matchRecord([...RECORD_INTERFACE_STATE.keys()], route);
  return {
    ...INITIAL_INTERFACE_STATE, // initial state
    ...(record && (RECORD_INTERFACE_STATE.get(record) ?? {})), // record state
  };
};
