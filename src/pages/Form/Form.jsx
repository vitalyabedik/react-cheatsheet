import { Typography } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { form } from '../../data';

const { Title, Text, Paragraph } = Typography;

const Form = () => {
  return (
    <>
      <Title level={2}>Form</Title>

      <Title level={3}>Что такое Form в React? </Title>
      <Paragraph>
        <Text keyboard>Form (Форма) </Text> - это компонент, который содержит набор элементов, таких
        как текстовые поля, чекбоксы, радиокнопки, выпадающие списки и т.д., которые позволяют
        пользователям ввести информацию.
      </Paragraph>
      <Paragraph>
        Формы в React могут быть <Text keyboard>управляемыми </Text> или
        <Text keyboard>неуправляемыми </Text> , в зависимости от того, как они управляют и хранят
        данные в форме. В React формы могут быть созданы как функциональные компоненты или классовые
        компоненты.
      </Paragraph>

      <Title level={3}>Как работать с Form? </Title>
      <Paragraph>
        Работа с формами в React происходит следующим образом:
        <ol>
          <li>
            <Text keyboard>Создание формы: </Text> Форма в React может быть создана как
            функциональный компонент или классовый компонент.
          </li>
          <li>
            <Text keyboard>Управление данными формы: </Text> Данные формы можно управлять используя
            состояние (state) или ссылки (refs). В управляемых формах данные хранятся в состоянии, а
            в неуправляемых формах - в ссылках.
          </li>
          <li>
            <Text keyboard>Обработка событий формы: </Text> Когда пользователь вводит информацию в
            форму, события, такие как onChange, onSubmit и т.д., могут быть обработаны
            функцией-обработчиком.
          </li>
          <li>
            <Text keyboard>Отправка данных формы </Text> Когда форма заполнена и отправлена, данные
            могут быть отправлены на сервер для дальнейшей обработки.
          </li>
        </ol>
      </Paragraph>
      <Paragraph>
        Таким образом, React предлагает гибкую модель работы с формами, которая позволяет управлять
        и обрабатывать данные формы в реальном времени. Особенностью форм в React является то, что
        данные формы могут быть отражены в состоянии и в любой момент могут быть изменены, что
        позволяет создавать динамические формы, которые могут реагировать на ввод пользователя.
      </Paragraph>

      <Title level={3}>Что такое неуправляемая форма в React? </Title>
      <Paragraph>
        <Text keyboard>Неуправляемые форма </Text> – это форма, где значение введенных полей
        хранится непосредственно в DOM, и оно может быть изменено только через саму форму, например,
        пользователем.
      </Paragraph>
      <Paragraph>
        Этот тип форм менее популярен в React, так как все элементы управления внутри формы не будут
        отслеживаться в контексте React и могут вызывать проблемы с согласованностью данных.
      </Paragraph>
      <Paragraph>
        <Text keyboard>
          В целом манипулировать DOM деревом не рекомендуется, но бывает, что это необходимо.
        </Text>
      </Paragraph>

      <Title level={4}>Пример неуправляемой формы </Title>
      <Paragraph>
        Используя хук useRef создается ссылка на DOM элемент. У данной ссылки есть одно единственное
        поле current из которого мы достаем наше value.
      </Paragraph>
      <CodeBlock code={form.unControlledFormExample} />
      <Paragraph>
        Работа данной формы пошагово:
        <ol>
          <li>
            Импортируется <Text keyboard>хук useRef </Text> из библиотеки React.
          </li>
          <li>
            Создается функциональный компонент <Text keyboard>UncontrolledForm</Text> .
          </li>
          <li>
            Внутри компонента используется хук useRef
            <Text keyboard>для создания ссылки на элемент input</Text>.
          </li>
          <li>
            Создается <Text keyboard>функция handleSubmit</Text> для обработки{' '}
            <Text keyboard>события onSubmit</Text>
            формы. Эта функция предотвращает стандартную отправку формы и выводит в консоль значение
            элемента input.
          </li>
          <li>
            Возвращается форма, которая включает в себя элемент input с ссылкой, указанной в ref, и
            кнопку Submit.
          </li>
        </ol>
      </Paragraph>

      <Title level={3}>Что такое управляемая форма в React? </Title>
      <Paragraph>
        <Text keyboard>Управляемые форма </Text> – это форма, где значение введенных полей хранится
        в состоянии (state) компонента, и оно может быть изменено только через функции, определенные
        в компоненте.
      </Paragraph>
      <Paragraph>
        В целом, управляемые формы более предпочтительны в React, так как они дают больше контроля
        над данными внутри формы и позволяют легко следить за изменением значений.
      </Paragraph>

      <Title level={4}>Пример управляемой формы </Title>
      <Paragraph>
        Здесь, мы используем useState для хранения значения введенного в поле ввода. Функция
        handleChange обновляет это значение при каждом изменении. Функция handleSubmit выводит
        значение в консоль при отправке формы.
      </Paragraph>
      <CodeBlock code={form.controlledFormExample} />
      <Paragraph>
        Работа данной формы пошагово:
        <ol>
          <li>
            <Text keyboard>Объявляется состояние value</Text>, которое инициализируется пустой
            строкой, и <Text keyboard>функция setValue</Text>, которая позволяет изменять состояние
            value.
          </li>
          <li>
            Определяется <Text keyboard>функция handleSubmit</Text> , которая вызывается при
            отправке формы. Она{' '}
            <Text keyboard>
              предотвращает действие по умолчанию и выводит значение value в консоль.
            </Text>
          </li>
          <li>
            Определяется <Text keyboard>функция handleChange</Text>, которая
            <Text keyboard> вызывается при изменении текстового поля</Text>. Она вызывает setValue
            для{' '}
            <Text keyboard> обновления состояния value в соответствии с введенным значением.</Text>
          </li>
          <li>
            <Text keyboard>Форма рендерится</Text>с входным полем, которое привязано к состоянию
            value через атрибут value, и слушателем события onChange указывающим на handleChange.{' '}
            <Text keyboard>Кнопка submit</Text> вызывает handleSubmit при нажатии.
          </li>
        </ol>
      </Paragraph>

      <Title level={3}>Пример разных форм </Title>
      <CodeBlock code={form.otherForms} />

      <Title level={3}>Пример создания формы подписки </Title>
      <CodeBlock code={form.subscriptionForm} />
    </>
  );
};

export default Form;
