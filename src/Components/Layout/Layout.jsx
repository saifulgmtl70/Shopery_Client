
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <main className=''>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    );
};

export default Layout;