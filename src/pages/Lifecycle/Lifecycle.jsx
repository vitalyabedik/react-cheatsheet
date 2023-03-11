import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { lifecycle } from '../../data';

const { Title, Text, Paragraph } = Typography;

const Lifecycle = () => {
  return (
    <>
      <Title level={2}>Жизненный цикл. Классовые компоненты</Title>

      <Title level={3}>Что такое жизненный цикл компонента?</Title>
      <Paragraph>
        <Text keyboard>Жизненный цикл (ЖЦ) компонента </Text> - определенная серия этапов жизни из
        компонентов.
      </Paragraph>

      <Title level={3}>Какие этапы входят в ЖЦ компонента?</Title>
      <Paragraph>Каждый компонент обладает своим жизненным циклом и он проходит 3 этапа:</Paragraph>
      <Paragraph>
        <ol>
          <li>
            <Text keyboard>Монтирования</Text> - этап, когда создается компонент и монтируется в DOM
            дерево.
          </li>
          <Paragraph>
            Данный этап интересен когда нужно сделать первичную загрузку данных, повесить какие-то
            слушатели события и тд.
          </Paragraph>
          <li>
            <Text keyboard>Обновления</Text> - этап, когда мы изменили состояние, в следствии чего
            произошел ререндер (перерисовка компонента), т.е. это стадия активной жизни компонента,
            когда он работает, живет.
          </li>
          <Paragraph>
            На данном этапе мы можем следить за изменениями каких-либо зависимостей и производить
            какие-то нужные для нас действия.
          </Paragraph>
          <li>
            <Text keyboard>Размонтирования</Text> - этап, когда компонент больше не нужен и по
            какой-то причине мы его удаляем. Например мы хотим его скрыть или при переходе на другую
            страницу он больше не нужен.
          </li>
          <Paragraph>
            На данном этапе производим различную очистку : отписываемся от слушателей события,
            очищаем глобально хранилище, в общем все, что нам необходимо удалить, после того как
            этот компонент уничтожится.
          </Paragraph>
        </ol>
      </Paragraph>
      <Paragraph>
        Глобально ЖЦ компонента можно разбить на 2 подцикла:
        <ol>
          <li>
            <Text keyboard>ЖЦ установки</Text> - определенная серия этапов при создании и удалении
            компонента.
          </li>
          <li>
            <Text keyboard>ЖЦ обновления</Text> - определенная серия этапов когда наш компонент
            обновляется (вся жизнь компонента после установки и до его удаления).
          </li>
        </ol>
      </Paragraph>

      <Title level={3}>Что такое методы ЖЦ компонента?</Title>
      <Paragraph>
        <Text keyboard>Методы жизненного цикла </Text> - описывают определенные этапы жизни
        компонента, которые позволяют отследить эти этапы и описать внутри них какую-то логику
        поведения.
      </Paragraph>

      <Title level={3}>Какие существуют методы ЖЦ компонента?</Title>
      <Paragraph>
        <ol>
          <li>
            <Text keyboard>Методы установки компонента</Text>
            (написаны в порядке очередности вызова):
            <ul>
              <li>
                <Text keyboard>constructor(props)</Text> - в конструкторе происходит прием пропсов и
                начальная инициализация стейта (можно не писать).
                <CodeBlock code={lifecycle.constructorCycle} />
              </li>
              <li>
                <Text keyboard>componentWillMount()</Text> - вызывается после конструктора, перед
                тем как наш компонент будет cмонтирован (отрисован), т.е. в нем можно описать, что
                будет происходить с компонентом, перед тем как он отрендерится (отрисуется).
                <Paragraph>
                  <Text keyboard>
                    Считается устаревшим, использовать не рекомендуется, т.к. запущенные в нем
                    асинхронные процессы, которые запускаются до отрисовки страницы могут замедлить
                    рендер, следовательно, неэффективно его использовать. Теперь используем
                    componentDidMount, который решает все эти задачи.
                  </Text>
                </Paragraph>
                <CodeBlock code={lifecycle.componentWillMount} />
              </li>
              <li>
                <Text keyboard>render()</Text> - производит отрисовку компонентов (их монтирование
                на страницу), если shouldComponentUpdate возвращает true, тем самым возвращается
                разметка JSX.
                <Paragraph>
                  Внутри return, метода render у нас возвращается JSX разметка, которая потом будет
                  отрисована на странице.
                </Paragraph>
                <Paragraph>
                  <Text keyboard>Данный метод входит в список методов установки и обновления</Text>
                </Paragraph>
                <CodeBlock code={lifecycle.render} />
              </li>
              <li>
                <Text keyboard>componentDidMount()</Text> - в данном методе наш компонент живет,
                т.к. изменяется его стейт, пропсы и тд.
                <Paragraph>
                  Вызывается после того, как вызовется метод render (как компонент будет отрисован).
                </Paragraph>
                <Paragraph>
                  <Text keyboard>Данный метод - лучшее место для отправки сетевых запросов.</Text>
                </Paragraph>
                <CodeBlock code={lifecycle.componentDidMount} />
              </li>
              <li>
                <Text keyboard>componentWillUnMount()</Text> - вызывается перед удалением компонента
                из DOM. Вызывается чтобы почистить за собой асинхронные запросы либо таймеры.
                <CodeBlock code={lifecycle.componentWillUnmount} />
              </li>
            </ul>
          </li>
          <li>
            <Text keyboard>Методы обновления компонента</Text>
            (написаны в порядке очередности вызова):
            <ul>
              <li>
                {' '}
                <Text keyboard>componentWillUpdate()</Text> - запускается перед перерисовкой
                компонента (перед рендером).
                <Paragraph>
                  <Text keyboard>
                    Тоже является устаревшим, как и componentWillMount, по той же причине, он будет
                    блокировать render, если будет запускаться как асинхронная задача. Аналогично
                    все задачи передали методу componentDidUpdate.
                  </Text>
                </Paragraph>
                <CodeBlock code={lifecycle.componentWillUpdate} />
              </li>
              <li>
                <Text keyboard>render</Text> - см. ранее.
              </li>
              <li>
                <Text keyboard>componentDidUpdate(prevProps, prevState)</Text> - запускается сразу
                после обновления компонента (если shouldComponentUpdate возвращает true). В качестве
                параметров передаются старые значения объектов props и state.
                <CodeBlock code={lifecycle.componentDidUpdate} />
              </li>
              <li>
                {' '}
                <Text keyboard>shouldComponentUpdate()</Text> - позволяет определить нужно ли
                компоненту это обновление или нет (может мы пытаемся перерисовать то, что не
                поменялось).
                <CodeBlock code={lifecycle.shouldComponentUpdate} />
              </li>
            </ul>
          </li>
        </ol>
      </Paragraph>

      <Title level={3}>
        Почему нельзя вызывать setState внутри componentDidUpdate и componentWillUpdate?
      </Title>
      <Paragraph>
        Это приведет к безостановочному рекурсивному вызову рендера (бесконечный цикл), произойдет
        переполнение стека вызовов, следовательно нельзя вызывать внутри методов ЖЦ обновления.
      </Paragraph>
      <Paragraph>
        Поэтому setState нужно вызывать в внутри: componentDidMount, componentWillMount,
        componentWillUnMount и внутри различных обработчиков событий (input и тд).{' '}
      </Paragraph>
    </>
  );
};

export default Lifecycle;
