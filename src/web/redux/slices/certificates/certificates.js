import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

const initialState = {
  data: null,
  status: "loading",
};

export const fetchCertificates = createAsyncThunk(
  "certificates/fetchCertificates",
  async () => {
    const { data } = await axios.get("/api/certificates");
    return data;
  }
);

export const fetchCreateCertificate = createAsyncThunk(
  "certificates/fetchCreateCertificate",
  async (input) => {
    const { data } = await axios.post("/api/certificates", input);
    return data;
  }
);

export const fetchDeleteCertificate = createAsyncThunk(
    "certificates/fetchDeleteCertificate",
    async (id) => {
      const { data } = await axios.delete(`/api/certificates/${id}`);
      return data;
    }
  );

const certificatesSlice = createSlice({
  name: "certificates",
  initialState,
  reducers: {},
  extraReducers: {
    //get all certificates
    [fetchCertificates.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchCertificates.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchCertificates.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    //create certificate
    [fetchCreateCertificate.pending]: (state) => {
        state.status = "loading";
      },
      [fetchCreateCertificate.fulfilled]: (state, action) => {
        state.status = "loaded";
        state.data = state.data?.push(action.payload);
      },
      [fetchCreateCertificate.rejected]: (state) => {
        state.status = "error";
      },

      //delete certificate
      [fetchDeleteCertificate.fulfilled]: (state, action) => {
        state.status = "loaded";
        state.data = state.data.filter(obj => obj._id != action.meta.arg);
      },
  },
});

export const certificatesReducer = certificatesSlice.reducer;
