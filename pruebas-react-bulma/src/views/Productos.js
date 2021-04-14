import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Columns } from 'react-bulma-components';
import ModalProducto from '../components/Productos/ModalProducto';
import ProductoCard from '../components/Productos/ProductoCard';

const Productos = () => {

    const [datos, setDatos] = useState([]);

    const obtenerProductos = async () => {
        try {
            const response = await axios.get('http://localhost:3200/productos/');
            setDatos(response.data.resultados);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        obtenerProductos();
    }, [])

    return (
        <div>
            <Columns  >
                <Columns.Column size={12}>
                    <ModalProducto recargarProductos={obtenerProductos} />
                </Columns.Column>
                {
                    datos.map((producto) => <Columns.Column size={3}>
                        <ProductoCard key={producto.id + ""}
                            nombre={producto.nombre}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                            imagen={producto.imagen}
                            categoria={producto.categoria}

                        />
                    </Columns.Column>

                    )
                }

            </Columns>

        </div>
    )
}

export default Productos;