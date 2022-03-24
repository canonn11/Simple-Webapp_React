import "./IdPasswordAddress.css";

export default function IdPasswordAddress(){
    return (
        <>
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
        </>
    )
}