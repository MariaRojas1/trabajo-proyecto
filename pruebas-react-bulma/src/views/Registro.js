import React, { useState } from 'react';
import '../styles/Login.css';
import { Section, Form, Button } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const { Input, Field, Control, Label } = Form;

const Registro = () => {

    const [form, setForm] = useState({
        correo: '',
        contrasena: '',
        nombre: '',
        apellidos: ''
    });

    const changeForm = (campo, valor) => {
        setForm({ ...form, [campo]: valor });
    }

    const enviar = () => {
        if (form.correo && form.contrasena && form.nombre && form.apellidos) {
            registrarse();
        } else {
            alert("LLENE TODO EL FORMULARIO");
        }
    }

    const registrarse = async () => {
        try {
            axios.post('http://localhost:3200/usuarios/', form)
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
                        <Label>Nombres </Label>
                        <Control>
                            <Input placeholder="Nombres" value={form.nombre} onChange={(event) => { changeForm('nombre', event.target.value) }} />
                        </Control>
                    </Field>
                    <Field>
                        <Label>Apellidos </Label>
                        <Control>
                            <Input placeholder="Apellidos" value={form.apellidos} onChange={(event) => { changeForm('apellidos', event.target.value) }} />
                        </Control>
                    </Field>
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
                    <Button onClick={enviar}>Registrarse</Button>
                    <p className="message">Esta registrado? <Link to="/login">Inicie Sesion</Link></p>
                </Section>
            </div>
        </div>
    )
}

export default Registro;