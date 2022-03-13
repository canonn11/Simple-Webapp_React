import { useLocation } from "react-router-dom";


export default function RouterPropTestResult() {
    const {state} :any  = useLocation();
    const name = state.profile.name;
    const age = state.profile.age;
    return (
      <>
        <h1>Router Prop Test Result</h1>
        <h2>name : {name}</h2>
        <h2>age : {age}</h2>
      </>
    );
  }
  