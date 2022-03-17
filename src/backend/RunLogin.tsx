import {useQuery, gql} from "@apollo/client"

interface PropTypes{
    id:string,
    pw:string
}

const GET_USER_INFO = gql`
query MyQuery {
    allPeople {
      nodes {
        defaultAddress
        defaultRequest
      }
    }
  }
  
`;

export default function RunLogin({id,pw} : PropTypes){
    const {loading, data} = useQuery(GET_USER_INFO);
    if(!loading){
        console.log(data.allPeople.nodes);
    }
    return (<></>);
}