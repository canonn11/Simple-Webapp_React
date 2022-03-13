import { useLocation } from "react-router-dom";

interface stateType{
    profile:{
        name:String;
        age:String;
    };
}

export default function RouterPropTestResult() {
    const {state}  = useLocation();
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
  