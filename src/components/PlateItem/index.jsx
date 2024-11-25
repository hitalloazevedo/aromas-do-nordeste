import axios from 'axios'
import './style.css'
import { Link } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_API_URL

const PlateItem = ({id, imageUrl, name, setData}) => {

    const deletePlate = (e) => {
        e.preventDefault()
        axios.delete(`${baseUrl}/cardapio/${id}`)
        setData(data => data.filter((plate) => plate.id !== id))
    }

    return (
        <div className="item">
        <img className='plateImage' src={imageUrl} alt="imagem" />
        <div className="infos">
            <p>id: {id}</p>
            <p className='plateName'>{name}</p>
        </div>

        <div className="buttons">
            <Link className='btn Editar' to={`/aromas-do-nordeste-frontend/dashboard/edit/${id}`}>Editar</Link>
            <a id='btnDeletar' className='btn Deletar' onClick={deletePlate}>Deletar</a>
        </div>
    </div>
    )
}

export default PlateItem