import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { refs } from '../../data';

import React from 'react';

const { Title, Text, Paragraph } = Typography;

const Refs = () => {
  return (
    <>
      <Title level={2}>Refs</Title>

      <Title level={3}>Что такое ref? </Title>
      <Paragraph>
        <Text keyboard>ref </Text> - это некоторый указатель на какую-то ноду (ссылка).
      </Paragraph>

      <Title level={3}>Что из себя представляет ref? </Title>
      <Paragraph>
        ref представляет из себя <Text keyboard>объект</Text>, у которого есть свойство{' '}
        <Text keyboard>current</Text> и из этого current мы можем в любой момент получить ссылку на
        ноду.
      </Paragraph>
      <Paragraph>
        <Text keyboard>Значение current по умолчанию - null</Text>
      </Paragraph>

      <Title level={3}>Для чего может быть полезен ref? </Title>
      <Paragraph>
        Он может пригодиться <Text keyboard>для работы с фокусом</Text>, чтобы при загрузке страницы
        был автофокус в форму или просим посетителя ввести номер телефона и при вводе определенного
        количества символов будет фокус на определенный элемент.
      </Paragraph>
      <Paragraph>
        <Text keyboard>Также он может быть полезен при работе с неуправляемыми компонентами.</Text>
      </Paragraph>

      <Title level={3}>Создание Ref </Title>
      <CodeBlock code={refs.createClassRef} />

      <Title level={3}>Примеры </Title>
      <Paragraph>Имеется следующий код:</Paragraph>
      <CodeBlock code={refs.classRefBasicCode} />

      <Title level={4}>Добавление ref в input </Title>
      <Paragraph>
        Чтобы использовать Ref его нужно повесить на какую-то ноду через атрибут ref, и теперь после
        монтирования (рендера) мы получим ссылку на эту ноду и сможем затем ее использовать.
      </Paragraph>
      <CodeBlock code={refs.classRefInput} />

      <Title level={4}>Использование ref для фокуса </Title>
      <Paragraph>
        Скажем следующее: сделай фокус на данном элементе после загрузки страницы
      </Paragraph>
      <CodeBlock code={refs.classRefInputFocus} />

      <Title level={4}>Использование ref для проверки количества символов </Title>
      <Paragraph>
        Задача: если длина символов 16, то делаем автофокус на следующий элемент.
      </Paragraph>
      <Paragraph>Для этого создадим для него тоже Ref:</Paragraph>
      <CodeBlock code={refs.classRefCountSymbols} />
    </>
  );
};

export default Refs;
