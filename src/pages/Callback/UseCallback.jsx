import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { useCallback } from '../../data';

const { Title, Text, Paragraph } = Typography;

const UseCallback = () => {
  return (
    <>
      <Title level={2}>useCallback</Title>

      <Title level={3}>Что такое useCallback? </Title>
      <Paragraph>
        <Text keyboard>useCallback</Text> - это хук, который позволяет мемоизировать функцию, т.е.
        если функция и ее зависимости не изменяются, то useCallback вернет ту же самую функцию, что
        и при предыдущем вызове.
      </Paragraph>
      <Paragraph>
        Используя useCallback, мы можем указать React, что функция не должна быть пересоздана при
        каждом рендеринге, а должна быть закеширована и использована повторно, что может улучшить
        производительность приложения.
      </Paragraph>
      <Paragraph>
        Необходимость в этом появляется из-за того, что теряется ссылка на функцию, которая была при
        первоначальном ее создании, т.к. при ререндере компонента пересоздается ссылка на эту
        функцию.
      </Paragraph>

      <Title level={3}>Базовая запись useCallback </Title>
      <CodeBlock code={useCallback.basic} />

      <Title level={3}>Как работает хук useCallback? </Title>
      <Paragraph>
        useCallback получает 2 параметра:
        <ol>
          <li>
            <Text keyboard>Первый параметр</Text> - функция
          </li>
          <li>
            <Text keyboard>Второй параметр</Text> - массив зависимостей
          </li>
        </ol>
      </Paragraph>
      <Paragraph>
        Он работает по аналогии как useEffect, но различие будет в том, что useCallback будет
        возвращать мемоизированный вариант функции (которая передана в 1 параметр), вызывать не
        будет, при этом будет следить за зависимостями.
      </Paragraph>
      <Paragraph>
        Если зависимости меняются, то только тогда эта функция будет выполняться.
      </Paragraph>
      <Paragraph>
        Когда результат этой функции выполнился и он вернулся, то useCallback сохранит этот
        результат и будет возвращать тот же самый результат, если зависимости не меняются.
      </Paragraph>
      <Paragraph>
        Пошагово про работу <Text keyboard>useCallback</Text>:
        <ol>
          <li>Вызывается хук useCallback и передаете ему функцию и массив зависимостей.</li>
          <li>
            React хранит функцию в кеше и проверяет, изменился ли какой-либо элемент массива
            зависимостей при следующем рендеринге.
          </li>
          <li>
            Если ни один элемент в массиве зависимостей не изменился, React возвращает ту же самую
            функцию из кеша. Если какой-либо элемент изменился, React создает новую функцию.
          </li>
          <li>
            Возвращенную функцию можно использовать, например, в качестве обработчика событий, в
            качестве аргумента для других функций, или в качестве значения для свойства.
          </li>
        </ol>
      </Paragraph>

      <Title level={3}>Отличие хуков useCallback и useMemo? </Title>
      <Paragraph>
        <Text keyboard>useCallback</Text> и <Text keyboard>useMemo</Text> - это два разных хука,
        которые оптимизируют рендеринг компонентов.
      </Paragraph>
      <Paragraph>
        <Text keyboard>useMemo возвращает кешированный результат вычисления</Text> , который может
        использоваться внутри компонента. Он вызывается только тогда, когда заданные зависимости
        изменяются.
      </Paragraph>
      <Paragraph>
        <Text keyboard>useCallback возвращает кешированную функцию</Text> , но его главным
        предназначением является оптимизация функциональных компонентов. Он предотвращает создание
        новых экземпляров функции при каждом рендере, что может привести к проблемам с передачей
        контекста.
      </Paragraph>
      <Paragraph>
        В общем, <Text keyboard>useMemo</Text> используется для{' '}
        <Text keyboard>оптимизации вычислений внутри компонента</Text>, в то время как
        <Text keyboard>useCallback</Text> используется для{' '}
        <Text keyboard>оптимизации функциональных компонентов и передачи контекста</Text>.
      </Paragraph>

      <Title level={3}>Пример </Title>
      <Paragraph>
        В данном примере, handleDataChange - это функция, которую мы хотим мемоизировать. Мы
        передаем [data, onDataChange] в качестве зависимостей, чтобы useCallback понимал, когда
        функция должна быть пересоздана.
      </Paragraph>
      <CodeBlock code={useCallback.example} />
    </>
  );
};

export default UseCallback;
