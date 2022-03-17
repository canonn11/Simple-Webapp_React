import { useState } from "react";

import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import Footer from "../components/Footer";

export default function Login() {
  const [loading, setloading] = useState(true);
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const login = () => {
    console.log(id);
    console.log(pw);
  }
  

  setTimeout(() => {
    setloading(false);
  }, 3000);
  if (loading) {
    return <Loading />;
  } else {
    return <LoginMain id={id} pw={pw} setID={setID} setPW={setPW} login = {login} />;
  }
}
