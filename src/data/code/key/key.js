export const key = {
  example: `const Test = () => {
    const texts = [
      'Click me',
      'Click me please',
      'Hit me',
      'Press me',
      'Click me again!, Press me!!!',
  ];
  
    return (
      <>
        {texts.map(item => (
          <p key={item}>{item}</p>
        ))}
      </>
    );
  };
  
  export default Test;
`,
};
