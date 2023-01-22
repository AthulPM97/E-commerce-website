import MainHeader from './MainHeading';
import Navigationbar from './Navbar';

const Header = (props) => {
    return (
        <header>
            <Navigationbar/>
            <MainHeader/>
        </header>
    )
};

export default Header;