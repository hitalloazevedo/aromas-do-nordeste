import Button from "../Button";
import './style.css'

const CardPrato = ({ nomePrato, descricao, imageUrl, urlBotao}) =>{
    return(
        <div className="card">
            <div className="imageContainer">
                <img className="cardImage" src={imageUrl} alt={!imageUrl ? 'não foi possivel carregar a imagem' : 'foto'} />
            </div>
            <div className="cardContent">
                <h2>{nomePrato}</h2>
                <p>
                    {descricao}
                </p>
            </div>
            <div className="cardButton">
                <Button link={urlBotao} value={'Pedir'} width={200}/>
            </div>
        </div>
    )
}

export default CardPrato;