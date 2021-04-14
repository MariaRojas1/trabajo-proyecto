import React, { useState } from 'react';
import { Button, Modal } from 'react-bulma-components';
import FormCategoria from './FormCategoria';

const ModalCategoria = (props) => {
    const { recargar } = props;
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => setMostrarModal(true);
    const cerrarModal = () => {
        setMostrarModal(false);
        recargar();
    }
    return (
        <div>
            <Button color='primary' onClick={abrirModal}>Agregar Categoria</Button>
            <Modal show={mostrarModal} onClose={cerrarModal} >
                <Modal.Content>
                    <FormCategoria cerrarModal={cerrarModal} />
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ModalCategoria;