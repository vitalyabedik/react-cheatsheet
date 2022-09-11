import { Outlet } from 'react-router-dom';

import './AppLayout.scss';
import { Layout } from 'antd';
import { Typography } from 'antd';

import AppHeader from '../header/AppHeader';
import AppFooter from '../footer/AppFooter';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const AppLayout = () => {
    return (
        <>
            <Layout>
                <Sider>
                    <AppHeader />
                </Sider>
                <Layout className='layout'>
                    <Header className='layout__header'>
                        <Title level={1}>React Cheat Sheet App</Title>
                    </Header>
                    <Content className='layout__content'>
                        <Outlet />
                    </Content>
                    <Footer className='footer'>
                        <AppFooter />
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};

export default AppLayout;
