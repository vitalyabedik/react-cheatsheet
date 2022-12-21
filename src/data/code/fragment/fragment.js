export const fragment = {
  short: `const Fragment = () => {
      return (
          <>
              <h1>Vitalya</h1>
              <h3>I am learning React</h3>
              <button>Like</button>
          </>
      );
  };
  
  export default Fragment;
  `,
  long: `import React from 'react';

const Fragment = () => {
    return (
        <React.Fragment>
            <h1>Vitalya</h1>
            <h3>I am learning React</h3>
            <button>Like</button>
        </React.Fragment>
    );
};
  
  export default Fragment;
  `,
};
