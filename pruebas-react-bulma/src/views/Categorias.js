import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Columns } from 'react-bulma-components';
import CategoriaCard from '../components/Categorias/CategoriaCard';
import ModalCategoria from '../components/Categorias/ModalCategoria';

const Categorias = () => {

    const [datos, setDatos] = useState([]);

    const obtenerCategorias = async () => {
        try {
            const response = await axios.get('http://localhost:3200/categorias/');
            setDatos(response.data.resultados);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])

    return (
        <div>
            <Columns  >
                <Columns.Column size={12}>
                    <ModalCategoria recargar={obtenerCategorias} />
                </Columns.Column>
                {
                    datos.map((categoria) => {
                        return (
                            <Columns.Column size={3}>
                                <CategoriaCard key={categoria.id + ""}
                                    nombre={categoria.nombre}
                                    imagen={categoria.imagen}

                                />
                            </Columns.Column>
                        )
                    })
                }



            </Columns>

        </div>
    )
}

export default Categorias;