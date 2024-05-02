import './styles.css';
import logo from '../../images/logo-site.svg'

function Header() {
    return (
        <header class="header-container">
            <div class="header-content">
                <img src={logo} alt="Logo Music-Impact" />
                <nav class="menu-items">
                    <a class="menu-item">Eventos</a>
                    <a class="menu-item">Aulas</a>
                    <a class="menu-item">Planos</a>
                    <a class="menu-item">Area de Admin</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
