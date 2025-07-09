'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = (props: ErrorProps) => {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <strong>Error</strong>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
