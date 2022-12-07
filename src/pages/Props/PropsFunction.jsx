import { Typography, Divider } from 'antd';

import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { propsFunctional } from '../../data';

const { Title, Text, Paragraph } = Typography;

const PropsFunction = () => {
    return (
        <>
            <Title level={2}>Props. Функциональные компоненты</Title>
            <Divider>Что позволяют делать props?</Divider>
            <Paragraph>
                Используя разные свойства мы сможем отрисовывать разные
                значения. Если необходимо передавать различные свойства в
                определенный компонент, то это делается по аналогии с атрибутами
                HTML.
            </Paragraph>
            <Paragraph>
                <Text keyboard>
                    Свойства внутри компонента менять запрещено. Воспринимаем их
                    как read only, т.к. это противоречит правилам React
                </Text>
            </Paragraph>

            <Divider>Как передаются props?</Divider>
            <Paragraph>
                В функциональных компонентах они передаются как параметр.
            </Paragraph>
            <CodeBlock code={propsFunctional.transfer} />

            <Divider>Какого типа данных props?</Divider>
            <Paragraph>Тип данных props - объект</Paragraph>

            <Divider>Как вывести props в разметку?</Divider>
            <Paragraph>
                Для этого добавляем jsx код в фигурных скобках {} и обращаемся к
                нашему свойству объекта <Text keyboard>объект.name</Text>:
            </Paragraph>
            <CodeBlock code={propsFunctional.render} />

            <Divider>Несколько props в разметке?</Divider>
            <CodeBlock code={propsFunctional.multipleRender} />

            <Divider>Как сократить запись при работе с props?</Divider>
            <Paragraph>
                Чтобы не писать постоянно <Text keyboard>props.</Text>{' '}
                существует деструктуризация:
            </Paragraph>
            <CodeBlock code={propsFunctional.destructure} />
            <Paragraph>Более короткая запись:</Paragraph>
            <CodeBlock code={propsFunctional.destructureShort} />
        </>
    );
};

export default PropsFunction;
