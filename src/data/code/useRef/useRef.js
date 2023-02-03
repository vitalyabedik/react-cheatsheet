export const useRef = {
  createUseRef: `const node= useRef(начальное_значение);
`,
  createUseRefLink: `<tagName ref={node}></tagName>`,
  useRefInputAutoFocus: `import { useEffect, useRef } from 'react';

  const WithRef = () => {
      const inputEl = useRef(null);
      console.log(inputEl);
  
      useEffect(() => {
          console.log(inputEl);
      });
  
      return (
          <div>
              <input placeholder='name' ref={inputEl} />
          </div>
      );
  };
  
  export default WithRef;`,
  useRefTimer: `const IntervalRef = () => {
    const [time, setTime] = useState(0)
    const interval = useRef()
  
    useEffect(() => {
      const id = setInterval(() => {
        setTime((time) => (time = new Date().toLocaleTimeString()))
      }, 1000)
  
      interval.current = id
  
      return () => clearInterval(interval.current)
    }, [time])
  
    return (
      <>
        <p>Текущее время:</p>
        <time>{time}</time>
      </>
    )
  }`,
};
