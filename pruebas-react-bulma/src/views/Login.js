import React, { useState } from 'react';
import '../styles/Login.css';
import { Section, Form, Button } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Input, Field, Control, Label } = Form;

const Login = () => {

    const [form, setForm] = useState({
        correo: '',
        contrasena: ''
    });


    const changeForm = (campo, valor) => {
        setForm({ ...form, [campo]: valor });
    }

    const enviar = () => {
        if (form.correo && form.contrasena) {
            iniciarSesion();
        } else {
            alert("LLENE TODO EL FORMULARIO");
        }
    }

    const iniciarSesion = async () => {
        try {
            axios.post('http://localhost:3200/usuarios/login', form)
                .then(function (response) {

                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="login-page">
            <div className="form">
                <Section className="login-form">
                    <Field>
                        <Label>Correo Electronico</Label>
                        <Control>
                            <Input placeholder="Correo electronico" value={form.correo} onChange={(event) => { changeForm('correo', event.target.value) }} />
                        </Control>
                    </Field>
                    <Field>
                        <Label>Contrasena</Label>
                        <Control>
                            <Input type="password" placeholder="Contrasena" value={form.contrasena} onChange={(event) => { changeForm('contrasena', event.target.value) }} />
                        </Control>
                    </Field>
                    <br />

                    <Button onClick={enviar}>Iniciar Sesion</Button>
                    <p className="message">No esta registrado? <Link to="/registro">Cree una cuenta</Link></p>
                </Section>
            </div>
        </div>
    )
}

export default Login;