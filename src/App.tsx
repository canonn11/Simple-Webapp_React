import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Join from "./routes/Join";
import Login from "./routes/Login";
import Main from "./routes/Main";
import MyOrder from "./routes/MyOrder";
import Order from "./routes/Order";

function App() {
  return (
    <div className = "App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/join" element = {<Join/>}/>
          <Route path = "/main" element = {<Main/>}/>
          <Route path = "/myorder" element = {<MyOrder/>}/>
          <Route path = "/order" element = {<Order/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
