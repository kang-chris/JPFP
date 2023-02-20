import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudentAsync, editStudentAsync, selectStudent } from "../slices/singleStudent";
import { useNavigate, useParams, Link } from "react-router-dom";
import { fetchCampusesAsync, selectCampuses } from "../slices/allcampus";
import validator from "validator";

const EditStudent = () => {
    const dispatch = useDispatch();
    const { studentId } = useParams();
    const student = useSelector(selectStudent);
    const campuses = useSelector(selectCampuses);

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [campusId, setCampusId] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (!firstName || !lastName || !email) {
            alert("Form must be filled out entirely!")
            return;
        }
        else if (!validator.isEmail(email)) {
            alert("Please enter a valid email")
            return
        }
        const updatedStudent = { firstName, lastName, email, campusId, studentId };
        await dispatch(editStudentAsync(updatedStudent));
    };

    useEffect(() => {
        dispatch(fetchCampusesAsync());
        dispatch(fetchStudentAsync(studentId)).then((res) => {
            const { firstName, lastName, email, campusId } = res.payload;
            setFirstName(firstName);
            setLastName(lastName);
            setEmail(email);
            setCampusId(campusId);
        });
    }, [studentId]);

    return (
        <>
            <h2>Edit Student Information: </h2>
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

                <label htmlFor="campusId">Campus: </label>
                <select name="campusId" onChange={(e) => setCampusId(e.target.value)}>
                    <option value="defaultValue">Select New Campus</option>
                    {campuses.map((campus) => {
                        return (
                            <option value={campus.id} key={campus.id}>
                                {campus.name}
                            </option>
                        );
                    })}
                </select>
                <button type="submit" className="updateButton">Submit </button>
            </form>
        </>
    );
};

export default EditStudent;