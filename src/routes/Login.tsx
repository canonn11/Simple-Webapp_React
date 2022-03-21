//로그인을 담당하는 라우트

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import RunLogin from "../backend/RunLogin";
import LoginFailAlert from "../components/Login/LoginFailAlert";

export default function Login() {
  // 로딩 페이지 보여주는 플래그
  const [loading, setloading] = useState(true);
  // id : 사용자가 입력한 아이디
  // LoginMain, RunLogin에 props 전달, 로그인 성공 시 Main 라우트로 props전달
  // LoginMain 으로 setID를 보내서 입력창에 사용자가 id를 변경시킬 때마다 setID 실행
  const [id, setID] = useState("");
  // pw : 사용자가 입력한 비밀번호
  // LoginMain, RunLogin에 props 전달
  // LoginMain 으로 setPW를 보내서 입력창에 사용자가 pw를 변경시킬 때마다 setPW 실행
  const [pw, setPW] = useState("");
  // RunLogin 컴포넌트 플래그
  const [runLogin, setRunLogin] = useState(false);
  // LoginFailAlert 컴포넌트 플래그. (로그인 실패시 상단에 뜨는 경고창)
  const [failedAlarm, setFailedAlarm] = useState(false);
  // 현재 컴포넌트인 Login에서 로그인 성공시 Main으로 가기 위한 Navigate 플래그
  // goMain 함수가 실행되면 켜지는 플래그
  const [goMainFlag, setGoMainFlag] = useState(false);

  // setFailedAlarm은 RunLogin 컴포넌트에서 컨트롤한다.
  // 만약 failedAlarm 플래그가 켜지면, useEffect가 인지해서 1초후 꺼진다.
  useEffect(() => {
    if (failedAlarm) {
      setTimeout(() => {
        setFailedAlarm(false);
      }, 1000);
    }
  });

  // clean-up function
  // 로그인 성공해서 현재 컴포넌트인 Login에서 Main으로 떠나기 전에, state를 사용하는 컴포넌트를 끄는 역할
  useEffect(() => {
    return () => {
      setRunLogin(false);
    };
  }, []);

  // LoginMain 컴포넌트에서 사용
  const login = () => {
    setRunLogin(true);
  };

  // RunLogin에서 사용함
  const goMain = () => {
    setGoMainFlag(true);
  };

  // 첫 로딩화면이 3초후에 꺼지게 하고 로그인화면 띄우기위해 사용
  setTimeout(() => {
    setloading(false);
  }, 3000);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        {failedAlarm && <LoginFailAlert />}
        <LoginMain id={id} pw={pw} setID={setID} setPW={setPW} login={login} />
        {runLogin && (
          <RunLogin
            id={id}
            pw={pw}
            setRunLogin={setRunLogin}
            setFailedAlarm={setFailedAlarm}
            goMain={goMain}
          />
        )}
        {goMainFlag && (
          <Navigate
            to="/main"
            state={{
              idFromLogin: id,
            }}
          />
        )}
      </>
    );
  }
}
