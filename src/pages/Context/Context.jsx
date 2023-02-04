import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { context } from '../../data';

const { Title, Text, Paragraph } = Typography;

const Context = () => {
  return (
    <>
      <Title level={2}>Context</Title>

      <Title level={3}>Зачем нужен Context? </Title>
      <Paragraph>
        <Text keyboard>Context</Text> предназначен для прямой передачи пропсов в компоненты,
        находящимся на любом уровне вложенности.
      </Paragraph>
      <Paragraph>
        <Text keyboard> Context</Text> - это объект, у которого есть компоненты{' '}
        <Text keyboard>Provider</Text> и <Text keyboard>Consumer</Text>.
      </Paragraph>
      <Paragraph>
        Он позволяет избежать так называемого "бурения пропсов" (prop drilling), т.е. необходимости
        последовательной передачи пропсов на каждом уровне вложенности.
      </Paragraph>

      <Title level={3}>Как создать контекст? </Title>
      <Paragraph>
        <Text keyboard> Context</Text> - это объект, у которого есть компоненты{' '}
        <Text keyboard>Provider</Text> и <Text keyboard>Consumer</Text>.
      </Paragraph>
      <CodeBlock code={context.createContext} />

      <Title level={3}>Как передать значения контекста? </Title>
      <Paragraph>
        Для того чтобы передать значения контекста нижележащим компонентам нужно обернуть часть
        нашего приложения используя компонент <Text keyboard>Context.Provider</Text>(все что
        обернуто будет знать о контексте).
      </Paragraph>
      <CodeBlock code={context.contextProvider} />

      <Title level={3}>Как получить значения из контекста? </Title>
      <Paragraph>
        Перед тем как воспользоваться контекстом, его нужно импортировать в файл.
      </Paragraph>

      <Title level={4}>Классовые компоненты </Title>
      <Paragraph>
        В классовых компонентах используется компонент <Text keyboard>Context.Consumer</Text>,
        который используется для доступа к данным контекста, он подписывается на изменения
        контекста.{' '}
      </Paragraph>
      <Paragraph>
        Он требует обертывания функции, которая принимает данные контекста в качестве аргумента:
      </Paragraph>
      <CodeBlock code={context.contextConsumer} />

      <Title level={4}>Функциональные компоненты </Title>
      <Paragraph>
        В функциональных компонентах используется хук
        <Text keyboard>useContext</Text>, в компоненте, где нужно наше значение.
      </Paragraph>
      <CodeBlock code={context.useContextBasic} />

      <Title level={5}>Как работает хук useContext? </Title>
      <Paragraph>
        Данный хук будет ссылаться на переменную ContextName, а в этой переменной мы написали, что
        Provider, у тебя по умолчанию будет храниться переменная initialValue.
      </Paragraph>
      <Paragraph>Теперь можно вытащить значение с помощью ДП и использовать:</Paragraph>
      <CodeBlock code={context.useContextDP} />
      <Paragraph>
        <Text keyboard>
          useContext следит за изменением заданного контекста ContextName и возвращает значение
          value из ContextName.Provider
        </Text>
      </Paragraph>
      <Paragraph>
        <Text keyboard>
          Ререндер происходит только того, что использует контекст. Если перерисовывается родитель,
          то и все его дочерние компоненты перерисовываются
        </Text>
      </Paragraph>

      <Title level={5}>Базовый пример: </Title>
      <CodeBlock code={context.useContextExample} />
    </>
  );
};

export default Context;
