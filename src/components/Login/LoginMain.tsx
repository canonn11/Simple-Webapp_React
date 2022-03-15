import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./LoginMain.css";

export default function LoginMain() {
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
            />
            <label htmlFor="idInput">ID</label>
          </div>
          <div className="passWord form-floating">
            <input
              type="password"
              className="form-control"
              id="pwInput"
              placeholder="Password"
            />
            <label htmlFor="pwInput">Password</label>
          </div>

          <div className="buttonContainer">
            <div className="d-grid gap-2">
              <button className="loginbutton btn btn-info" type="button">
                Button
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
