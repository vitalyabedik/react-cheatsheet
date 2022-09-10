import Layout from '../components/layout/Layout';

import { Routes, Route } from 'react-router-dom';
import { routes } from '../router/routes';
import { Home, NotFound404 } from '../pages';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    {routes.map((route) => (
                        <Route path={route.path} element={<route.element />} />
                    ))}
                    <Route path='*' element={<NotFound404 />} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;
