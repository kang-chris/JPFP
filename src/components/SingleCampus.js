import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudentAsync, selectStudent, removeStudentAsync } from "../slices/singleStudent";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditStudent from "./EditStudent";

const SingleStudent = () => {
    const dispatch = useDispatch();
    const { studentId } = useParams();
    const student = useSelector(selectStudent);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchStudentAsync(studentId));
    }, [dispatch]);

    const handleRemove = () => {
        dispatch(removeStudentAsync(studentId)).then(() => {
            navigate("/students");
        });
    };

    return (
        <>
            <div id="navbar">
                <Link to={`/students`} style={{ textDecoration: 'none' }}>
                    <button className="bigButton">View All Students</button>
                </Link>
                <Link to={`/`} style={{ textDecoration: 'none' }}>
                    <button className="bigButton">Home</button>
                </Link>
            </div>

            <div className="info">
                <h1>
                    {student.firstName} {student.lastName}
                </h1>
                <img src={student.imageUrl} />
                <br />
                <strong>Email: {student.email}</strong>
                <br />
                <strong>GPA: {student.gpa}</strong>
                <br />
                <strong>
                    Attends:{" "}
                    {student.campus ? (
                        <Link to={`/campuses/${student.campus.id}`}>
                            {student.campus.name}
                        </Link>
                    ) : (
                        "Not attending a Campus"
                    )}
                </strong>
            </div>
            <div className="editInfo">
                <EditStudent />
            </div>
            <br />
            <button className="deleteButton" onClick={handleRemove}>
                Delete Student
            </button>
        </>
    );
};

export default SingleStudent;
