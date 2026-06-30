import "./Login.css"
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Form, useNavigate } from "react-router-dom";

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(formData.email, formData.password);
            console.log("Login exitoso");
            navigate("/admin", { replace: true });
        } catch (error) {
            console.error(error);
            alert("Error al inciar sesion")
        }

    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="carga-container">
                <h2>Iniciar Sesión</h2>

                <div className="items-container">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="items-container">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="div-button">
                    <button
                        className="btn"
                        type="submit">
                        Login
                    </button>
                </div>
            </div>
        </form>
    );

};
