import { Typography, Divider } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { fragment } from '../../data';

const { Title, Text, Paragraph } = Typography;

const Fragment = () => {
  return (
    <>
      <Title level={2}>Fragment</Title>

      <Divider>Что такое Fragment? </Divider>
      <Paragraph>
        <Text keyboard>Fragment</Text> - это как не названный тег, которого не
        существует.
      </Paragraph>
      <Paragraph>
        <Text keyboard>Fragment не отображается в DOM.</Text>
      </Paragraph>

      <Divider>Для чего нужен Fragment?</Divider>
      <Paragraph>
        Fragment нужен для render (рендера), т.к. наша компонента должна
        возвращать что-то одно.
      </Paragraph>

      <Divider>Преимущества использования Fragment?</Divider>
      <Paragraph>
        <ol>
          <li>
            {' '}
            <Paragraph>
              Уменьшение размера реального DOM (нету ненужного div в разметке).
            </Paragraph>
          </li>
          <li>
            {' '}
            <Paragraph>
              Оптимизирует процесс обновления реального DOM в процессе ЖЦ
              приложения.
            </Paragraph>
          </li>
        </ol>
      </Paragraph>

      <Divider>Способы записи Fragment?</Divider>
      <Paragraph>
        <ol>
          <li>
            {' '}
            <Paragraph>
              <Text keyboard>Сокращенная запись:</Text>
            </Paragraph>
          </li>
          <CodeBlock code={fragment.short} />
          <Paragraph>
            При данной записи нет возможности его стилизовать (задавать
            атрибуты).
          </Paragraph>
          <li>
            {' '}
            <Paragraph>
              <Text keyboard>Полная запись:</Text>
            </Paragraph>
          </li>
          <CodeBlock code={fragment.long} />
        </ol>
      </Paragraph>
      <Paragraph>
        При данной записи появился импорт из библиотеки React, но данный способ
        позволяет стилизовать фрагмент (задавать атрибуты).
      </Paragraph>
    </>
  );
};

export default Fragment;
