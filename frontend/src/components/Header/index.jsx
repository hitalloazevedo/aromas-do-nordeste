import { useEffect, useRef, useState } from 'react'
import './style.css'
import './media.css'
import { Link } from 'react-router-dom'

const Header = ({option}) => {
    const [estadoMenu, setEstadoMenu] = useState('');
    const [scrollState, setScrollState] = useState(0)
    const [viewportHeight, setViewPortHeight] = useState(window.visualViewport?.height || Number(window.visualViewport?.height))
    const [viewportWidth, setViewPortWidth] = useState(window.visualViewport?.width || Number(window.visualViewport?.width))
    const [estadoNav, setEstadoNav] = useState('deactivatedNav')

    
    window.addEventListener("DOMContentLoaded", () => {
      setViewPortHeight(Number(window.visualViewport?.height))
      setViewPortWidth(Number(window.visualViewport?.width))
      if (viewportWidth > 1000){
        setEstadoMenu('')
      } else {
        setEstadoMenu('deactivated')
      }
    })
    
    window.addEventListener('resize', () => {
      setViewPortWidth(Number(window.visualViewport?.width))
      if (viewportWidth > 1000){
        setEstadoMenu('')
      } else {
        setEstadoMenu('deactivated')
        setEstadoNav('deactivatedNav')
      }
    })

    useEffect(() => {
      if (viewportWidth < 1000){
        setEstadoMenu('deactivated')
      }
      if (option) {
        setScrollState(1)
      }
    }, [])
    
    window.addEventListener('scroll', () => {
      if (!option){
        if (window.scrollY > (viewportHeight - (viewportHeight * 0.18))){
          setScrollState(1)
        } else {
          setScrollState(0)
        }
      }
    })
    
    const menuIconRef = useRef();

    const handleClick = () => {
      if (menuIconRef.current) {
        const element = menuIconRef.current;
        element.classList.toggle('fa-bars');
        element.classList.toggle('fa-x');
        if (element.classList.contains('fa-x')) {
          setEstadoMenu('activated');
          setEstadoNav('activatedNav')
        } else {
          setEstadoMenu('deactivated');
          setEstadoNav('deactivatedNav')
        }
      }
    };

    const hideMenu = () => {
      const element = menuIconRef.current;
      if (viewportWidth < 1000){
        setEstadoMenu('deactivated')
        setEstadoNav('deactivatedNav')
        element?.classList.toggle('fa-x')
        element?.classList.toggle('fa-bars')
      }
    }
    return (
        <div className={`header ${scrollState == 1 ? 'scroll' : ''}`}>
            <i className="fa-solid fa-bars" id='menuIcon' ref={menuIconRef} onClick={handleClick}></i>
            <h1 className={`${scrollState == 1 ? 'scrolltitle' : ''}`}>AROMAS DO NORDESTE</h1>
            <div className={`menu ${estadoMenu}`}>
                <nav>
                        {option ? 
                        <ul>
                          <li><Link to={'/aromas-do-nordeste-frontend'} onClick={hideMenu} className={`link ${estadoNav}`}>Início</Link></li>
                          <li><a onClick={hideMenu} className={`link ${estadoNav}`}>Fazer pedido</a></li>
                        </ul>
                      : 
                      <ul>
                        <li><a href="#home" onClick={hideMenu} className={`link ${estadoNav}`}>Início</a></li>
                        <li><a href="#aboutus" onClick={hideMenu} className={`link ${estadoNav}`}>Sobre nós</a></li>
                        <li><Link to={'/aromas-do-nordeste-frontend/cardapio'} onClick={hideMenu} className={`link ${estadoNav}`}>Cardápio</Link></li>
                        <li><a href="#" onClick={hideMenu} className={`link ${estadoNav}`}>Fazer pedido</a></li>
                      </ul>
                      }
                </nav>
            </div>
        </div>
    )
}

export default Header;
