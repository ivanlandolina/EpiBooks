import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";

function About() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="warning " className="text-center">
        <Alert.Heading>🚧 Sezione in costruzione 🚧</Alert.Heading>
        <p>
          Work in progress! Stiamo ancora scrivendo questa parte della storia.
          Nel frattempo, esplora il catalogo dei libri e scopri le meraviglie
          che EpiBooks ha da offrire!
        </p>
        <hr />
        <Link to="/">
          <Button variant="success" className="mt-2">Vai al catalogo 📚</Button>
        </Link>
      </Alert>
    </>
  );
}

export default About;
