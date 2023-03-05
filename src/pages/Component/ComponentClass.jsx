import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { componentClass } from '../../data';

const { Title, Text, Paragraph } = Typography;

const ClassComponent = () => {
  return (
    <>
      <Title level={2}>Классовые компоненты</Title>

      <Title level={3}>Что такое компонент?</Title>
      <Paragraph>
        <Text keyboard>Компонент</Text> - это определенная часть структуры пользовательского
        интерфейса (базовый строительный блок программы), которая позволяет многократно использовать
        эту структуру, но для различного набора входных данных.
      </Paragraph>

      <Paragraph>
        У любого компонента есть свой набор данных, эти данные делятся на 2 группы:
        <ul>
          <li>
            <Text keyboard>Изменяемые - (state) - внутренние данные </Text> - внутри компонента
            создаются и внутри него и изменяются.
          </li>
          <li>
            <Text keyboard>Неизменяемые - props (пропсы) - входные данные (внешние)</Text> - которые
            передаются, внутри компонента мы их поменять не можем (какие передались из вне, такие и
            будут).
          </li>
        </ul>
      </Paragraph>

      <Title level={3}>Базовая запись классовой компоненты</Title>
      <CodeBlock code={componentClass} />
    </>
  );
};

export default ClassComponent;
