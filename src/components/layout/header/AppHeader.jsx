import { useState } from 'react';
import { Link } from 'react-router-dom';

import './AppHeader.scss';
import { Menu } from 'antd';
import { routes } from '../../../router/routes';

import { delLastAndEditProp } from '../../../utils/delLastAndEditProp/delLastAndEditProp';
import { addNewPropToArr } from '../../../utils/addNewPropToArr/addNewPropToArr';

const AppHeader = () => {
    const [current, setCurrent] = useState('');

    const arrWithMenuProp = addNewPropToArr(routes);
    const menuArray = delLastAndEditProp(arrWithMenuProp, 'Home', 0);

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
