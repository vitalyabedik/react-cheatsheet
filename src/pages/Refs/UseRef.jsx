import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { useRef } from '../../data';

const { Title, Text, Paragraph } = Typography;

const UseRef = () => {
  return (
    <>
      <Title level={2}>useRef</Title>

      <Paragraph>
        Для работы с <Text keyboard>ref</Text> в функциональных компонентах существует хук{' '}
        <Text keyboard>useRef. </Text> По сути это аналог createRef в классовом компоненте..
      </Paragraph>

      <Title level={3}>Базовая запись useRef </Title>
      <Paragraph>Создание ссылки:</Paragraph>
      <CodeBlock code={useRef.createUseRef} />
      <Paragraph>
        <ul>
          <li>
            <Text keyboard>начальное_значение </Text> - начальное значение для ссылки, может быть
            любого типа.
          </li>
          <li>
            <Text keyboard>ref.current</Text> - текущее значение ссылки, которое может быть
            обновлено и сохраняется стабильно во время жизненного цикла рендеринга.
          </li>
        </ul>
      </Paragraph>
      <Paragraph>Добавление ссылки:</Paragraph>
      <CodeBlock code={useRef.createUseRefLink} />

      <Title level={3}>Для чего используется хук useRef? </Title>
      <Paragraph>
        useRef используется для хранения одного и того же значения, которое будет постоянным в
        течении всего ЖЦ компонента, т.е. которое не будет меняться после каждого ререндера.{' '}
      </Paragraph>
      <Paragraph>Данный хук нужен для:</Paragraph>
      <Paragraph>
        <ul>
          <li>Хранения ссылки на DOM элемент</li>
          <li>Хранения значений (чисел, объектов, массивов)</li>
        </ul>
      </Paragraph>

      <Title level={3}>Что возвращает useRef? </Title>
      <Paragraph>
        useRef возвращает <Text keyboard>объект с полем current</Text> и изменение поля current не
        приводит к ререндеру.
      </Paragraph>

      <Title level={3}>Пример с получением ссылки на DOM элемент </Title>
      <Paragraph>
        В качестве примера, рассмотрим кейс автоматической установки фокуса на инпут.
      </Paragraph>
      <CodeBlock code={useRef.useRefInputAutoFocus} />

      <Title level={3}>Пример с хранением значения (Запуск и остановка таймера) </Title>
      <CodeBlock code={useRef.useRefTimer} />
    </>
  );
};

export default UseRef;
