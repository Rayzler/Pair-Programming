import { useLocation } from 'wouter';
import "./Login.css";

const Login = () => {
    const [, setLocation] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            setLocation('/');
        } else {
            alert('Correo electrónico o contraseña incorrectos');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Correo Electrónico:</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input type="password" name="password" required/>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;