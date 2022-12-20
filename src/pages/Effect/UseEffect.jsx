import { Typography, Divider } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { useEffect } from '../../data';

const { Title, Text, Paragraph } = Typography;

const Effect = () => {
    return (
        <>
            <Title level={2}>Жизненный цикл. Функциональные компоненты</Title>

            <Divider>
                Как следить за стадиями ЖЦ в функциональных компонентах?
            </Divider>
            <Paragraph>
                Чтобы следить за стадиями ЖЦ в функциональных компонентах
                существует хук <Text keyboard>useEffect</Text>, который мы можем
                использовать в проекте столько раз, сколько нам это необходимо.
                Один хук следит за одними данными, другой за изменениями других
                данных, третий отрабатывает только при первичной отрисовке.
            </Paragraph>

            <Divider>Что позволяет делать useEffect?</Divider>
            <Paragraph>
                <Text keyboard>useEffect</Text> - хук, который содержит в себе
                функциональность 3ех методов ЖЦ (componentDidMount(),
                componentDidUpdate(), componentWillUnmount()).
            </Paragraph>
            <Paragraph>
                <Text keyboard>useEffect - является асинхронной операцией</Text>
            </Paragraph>
            <Paragraph>
                <Text keyboard>Можно создавать несколько useEffect</Text>
            </Paragraph>
            <Paragraph>
                Любая функция, которую мы передадим в useEffect будет вызываться
                каждый раз при обновлении приложения (props, state), чтобы
                избежать этого мы должны передать зависимости, которые
                передаются 2ым параметром
            </Paragraph>
            <Paragraph>
                <Text keyboard>
                    Аналогично useState, можем использовать useEffect
                    неограниченное количество раз.
                </Text>
            </Paragraph>
            <Paragraph>
                <Text keyboard>
                    useEffect обычно пишут перед return и не задают ничего по
                    умолчанию, просто вызывают.
                </Text>
            </Paragraph>

            <Divider>Какие параметры у useEffect?</Divider>
            <Paragraph>
                useEffect имеет следующие параметры:
                <ol>
                    <li>
                        <Text keyboard>Callback-функция </Text> - действия,
                        которые мы хотим сделать в какой-то из моментов ЖЦ
                    </li>
                    <li>
                        <Text keyboard>Массив зависимостей </Text> - набор
                        зависимостей, который указывает за какой зависимостью
                        следить. Он должен быть всегда, иначе наш компонент
                        будет избыточное количество раз ререндериться.
                    </li>
                </ol>
            </Paragraph>
            <CodeBlock code={useEffect.basic} />

            <Divider>Реализация componentDidMount + componentDidUpdate</Divider>
            <Paragraph>
                Для этого достаточно передать только первый параметр , без
                передачи второго параметра:
            </Paragraph>
            <CodeBlock code={useEffect.onlyFirstParam} />
            <Paragraph>
                Данный метод отработает как 2 метода в одном месте
                (componentDidMount(), componentDidUpdate(prevProps, prevState)),
                изначально он отработает как componentDidMount(), если указать
                за какой зависимостью следить (массив зависимостей), то
                отработает componentDidUpdate(prevProps, prevState), при нажатии
                на кнопку будет вызываться DidUpdate.
            </Paragraph>
            <Paragraph>
                <Text keyboard>
                    Без массива зависимостей, при каждом клике будем видеть не
                    предсказуемое количество наших элементов.
                </Text>{' '}
            </Paragraph>

            <Divider>Реализация componentDidMount</Divider>
            <Paragraph>
                <Text keyboard>Отслеживание стадии монтирования</Text> - нужно
                чтобы массив зависимостей был пустым, тогда callback отработает
                1 раз.
            </Paragraph>
            <Paragraph>
                Для этого нужно передать 2 параметра( callback-функцию + пустой
                массив зависимостей):
            </Paragraph>
            <CodeBlock code={useEffect.oneRender} />
            <Paragraph>
                <Text keyboard>Отработает DidMount </Text>
            </Paragraph>

            <Divider>Реализация componentDidUpdate</Divider>
            <Paragraph>
                <Text keyboard>Отслеживание стадии обновления </Text> - нужно
                добавить в массив зависимостей, то за чем будем следить.
            </Paragraph>
            <Paragraph>
                Для этого нужно передать 2 параметра( callback-функцию +
                параметр в массив зависимостей):
            </Paragraph>
            <CodeBlock code={useEffect.update} />
            <Paragraph>
                <Text keyboard>Отработает DidUpdate </Text>
            </Paragraph>
            <Paragraph>
                <Text keyboard>
                    Наш useEffect выполнится при монтировании компонента +
                    каждый раз когда изменится заданная зависимость, то наше
                    приложение контролируемо обновляется, выполняя все что мы
                    передадим в функцию.
                </Text>
            </Paragraph>

            <Divider>Реализация componentWillUnmount</Divider>
            <Paragraph>
                <Text keyboard>Отслеживание стадии размонтирования</Text> - если
                callback возвращает какую-либо функцию, то эта функция будет
                вызвана в момент размонтирования компонента
            </Paragraph>
            <Paragraph>Для этого нужно вернуть функцию:</Paragraph>
            <CodeBlock code={useEffect.unMount} />
            <Paragraph>
                <Text keyboard>Отработает WillUnmount </Text>
            </Paragraph>
            <Paragraph>
                <Text keyboard>
                    Если у нас есть подписки на что-то, таймеры, интервалы,
                    которые нам нужно очистить, то вызываем данную функцию, тем
                    самым очищая их.
                </Text>
            </Paragraph>
        </>
    );
};

export default Effect;
