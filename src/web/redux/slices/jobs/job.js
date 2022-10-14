import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const {data} = await axios.get('/api/jobs');
    return data;
});

export const fetchRemoveJob = createAsyncThunk('posts/fetchRemoveJob', async (id) => {
    const { data } = await axios.delete(`/api/jobs/${id}`);
    return data;
});

export const fetcCreateJob = createAsyncThunk('jobs/fetchCreateJob', async (inputData) => {
    const { data } = await axios.post("/api/jobs", inputData);
    return data;
});

const initialState = {
    jobs: {
        items: [],
        status: 'loading',
    },
};

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchJobs.pending]: (state) => {
            state.jobs.items = [];
            state.jobs.status = 'loading';
        },
        [fetchJobs.fulfilled]: (state, action) => {
            state.jobs.items = action.payload;
            state.jobs.status = 'loaded';
        },
        [fetchJobs.rejected]: (state) => {
            state.jobs.items = [];
            state.jobs.status = 'error';
        },

        [fetchRemoveJob.pending]: (state, action) => {
            state.jobs.items = state.jobs.items.filter(obj => obj._id !== action.meta.arg);
        },

        [fetcCreateJob.pending]: (state) => {
            state.jobs.status = 'loading';
        },
        [fetcCreateJob.fulfilled]: (state, action) => {
            state.jobs.items = state.jobs?.push(action.payload);
            state.jobs.status = 'loaded';
        },
        [fetcCreateJob.rejected]: (state) => {
            state.jobs.status = 'error';
        },
    }
});

export const jobsReducer = jobSlice.reducer;