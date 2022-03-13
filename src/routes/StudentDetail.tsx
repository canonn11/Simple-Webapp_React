import { useLocation } from "react-router-dom";

export default function StudentDetail() {
    const {state}:any = useLocation();
    const id = state.student.id;
    const name = state.student.name;
    const age = state.student.age;
  return (
    <>
      <h1>Student Detail Page</h1>
      <h2>Student ID : {id}</h2>
      <h2>Student Name : {name}</h2>
      <h2>Student Age : {age}</h2>
    </>
  );
}
