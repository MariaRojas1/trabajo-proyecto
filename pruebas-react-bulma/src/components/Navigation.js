import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Section, Container } from 'react-bulma-components';
import Home from "../views/Home";
import Productos from "../views/Productos";
import NavbarCustom from "./NavbarCustom";
import Categorias from "../views/Categorias";
import About from "../views/About";
import Login from "../views/Login";
import Registro from "../views/Registro";


const Navigation = () => {
    return (
        <Router>
            <>
                <NavbarCustom />
                <Section>
                    <Container>
                        <Switch>
                            <Route path="/productos" component={Productos} />
                            <Route path="/categorias" component={Categorias} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={Login} />
                            <Route path="/registro" component={Registro} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </Container>
                </Section>



            </>
        </Router>
    )
}

export default Navigation;