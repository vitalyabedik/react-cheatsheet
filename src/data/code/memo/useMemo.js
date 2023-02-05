export const useMemo = {
  basic: `useMemo(() => {
    fn,
    [deps]
  }) // deps - зависимости
  
  /*============или присвоить результат============*/

  const result = useMemo(linkFn, [deps]) 
  `,
  example: `import React, { useMemo } from 'react';

  function MyComponent({ data }) {
    const memoizedValue = useMemo(() => {
      // вычисление какого-то значения
      return heavyComputation(data);
    }, [data]);
  
    return (
      <div>
        {memoizedValue}
      </div>
    );
  }`,
};
