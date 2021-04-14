import React from 'react';
import { Card, Button, Content, Heading } from 'react-bulma-components';
import { FaCartArrowDown } from 'react-icons/fa';

const ProductoCard = (props) => {
    const { nombre, precio, imagen, categoria, descripcion } = props;
    return (
        <Card>
            <Card.Image size="4by3" src={imagen} />
            <Card.Content>
                <Heading size={4}>{nombre}</Heading>
                <Heading subtitle size={5}>{categoria}</Heading>

                <Heading subtitle size={6}>$ {precio}</Heading>

                <Content>
                    {descripcion}
                </Content>
            </Card.Content>
            <Card.Footer>
                <Card.Footer.Item renderAs="div" href="#No">
                    <Button color="link"><FaCartArrowDown />&nbsp; Agregar</Button>
                </Card.Footer.Item>

            </Card.Footer>

        </Card>
    )
}

export default ProductoCard;