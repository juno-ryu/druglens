'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError = (props: GlobalErrorProps) => {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <strong>Global Error</strong>
        <button onClick={() => reset()}>Try again</button>
        <button onClick={() => window.location.reload()}>Reload page</button>
      </body>
    </html>
  );
};

export default GlobalError;
