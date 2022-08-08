import {Outlet} from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logo.png';

function Layout(props) {
    return (
        <>
            <header>
                <img src={Logo} alt="React Logo" />
                <h2>ReactChat</h2>
            </header>

            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Layout;