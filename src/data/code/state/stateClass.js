export const stateClass = {
    stateWithConstructor: `class Test extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        count: 0,
    };
}

render() {
    return (
        <div>
            <p>Counter example</p>
        </div>
        );
    }
}    
`,
    stateWithoutConstructor: `class Test extends React.Component {
    state = {
        count: 0  
    };
    
    render() {
        return (
            <div>
                <p>Counter example</p>
            </div>
            );
        }
    }    
    `,
    stateRender: `class Test extends React.Component {
    state = {
        count: 0,
    };

    render() {
        return <div>{this.state.count}</div>;
    }
}`,
    stateFirstParamObj: `<button onClick={() => this.setState((state) => ({ count: 5 }))}>
Click1
  </button>`,
    stateFirstParamFunc: `<button onClick={() => this.setState((state) => ({ count: this.state.count + 1 }))}>
Click2
  </button>`,
    stateSecondParam: `<button onClick={() => this.setState({ count: this.state.count + 1 }, () => console.log(this.state))}>
Click2
  </button>`,
};
