import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet></Outlet>
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
