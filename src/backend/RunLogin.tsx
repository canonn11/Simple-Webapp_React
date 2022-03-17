import { useQuery, gql } from "@apollo/client";

interface PropTypes {
  id: string;
  pw: string;
}

const GET_USER_INFO = gql`
  query personByUserId ($userId :String!){
    personByUserId(userId : $userId){
        password
    }
  }
`;

export default function RunLogin({ id, pw }: PropTypes) {
  const { loading, data } = useQuery(GET_USER_INFO, {
    variables: { userId: id },
  });
  if (!loading) {
    if(data.personByUserId === null){
        console.log("Login Failed");
    }
    else if(pw !== data.personByUserId.password){
        console.log("Login Failed");
    }
    else{
        console.log(`Login Success!
        id : ${id}
        password : ${pw}`)
    }
  }
  return <></>;
}
