import MyNav from "./components/MyNav.jsx";
import Welcome from "./components/Welcome.jsx";
import Footer from "./components/MyFooter.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx";
import CommentArea from "./components/CommentArea.jsx";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import history from "./data/history.json";
import { useEffect, useState } from "react";
import { contextTheme } from "./context/contextTheme";
import { SelectedProvider } from "./context/selectedContext.jsx";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import NotFound from "./components/NotFound.jsx";
import BookDetails from "./components/BookDetails.jsx";
import About from "./components/About.jsx";
import Browse from "./components/Browse.jsx";

const booksData = {
  Fantasy: fantasy,
  Horror: horror,
  Romance: romance,
  SciFi: scifi,
  History: history,
};
function App() {
  const [categoria, setCategoria] = useState("Fantasy");
  const [searchValue, setSearchValue] = useState("");
  const [filteredBook, setFilteredBook] = useState(booksData[categoria]);
  const [theme, setTheme] = useState("dark");
  const [colorText, setColorText] = useState("white");

  function toggleTheme() {
    if (theme == "dark") {
      setTheme("light");
      setColorText("black");
    } else {
      setTheme("dark");
      setColorText("white");
    }
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const books = booksData[categoria].filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBook(books);
  };

  const handleCategoria = (e) => {
    setSearchValue("");
    setCategoria(e.target.value);
    setFilteredBook(booksData[e.target.value]);
  };

  useEffect(() => {document.body.dataset["bsTheme"] = theme}, [theme]) // 

  return (
    <>
      <HashRouter>
        <contextTheme.Provider value={{ theme, colorText }}>
          <div
            style={{
              // backgroundColor: theme === "dark" ? "#212529" : "#ffffff", // ⬅ colore sfondo reale
              
              minHeight: "100vh", // ⬅ assicura che prenda tutta l'altezza
            }}
          >
            <MyNav
              categoria={categoria}
              handleCategoria={handleCategoria}
              handleSearch={handleSearch}
              searchValue={searchValue}
              filteredBook={filteredBook}
              booksData={booksData}
              toggleTheme={toggleTheme}
              theme={theme}
              colorText={colorText}
            />

            <Welcome searchValue={searchValue} filteredBook={filteredBook} />
            <SelectedProvider>
              <Container>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <AllTheBooks
                        filteredBook={filteredBook}
                        toggleTheme={toggleTheme}
                        theme={theme}
                        colorText={colorText}
                      />
                    }
                  />
                  <Route path="*" element={<NotFound />}></Route>
                  <Route path="/books/:asin" element={<BookDetails allBooks={booksData} />}></Route>
                  <Route path="/about" element={<About />} />
                  <Route path="/browse" element={<Browse />} />
                </Routes>
                
              </Container>
            </SelectedProvider>
            <Footer />
          </div>
        </contextTheme.Provider>
      </HashRouter>
    </>
  );
}

export default App;
