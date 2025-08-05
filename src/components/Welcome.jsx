import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function Welcome({ searchValue, filteredBook }) {
  const [show, setShow] = useState(true);
  const [countdown, setCountdown] = useState(20); // 20 secondi 

  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setShow(false); 
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000); 

    return () => clearInterval(interval); 
  }, [show]);

  return (
    <>
      <Container className="mt-3">
        {/* ALERT DI BENVENUTO */}
        {show && (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Benvenuto su EpiBooks!</Alert.Heading>
            <div className="d-flex align-items-center justify-content-between">
              <p className="fw-bold mb-0">
                📚 EpiBooks ti offre un'esperienza di lettura smart, accessibile
                ovunque tu sia. Benvenuto nella tua libreria digitale.
              </p>
              <img
                src="/astronauta-moon.gif"
                alt="EpiBooks Logo"
                width="100"
                height="100"
              />
            </div>
            <hr />
            <p className="mb-0 mt-2 text-end text-muted fw-semibold">
              Questo messaggio si autodistruggerà tra {countdown} secondi...
            </p>
          </Alert>
        )}

        {/* ALERT "NESSUN LIBRO TROVATO" */}
        {searchValue.trim() !== "" && filteredBook.length === 0 && (
          <Alert variant="warning" className="text-center fw-bold">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img
                src="/gifastronaut.gif"
                style={{ width: "300px", height: "auto" }}
                alt="Nessun libro trovato"
              />
              <div>
                <p>Sono desolato, caro lettore, non ho trovato nessun libro con il titolo: </p>
                "<span className="text-danger">{searchValue}</span>"
              </div>
            </div>
          </Alert>
        )}
      </Container>
    </>
  );
}

export default Welcome;
