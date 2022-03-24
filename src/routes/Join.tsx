//회원가입을 담당하는 라우트

import IdPasswordAddress from "../components/Main/IdPasswordAddress"; 

import Footer from "../components/Footer";
import "./Join.css";

export default function Join() {
  return (
    <>
      <div className="joinMain fullsize">
        <IdPasswordAddress/>
        <Footer />
      </div>
    </>
  );
}
