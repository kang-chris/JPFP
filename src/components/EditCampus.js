import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampusAsync, editCampusAsync, selectCampus } from "../slices/singleCampus";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditCampus = () => {
    const dispatch = useDispatch();
    const { campusId } = useParams();
    const campus = useSelector(selectCampus);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const updatedCampus = { campusId, name, address };
        await dispatch(editCampusAsync(updatedCampus))
    };

    useEffect(() => {
        dispatch(fetchCampusAsync(campusId)).then((res) => {
            const { name, address } = res.payload;
            setName(name);
            setAddress(address);
        });
    }, [campusId]);

    return (
        <>
            <h2>Edit Campus Information: </h2>
            <form id="edit-form" onSubmit={handleSubmit}>
                <label htmlFor="editStudent">Name: </label>
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
                <button type="submit" className="updateButton">Submit </button>
            </form>
        </>
    );
};

export default EditCampus;