import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Section, Heading, Form, Button } from 'react-bulma-components';
import Select from 'react-select';
const { Input, Field, Control, Label, Textarea } = Form;
const FormProducto = (props) => {
    const { cerrarModal } = props;
    const [form, setForm] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: '',
        id_categoria: ''
    });

    const [listaCategorias, setListCategorias] = useState([]);

    const changeForm = (campo, valor) => {
        setForm({ ...form, [campo]: valor });
    }


    const enviar = () => {
        if (form.nombre && form.descripcion && form.precio && form.id_categoria && form.imagen) {
            guardar();
        } else {
            alert("LLENE TODO EL FORMULARIO");
        }
    }

    const guardar = async () => {
        try {
            axios.post('http://localhost:3200/productos', form)
                .then(function (response) {
                    cerrarModal();
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.error(error);
        }
    }

    const obtenerCategorias = async () => {
        try {
            const response = await axios.get('http://localhost:3200/categorias');
            setListCategorias(response.data.resultados.map((tipo) => {
                return {
                    value: tipo.id,
                    label: tipo.nombre
                }
            }));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])

    return (
        <Section style={{ backgroundColor: 'white' }}>
            <Heading>Nuevo Producto</Heading>
            <Field>
                <Label>Nombre</Label>
                <Control>
                    <Input onChange={(event) => { changeForm('nombre', event.target.value) }} placeholder="Nombre" value={form.nombre} />
                </Control>
            </Field>
            <Field>
                <Label>Categoria</Label>
                <Control>
                    <Select
                        defaultValue={form.id_categoria}
                        onChange={(selected) => changeForm('id_categoria', selected.value)}
                        options={listaCategorias}
                        placeholder="Seleccione una categoria"
                    />
                </Control>
            </Field>
            <Field>
                <Label>Descripción</Label>
                <Control>
                    <Textarea onChange={(event) => { changeForm('descripcion', event.target.value) }} placeholder="Descripción" value={form.descripcion} />
                </Control>
            </Field>
            <Field>
                <Label>Precio</Label>
                <Control>
                    <Input type="number" onChange={(event) => { changeForm('precio', event.target.value) }} placeholder="Descripción" value={form.precio} />
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

export default FormProducto;