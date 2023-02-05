export const reactMemo = {
  reactMemoBasic: `const MyComponent = React.memo(function MyComponent(props) {
    /* повторный рендеринг данного компонента выполняется только при изменении передаваемых ему пропcов */
  })`,
  reactMemoBasicExample: `import React from 'react';

  const MyComponent = React.memo((props) => {
    return (
      <div>
        {props.data}
      </div>
    );
  });
  
  export default MyComponent;`,
  reactMemoExampleShouldComponentUpdate: `import React from 'react';

  const MyComponent = React.memo((props) => {
    return (
      <div>
        <p>props: {props.data}</p>
      </div>
    );
  }, (prevProps, nextProps) => {
    return prevProps.data === nextProps.data;
  });
  
  export default MyComponent;`,
  reactMemoExampleShouldComponentUpdateFalse: `import React from 'react';

  const MyComponent = React.memo((props) => {
    return (
      <div>
        <p>props: {props.data}</p>
      </div>
    );
  }, (prevProps, nextProps) => {
    if (nextProps.data === 4) {
      return false
    } else {
      return true
    }
  });
  
  export default MyComponent;`,
};
