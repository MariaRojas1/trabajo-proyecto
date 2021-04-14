import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Columns, Heading } from 'react-bulma-components';
import ProductoCard from '../Productos/ProductoCard';


const ListProducts = () => {

    const [datos, setDatos] = useState([]);

    const obtenerProductos = async () => {
        try {
            const response = await axios.get('http://localhost:3200/productos/ultimos');
            setDatos(response.data.resultados);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        obtenerProductos();
    }, [])

    return (
        <div >
            <Heading className="has-text-centered">
                Ultimos productos
        </Heading>
            <Columns>
                {
                    datos.map((producto) => <Columns.Column size={4}>
                        <ProductoCard key={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            imagen={producto.imagen}
                        />
                    </Columns.Column>

                    )
                }

            </Columns>
        </div>

    )
}

export default ListProducts;