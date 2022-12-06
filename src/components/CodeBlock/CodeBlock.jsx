import { CopyBlock, nord } from 'react-code-blocks';

const CodeBlock = ({ code }) => {
    return (
        <>
            <CopyBlock
                text={code}
                theme={nord}
                language='jsx'
                showLineNumbers
                customStyle={{
                    maxWidth: '500px',
                    overflowY: 'scroll',
                    margin: '0px auto',
                    borderRadius: '5px',
                    boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
                    textAlign: 'left',
                }}
            />
        </>
    );
};

export default CodeBlock;
