import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchStudentsAsync,selectStudents,removeStudentAsync} from "../slices/allStudents";
import { Link } from "react-router-dom";
import AddStudent from "./AddStudent";

const AllStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchStudentsAsync());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeStudentAsync(id));
  };

  return (
    <>

      <div id = 'header'>
      <div id="navbar">
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <button className="bigButton">Home</button>
        </Link>
      </div>
      <br />
      <AddStudent/>
      </div>
      <div id = 'info'>

      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              <h2>{student.firstName} {student.lastName}</h2>
                <Link to={`/students/${student.id}`}><button className="updateButton">
                  View/Add/Update Information </button></Link>
                <button
                  className="deleteButton" onClick={() => handleRemove(student.id)}>Delete Student
                </button>
            </li>
          );
        })}
      </ul>
      </div>

</>

  );

};



export default AllStudents;