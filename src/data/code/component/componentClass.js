export const componentClass = `class HelloMessage extends React.Component {
    handlePress = () => {
      console.log('Hello')
    }

    render() {
      return (
        <div>
          <p>Hello {this.props.name}</p>
          <button onClick={this.handlePress}>Say Hello</button>
        </div>
      );
    }
  }`;
