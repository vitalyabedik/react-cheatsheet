import { Typography, Divider } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { stateClass } from '../../data';

const { Title, Text, Paragraph } = Typography;

const ClassState = () => {
  return (
    <>
      <Title level={2}>State. Классовые компоненты</Title>

      <Divider>Для чего нужен state?</Divider>
      <Paragraph>
        <Text keyboard>State</Text> - переменная которую нужно изменять и
        которая является объектом.
      </Paragraph>

      <Divider>Способы объявления state?</Divider>
      <Paragraph>
        <ol>
          <li>
            <Text keyboard>С помощью конструктора</Text> - очень долго, т.к.
            нужно написать constructor, super и тд.
          </li>
          <CodeBlock code={stateClass.stateWithConstructor} />
          <li>
            <Text keyboard>Без конструктора:</Text>{' '}
            <CodeBlock code={stateClass.stateWithoutConstructor} />
          </li>
        </ol>
      </Paragraph>

      <Divider>Как вывести state в разметку?</Divider>
      <Paragraph>
        Для этого используем <Text keyboard>this.state</Text>:
      </Paragraph>
      <CodeBlock code={stateClass.stateRender} />

      <Divider>Как изменять state?</Divider>
      <Paragraph>
        Для этого существует специальный метод
        <Text keyboard>setState</Text>
      </Paragraph>

      <Divider>Какие параметры у setState?</Divider>
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

          <li>
            Второй параметр - callback-функция, которая сработает, когда state
            обновится:
          </li>
          <Paragraph>
            <Text keyboard>
              Иногда может быть полезен, когда у нас есть какое-то значение и
              затем это измененное значение нужно отправить на сервер.
            </Text>
          </Paragraph>
        </ol>
      </Paragraph>
      <CodeBlock code={stateClass.stateSecondParam} />

      <Divider>Что нельзя делать с методом setState?</Divider>
      <Paragraph>
        Его нельзя вызывать в методе render, иначе будет ошибка, т.к. произойдет
        зацикливание.
      </Paragraph>
      <Paragraph>
        Это происходит по той причине, что каждый вызов setState вызывает метод
        render из-за чего происходит rerender
      </Paragraph>
      <Paragraph>
        <Text keyboard>Вызов setState является асинхронным</Text>
      </Paragraph>
    </>
  );
};

export default ClassState;
