import { useState } from 'react';
import { Link } from 'react-router-dom';

import './AppHeader.scss';
import { Menu } from 'antd';
import { routes } from '../../../router/routes';
import { delLastPropAndEditFirstProp } from '../../../utils/delLastPropAndEditFirstProp/delLastPropAndEditFirstProp';

const AppHeader = () => {
    const [current, setCurrent] = useState('');

    const menuArray = delLastPropAndEditFirstProp(routes, 'Home', 0);

    const menuItems = menuArray.map((item) => ({
        label: (
            <Link key={item.menu} to={item.path}>
                {item.menu}
            </Link>
        ),
    }));

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <>
            <header className='header'>
                <Menu
                    onClick={onClick}
                    defaultSelectedKeys={[current]}
                    items={menuItems}
                />
            </header>
        </>
    );
};

export default AppHeader;
