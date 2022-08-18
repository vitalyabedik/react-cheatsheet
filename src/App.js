import { Routes, Route, Link } from 'react-router-dom';

import './App.scss';
import 'antd/dist/antd';

import { Typography } from 'antd';
import FunctionComponent from './pages/Component/FunctionComponent/FunctionComponent';
import FunctionState from './pages/State/FunctionState/FunctionState';

const { Title } = Typography;

function App() {
    return (
        <>
            <header className='header'>
                <Link to='/'>Home</Link>
                <Link to='/functionComponent'>Function Component</Link>
                <Link to='/functionState'>Function State</Link>
            </header>

            <Routes>
                <Route path='/'></Route>
                <Route
                    path='/functionComponent'
                    element={<FunctionComponent />}
                ></Route>
                <Route
                    path='/functionState'
                    element={<FunctionState />}
                ></Route>
            </Routes>

            <div>
                <Title level={1}>React Cheat Sheet</Title>
            </div>
        </>
    );
}

export default App;
