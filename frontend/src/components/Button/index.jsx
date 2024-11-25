import './style.css'
import { Link } from 'react-router-dom'

const Button = ({value, link, width = 200, color}) => {
    return (
        <Link style={{width: width, backgroundColor: color == 1 ? 'var(--translucid-white)' : 'var(--brown)'}} className='button' to={link}>{value}</Link>
    )
}

export default Button