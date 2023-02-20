const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchCampusAsync = createAsyncThunk("campus/fetch", async (id) => {
    try {
        const { data } = await axios.get(
            `http://localhost:3000/api/campuses/${id}`
        );
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const editCampusAsync = createAsyncThunk("campus/edit", async (campus) => {
    try {
        const { id, name, address } = campus;
        const updatedStudent = { id, name, address };
        const { data } = await axios.put(
            `http://localhost:3000/api/campuses/${campus.campusId}`,
            updatedStudent
        );
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

export const campusSlice = createSlice({
    name: "campus",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        }),
            builder.addCase(removeCampusAsync.fulfilled, (state, action) => {
                return (state = action.payload);
            });
        builder.addCase(editCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectCampus = (state) => state.campus;

export default campusSlice.reducer;
