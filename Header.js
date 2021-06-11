import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStatevalue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{ basket, user }, dispatch] = useStatevalue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt="" />
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="hearder_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && "/Login"}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionline1">Hello {!user ? 'Guest' : user.email}</span>
                        <div className="header_optionline2">{user ?
                            'Sign Out' : 'Sign In'}</div>
                    </div>
                </Link>
                <Link to='/Orders'>
                    <div className="header_option">
                        <span className="header_optionline1">Returns</span>
                        <div className="header_optionline2">& Orders</div>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionline1">Your</span>
                    <div className="header_optionline2">Prime</div>
                </div>
                <Link to="/Checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionline2 header_BasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;