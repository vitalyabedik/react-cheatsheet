import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { reactMemo } from '../../data';

const { Title, Text, Paragraph } = Typography;

const MemoReact = () => {
  return (
    <>
      <Title level={2}>React.memo</Title>

      <Title level={3}>Что такое React.memo? </Title>
      <Paragraph>
        Классовым компонентам можно запретить повторный рендеринг, если их пропсы остались прежними,
        с помощью <Text keyboard>PureComponent</Text> или{' '}
        <Text keyboard>shouldComponentUpdate()</Text>. Теперь и у функциональных компонентов имеется
        такая возможность благодаря функции-обертке <Text keyboard>React.memo</Text>.
      </Paragraph>
      <Paragraph>
        <Text keyboard>React.memo</Text>  - это компонент высшего порядка{' '}
        <Text keyboard>HOC (High order component)</Text>  .
      </Paragraph>
      <Paragraph>
        React.memo может использоваться с любым типом компонента (функциональным или классовым).
      </Paragraph>
      <Paragraph>
        Похожий (но не аналогичный) функционал предоставляет <Text keyboard>хук useMemo</Text> .
      </Paragraph>

      <Title level={3}>Базовая запись React.memo </Title>
      <CodeBlock code={reactMemo.reactMemoBasic} />

      <Title level={3}>Что делает React.memo? </Title>
      <Paragraph>
        React.memo будет использовать результат предыдущего рендера компонента и будет избегать
        лишних ререндеров.
      </Paragraph>
      <Paragraph>
        React.memo делает поверхностное сравнение (shallow equal) пропсов: идет сравнение по ссылкам
        старых и новых пропсов, если ссылки не изменились, то компонент не будет делать ререндер.
      </Paragraph>
      <Paragraph>
        Чтобы изменить данное поведение нужно передать 2ым параметром, функцию со своей логикой, где
        мы можем сказать когда делать ререндер. Параметрами будет предыдущее и текущее значение
        пропсов.
      </Paragraph>

      <Title level={3}>Как работает React.memo? </Title>
      <Paragraph>
        Пошагово про работу <Text keyboard>React.memo</Text>:
        <ol>
          <li>
            При первом рендере React вызывает компонент, обернутый React.memo, и он рендерится в
            виртуальный DOM.
          </li>
          <li>
            При следующем рендере React сравнивает входные пропсы (props) компонента с предыдущими.
          </li>
          <li>
            Если React определяет, что входные пропсы не изменились, то он не вызывает функцию
            рендера, а вместо этого использует предыдущую версию компонента из виртуального DOM.
          </li>
          <li>
            Если входные пропсы изменились, React вызывает функцию рендера и обновляет виртуальный
            DOM.
          </li>
        </ol>
      </Paragraph>
      <Paragraph>
        Таким образом, React.memo помогает улучшить производительность, предотвращая ненужные
        перерендеры компонентов.
      </Paragraph>

      <Title level={3}>Базовый пример </Title>
      <Paragraph>
        В этом примере, React.memo используется для обертывания функционального компонента
        MyComponent. Он проверяет, изменились ли пропсы props, и если нет, то предотвращает лишние
        рендеры.
      </Paragraph>
      <CodeBlock code={reactMemo.reactMemoBasicExample} />

      <Title level={3}>Пример с аналогом shouldComponentUpdate </Title>
      <Paragraph>
        В этом случае, MyComponent будет перерендерен только тогда, когда значение props.data
        изменится.
      </Paragraph>
      <CodeBlock code={reactMemo.reactMemoExampleShouldComponentUpdate} />
      <Paragraph>
        Можно по аналогии запрещать ререндер компоненту по какому-то условия, но тогда должен быть{' '}
        <Text keyboard>shouldComponentUpdate = false</Text>:
      </Paragraph>
      <CodeBlock code={reactMemo.reactMemoExampleShouldComponentUpdateFalse} />
      <Paragraph>
        В этом случае, MyComponent будет перерендерен только тогда, когда значение props.data
        достигнет 4 и более.
      </Paragraph>
    </>
  );
};

export default MemoReact;
