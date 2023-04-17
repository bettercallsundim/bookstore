import { AddBook } from "./components/AddBook";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Books } from "./components/Book/Books.jsx";
import { BookDetail } from "./components/Book/BookDetail.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/add" element={<AddBook />}></Route>
          <Route exact path="/books" element={<Books />}></Route>
          <Route exact path="/books/:id" element={<BookDetail />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
