import { useState } from "react";

import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import Footer from "../components/Footer";
import RunLogin from "../backend/RunLogin";

export default function Login() {
  const [loading, setloading] = useState(true);
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const [runLogin, setRunLogin] = useState(false);
  const login = () => {
    setRunLogin(true);
  }
  setTimeout(() => {
    setloading(false);
  }, 3000);
  if (loading) {
    return <Loading />;
  } else {
    return (
    <>
    <LoginMain id={id} pw={pw} setID={setID} setPW={setPW} login = {login} />
    {runLogin ? <RunLogin id = {id} pw = {pw}/> : <></>}
    </>
    )
  }
}
