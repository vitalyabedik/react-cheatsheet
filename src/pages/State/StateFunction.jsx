import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { stateFunctional } from '../../data';

const { Title, Text, Paragraph } = Typography;

const FunctionState = () => {
  return (
    <>
      <Title level={2}>State. Функциональные компоненты</Title>

      <Title level={3}>Что нужно для работы с состоянием?</Title>
      <Paragraph>
        Чтобы использовать тот же самый функционал, который был в классовых компонентах необходимо
        использовать хуки.
      </Paragraph>
      <Paragraph>
        <Text keyboard>Хуки </Text> - написанные заранее методы, которые мы можем использовать.
      </Paragraph>

      <Title level={3}>Как работать с состоянием?</Title>
      <Paragraph>Для работы с состояниями нужно обязательно импортировать useState:</Paragraph>
      <CodeBlock code={stateFunctional.import} />
      <Paragraph>Чтобы работать с useState необходимо создать новую пару переменных:</Paragraph>
      <CodeBlock code={stateFunctional.vars} />

      <Title level={3}>Что такое useState?</Title>
      <Paragraph>
        <Text keyboard>useState </Text> - функция, которую мы вызываем и результатом которой будет
        возвращенный массив, который мы должны разобрать через ДП.
      </Paragraph>

      <Title level={3}>Что из себя представляет state?</Title>
      <Paragraph>
        <Text keyboard>state </Text> - представляет собой массив состоящий из 2ух элементов:
        <ol>
          <li>
            <Text keyboard>Первый элемент</Text> - само значение, которое мы объявили
          </li>
          <li>
            <Text keyboard>Второй элемент</Text> - функция, необходимая для изменения состояния
          </li>
        </ol>
      </Paragraph>
      <Paragraph>
        Т.к. мы знаем что useState возвращает массив из двух объектов, то можно сделать ДП и сразу
        получить состояние и функцию.
      </Paragraph>

      <Title level={3}>Как создать state?</Title>
      <Paragraph>
        Для этого заводим переменную и производим ДП массива, в котором первым элементом будет count
        (наша переменная), а вторым - функция, которая изменяет этот state - setState
      </Paragraph>
      <CodeBlock code={stateFunctional.state} />
      <Paragraph>
        Обычно функцию называют следующим образом: сеттер (set) + имя state (стейта), тогда запись
        примет вид:
      </Paragraph>
      <CodeBlock code={stateFunctional.count} />

      <Title level={3}>Как задать начальное значение state?</Title>
      <CodeBlock code={stateFunctional.startValue} />

      <Title level={3}>Как вывести state в разметку?</Title>
      <CodeBlock code={stateFunctional.render} />

      <Title level={3}>Пример с кликером</Title>
      <CodeBlock code={stateFunctional.counter} />
    </>
  );
};

export default FunctionState;
