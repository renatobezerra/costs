import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import Contact from "./pages/Contact/Contact";
import ProjectNew from "./pages/Projects/ProjectNew";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass={`min-width min-height`}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/project/new" element={<ProjectNew />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
