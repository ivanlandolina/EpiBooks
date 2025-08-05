import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";


function AllTheBooks({ filteredBook, colorText, theme}) {

  return (
    <Container fluid>
      <Row>
        {filteredBook.map((book) => (
          <SingleBook key={book.asin} book={book} colorText={colorText} theme={theme} />
        ))}
        </Row>
    </Container >
  );
}

export default AllTheBooks;