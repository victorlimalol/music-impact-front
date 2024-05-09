import './styles.scss';
import logo from '../../images/logo-site.svg'
import user from '../../images/user-icon.svg'
import Header from '../../Components/Header';

function LoginPage() {
    return (
        <div>
            <Header noRoutes />
            <div class="container">
                <div class="form">
                    <img src={user} alt="" />
                    <div class="form-action">
                        <h2>Login</h2>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <div class="button-area">
                            <button className='entryButton'>Entrar</button>
                            <a href="#">Esqueceu a senha?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
