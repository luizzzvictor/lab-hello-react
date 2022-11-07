import logo from '../../images/ironhack-logo-xs.png'
import menu from '../../images/menu-top-xs.png'

function Nav() {
 return (
    <nav id='nav'>    
        <img src={logo} alt='' />
        <img src={menu} alt='' />
    </nav>
 );
}

export default Nav