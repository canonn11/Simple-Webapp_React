import { gql, useMutation } from "@apollo/client";
import { useEffect } from 'react';
import "./IdPasswordAddress.css";

interface PropTypes {
  id: string;
  pw: string;
  addr: string;
  setID: (id: string) => void;
  setPW: (pw: string) => void;
  setADDR: (addr: string) => void;
  joinFailAlert: () => void;
  setGoMainFlag: (flag: boolean) => void;
}

const SET_USER = gql`
mutation createPerson(
  $userId : String!
  $Password : String!
  $defaultAddress : String!
) {
  createPerson(
    input: {person: {userId: $userId password: $Password defaultAddress: $defaultAddress}}
  ) {
    clientMutationId
  }
}

`;

export default function IdPasswordAddress({ id, pw, addr, setID, setPW, setADDR, joinFailAlert, setGoMainFlag }: PropTypes) {
  /*useMuation으로부터 만들어진 setUser 함수 사용*/
  const [setUser, { data }] = useMutation(SET_USER, {
    onError: (error) => { joinFailAlert(); }
  });



  const join = () => {
    if (id !== "" && pw !== "") {
      setUser({
        variables: {
          userId: id,
          Password: pw,
          defaultAddress: addr
        }
      });
    }
    else {
      joinFailAlert();
    }
  }
  useEffect(() => {
    if (data) {
      setGoMainFlag(true);
    }
  });
  return (
    <>
      <div className="IdPasswordAddress">
        <div className="id form-floating">
          <input
            type="text"
            className="form-control"
            id="idJoinInput"
            placeholder="ID"
            onChange={(e) => setID(e.target.value)}
          />
          <label htmlFor="idJoinInput">ID</label>
        </div>
        <div className="pw form-floating">
          <input
            type="password"
            className="form-control"
            id="pwJoinInput"
            placeholder="Password"
            onChange={(e) => setPW(e.target.value)}
          />
          <label htmlFor="pwJoinInput">PASSWORD</label>
        </div>
        <div className="addr form-floating">
          <input
            type="text"
            className="form-control"
            id="addrJoinInput"
            placeholder="Address"
            onChange={(e) => setADDR(e.target.value)}
          />
          <label htmlFor="addrJoinInput">ADDRESS</label>
        </div>
        <div className="buttonContainer">
          <div className="d-grid gap-2">
            <button className="joinbutton btn btn-info" type="button" onClick={join}>
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  )
}