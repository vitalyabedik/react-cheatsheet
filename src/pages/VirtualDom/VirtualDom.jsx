import { Typography } from 'antd';

const { Title, Text, Paragraph } = Typography;

const VirtualDom = () => {
  return (
    <>
      <Title level={2}>Виртуальный DOM</Title>

      <Title level={3}>Что такое Виртуальный DOM? </Title>
      <Paragraph>
        <Text keyboard>Виртуальный DOM</Text> - это более легковесная копия DOM дерева в контексте
        браузера.
      </Paragraph>

      <Title level={3}>Зачем нужен Виртуальный DOM? </Title>
      <Paragraph>
        Для этого разберемся что такое обычный DOM и какие у него есть недостатки.
      </Paragraph>
      <Paragraph>
        <Text keyboard>DOM (Document Object Model)</Text> - в любом веб-приложении html документ
        представляется в виде дерева. В свою очередь обновление всего DOM - затратная операция.
      </Paragraph>
      <Paragraph>
        В React не требуется перерисовывать весь DOM благодаря Virtual DOM, который существует
        параллельно с реальным DOM. Прежде чем менять реальный DOM React меняет виртуальный.
      </Paragraph>

      <Title level={3}>Как происходит сравнение? </Title>
      <Paragraph>
        <Text keyboard>Стадия согласования</Text> - когда в узлах этого дерева происходят какие-то
        изменения, они не переносятся в DOM дерево сразу, а вместо этого React строит новое DOM
        дерево, с обновленными значениями и сравнивает состояния двух версий Virtual DOM: версию
        текущего состояния Virtual DOM и версию предыдущего состояния Virtual DOM. При этом
        сравнение происходит поэлементно только тех состояний, которые изменились.
      </Paragraph>
      <Paragraph>
        После определения изменений в Virtual DOM React вносит изменения в реальный DOM точечно и
        таким образом не происходит полная перерисовка страницы.
      </Paragraph>
      <Paragraph>
        За согласование отвечает ядро реакта (React CORE) и оно выполняется независимо от среды
        выполнения (браузер, телефон и тд)
      </Paragraph>
      <Paragraph>
        <Text keyboard>Стадия рендеринга</Text> - данная стадия происходит после того как React
        нашел разницу между двумя деревьями, далее React визуализирует (рендерит) данные.
      </Paragraph>
      <Paragraph>
        Это позволяет нам видеть обновленные данные на странице, при этом для каждого изменения
        React устанавливает свою приоритетность (более приоритетные происходят быстрее), за счет
        чего получается плавная картинка
      </Paragraph>
    </>
  );
};

export default VirtualDom;
