import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router";

function MyNav({
  categoria,
  handleCategoria,
  handleSearch,
  searchValue,
  booksData,
  toggleTheme,
  theme,
}) {
  return (
    <>
      <Navbar data-bs-theme={theme}>
        <Button
          size="sm"
          variant="link"
          onClick={toggleTheme}
          style={{
            color: theme === "dark" ? "#e2e6ea" : "#F29F1A",
            backgroundColor: theme === "dark" ? "#464A5E" : "#e2e6ea",
          }}
          title="Cambia tema"
          className="buttonTheme"
        >
          {theme === "dark" ? <FaMoon /> : <FaSun />}
        </Button>
        <Container className="d-flex flex-wrap flex-sm-nowrap">
          <Navbar.Brand as={NavLink} to="/" end>
            <div className="d-flex align-items-center flex-column">
              <img
                style={{ width: "80px", height: "auto" }}
                src="/logoastronauta.png"
              ></img>
              <p>EpiBOOKS</p>
            </div>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#F29F1A",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }
                  : {}
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              end
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#F29F1A",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }
                  : {}
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/browse"
              end
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#F29F1A",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }
                  : {}
              }
            >
              Browse
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-2">
            <select
              className="form-select custom-select"
              value={categoria}
              onChange={handleCategoria}
            >
              {Object.keys(booksData).map((cat) => {
                console.log(cat);
                return <option key={cat}>{cat}</option>;
              })}
            </select>

            {/* <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Ricerca</Form.Label> */}
            <Form.Control
              className="custom-search-input"
              type="text"
              placeholder="Ricerca il libro "
              onChange={handleSearch}
              value={searchValue}
            />
            {/* </Form.Group>
    </Form> */}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
