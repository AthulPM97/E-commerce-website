import { Nav, Navbar, Container, Button } from "react-bootstrap"

const Navigationbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">The Generics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Button variant='outline-info' className='float-end'>Cart</Button>
        </Container>
      </Navbar>
    )
}

export default Navigationbar;