import { Link } from "react-router-dom";
import {useState}from "react"
import Footer from "../Footer";
import "./LoginMain.css";

export default function LoginMain() {
  const [id,setID] = useState("");
  const [pw,setPW] = useState("");
  const printIDPW = () => {
    console.log(id);
    console.log(pw);
  }
  return (
    <>
      <div className="loginMain fullsize">
        <section className="IDPW">
          <div className="id form-floating">
            <input
              type="text"
              className="form-control"
              id="idInput"
              placeholder="ID"
              onChange={(e)=>setID(e.target.value)}
            />
            <label htmlFor="idInput">ID</label>
          </div>
          <div className="passWord form-floating">
            <input
              type="password"
              className="form-control"
              id="pwInput"
              placeholder="Password"
              onChange={(e)=>setPW(e.target.value)}
            />
            <label htmlFor="pwInput">Password</label>
          </div>
          <div className="buttonContainer">
            <div className="d-grid gap-2">
              <button onClick = {()=>printIDPW()}className="loginbutton btn btn-info" type="button">
                Login
              </button>
            </div>
          </div>
        </section>

        <section className="wannaJoin">
          <span> 처음 방문하셨나요?</span>
          <Link to="./join"> 회원 가입 </Link>
        </section>
        <Footer />
      </div>
    </>
  );
}
