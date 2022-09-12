import { useState } from 'react';
import { Link } from 'react-router-dom';

import './AppHeader.scss';
import { Menu } from 'antd';

const AppHeader = () => {
    const [current, setCurrent] = useState('');

    const menuItems = [
        { label: <Link to='/'>Home</Link>, key: 'Home' },
        { label: <Link to='VirtualDom'>VirtualDom</Link>, key: 'VirtualDom' },
        {
            label: 'Component',
            children: [
                {
                    label: <Link to='ComponentClass'>Class</Link>,
                    key: 'ComponentClass',
                },
                {
                    label: <Link to='ComponentFunction'>Functional</Link>,
                    key: 'ComponentFunction',
                },
            ],
        },
        {
            label: 'Props',
            children: [
                {
                    label: <Link to='PropsClass'>Class</Link>,
                    key: 'PropsClass',
                },
                {
                    label: <Link to='PropsFunction'>Functional</Link>,
                    key: 'PropsFunction',
                },
            ],
        },
        {
            label: 'State',
            children: [
                {
                    label: <Link to='StateClass'>Class</Link>,
                    key: 'StateClass',
                },
                {
                    label: <Link to='StateFunction'>Functional</Link>,
                    key: 'StateFunction',
                },
            ],
        },
        { label: <Link to='Lifecycle'>Lifecycle</Link>, key: 'Lifecycle' },
        { label: <Link to='Events'>Events</Link>, key: 'Events' },
        { label: <Link to='Key'>Key</Link>, key: 'Key' },
        { label: <Link to='Refs'>Refs</Link>, key: 'Refs' },
        { label: <Link to='Fragment'>Fragment</Link>, key: 'Fragment' },
        {
            label: 'Memo',
            children: [
                {
                    label: <Link to='ReactMemo'>ReactMemo</Link>,
                    key: 'ReactMemo',
                },
                { label: <Link to='UseMemo'>useMemo</Link>, key: 'UseMemo' },
            ],
        },
        { label: <Link to='UseEffect'>useEffect</Link>, key: 'UseEffect' },
        { label: <Link to='UseContext'>useContext</Link>, key: 'UseContext' },
        { label: <Link to='Form'>Form</Link>, key: 'Form' },
        { label: <Link to='Routing'>Routing</Link>, key: 'Routing' },
        {
            label: <Link to='AsyncRequest'>AsyncRequest</Link>,
            key: 'AsyncRequest',
        },
    ];

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
