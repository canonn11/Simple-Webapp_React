import { Navigate } from "react-router-dom";
import { useEffect } from "react";

//회원가입을 담당하는 라우트

import IdPasswordAddress from "../components/Join/IdPasswordAddress";

import Footer from "../components/Footer";
import JoinFailAlert from "../components/Join/JoinFailAlert";
import "./Join.css";
import { useState } from "react";

export default function Join() {
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const [addr, setADDR] = useState("");
  const [IdAndPasswordDefaultAddress, setIdAndPasswordDefaultAddress] = useState(true);
  const [failedAlert, setFailedAlert] = useState(false);
  const [goMainFlag, setGoMainFlag] = useState(false);

  const joinFailAlert = () => {
    setFailedAlert(true);
    setTimeout(() => {
      setFailedAlert(false);
    }, 1000)
  }
  // clean up function
  useEffect(() => {
    return () => {
      setIdAndPasswordDefaultAddress(false);
      setGoMainFlag(false);
    };
  }, []);
  return (
    <>
      <div className="joinMain fullsize">
        {failedAlert && <JoinFailAlert />};
        {IdAndPasswordDefaultAddress && <IdPasswordAddress id={id} setID={setID} pw={pw} setPW={setPW} addr={addr} setADDR={setADDR} joinFailAlert={joinFailAlert} setGoMainFlag={setGoMainFlag} />}
        <Footer />
        {goMainFlag && <Navigate to="/main" state={{
          idFromLogin: id
        }} />}
      </div>
    </>
  );
}
