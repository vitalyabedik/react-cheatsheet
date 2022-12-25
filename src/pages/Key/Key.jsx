import { Typography, Divider } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { key } from '../../data';

const { Title, Text, Paragraph } = Typography;

const Key = () => {
  return (
    <>
      <Title level={2}>Key</Title>

      <Divider>Для чего нужен key? </Divider>
      <Paragraph>
        Атрибут <Text keyboard>key</Text> нужен для того, чтобы React мог
        различать одинаковые элементы выведенные через цикл, т.к. React не будет
        понимать, что это отдельные элементы, ему необходимо это явно указать, и
        тогда он будет ререндерить их по-новому.
      </Paragraph>
      <Paragraph>
        Key также нужен React чтобы эффективнее выполнять обновление в Virtual и
        реальном DOM, т.к. каждый элемент имеет свой уникальный ключ.
      </Paragraph>

      <Divider>Что обычно задается в качестве атрибутов у key?</Divider>
      <Paragraph>
        Обычно в качестве атрибутов у <Text keyboard>key</Text> задается{' '}
        <Text keyboard>id</Text>, т.к. обычно этот массив будет приходить нам с
        сервера, а сервер дает нам эти данные из базы данных, а в базе данных
        как правило всегда есть какой-то уникальный id.
      </Paragraph>
      <Paragraph>
        <Text keyboard>
          Если атрибут key не будет уникальным, для каждого из элементов, то
          будет ошибка.
        </Text>
      </Paragraph>

      <Divider>Пример использования key</Divider>
      <Paragraph>
        При использовании метода map каждый блок jsx кода должен иметь
        уникальное свойство key. В нашем случае каждый текст в параграфе
        уникален, значит мы можем использовать его в качестве ключа.
      </Paragraph>
      <CodeBlock code={key.example} />

      <Divider>
        Почему не рекомендуется использовать index в качестве атрибута у key?
      </Divider>
      <Paragraph>Иначе при перенумерации будет хаос в id.</Paragraph>
    </>
  );
};

export default Key;
