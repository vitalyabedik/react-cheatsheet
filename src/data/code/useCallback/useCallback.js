export const useCallback = {
  basic: `useCallback(
    fn,
    [deps]
  ) // deps - dependencies, зависимости`,
  example: `import React, { useCallback } from 'react';

  function MyComponent({ data, onDataChange }) {
    const handleDataChange = useCallback(() => {
      onDataChange(data);
    }, [data, onDataChange]);
  
    return (
      <div>
        <button onClick={handleDataChange}>Change data</button>
      </div>
    );
  }`,
};
