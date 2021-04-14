import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Heading, Form, Card, Button } from 'react-bulma-components';
import Select from 'react-select';

const { Input, Field, Control, Label, Textarea } = Form;
const FormAbout = () => {

    const [form, setForm] = useState({
        nombre: '',
        correo: '',
        descripcion: '',
        id_tipo_recomendacion: null
    });

    const [listaTiposRecomendaciones, setListTiposRecomendaciones] = useState([]);

    const changeForm = (campo, valor) => {
        setForm({ ...form, [campo]: valor });
    }


    const enviar = () => {
        if (form.correo && form.nombre && form.descripcion && form.id_tipo_recomendacion) {
            guardar();
        } else {
            alert("LLENE TODO EL FORMULARIO");
        }
    }

    const guardar = async () => {
        try {
            axios.post('http://localhost:3200/recomendaciones', form)
                .then(function (response) {
                    alert("Mensaje enviado");
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.error(error);
        }
    }

    const obtenerTiposRecomendaciones = async () => {
        try {
            const response = await axios.get('http://localhost:3200/tiposRecomendaciones');
            console.log(response);

            setListTiposRecomendaciones(response.data.resultados.map((tipo) => {
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
        obtenerTiposRecomendaciones();
    }, [])

    return (

        <Card>
            <Card.Content>
                <Heading>Contactenos</Heading>
                <Field>
                    <Label>Nombre</Label>
                    <Control>
                        <Input onChange={(event) => { changeForm('nombre', event.target.value) }} placeholder="Nombre" value={form.nombre} />
                    </Control>
                </Field>
                <Field>
                    <Label>Correo Electronico</Label>
                    <Control>
                        <Input onChange={(event) => { changeForm('correo', event.target.value) }} placeholder="Correo electronico" value={form.correo} />
                    </Control>
                </Field>
                <Field>
                    <Label>Tipo de mensaje</Label>
                    <Control>
                        <Select
                            defaultValue={form.id_tipo_recomendacion}
                            onChange={(selected) => changeForm('id_tipo_recomendacion', selected.value)}
                            options={listaTiposRecomendaciones}
                            placeholder="Seleccione un tipo de mensaje"
                        />
                    </Control>
                </Field>
                <Field>
                    <Label>Descripción</Label>
                    <Control>
                        <Textarea onChange={(event) => { changeForm('descripcion', event.target.value) }} placeholder="Descripción" value={form.descripcion} />
                    </Control>
                </Field>
                <Field kind="group">
                    <Control>
                        <Button type="primary" onClick={enviar}>Enviar</Button>
                    </Control>
                </Field>
            </Card.Content>
        </Card>
    )
}

export default FormAbout;