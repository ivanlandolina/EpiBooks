import { useParams } from "react-router";
import CommentArea from "./CommentArea";

function BookDetails({ allBooks }) {
  const { asin } = useParams();

  // Cerca il libro in tutte le categorie
  const allBooksArray = Object.values(allBooks).flat();
  const book = allBooksArray.find((b) => b.asin === asin);

  if (!book) {
    return <p>Libro non trovato.</p>;
  }

  return (
    <div className="mt-4">
      <h1>{book.title}</h1>
      <img src={book.img} alt={book.title} style={{ width: "200px" }} />
      <p><strong>Autore:</strong> {book.author}</p>
      <p><strong>Prezzo:</strong> {book.price}</p>
      <CommentArea asin={asin} />
    </div>
  );
}

export default BookDetails;
