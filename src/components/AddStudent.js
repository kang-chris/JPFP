import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudentAsync } from "../slices/allStudents";
import validator from "validator";

const AddStudent = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [campusId, setCampusId] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(!firstName || !lastName || !email){
      alert("Form must be filled out entirely!")
      return;
      }
      else if(!validator.isEmail(email)){
        alert("Please enter a valid email")
        return
      }
    dispatch(addStudentAsync({ firstName, lastName, email, campusId }));
    setFirstName('')
    setLastName('')
    setEmail('')
  };
  return (
    <>
      <h2>Add a student:</h2>
      <form id="edit-form" onSubmit={handleSubmit}>
        <label htmlFor="editStudent">First: </label>
        <input
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last: </label>
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="submitButton">Submit </button>
      </form>
    </>
  );
};

export default AddStudent;