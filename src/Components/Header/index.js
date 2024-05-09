import './styles.scss';
import logo from '../../images/logo-site.svg'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className='header-default'>
            <div>
                <Link to='/'>
                    <img class="logo-image" src={logo} alt="Logo Music-Impact" />
                </Link>
                {!props.noRoutes && (
                    <nav class="menu-items">
                        <Link to='/events' class="menu-item">Eventos</Link>
                        <Link to='/courses' class="menu-item">Aulas</Link>
                        <Link to='/plans' class="menu-item">Planos</Link>
                        <Link to='/login' class="menu-item">Area de Admin</Link>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
