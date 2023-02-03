export const refs = {
  createClassRef: `this.firstNameRef = React.createRef()
`,
  classRefBasicCode: `class FormWithRef extends React.Component {
    constructor() {
      super();
      this.state = {
        card: '',
        email: '',
      };
      this.firstNameRef = React.createRef();
    }
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    render() {
      const { firstName, email } = this.state;
  
      return (
        <div>
          <input
            type='firstName'
            name='firstName'
            placeholder='firstName'
            value={firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
  
  export { FormWithRef };`,
  classRefInput: `<input
  type='firstName'
  name='firstName'
  placeholder='firstName'
  value={firstName}
  onChange={this.handleChange}
  ref={this.firstNameRef}
/>;`,
  classRefInputFocus: `import React from 'react';

  class FormWithRef extends React.Component {
    constructor() {
      super();
      this.state = {
        card: '',
        email: '',
      };
      this.cardRef = React.createRef();
    }
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    componentDidMount() {
      this.cardRef.current.focus();
    }
  
    render() {
      const { card, email } = this.state;
  
      return (
        <div>
          <input
            type='card'
            name='card'
            placeholder='card'
            value={firstName}
            onChange={this.handleChange}
            ref={this.firstNameRef}
          />
          <br />
          <input
            type='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
  
  export { FormWithRef };`,
  classRefCountSymbols: `import React from 'react';

  class FormWithRef extends React.Component {
    constructor() {
      super();
      this.state = {
        card: '',
        email: '',
      };
      this.cardRef = React.createRef();
      this.emailRef = React.createRef();
    }
  
    handleChange = event => {
      this.setState(
        () => ({ [event.target.name]: event.target.value }),
        () => {
          if (this.state.card.length === 16) {
            this.emailRef.current.focus();
          }
        },
      );
    };
  
    componentDidMount() {
      this.cardRef.current.focus();
    }
  
    render() {
      const { card, email } = this.state;
  
      return (
        <div>
          <input
            type='card'
            name='card'
            placeholder='card'
            value={card}
            onChange={this.handleChange}
            ref={this.cardRef}
          />
          <br />
          <input
            type='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={this.handleChange}
            ref={this.emailRef}
          />
        </div>
      );
    }
  }
  
  export { FormWithRef };`,
};
