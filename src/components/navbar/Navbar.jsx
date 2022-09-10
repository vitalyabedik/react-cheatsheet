import { routes } from '../../router/routes';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {' '}
            <header className='header'>
                {routes.map((link) => (
                    <Link to={link.path}>'123'{link.element}</Link>
                ))}
            </header>
        </div>
    );
};

export default Navbar;
