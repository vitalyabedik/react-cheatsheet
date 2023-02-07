export const events = {
  basic: `<button onClick={handleClick}>Click me</button>`,
  onClick: `import React from "react";

  const ExampleComponent = () => {
    const handleClick = () => {
      console.log("Button was clicked");
    };
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  };
  
  export default ExampleComponent;`,
  onChange: `import React, { useState } from 'react';

  const Example = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>Input value: {inputValue}</p>
      </div>
    );
  };
  
  export default Example;`,
};
