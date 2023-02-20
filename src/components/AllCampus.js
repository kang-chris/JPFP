import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchCampusesAsync, selectCampuses,removeCampusAsync } from "../slices/allcampus";
import AddCampus from "./AddCampus";

const AllCampuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);

  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeCampusAsync(id));
  };

  return (
<>
    <div id='header'>
      <div id="navbar">
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <button className="bigButton">Home</button>
        </Link>
      </div>
      <AddCampus />
    </div>
      <br />

      <ul>
        {campuses.map((campus) => {
          return (
            <li key={campus.id}>
              <h2 id='campushead'>
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                <button className="deleteButton" onClick={() => handleRemove(campus.id)}>Delete Campus</button>
              </h2>
              <img src={campus.imageUrl} />
            </li>
          );
        })}
      </ul>

</>
  );
};

export default AllCampuses;