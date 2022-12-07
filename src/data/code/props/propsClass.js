export const propsClass = {
    transfer: `import React from "react";
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Test name={"Vitalya"} />
                </header>
            </div>
    );
}`,
    get: `import React from "react";
class Test extends React.Component {
    render() {
        return <div>{this.props.name}</div>;
    }
}
    
export default Test;`,
    multipleTransfer: {
        parent: `import React from "react";
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Test name={"Vitalya"} age={29} />
                </header>
            </div>
        );
}`,
        child: `class Test extends React.Component {
render() {
    return (
        <div>
            {this.props.name}
            {this.props.age}
        </div>
    
}
}`,
    },
    parameters: `import React from "react";

const parameter = () => <div>Параметры компоненту</div>

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Test name={parameter} age={29} />
                </header>
            </div>
        );
}`,
};
