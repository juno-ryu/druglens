import { useState } from 'react';
import { useLifecycles } from 'react-use';
import { TypeMountedStructure } from '@/core/shared/hooks/effect/use-mounted/use-mounted.type';

const useMounted = () => {
  const [structure, setStructure] = useState<TypeMountedStructure>({
    isMounted: false,
  });

  useLifecycles(
    () => setStructure((prev) => ({ ...prev, isMounted: true })),
    () => setStructure((prev) => ({ ...prev, isMounted: false })),
  );

  return {
    ...structure,
  };
};

export default useMounted;
