import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import BookList from "./components/BookList";
import fantasy from "./books/fantasy.json";

function App() {
  return (
    <Container className="mt-4">
      <h1>EpiBooks</h1>
      <BookList books={fantasy} />
    </Container>
  );
}

export default App;
