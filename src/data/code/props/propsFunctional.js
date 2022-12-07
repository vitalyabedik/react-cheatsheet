export const propsFunctional = {
    transfer: `const Test = (props) => <div>Test function</div>;`,
    render: `const Test = (props) => {
    return <div>{props.name}</div>
};`,
    multipleRender: `const Test = (props) => {
    return (
        <div>
            {props.name}
            {props.age}
        </div>
    );
};`,
    destructure: `const Test = (props) => {
    const { name, age } = props;
  
    return (
      <div>
        {name}
        {age}
      </div>
    );
  };`,
    destructureShort: `const Test = ({ name, age }) => {
    return (
      <div>
        {name}
        {age}
      </div>
    );
  };`,
};
