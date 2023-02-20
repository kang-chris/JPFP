const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchCampusesAsync = createAsyncThunk(
  "campuses/fetchAll",
  async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/campuses");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addCampusAsync = createAsyncThunk(
  "campuses/add",
  async ({ name, address }) => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/campuses", {
        name,
        address,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeCampusAsync = createAsyncThunk(
  "campuses/remove",
  async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/campuses/${id}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    }),
      builder.addCase(addCampusAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      });
    builder.addCase(removeCampusAsync.fulfilled, (state, action) => {
      return state.filter((campus) => campus.id !== action.payload.id);
    });
  },
});

export const selectCampuses = (state) => state.campuses;

export default campusesSlice.reducer;
