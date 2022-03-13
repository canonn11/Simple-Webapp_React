import { Link } from "react-router-dom";


export default function RouterPropTest() {
    const profile = {
        name : "myungkwan",
        age: "25",
    }
  return (
    <>
      <h1>Router Prop Test</h1>
      <Link to={"/routerproptestresult"} state = {{profile}}>데이터 보내기</Link>
    </>
  );
}
