import { Routes, Route } from 'react-router-dom';

import AppLayout from '../components/UI/layout/AppLayout';
import { Home, NotFound404 } from '../pages';
import { routes } from '../router/routes';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AppLayout />}>
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
