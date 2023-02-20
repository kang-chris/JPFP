import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampusAsync, selectCampus } from "../slices/singleCampus";
import { removeCampusAsync } from "../slices/allcampus";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditCampus from "./EditCampus";

const SingleCampus = () => {
  const dispatch = useDispatch();
  const { campusId } = useParams();
  const campus = useSelector(selectCampus);
  const { id, name, description, address, imageUrl, students } = campus;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCampusAsync(campusId));
  }, [dispatch]);

  const handleRemove = () => {
    dispatch(removeCampusAsync(campusId)).then(() => {
      navigate("/campuses");
    });
  };

  return (
<>
      <div id="navbar">
        <Link to={`/campuses`} style={{ textDecoration: 'none' }}>
          <button className="bigButton">View All Campuses</button>
        </Link>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <button className="bigButton">Home</button>
        </Link>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <strong>Location: {address}</strong>
        <br />
        <img src={imageUrl} />
        <br />
        <small>Description: {description}</small>

        {students ? <>
           <p>{students.length} Student(s) Attending</p>
          <ul>
            {students.map((student)=>{
              <li>{student.firstName}</li>
            })}
          </ul>
          </>
          : "...Loading..."
        }

      </div>
        <div className="editInfo">
      <EditCampus />
      </div>
      <button className="deleteButton" onClick={handleRemove}>
        Delete Campus
      </button>
      </>
  );
};

export default SingleCampus;