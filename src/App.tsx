import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import About from "./routes/about";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/about" element = {<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
