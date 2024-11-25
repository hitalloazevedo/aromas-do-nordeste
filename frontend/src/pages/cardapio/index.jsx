import './style.css'
import CardPrato from '../../components/CardPrato';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import axios from 'axios';
import { useState, useEffect } from 'react';

const baseUrl = import.meta.env.VITE_API_URL

const Cardapio = () => {

    const [data, setData] = useState()
    
    const getPlates = async () => {
        axios.get(`${baseUrl}/cardapio`).then(response => {
            setData(response.data)
        })
    }
    
    useEffect(() => {
        async function a(){
            await getPlates()
        }
        a()
    }, [])

    return(
        <>
            <Header option={true}></Header>
            <div className='cardapio'>
                <h1>Cardápio</h1>
                <div className="container">
                    {data != undefined ? data.map((plate) => {
                        return <CardPrato key={plate.plate_name} nomePrato={plate.plate_name} imageUrl={plate.image_url} descricao={plate.plate_description}/>
                    }) : ''}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cardapio;