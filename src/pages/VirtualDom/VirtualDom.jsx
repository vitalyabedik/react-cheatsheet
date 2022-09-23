import { Typography, Divider } from 'antd';

const { Title, Text, Paragraph, Link } = Typography;

const VirtualDom = () => {
    return (
        <>
            <Title level={2}>Виртуальный DOM</Title>

            <Divider>Зачем нужен Виртуальный DOM? </Divider>
            <Paragraph>
                Для этого разберемся что такое обычный DOM и какие у него есть
                недостатки.
            </Paragraph>
            <Paragraph>
                <Text keyboard>DOM (Document Object Model)</Text> - в любом
                веб-приложении html документ представляется в виде дерева. В
                свою очередь обновление всего DOM - затратная операция.
            </Paragraph>
            <Paragraph>
                В React не требуется перерисовывать весь DOM благодаря Virtual
                DOM, который существует параллельно с реальным DOM
            </Paragraph>

            <Divider>Что такое Виртуальный DOM? </Divider>
            <Paragraph>
                <Text keyboard>Виртуальный DOM</Text> - это более легковесная
                копия DOM дерева в контексте браузера.
            </Paragraph>
        </>
    );
};

export default VirtualDom;
