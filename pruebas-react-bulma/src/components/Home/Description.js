import React from 'react';
import { Columns, Container } from 'react-bulma-components';
import { FaTruck, FaCartPlus, FaStar } from "react-icons/fa";


const Descripcion = () => {
    return (
        <Columns>
            <Columns.Column>
                <Columns>
                    <Columns.Column size={3}>
                        <Container><FaTruck className="icon is-large" color="#DA007F" /></Container>
                    </Columns.Column>

                    <Columns.Column>
                        <h4>Envíos Rápidos & Seguros</h4>
                        <p> Hasta la puerta de tu casa rápido y sin inconvenientes gracias a Servientrega, podras rastrear tu envió gratis.</p>
                    </Columns.Column>
                </Columns>

            </Columns.Column>
            <Columns.Column>
                <Columns>
                    <Columns.Column size={3}>
                        <Container><FaCartPlus size={50} color="#DA007F" /></Container>
                    </Columns.Column>
                    <Columns.Column>
                        <h4>Fácil y Seguro</h4>
                        <p>Comprar maquillaje online barato con pocos clics.</p>
                    </Columns.Column>
                </Columns>

            </Columns.Column>
            <Columns.Column>
                <Columns>
                    <Columns.Column size={3}>
                        <Container><FaStar size={50} color="#DA007F" /></Container>
                    </Columns.Column>
                    <Columns.Column>
                        <h4>Excelente Calidad</h4>
                        <p>100% Productos originales de calidad AAA. Elija su Maquillaje preferido.</p>
                    </Columns.Column>
                </Columns>

            </Columns.Column>
        </Columns>
    )
}

export default Descripcion;