export const form = {
  unControlledFormExample: `import React, { useRef } from "react";

  const UncontrolledForm = () => {
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputRef.current.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default UncontrolledForm;`,
  controlledFormExample: `import React, { useState } from "react";

  const ControlledForm = () => {
    const [value, setValue] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(value);
    };
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default ControlledForm;`,
  otherForms: `import React, { useState } from 'react';

  const Form = () => {
    const [state, setState] = useState({
      firstName: '',
      email: '',
      message: '',
      select: '',
      subscription: false,
      gender: '',
    });
  
    const handleChange = event => {
      setState({ ...state, [event.target.name]: event.target.value });
    };
  
    const handleCheckboxChange = event => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    const validateName = () => {
      if (state.firstName.length < 5) {
        alert("Your first name cant't be less than 7 letters");
      }
    };
  
    const validateEmail = () => {
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email)) {
        alert('email is not valid');
      }
    };
  
    const { firstName, email, message, select, subscription, gender } = state;
  
    return (
      <div>
        <input
          type='text'
          name='firstName'
          placeholder='firstName'
          value={firstName}
          onChange={handleChange}
          onBlur={validateName}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={handleChange}
          onBlur={validateEmail}
        />
        <br />
        <textarea name='message' value={message} onChange={handleChange} />
        <br />
        <select name='select' value={select} onChange={handleChange}>
          <option value='' disabled></option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <br />
        <label>
          <input
            type='checkbox'
            name='subscription'
            checked={subscription}
            onChange={handleCheckboxChange}
          />
          Subscription
        </label>
        <br />
        <input
          type='radio'
          name='gender'
          value='male'
          onChange={handleChange}
          checked={gender === 'male'}
        />{' '}
        Male
        <input
          type='radio'
          name='gender'
          value='female'
          onChange={handleChange}
          checked={gender === 'female'}
        />{' '}
        Female
      </div>
    );
  };
  
  export { Form };`,
  subscriptionForm: `import React, { useState } from "react";

  const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [isAgreeWithTerms, setIsAgreeWithTerms] = useState(false);
  
    const handleEmail = event => {
      setEmail(event.target.value);
    };
  
    const handleCheckbox = event => {
      setIsAgreeWithTerms(event.target.checked);
    };
  
    const handleSubmit = () => {
      const isValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email.toLocaleLowerCase()); 
      const isValidCheckbox = isAgreeWithTerms;
  
      if (!isValidEmail) {
        alert('Your email is not valid');
        return;
      }
  
      if (!isValidCheckbox) {
        alert('You should accept all terms and conditions');
        return;
      }
  
      setEmail('');
      setIsAgreeWithTerms(false);
      alert('Thank you for subscription!');
    };
  
    return (
      <div>
        <input type='email' name='email' placeholder='email' value={email} onChange={handleEmail} />
        <br />
        <label>
          <input
            type='checkbox'
            name='isAgreeWithTerms'
            checked={isAgreeWithTerms}
            onChange={handleCheckbox}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button onClick={handleSubmit}>Send</button>
      </div>
    );
  };
  
  export { SubscriptionForm }
  `,
};
