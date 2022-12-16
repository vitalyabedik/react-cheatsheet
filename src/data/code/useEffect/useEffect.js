export const useEffect = {
    basic: `useEffect(() => {}, [])`,
    onlyFirstParam: `useEffect(() => { console.log('-componentDidMount-')})`,
    oneRender: `useEffect(() => { console.log('-componentDidMount-')} , [])`,
    update: `useEffect(() => { console.log('-componentDidUpdate-') }, [count])`,
    unMount: `useEffect(() => {
        console.log("-componentDidMount-");
        return () => console.log("-componentWillUnmount-");
      }, []);`,
};
