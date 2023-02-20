import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCampusAsync } from "../slices/allcampus";

const AddCampus = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(!name || !address){
      alert("Form must be filled out entirely!")
      return;
    }
    dispatch(addCampusAsync({ name, address }));
    setName('');
    setAddress('');
  };

  return (
    <>
      <h4>Add a campus:</h4>
      <form id="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="addCampus">Name: </label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="address">Address: </label>
        <input
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit" className="submitButton">Submit </button>
      </form>
    </>
  );
};

export default AddCampus;