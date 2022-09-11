import { NavLink, Link } from 'react-router-dom';

import './AppHeader.scss';
import { Menu } from 'antd';

import { routes } from '../../../router/routes';

const AppHeader = () => {
    const items = [
        { label: 'Home', key: 'Home' },
        { label: 'VirtualDom', key: 'VirtualDom' },
        { label: 'ComponentClass', key: 'ComponentClass' },
        { label: 'ComponentFunction', key: 'ComponentFunction' },
        // { label: 'PropsClass', key: 'PropsClass' },
        // { label: 'PropsFunction', key: 'PropsFunction' },
        // { label: 'StateClass', key: 'StateClass' },
        // { label: 'StateFunction', key: 'StateFunction' },
        // { label: 'Lifecycle', key: 'Lifecycle' },
        // { label: 'Events', key: 'Events' },
        // { label: 'Key', key: 'Key' },
        // { label: 'Refs', key: 'Refs' },
        // { label: 'Fragment', key: 'Fragment' },
        // { label: 'ReactMemo', key: 'ReactMemo' },
        // { label: 'UseMemo', key: 'UseMemo' },
        // { label: 'UseEffect', key: 'UseEffect' },
        // { label: 'UseContext', key: 'UseContext' },
        // { label: 'Form', key: 'Form' },
        // { label: 'Routing', key: 'Routing' },
        // { label: 'AsyncRequest', key: 'AsyncRequest' },
    ];

    return (
        <div>
            <div className='header'>
                {routes.map((item) => (
                    <div className='nav__items'>
                        <Link to={item.path}>{item.path}</Link>
                    </div>
                ))}
            </div>
            {/* <header className='header'>
                <Menu items={items} />
                {routes.map((link) => (
                    <Link to={link.label}>{link.key}</Link>
                ))}
            </header> */}
        </div>
    );
};

export default AppHeader;
