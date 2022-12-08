export const stateFunctional = {
    import: `import { useState } from 'react'`,
    vars: `const state = useState()`,
    state: `const [state, setState] = useState()`,
    count: `const [count, setCount] = useState()`,
    startValue: `const [count, setCount] = useState(0)`,
    render: `const Test = () => {
    const [count, setCount] = useState(0);
      
    return <div>{count}</div>;
};`,
    counter: `const Test = () => {
    const [count, setCount] = useState(0);
      
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
              Click
            </button>
        </div>
    )
}`,
};
