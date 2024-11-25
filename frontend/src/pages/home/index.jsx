import './style.css'
import './media.css'
import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>
            <div id="home">
                <Header option={false}/>
                <div className="container">
                    <div className="welcome">
                        <h2>Bem-vindo</h2>
                        <h3>ao</h3>
                    </div>
                    <h1>AROMAS DO NORDESTE</h1>
                    <Button value='Explorar' link='/aromas-do-nordeste-frontend/cardapio' width={150} color={1}/>
                </div>
            </div>
            <div id="aboutus">
                <div className='title'>
                    <h2>Sobre nós</h2>
                </div>
                <div className='content'>
                    <p>
                    Bem-vindo ao Aromas do Nordeste, onde a tradição e o sabor se encontram para proporcionar uma experiência gastronômica inesquecível. Nosso restaurante celebra a rica cultura e culinária do Nordeste brasileiro, trazendo à sua mesa os sabores autênticos e as receitas de família que passam de geração em geração.
                    No Aromas do Nordeste, você encontrará um ambiente acolhedor e autêntico, perfeito para reunir amigos e familiares. Nossa equipe dedicada se orgulha em oferecer pratos preparados com ingredientes frescos e selecionados, sempre respeitando as tradições culinárias nordestinas.
                    Deixe-se levar pelo aroma irresistível do nosso cuscuz, a maciez da carne de sol e o sabor inigualável do acarajé. Cada prato é uma homenagem à diversidade e riqueza cultural do Nordeste, preparado com carinho e dedicação para proporcionar uma verdadeira viagem gastronômica.
                    Venha nos visitar e descubra por que o Aromas do Nordeste é o lugar ideal para quem busca uma refeição deliciosa e uma experiência cultural autêntica. Aqui, cada mordida é uma celebração do nosso querido Nordeste.
                    </p>
                </div>
            </div>
            <Footer option={true}/>
        </>
    )
}

export default Home;