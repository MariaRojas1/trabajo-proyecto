import React, { useState } from 'react';
import { Section, Heading, Form, Button } from 'react-bulma-components';
import axios from 'axios';
const { Input, Field, Control, Label } = Form;

const FormCategoria = (props) => {
    const { cerrarModal } = props;
    const [form, setForm] = useState({
        nombre: '',
        imagen: ''
    });

    const changeForm = (campo, valor) => {
        setForm({ ...form, [campo]: valor });
    }


    const enviar = () => {
        if (form.imagen && form.nombre) {
            guardarCategoria();
        } else {
            alert("LLENE TODO EL FORMULARIO");
        }
    }

    const guardarCategoria = async () => {
        try {
            axios.post('http://localhost:3200/categorias', form)
                .then(function (response) {
                    console.log(response);
                    cerrarModal();
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Section style={{ backgroundColor: 'white' }}>
            <Heading>Nueva Categoria</Heading>
            <Field>
                <Label>Nombre</Label>
                <Control>
                    <Input onChange={(event) => { changeForm('nombre', event.target.value) }} placeholder="Nombre" value={form.nombre} />
                </Control>
            </Field>
            <Field>
                <Label>Imagen</Label>
                <Control>
                    <Input onChange={(event) => { changeForm('imagen', event.target.value) }} placeholder="Ingrese una URL" value={form.imagen} />
                </Control>
            </Field>
            <Field kind="group">
                <Control>
                    <Button type="primary" onClick={enviar}>Enviar</Button>
                </Control>

            </Field>
        </Section>

    )
}

export default FormCategoria;