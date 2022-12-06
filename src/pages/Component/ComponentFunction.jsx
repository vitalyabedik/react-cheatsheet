import { Typography, Divider } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { componentFunctional } from '../../data';

const { Title } = Typography;

const FunctionComponent = () => {
    return (
        <>
            <Title level={2}>Функциональные компоненты</Title>

            <Divider>Базовая запись функционального компонента</Divider>
            <CodeBlock code={componentFunctional} />
        </>
    );
};

export default FunctionComponent;
