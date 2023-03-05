import { Link } from 'react-router-dom'
import { MdSearch, MdShoppingBasket } from 'react-icons/md'
import '../styles/navbar.css'
import { useStateValue } from '../StateProvider'

function Navbar() {
    const [{basket}] = useStateValue()
    console.log(basket)

  return (
    <nav className="navbar">
        {/* ---------- Website Logo to left ------------- */}
        <Link to='/'>
            <img src="amazon.png" className='navbar__logo' alt="Amazon Company Logo" />
        </Link>

        {/* -------------- Search bar to center -------------- */}
        <div className="navbar__search">
            <input type="text" placeholder='Search Amazon' className='navbar__searhInput' />
            <MdSearch className='navbar__searchIcon' />
        </div>

        {/* ---------------- Navbar Nav --------------- */}
        <div className="navbarNav">
            <Link to='/login' className='navbarNav__link'>
            <div className='navbarNav__option'>
                <span className='navbarNav__optionLineOne'>Hello Sameed</span>
                <span className='navbarNav__optionLineTwo'>Sign In</span>
            </div>
            </Link>

            <Link to='/' className='navbarNav__link'>
            <div className='navbarNav__option'>
                <span className='navbarNav__optionLineOne'>Returns</span>
                <span className='navbarNav__optionLineTwo'>& Orders</span>
            </div>
            </Link>

            <Link to='/' className='navbarNav__link'>
            <div className='navbarNav__option'>
                <span className='navbarNav__optionLineOne'>Your</span>
                <span className='navbarNav__optionLineTwo'>Prime</span>
            </div>
            </Link>

            <Link to='/checkout' className='navbarNav__link navbarNav__basket'>
                <div className="navbar__optionBasket">
                    <MdShoppingBasket className='navbar__cartIcon' />
                    <span className='cart__productCount'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}
export default Navbar