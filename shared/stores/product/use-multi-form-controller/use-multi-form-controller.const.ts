import dayjs from 'dayjs';
import { StateCreator } from 'zustand';
import { HasRealLogo } from '@/core/shared/service/enum/has-real-logo';
import {
  TypeCurrentFormSlice,
  TypeCurrentFormState,
  TypeOriginFormSlice,
  TypeOriginFormState,
  TypeStatusSlice,
} from '@/shared/stores/product/use-multi-form-controller/use-multi-form-controller.type';

/** originForm */
export const initialOriginFormState: TypeOriginFormState = {
  originFormState: {
    title: '',
    contentHead: '',
    contentBody: '',
    copyright: {
      isOriginal: false,
      warehouseSources: null,
      commercialSources: null,
      hasRealLogo: HasRealLogo.MODIFIED,
      localizes: [],
    },
    price: 2000,
    regions: [],
    brandId: '',
    isAdult: false,
    licenses: [],
    tags: [],
    images: [],
    categories: [],
    assets: [],
    stocks: [],
  },
};
export const createOriginFormSlice: StateCreator<TypeOriginFormSlice> = (set) => ({
  ...initialOriginFormState,
  originFormActions: {
    updateOriginForm: (value) => set(() => ({ originFormState: value })),
  },
});

/** currentForm for translation */
export const initialCurrentFormState: TypeCurrentFormState = {
  currentFormState: {
    title: '',
    contentHead: '',
    contentBody: '',
    copyright: {
      isOriginal: false,
      hasRealLogo: HasRealLogo.MODIFIED,
      warehouseSources: null,
      commercialSources: null,
      localizes: null,
    },
  },
  triggerSyncState: null,
  triggerSyncEditorState: null,
};
export const createCurrentFormSlice: StateCreator<TypeCurrentFormSlice> = (set, get) => ({
  ...initialCurrentFormState,
  currentFormActions: {
    updateCurrentForm: (value) => set(() => ({ currentFormState: value })),
  },
  triggerSyncActions: {
    syncronize: async () => {
      set(() => ({ triggerSyncState: dayjs().valueOf() })); // timestamp update 시작
      return new Promise((resolve) => {
        /**
         * @todo
         * 50ms 후(zustand 상태가 업데이트 된 후) 최신상태 resolve().
         * 100% 보장 되지는 않지만, 현재 상황에서는 문제가 없음
         * 추후 문제 발생 시 store 상태를 직접 subscribe 하는 방식으로 변경 해야함. (zustand middleware 사용)
         */
        setTimeout(() => resolve(get().currentFormState), 50);
      });
    },
    syncronizeEditor: () => {
      set(() => ({ triggerSyncEditorState: dayjs().valueOf() }));
    },
  },
});

/** statusState */
export const initialStatusState = {
  disabledStatus: false,
  loadingStatus: false,
};
export const createStatusSlice: StateCreator<TypeStatusSlice> = (set) => ({
  ...initialStatusState,
  statusActions: {
    setDisabledStatus: (value) => set(() => ({ disabledStatus: value })),
    setLoadingStatus: (value) => set(() => ({ loadingStatus: value })),
  },
});
