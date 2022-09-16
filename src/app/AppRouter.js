import { Routes, Route } from 'react-router-dom';

import AppLayout from '../components/layout/AppLayout';
import { routes } from '../router/routes';

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    {routes.map((route) => (
                        <Route
                            index={route.index}
                            key={route.path}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;
