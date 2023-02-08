import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { events } from '../../data';

const { Title, Text, Paragraph } = Typography;

const Events = () => {
  return (
    <>
      <Title level={2}>Events</Title>

      <Title level={3}>Что такое event? </Title>
      <Paragraph>
        <Text keyboard>Event (событие)</Text> - это что-то, что происходит в приложении, такое как
        клик по кнопке, ввод текста в текстовое поле и т.д.
      </Paragraph>
      <Paragraph>
        События в React представляют собой элементы управления, которые могут влиять на состояние
        или поведение приложения. Чтобы обрабатывать события в React, назначается{' '}
        <Text keyboard>обработчик события (eventHandler)</Text>.
      </Paragraph>

      <Title level={3}>Что такое eventHandler? </Title>
      <Paragraph>
        <Text keyboard>EventHandler (обработчик события)</Text> - это функция, которая вызывается,
        когда происходит определенное событие.
      </Paragraph>
      <Paragraph>
        Обработчик события передается как атрибут в компонент, когда событие происходит, оно
        вызывает обработчик события. В коде, это выглядит следующим образом:
      </Paragraph>
      <CodeBlock code={events.basic} />
      <Paragraph>
        В данном примере, <Text keyboard>onClick</Text> является атрибутом события, а{' '}
        <Text keyboard>handleClick</Text> - функцией обработчиком события. Когда пользователь
        кликнет по кнопке, функция handleClick будет вызвана. Вы можете выполнять любые действия,
        которые хотите, внутри этой функции, например, можете изменить состояние компонента или
        вызвать API.
      </Paragraph>

      <Title level={3}>Какие events бывают? </Title>
      <Paragraph>
        React реализует широкий диапазон событий, которые вы можете использовать в своих
        приложениях. Вот более подробный список событий в React (полный см. документацию):
        <ol>
          <li>
            События формы:
            <ul>
              <li>
                <Text keyboard>onChange</Text> - это событие вызывается, когда пользователь изменяет
                значение элемента формы, такого как input, textarea или select.
              </li>
              <li>
                <Text keyboard>onSubmit</Text> - это событие вызывается, когда пользователь
                отправляет форму.
              </li>
            </ul>
          </li>
          <li>
            События мыши:
            <ul>
              <li>
                <Text keyboard>onClick</Text> - событие вызывается, когда пользователь кликает на
                элемент.
              </li>
              <li>
                <Text keyboard>onDoubleClick</Text> - событие вызывается, когда пользователь дважды
                кликает на элемент.
              </li>
              <li>
                <Text keyboard>onMouseDown</Text> - событие вызывается, когда пользователь нажимает
                кнопку мыши на элементе.
              </li>
              <li>
                <Text keyboard>onMouseEnter</Text> - событие вызывается, когда указатель мыши входит
                в область элемента.
              </li>
              <li>
                <Text keyboard>onMouseLeave</Text> - событие, которое срабатывает при выходе курсора
                мыши из области элемента.
              </li>
            </ul>
          </li>
          <li>
            События клавиатуры:
            <ul>
              <li>
                <Text keyboard>onKeyDown</Text> - событие, которое срабатывает при нажатии клавиши
                на клавиатуре.
              </li>
              <li>
                <Text keyboard>onKeyUp</Text> - событие, которое срабатывает при отпускании
              </li>
            </ul>
          </li>
          <li>
            События для связывания с UI:
            <ul>
              <li>
                <Text keyboard>onFocus</Text> - событие, которое срабатывает, когда элемент получает
                фокус.
              </li>
              <li>
                <Text keyboard>onBlur</Text> - событие, которое срабатывает, когда элемент теряет
                фокус.
              </li>
            </ul>
          </li>
          <li>
            События для загрузки файлов и изображений:
            <ul>
              <li>
                <Text keyboard>onLoad</Text> - событие, которое срабатывает, когда изображение или
                файл загружены.
              </li>
              <li>
                <Text keyboard>onError</Text> - событие, которое срабатывает, когда возникает ошибка
                при загрузке изображения или файла.
              </li>
            </ul>
          </li>
          <li>
            События для отслеживания изменений состояния:
            <ul>
              <li>
                <Text keyboard>onUpdate</Text> - событие, которое срабатывает, когда данные в
                компоненте обновляются.
              </li>
            </ul>
          </li>
          <li>
            Другие события:
            <ul>
              <li>
                <Text keyboard>onTouchStart</Text> - событие, которое срабатывает, когда
                пользователь касается экрана.
              </li>
              <li>
                <Text keyboard>onTouchMove</Text> - событие, которое срабатывает, когда пользователь
                перемещает палец по экрану.
              </li>
              <li>
                <Text keyboard>onTouchEnd</Text> - событие, которое срабатывает, когда пользователь
                перестает касаться экрана.
              </li>
              <li>
                <Text keyboard>onScroll</Text> - событие, которое срабатывает, когда пользователь
                прокручивает экран.
              </li>
              <li>
                <Text keyboard>onCut</Text> - событие, которое срабатывает, при вырезании текста в
                компоненте.
              </li>
              <li>
                <Text keyboard>onCopy</Text> - событие, которое срабатывает, при копировании текста
                в компоненте.
              </li>
              <li>
                <Text keyboard>onPaste</Text> - событие, которое срабатывает, при вставке текста в
                компоненте.
              </li>
            </ul>
          </li>
        </ol>
      </Paragraph>

      <Title level={3}>Пример с событием onClick </Title>
      <CodeBlock code={events.onClick} />

      <Title level={3}>Пример с событием onChange </Title>
      <Paragraph>
        В этом примере мы используем useState чтобы сохранять значение инпута в стейте inputValue.
        Обработчик события onChange обновляет значение стейта inputValue при изменении в инпуте. Это
        делается с помощью handleChange функции, которая вызывается при каждом изменении в инпуте.
      </Paragraph>
      <CodeBlock code={events.onChange} />
    </>
  );
};

export default Events;
