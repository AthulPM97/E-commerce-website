import './Header.css'

const Header = (props) => {
    return (
        <header className="header">
            <ul>
                <li>Home</li>
                <li>Store</li>
                <li>About</li>
            <a href='www.google.com'>Cart <span>0</span></a>
            </ul>
            <h1>The Generics</h1>
        </header>
    )
};

export default Header;