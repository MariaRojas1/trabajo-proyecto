import React from 'react';
import { Card, Heading } from 'react-bulma-components';

const CategoriaCard = (props) => {
    const { nombre, imagen, } = props;
    return (
        <Card>
            <Card.Image size="4by3" src={imagen} />
            <Card.Content>
                <Heading size={4} className="has-text-centered">{nombre}</Heading>
            </Card.Content>

        </Card>
    )
}

export default CategoriaCard;