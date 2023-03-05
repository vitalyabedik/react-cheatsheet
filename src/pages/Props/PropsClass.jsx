import { Typography, Space } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { propsClass } from '../../data';

const { Title, Text, Paragraph } = Typography;

const PropsClass = () => {
  return (
    <>
      <Title level={2}>Props. Классовые компоненты</Title>

      <Title level={3}>Что такое props? Для чего он используется?</Title>
      <Paragraph>
        <Text keyboard>Props (свойства)</Text> - это наши неизменяемые внешние(входные)
        параметры/данные, которыми мы делимся от компонента к компоненту.
      </Paragraph>
      <Paragraph>
        Будем воспринимать их как параметры (аналогичные у функций), которые мы куда-то передаем.
        Если пропсы компоненту не передаются, это не значит, что их нет, это лишь значит, что объект
        (props) - пустой. У классовых пропсы находятся по умолчанию в контексте.
      </Paragraph>

      <Title level={3}>Как передать props?</Title>
      <Paragraph>
        Будем передавать их как атрибуты: пишем наше имя и значение, которые мы хотим передать. Их
        передачу рекомендуется осуществлять в фигурных скобках.
      </Paragraph>
      <CodeBlock code={propsClass.transfer} />

      <Title level={3}>Как обратиться к props?</Title>
      <Paragraph>
        Для этого есть <Text keyboard>this.props</Text> - это по факту наш объект, того, что мы
        передали в наш компонент, который работает по принципу ключ-значение. Таких пропсов можно
        передать сколько угодно.
      </Paragraph>
      <CodeBlock code={propsClass.get} />

      <Title level={3}>Что можно передавать в качестве параметра у props?</Title>
      <Paragraph>
        В качестве параметра у props может быть все что угодно (объект, функция, массив, компонент)
      </Paragraph>

      <Title level={3}>Передача нескольких props в компонент?</Title>
      <Space direction='vertical'>
        <CodeBlock code={propsClass.multipleTransfer.parent} />
        <CodeBlock code={propsClass.multipleTransfer.child} />
      </Space>

      <Title level={3}>Передача параметров компоненту?</Title>
      <Paragraph>По сути мы просто передаем функцию нашему компоненту:</Paragraph>
      <CodeBlock code={propsClass.parameters} />
    </>
  );
};

export default PropsClass;
