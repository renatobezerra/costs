import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Container from "./components/layout/Container";
import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import Contact from "./pages/Contact/Contact";
import ProjectNew from "./pages/Projects/ProjectNew";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/company">Company</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/project/new">New Project</Link>
        </ul>

        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/company" element={<Company />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path="/project/new" element={<ProjectNew />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
