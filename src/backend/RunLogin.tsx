import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

interface PropTypes {
  id: string;
  pw: string;
  setRunLogin: (flag: boolean) => void;
  setFailedAlarm : (flag : boolean) => void;
  offFailedAlarm : () => void;
}

const GET_USER_INFO = gql`
  query personByUserId($userId: String!) {
    personByUserId(userId: $userId) {
      password
    }
  }
`;

export default function RunLogin({ id, pw, setRunLogin, setFailedAlarm, offFailedAlarm }: PropTypes) {
  const { loading, data } = useQuery(GET_USER_INFO, {
    variables: { userId: id },
  });
  useEffect (() =>{
    if (!loading) {
        if (data.personByUserId === null) {
          //일치하는 ID가 없을때 로그인실패 알람 띄우고 RunLogin 꺼지게
          setFailedAlarm(true);
          offFailedAlarm();
          setRunLogin(false);
        } else if (pw !== data.personByUserId.password) {
          //비밀번호 틀렸을 때 로그인실패 알람 띄우고 RunLogin 꺼지게
          setFailedAlarm(true);
          offFailedAlarm();
          setRunLogin(false);
        } else {
          console.log(`Login Success!
            id : ${id}
            password : ${pw}`);
        }
      }
  } )
  
  return <></>;
}
