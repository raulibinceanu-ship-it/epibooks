import { Card } from "react-bootstrap";

function SingleBook(props) {
  const book = props.book;

  const isSelected = props.selectedAsin === book.asin;

  return (
    <Card
      className="mb-3 shadow-sm"
      onClick={() => props.onBookSelect(book.asin)}
      style={{
        border: isSelected ? "3px solid red" : "1px solid transparent",
        cursor: "pointer",
      }}
    >
      <div style={{ height: "300px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={book.img}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <Card.Body>
        <Card.Title style={{ fontSize: "1rem", minHeight: "48px" }}>
          {book.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
