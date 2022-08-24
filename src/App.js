import { Routes, Route, Link } from 'react-router-dom';

import './App.scss';
import 'antd/dist/antd';

import { Typography } from 'antd';
import { ComponentClass, ComponentFunction } from './pages/index';
import Code from './Code';

const { Title } = Typography;

function App() {
    return (
        <>
            <div>
                <Title level={1}>React Cheat Sheet App</Title>
                <Title level={2}>React Cheat Sheet App</Title>
            </div>
            <header className='header'>
                <Link to='/'>Home</Link>
                <Link to='/ComponentClass'>Class Component</Link>
                <Link to='/ComponentFunction'>Function Component</Link>
            </header>

            <Code />

            <Routes>
                <Route path='/'></Route>
                <Route
                    path='/ComponentClass'
                    element={<ComponentClass />}
                ></Route>
                <Route
                    path='/ComponentFunction'
                    element={<ComponentFunction />}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
