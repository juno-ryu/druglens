'use client';

import { useRef, useState } from 'react';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { TypeDropdownOptions, TypeDropdownStructure } from '@/core/shared/hooks/display/use-dropdown/use-dropdown.type';

const useDropdown = <T extends HTMLElement, U extends HTMLElement>(options?: TypeDropdownOptions) => {
  const { initialValue } = options ?? {};

  const dropdownTriggerRef = useRef<Nullable<T>>(null);
  const dropdownTargetRef = useRef<Nullable<U>>(null);

  const [structure, setStructure] = useState<TypeDropdownStructure>({
    isOpen: false,
    ...initialValue,
  });

  const onOpen = () => {
    if (!dropdownTriggerRef.current) return;
    setStructure((prev) => ({ ...prev, isOpen: true }));
  };

  const onClose = () => {
    if (!dropdownTriggerRef.current) return;
    setStructure((prev) => ({ ...prev, isOpen: false }));
  };

  const onToggle = () => {
    if (!dropdownTriggerRef.current) return;
    setStructure((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const onLeave = (event: React.MouseEvent<T | U> | React.FocusEvent<T | U>) => {
    if (!dropdownTriggerRef.current) return;
    if (!dropdownTargetRef.current) return;
    if (!dropdownTriggerRef.current.contains(event.relatedTarget as Node) && !dropdownTargetRef.current.contains(event.relatedTarget as Node)) onClose();
  };

  return {
    ...structure,
    dropdownTriggerRef,
    dropdownTargetRef,
    onOpen,
    onClose,
    onToggle,
    onLeave,
  };
};

export default useDropdown;
