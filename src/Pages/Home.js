import { Col, Container, Row, Button } from "react-bootstrap";

const tourDetails = [
  {
    date: "JUL 16",
    location: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  { date: "JUL 19", location: "BRISTOW, VA", venue: "BUDWEISER STAGE" },
  { date: "JUL 29", location: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
  { date: "AUG 2", location: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
  { date: "AUG 7", location: "CONCORD, CA", venue: "CONCORD PAVILION" },
];

const Home = () => {
  const tours = tourDetails.map((tour,index) => {
    return (
      <Row className="mb-3" key={index}>
        <Col>{tour.date}</Col>
        <Col>{tour.location}</Col>
        <Col>{tour.venue}</Col>
        <Col>
          <Button variant="primary">BUY TICKETS</Button>
        </Col>
      </Row>
    );
  });
  return (
    <Container>
      <div className="text-center mt-3 mb-3">
        <h3>Tours</h3>
      </div>
      <Container className="m-1">{tours}</Container>
      <footer className="fixed-bottom m-3">
        <h1>THE GENERICS</h1>
      </footer>
    </Container>
  );
};

export default Home;
