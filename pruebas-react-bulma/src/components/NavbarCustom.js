import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import logo from '../assets/logo.png';
import '../styles/NavbarCustom.css'
import { FaHome, FaListUl, FaPhoneAlt, FaRegListAlt, FaShoppingBag, FaShoppingCart, FaSignOutAlt, FaUser } from 'react-icons/fa';

const NavbarCustom = () => {

    return (

        <Navbar>
            <Navbar.Brand>
                <Navbar.Item renderAs="div">
                    <img src={logo} alt="logo de la empresa" />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu >
                <Navbar.Container>
                    <Navbar.Item renderAs="div" >
                        <Link to="/" className="navbar-item"> <FaHome />&nbsp;Inicio</Link>
                    </Navbar.Item>

                    <Navbar.Item renderAs="div">
                        <Link to="/categorias" className="navbar-item"><FaListUl />&nbsp; Categorias</Link>
                    </Navbar.Item>

                    <Navbar.Item renderAs="div">
                        <Link to="/productos" className="navbar-item"><FaShoppingBag />&nbsp;Productos</Link>
                    </Navbar.Item>




                    <Navbar.Item renderAs="div">
                        <Link to="/about" className="navbar-item"><FaPhoneAlt />&nbsp;Contactenos</Link>
                    </Navbar.Item>





                </Navbar.Container>

                <Navbar.Container position="end">
                    <Navbar.Item renderAs="div">
                        <Link to="/login" className="navbar-item"><FaUser />&nbsp;Iniciar Sesion</Link>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
}

export default NavbarCustom;