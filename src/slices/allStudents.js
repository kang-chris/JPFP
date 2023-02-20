const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchStudentsAsync = createAsyncThunk(
  "campuses/fetchAll",
  async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/students");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addStudentAsync = createAsyncThunk(
  "students/add",
  async ({ firstName, lastName, email }) => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/students", {
        firstName,
        lastName,
        email,
      });
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

export const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      return action.payload;
    }),
      builder.addCase(addStudentAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
    builder.addCase(removeStudentAsync.fulfilled, (state, action) => {
      return state.filter((student) => student.id !== action.payload.id);
    });
  },
});

export const selectStudents = (state) => state.students;

export default studentsSlice.reducer;