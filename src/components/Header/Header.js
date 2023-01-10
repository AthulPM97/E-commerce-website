import './Header.css'
import {Button} from 'react-bootstrap';

const Header = (props) => {
    return (
        <header className="header">
            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>About</li>
                <Button variant='outline-info' className='float-end'>Cart</Button>
            </ul>
            <h1>The Generics</h1>
        </header>
    )
};

export default Header;