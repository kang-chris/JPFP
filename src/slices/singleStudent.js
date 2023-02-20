const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchStudentAsync = createAsyncThunk(
  "student/fetch",
  async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/students/${id}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editStudentAsync = createAsyncThunk(
  "students/edit",
  async (student) => {
    try {
      const { id, firstName, lastName, email, campusId } = student;
      const updatedStudent = { id, firstName, lastName, email, campusId };
      const { data } = await axios.put(
        `http://localhost:3000/api/students/${student.studentId}`,
        updatedStudent
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeStudentAsync = createAsyncThunk(
  "students/remove",
  async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/students/${id}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(removeStudentAsync.fulfilled, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(editStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudent = (state) => state.student;

export default studentSlice.reducer;