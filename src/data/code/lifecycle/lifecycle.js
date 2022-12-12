export const lifecycle = {
    render: `render() {
        return <div />;
      }`,
    constructorCycle: `constructor(props) {
    super(props);
        this.state = {
            list: props.initialList
        };
}
      
// когда props не передаются в constructor
      
constructor() {
    super();
    this.state = {
        list: []
    };
}`,
    componentWillMount: `componentWillMount() {
// вызывается один раз
// срабатывает перед первоначальным рендером
}`,
    componentDidMount: `componentDidMount() {
// хорош для AJAX запросов: fetch, ajax, или подписок.
  
// вызывается один раз на стороне клиента
// срабатывает до вызова render
  }`,
    componentWillUnmount: `componentWillUnmount() {
// вызывается мгновенно до удаления компонента.
  }`,
    componentWillUpdate: `shouldComponentUpdate(nextProps, nextState) {
// вызывается перед каждым обновлением (props или state)
// срабатывает до первоначального рендера
  }`,
    componentDidUpdate: `componentDidUpdate(prevProps, prevState) {
// вызывается сразу после обновления DOM
// не срабатывает после первоначального рендера
  }`,
    shouldComponentUpdate: `shouldComponentUpdate(nextProps, nextState) {
// вызывается перед каждым обновлением (props или state)
// не запускается до первоначального рендера
  }`,
};
