import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { routing } from '../../data';

const { Title, Text, Paragraph } = Typography;

const Routing = () => {
  return (
    <>
      <Title level={2}>Routing</Title>

      <Title level={3}>Что такое React Router DOM? </Title>
      <Paragraph>
        В приложениях нам нужна стартовая страница загрузки, страница регистрации, а также
        возможность переключения между ними. Для организации навигации в приложении используется
        библиотека<Text keyboard>React Router Dom</Text>.
      </Paragraph>
      <Paragraph>
        <Text keyboard>React Router Dom</Text> - это библиотека для React, которая позволяет
        определять и управлять маршрутами в приложении. Он нужен, чтобы обеспечить переходы между
        различными страницами приложения и выводить соответствующие компоненты на экран в
        зависимости от URL-адреса.
      </Paragraph>
      <Paragraph>
        <Text keyboard>Навигация по сайту происходит без перезагрузки всей страницы.</Text>
      </Paragraph>

      <Title level={3}>Как добавить React Router DOM в приложение? </Title>
      <Paragraph>Сперва нужно установить данную библиотеку:</Paragraph>
      <CodeBlock code={routing.install} />
      <Paragraph>
        Теперь, чтобы наш router был доступен, нужно обеспечить наше приложение провайдером. Для
        этого импортируем в нашу точку входа приложения компонент{' '}
        <Text keyboard>BrowserRouter</Text> , который должен быть родителем относительно всего
        приложения, это позволит сделать роутинг внутри нашего приложения:
      </Paragraph>
      <CodeBlock code={routing.browserRouter} />
      <Paragraph>
        Теперь <Text keyboard>BrowserRouter</Text> будет отслеживать изменения путей в приложении и
        перерисовывать компоненты.
      </Paragraph>

      <Title level={3}>Компоненты Routes и Route </Title>
      <Paragraph>
        Чтобы объявить какой-то маршрут, какую-то страницу в нашем приложении React Router DOM
        предоставляет компоненты <Text keyboard>Routes</Text> и <Text keyboard>Route</Text>.
      </Paragraph>
      <Paragraph>
        <Text keyboard>Routes</Text> - базовый компонент для роутинга, в который мы помещаем
        дочерние компоненты Route, он позволяет группировать маршруты и выбрать хотя бы один из тех,
        который внутри.
      </Paragraph>
      <Paragraph>
        Внутри компонента <Text keyboard>Route</Text> мы передаем пропсы:
        <ol>
          <li>
            <Text keyboard>path </Text> - путь по которому эта страница должна отрисовываться:
            <ul>
              <li>
                <Text keyboard>/</Text> - корневая папка{' '}
              </li>
              <li>
                <Text keyboard>* </Text> - если ничего не найдено{' '}
              </li>
              <li>
                <Text keyboard>/адрес/:id </Text> - неважно какой должен быть id
              </li>
            </ul>
          </li>
          <li>
            <Text keyboard>element </Text> - элемент (компонент) который необходимо отрисовать
          </li>
        </ol>
      </Paragraph>

      <Title level={3}>Применение Routes и Route </Title>
      <Paragraph>
        Создадим базовое меню навигации и компоненты со страницами Home, About, Contact, NotFound и
        создадим для них соответствующие роуты:
      </Paragraph>
      <CodeBlock code={routing.routes} />
      <Paragraph>
        Разберем первую запись Route, если путь в адресной строке будет указан как главная страница
        <Text keyboard>/ или "" </Text>, то рендери компонент <Text keyboard>Home</Text>.
      </Paragraph>
      <Paragraph>
        Следующий роут указывает путь <Text keyboard>/about</Text> к компоненту{' '}
        <Text keyboard>About</Text>.
      </Paragraph>
      <Paragraph>
        Чтобы отобразить компонент <Text keyboard>NotFound</Text>, если был осуществлен переход по
        непонятному адресу, нужно использовать следующий прием. Например у нас будет множество Route
        с разными адресами и в конце создается route с путем <Text keyboard>“*”</Text> .
      </Paragraph>
      <Paragraph>
        <Text keyboard>“*”</Text> - это значит, что если ни один из предыдущих роутов не подошел, то
        будет рендериться он.
      </Paragraph>
      <Paragraph>
        У нас на странице отображается разное содержимое, но пока вся страница перерисовывается.
      </Paragraph>

      <Title level={3}>Компонент Link </Title>
      <Paragraph>
        Чтобы наше приложение было SPA, то вместо ссылки <Text keyboard>тег a</Text> нужно
        использовать{' '}
        <Text keyboard>компонент Link и вместо атрибута href → используем атрибут to</Text>. Теперь
        у нас моментально отображаются данные, меняются только определенные данные и без
        перезагрузки страницы.
      </Paragraph>
      <CodeBlock code={routing.link} />

      <Title level={3}>Логика работы компонентов Link и Routes, Route </Title>
      <Paragraph>
        Вместо HTML <Text keyboard>тега a</Text> нужно использовать{' '}
        <Text keyboard>компонент Link</Text> . Внутри React Router вшита логика, которая будет
        использовать обычный HTML <Text keyboard>тег a</Text>, но поверх его прикрутит свою JS
        логику, свой onClick. И если кликнуть на эту ссылку, то оповещается все приложение что
        поменялся адрес и уже компонент <Text keyboard>Routes</Text> скажет, что здесь что-то
        поменялось и давайте проверим это в <Text keyboard>Route</Text>, который начнет делать всю
        логику. Если ничего их этого не совпало, то будет NotFound.
      </Paragraph>
    </>
  );
};

export default Routing;
