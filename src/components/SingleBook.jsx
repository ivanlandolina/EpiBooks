import { Badge, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import { useSelected } from "../context/selectedContext";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

function SingleBook({ book, colorText, theme }) {
  // const { selected, setSelected } = useSelected();

  return (
    <Col sm={6} md={6} lg={4} xl={3} xxl={3} className="my-4">
      <Card
        className={
          "h-100 "
          // +(selected == book.asin && "border  border-3 border-danger")
        }
      >
        <Card.Img
          // onClick={() =>
          //   setSelected((oldAsin) => (book.asin == oldAsin ? "" : book.asin))
          // }
          variant="top"
          src={book.img}
          style={{ height: "370px", width: "100%", objectFit: "cover" }}
        />
        <Card.Body
          style={{
            backgroundColor: theme === "dark" ? "#1e1e1e" : "#ffffff",
            color: colorText === "white" ? "#ffffff" : "#000000",
          }}
        >
          <Card.Title
            className="mb-3 fw-bold"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.3",
              height: "2.6rem",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {book.title}
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <Badge bg="warning" style={{ color: "black" }}>
              €{book.price.toFixed(2)}
            </Badge>
            <Link to={"/books/" + book.asin} style={{ textDecoration: "none" }}>
              <Button
                style={{
                  color: theme === "light" ? "black" : undefined,
                }}
                className="btnBook d-flex align-items-center"
                role="button"
              >
                Dettagli <FaArrowRight style={{ fontSize: "12px" }} />
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
