import { Link } from "react-router-dom";
import { data } from "../data.json";

export default function StudentList() {
    const students = data.students;
  return (
    <>
      <h1>Student List</h1>
      <div>
          {students.map((student)=>(
              <h4 key ={student.id}>
                  <Link to={`/studentlist/${student.id}`} state={{student}}>
                      {student.name}
                  </Link>
              </h4>
          ))}
      </div>
    </>
  );
}
