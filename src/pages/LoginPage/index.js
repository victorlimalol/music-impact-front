import './styles.css';
import logo from '../../images/logo-site.svg'
import user from '../../images/user-icon.svg'

function LoginPage() {
    return (
        <div>
            <header>
                <img src={logo} alt="Logo Music-Impact" />
            </header>
            <div class="container">
                <div class="form">
                    <img src={user} alt="" />
                    <div class="form-action">
                        <h2>Login</h2>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <div class="button-area">
                            <button>Entrar</button>
                            <a href="#">Esqueceu a senha?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
