import { CopyBlock, nord } from 'react-code-blocks';

const Card = () => {
    let code = `class HelloMessage extends React.Component {
        handlePress = () => {
          alert('Hello')
        }
        render() {
          return (
            <div>
              <p>Hello {this.props.name}</p>
              <button onClick={this.handlePress}>Say Hello</button>
            </div>
          );
        }
      }
        }`;

    return (
        <>
            <CopyBlock
                codeContainerStyle={{ backgroundColor: 'red' }}
                text={code}
                theme={nord}
                language='jsx'
                showLineNumbers
                customStyle={{
                    width: '500px',
                    height: '250px',
                    overflowY: 'scroll',
                    margin: '0px 0.75rem',
                    borderRadius: '5px',
                    boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
                    fontSize: '0.75rem',
                }}
            />
            Card
        </>
    );
};

export default Card;
