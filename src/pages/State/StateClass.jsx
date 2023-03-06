import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { stateClass } from '../../data';

const { Title, Text, Paragraph } = Typography;

const ClassState = () => {
  return (
    <>
      <Title level={2}>State. Классовые компоненты</Title>

      <Title level={3}>Для чего нужен state?</Title>
      <Paragraph>
        <Text keyboard>State</Text> - переменная которую нужно изменять и которая является объектом.
      </Paragraph>

      <Title level={3}>Способы объявления state?</Title>
      <Paragraph>
        <ol>
          <li>
            <Text keyboard>С помощью конструктора</Text> - очень долго, т.к. нужно написать
            constructor, super и тд.
          </li>
          <CodeBlock code={stateClass.stateWithConstructor} />
          <li>
            <Text keyboard>Без конструктора:</Text>{' '}
            <CodeBlock code={stateClass.stateWithoutConstructor} />
          </li>
        </ol>
      </Paragraph>

      <Title level={3}>Как вывести state в разметку?</Title>
      <Paragraph>
        Для этого используем <Text keyboard>this.state</Text>:
      </Paragraph>
      <CodeBlock code={stateClass.stateRender} />

      <Title level={3}>Как изменять state?</Title>
      <Paragraph>
        Для этого существует специальный метод
        <Text keyboard>setState</Text>
      </Paragraph>

      <Title level={3}>Какие параметры у setState?</Title>
      <Paragraph>
        <ol>
          <li>Первый параметр может быть объектом либо функцией:</li>
          <ul>
            <li>
              <Text keyboard>Объект:</Text>
            </li>
            <CodeBlock code={stateClass.stateFirstParamObj} />
            <li>
              <Text keyboard>Функция:</Text>
              <CodeBlock code={stateClass.stateFirstParamFunc} />
            </li>
          </ul>

          <li>Второй параметр - callback-функция, которая сработает, когда state обновится:</li>
          <Paragraph>
            <Text keyboard>
              Иногда может быть полезен, когда у нас есть какое-то значение и затем это измененное
              значение нужно отправить на сервер.
            </Text>
          </Paragraph>
        </ol>
      </Paragraph>
      <CodeBlock code={stateClass.stateSecondParam} />

      <Title level={3}>Что нельзя делать с методом setState?</Title>
      <Paragraph>
        Его нельзя вызывать в методе render, иначе будет ошибка, т.к. произойдет зацикливание.
      </Paragraph>
      <Paragraph>
        Это происходит по той причине, что каждый вызов setState вызывает метод render из-за чего
        происходит rerender
      </Paragraph>
      <Paragraph>
        <Text keyboard>Вызов setState является асинхронным</Text>
      </Paragraph>
    </>
  );
};

export default ClassState;
