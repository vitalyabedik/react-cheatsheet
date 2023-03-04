import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { propsFunctional } from '../../data';

const { Title, Text, Paragraph } = Typography;

const PropsFunction = () => {
  return (
    <>
      <Title level={2}>Props. Функциональные компоненты</Title>

      <Title level={3}>Что позволяют делать props?</Title>
      <Paragraph>
        Используя разные свойства мы сможем отрисовывать разные значения. Если необходимо передавать
        различные свойства в определенный компонент, то это делается по аналогии с атрибутами HTML.
      </Paragraph>
      <Paragraph>
        <Text keyboard>
          Свойства внутри компонента менять запрещено. Воспринимаем их как read only, т.к. это
          противоречит правилам React
        </Text>
      </Paragraph>

      <Title level={3}>Как передаются props?</Title>
      <Paragraph>В функциональных компонентах они передаются как параметр.</Paragraph>
      <CodeBlock code={propsFunctional.transfer} />

      <Title level={3}>Какого типа данных props?</Title>
      <Paragraph>Тип данных props - объект</Paragraph>

      <Title level={3}>Как вывести props в разметку?</Title>
      <Paragraph>
        Для этого добавляем jsx код в фигурных скобках {} и обращаемся к нашему свойству объекта{' '}
        <Text keyboard>объект.name</Text>:
      </Paragraph>
      <CodeBlock code={propsFunctional.render} />

      <Title level={3}>Несколько props в разметке?</Title>
      <CodeBlock code={propsFunctional.multipleRender} />

      <Title level={3}>Как сократить запись при работе с props?</Title>
      <Paragraph>
        Чтобы не писать постоянно <Text keyboard>props.</Text> существует деструктуризация:
      </Paragraph>
      <CodeBlock code={propsFunctional.destructure} />
      <Paragraph>Более короткая запись:</Paragraph>
      <CodeBlock code={propsFunctional.destructureShort} />
    </>
  );
};

export default PropsFunction;
