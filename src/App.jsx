import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import TituloFormulario from "./components/TituloFormulario";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container className="mainPage p-lg-5">
        <TituloFormulario></TituloFormulario>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
