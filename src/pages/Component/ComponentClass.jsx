import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { componentClass } from '../../data';

const { Title, Text, Link } = Typography;

const ClassComponent = () => {
    return (
        <>
            <Title level={2}>Классовые компоненты</Title>
            <Title level={3}>Базовая запись классовой компоненты</Title>
            <CodeBlock code={componentClass} />
        </>
    );
};

export default ClassComponent;
