import Button from "../Button";
import './style.css'
import './media.css'
import { Link } from "react-router-dom";

const environment = import.meta.env.VITE_ENVIRONMENT

const Footer = ({option}) => {
    return (
        <div id="footer">
        <p>E aí, já decidiu?</p>

        {option ? <>
            <Button value='Faça aqui seu pedido' link='#' width={250} color={1}/>
            <p>Ou</p>
            <Link to={'/aromas-do-nordeste-frontend/cardapio'}>Acessar Cardápio</Link>
        </>
        :
            <Button value='Faça aqui seu pedido' link='#' width={250} color={1}/>
        }
        { environment == 'dev' ? 
        <Link to={'/aromas-do-nordeste-frontend/dashboard'}>Dashboard</Link>
        :
        ''
        }
        </div>
    )
}

export default Footer;