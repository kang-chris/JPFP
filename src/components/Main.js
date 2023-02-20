import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AllCampuses from "./AllCampus";
import AllStudents from "./AllStudents";
import Navbar from "./Navbar";
import SingleCampus from "./SingleCampus";
import { fetchCampusAsync } from "../slices/singleCampus";
import SingleStudent from "./SingleStudent";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path={`/campuses/:campusId`} element={<SingleCampus />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path={`/students/:studentId`} element={<SingleStudent />} />
        <Route path={"/*" } element = {<h1>Sorry! That Page Does't Exist!</h1>}/>
      </Routes>
    </div>
  );
};

export default Main;