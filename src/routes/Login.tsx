import { useState } from "react";

import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import Footer from "../components/Footer";
import RunLogin from "../backend/RunLogin";
import LoginFailAlert from "../components/Login/LoginFailAlert";

export default function Login() {
  const [loading, setloading] = useState(true);
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const [runLogin, setRunLogin] = useState(false);
  const [failedAlarm, setFailedAlarm] = useState(false);
  const login = () => {
    setRunLogin(true);
  }
  const offFailedAlarm = () => {
    setTimeout(()=>{
      setFailedAlarm(false);
    },1000);
  }
  setTimeout(() => {
    setloading(false);
  }, 3000);
  if (loading) {
    return <Loading />;
  } else {
    return (
    <>
    {failedAlarm && <LoginFailAlert/>}
    <LoginMain id={id} pw={pw} setID={setID} setPW={setPW} login = {login} />
    {runLogin && <RunLogin id = {id} pw = {pw} setRunLogin = {setRunLogin} setFailedAlarm = {setFailedAlarm} offFailedAlarm = {offFailedAlarm}/>}
    </>
    )
  }
}
