//회원가입을 담당하는 라우트

import IdPasswordAddress from "../components/Join/IdPasswordAddress"; 

import Footer from "../components/Footer";
import "./Join.css";
import { useState } from "react";

export default function Join() {
  const [id, setID] = useState("");
  const [pw,setPW] = useState("");
  const [addr,setADDR] = useState("");

  const joinFailAlarm = () => {
    
  }
  return (
    <>
      <div className="joinMain fullsize">
        <IdPasswordAddress id = {id} setID = {setID} pw = {pw} setPW = {setPW} addr = {addr} setADDR = {setADDR} joinFailAlarm = {joinFailAlarm}/>
        <Footer />
      </div>
    </>
  );
}
