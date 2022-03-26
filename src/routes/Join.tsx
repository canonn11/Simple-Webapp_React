//회원가입을 담당하는 라우트

import IdPasswordAddress from "../components/Join/IdPasswordAddress"; 

import Footer from "../components/Footer";
import JoinFailAlert from "../components/Join/JoinFailAlert";
import "./Join.css";
import { useState } from "react";

export default function Join() {
  const [id, setID] = useState("");
  const [pw,setPW] = useState("");
  const [addr,setADDR] = useState("");
  const [failedAlert, setFailedAlert] = useState(false);

  const joinFailAlert = () => {
    setFailedAlert(true);
    setTimeout(()=>{
      setFailedAlert(false);
    },1000)
  }
  return (
    <>
      <div className="joinMain fullsize">
        {failedAlert && <JoinFailAlert />};
        <IdPasswordAddress id = {id} setID = {setID} pw = {pw} setPW = {setPW} addr = {addr} setADDR = {setADDR} joinFailAlert = {joinFailAlert}/>
        <Footer />
      </div>
    </>
  );
}
