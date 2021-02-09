import  react from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav className="header">
            <img className="header__logo" src="" alt="logo" src="https://pbs.twimg.com/profile_images/1191703380382670850/OU5fxQWX_400x400.jpg" />
            <div className="header__search">
                <input type="text" className="header__searchinput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/*First link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineOne">Hello, User</span>
                        <span className="header__optionlineTwo">Sign In</span>
                    </div>
                </Link>
                {/*Second link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineOne">Returns</span>
                        <span className="header__optionlineTwo">& Orders</span>
                    </div>
                </Link>
                {/*Third link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineOne">pro</span>
                        <span className="header__optionlineTwo">Member</span>
                    </div>
                </Link>
            </div>
            {/*Shopping cart link*/}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    {/*number of items in the cart*/}
                    <span className="header__optionLineTwo header__basketCount">2</span>
                </div>
            </Link>
        </nav>
    )
}
export default Header;