import { configureStore } from "@reduxjs/toolkit";
import campusesReducer from "../slices/allcampus";
import studentsReducer from "../slices/allStudents";
import campusReducer from "../slices/singleCampus";
import studentReducer from "../slices/singleStudent";

const store = configureStore({
  reducer: {
    campuses: campusesReducer,
    students: studentsReducer,
    campus: campusReducer,
    student: studentReducer,
  },
});

export default store;