import './Header.css'
import Navigationbar from './Navbar';

const Header = (props) => {
    return (
        <header className="header">
            <Navigationbar/>
            <h1>The Generics</h1>
        </header>
    )
};

export default Header;