import React, { useState } from 'react';
import { Button, Modal } from 'react-bulma-components';
import FormProducto from './FormProducto';

const ModalProducto = (props) => {
    const { recargarProductos } = props;
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => setMostrarModal(true);
    const cerrarModal = () => {
        setMostrarModal(false)
        recargarProductos();
    }

    return (
        <div>
            <Button color='primary' onClick={abrirModal}>Agregar Producto</Button>
            <Modal show={mostrarModal} onClose={cerrarModal} >
                <Modal.Content>
                    <FormProducto cerrarModal={cerrarModal} />
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ModalProducto;