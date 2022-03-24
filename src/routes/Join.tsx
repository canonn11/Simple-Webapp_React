//회원가입을 담당하는 라우트

import Footer from "../components/Footer";
import "./Join.css";

export default function Join() {
  return (
    <>
      <div className="joinMain fullsize">
        <div className="IdPasswordAddress">
          <div className="id form-floating">
            <input
              type="text"
              className="form-control"
              id="idJoinInput"
              placeholder="ID"
            />
            <label htmlFor="idJoinInput">ID</label>
          </div>
          <div className="pw form-floating">
            <input
              type="password"
              className="form-control"
              id="pwJoinInput"
              placeholder="Password"
            />
            <label htmlFor="pwJoinInput">PASSWORD</label>
          </div>
          <div className="addr form-floating">
            <input
              type="text"
              className="form-control"
              id="addrJoinInput"
              placeholder="Address"
            />
            <label htmlFor="addrJoinInput">Address</label>
          </div>
          <div className="buttonContainer">
            <div className="d-grid gap-2">
              <button className="loginbutton btn btn-info" type="button">
                Login
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
