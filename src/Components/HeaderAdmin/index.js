import './styles.scss';
import logo from '../../images/logo-site.svg'
import { Link } from 'react-router-dom';

function HeaderAdmin(props) {
    return (
        <header className='header-admin'>
            <div>
                <Link to='/'>
                    <img class="logo-image" src={logo} alt="Logo Music-Impact" />
                </Link>
            </div>
        </header>
    );
}

export default HeaderAdmin;
