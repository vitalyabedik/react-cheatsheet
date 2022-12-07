import { Typography, Divider, Space } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { propsClass } from '../../data';

const { Title, Text, Paragraph } = Typography;

const PropsClass = () => {
    return (
        <>
            <Title level={2}>Props. Классовые компоненты</Title>
            <Divider>Что такое props? Для чего он используется? </Divider>
            <Paragraph>
                <Text keyboard>Props (свойства)</Text> - это наши неизменяемые
                внешние(входные) параметры/данные, которыми мы делимся от
                компонента к компоненту.
            </Paragraph>
            <Paragraph>
                Будем воспринимать их как параметры (аналогичные у функций),
                которые мы куда-то передаем. Если пропсы компоненту не
                передаются, это не значит, что их нет, это лишь значит, что
                объект (props) - пустой. У классовых пропсы находятся по
                умолчанию в контексте.
            </Paragraph>

            <Divider>Как передать props?</Divider>
            <Paragraph>
                Будем передавать их как атрибуты: пишем наше имя и значение,
                которые мы хотим передать. Их передачу рекомендуется
                осуществлять в фигурных скобках.
            </Paragraph>
            <CodeBlock code={propsClass.transfer} />

            <Divider>Как обратиться к props?</Divider>
            <Paragraph>
                Для этого есть <Text keyboard>this.props</Text> - это по факту
                наш объект, того, что мы передали в наш компонент, который
                работает по принципу ключ-значение. Таких пропсов можно передать
                сколько угодно.
            </Paragraph>
            <CodeBlock code={propsClass.get} />

            <Divider>
                Что можно передавать в качестве параметра у props?
            </Divider>
            <Paragraph>
                В качестве параметра у props может быть все что угодно (объект,
                функция, массив, компонент)
            </Paragraph>

            <Divider>Передача нескольких props в компонент?</Divider>
            <Space direction='vertical'>
                <CodeBlock code={propsClass.multipleTransfer.parent} />
                <CodeBlock code={propsClass.multipleTransfer.child} />
            </Space>

            <Divider>Передача параметров компоненту?</Divider>
            <Paragraph>
                По сути мы просто передаем функцию нашему компоненту:
            </Paragraph>
            <CodeBlock code={propsClass.parameters} />
        </>
    );
};

export default PropsClass;
