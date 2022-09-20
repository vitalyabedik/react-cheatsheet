import { CopyBlock, nord } from 'react-code-blocks';

import { Card } from 'antd';

const CardItem = ({ title, code }) => {
    return (
        <>
            <div style={{ padding: '30px', background: '#ececec' }}>
                <Card
                    title={title}
                    style={{
                        width: 600,
                    }}
                >
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
                            textAlign: 'left',
                        }}
                    />
                </Card>
            </div>
        </>
    );
};

export default CardItem;
