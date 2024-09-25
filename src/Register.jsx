import { useState } from 'react';
import './Register.css';
import {useLocation} from "wouter";

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        fechaNacimiento: '',
        sexo: '',
        email: '',
        password: '',
    });

    const [, setLocation] = useLocation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));
        setLocation('/');
    };

    return (
        <div className="register-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Apellidos:</label>
                    <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Fecha de Nacimiento:</label>
                    <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Sexo:</label>
                    <select name="sexo" value={formData.sexo} onChange={handleChange} required>
                        <option value="">Seleccionar</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Correo Electrónico:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
