import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { componentFunctional } from '../../data';

const { Title } = Typography;

const FunctionComponent = () => {
  return (
    <>
      <Title level={2}>Функциональные компоненты</Title>

      <Title level={3}>Базовая запись функционального компонента</Title>
      <CodeBlock code={componentFunctional} />
    </>
  );
};

export default FunctionComponent;
