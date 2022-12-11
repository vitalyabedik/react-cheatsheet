import { Typography, Divider } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { stateFunctional } from '../../data';

const { Title, Text, Paragraph } = Typography;

const FunctionState = () => {
    return (
        <>
            <Title level={2}>State. Функциональные компоненты</Title>

            <Divider>Что нужно для работы с состоянием?</Divider>
            <Paragraph>
                Чтобы использовать тот же самый функционал, который был в
                классовых компонентах необходимо использовать хуки.
            </Paragraph>
            <Paragraph>
                <Text keyboard>Хуки </Text> - написанные заранее методы, которые
                мы можем использовать.
            </Paragraph>

            <Divider>Как работать с состоянием?</Divider>
            <Paragraph>
                Для работы с состояниями нужно обязательно импортировать
                useState:
            </Paragraph>
            <CodeBlock code={stateFunctional.import} />
            <Paragraph>
                Чтобы работать с useState необходимо создать новую пару
                переменных:
            </Paragraph>
            <CodeBlock code={stateFunctional.vars} />

            <Divider>Что такое useState?</Divider>
            <Paragraph>
                <Text keyboard>useState </Text> - функция, которую мы вызываем и
                результатом которой будет возвращенный массив, который мы должны
                разобрать через ДП.
            </Paragraph>

            <Divider>Что из себя представляет state?</Divider>
            <Paragraph>
                <Text keyboard>state </Text> - представляет собой массив
                состоящий из 2ух элементов:
                <ol>
                    <li>
                        <Text keyboard>Первый элемент</Text> - само значение,
                        которое мы объявили
                    </li>
                    <li>
                        <Text keyboard>Второй элемент</Text> - функция,
                        необходимая для изменения состояния
                    </li>
                </ol>
            </Paragraph>
            <Paragraph>
                Т.к. мы знаем что useState возвращает массив из двух объектов,
                то можно сделать ДП и сразу получить состояние и функцию.
            </Paragraph>

            <Divider>Как создать state?</Divider>
            <Paragraph>
                Для этого заводим переменную и производим ДП массива, в котором
                первым элементом будет count (наша переменная), а вторым -
                функция, которая изменяет этот state - setState
            </Paragraph>
            <CodeBlock code={stateFunctional.state} />
            <Paragraph>
                Обычно функцию называют следующим образом: сеттер (set) + имя
                state (стейта), тогда запись примет вид:
            </Paragraph>
            <CodeBlock code={stateFunctional.count} />

            <Divider>Как задать начальное значение state?</Divider>
            <CodeBlock code={stateFunctional.startValue} />

            <Divider>Как вывести state в разметку?</Divider>
            <CodeBlock code={stateFunctional.render} />

            <Divider>Пример с кликером</Divider>
            <CodeBlock code={stateFunctional.counter} />
        </>
    );
};

export default FunctionState;
