import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import About from "./routes/about";
import Nav from "./components/Nav";
import RouterPropTest from "./routes/RouterPropTest"
import RouterPropTestResult from "./routes/RouterPropTestResult"

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path="/routerproptest" element={<RouterPropTest />} />
          <Route path = "/routerproptestresult" element = {<RouterPropTestResult />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
