import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    return (
        <div className="user-list-container">
            <h2>Lista de Registrados</h2>
            {users.length === 0 ? (
                <p>No hay usuarios registrados.</p>
            ) : (
                <ul className="user-list">
                    {users.map((user, index) => (
                        <li key={index} className="user-item">
                            <strong>Nombre:</strong> {user.nombre} {user.apellidos} <br />
                            <strong>Correo Electrónico:</strong> {user.email} <br />
                            <strong>Fecha de Nacimiento:</strong> {user.fechaNacimiento} <br />
                            <strong>Sexo:</strong> {user.sexo}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
