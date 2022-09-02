import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const {data} = await axios.get('/api/posts');
    return data;
});

export const fetchRemovePosts = createAsyncThunk('posts/fetchRemovePosts', async (id) => {
    const { data } = await axios.delete(`/api/posts/${id}`);
    return data;
});

export const fetchLoadImage = createAsyncThunk('posts/fetchLoadImage', async (data) => {
    const result = await axios.post("/upload", data);
    return result.data;
});

export const fetchPostNews = createAsyncThunk('posts/fetchPostNews', async (inputData) => {
    const { data } = await axios.post("/api/posts", inputData);
    return data;
});

export const fetchPostByID = createAsyncThunk('posts/fetchPostByID', async (id) => {
    const { data }  = await axios.get(`/api/posts/${id}`);
    return data;
});

export const fetchUpdatePost = createAsyncThunk('posts/fetchUpdatePost', async (inputData) => {
    const { data } = await axios.patch(`/api/posts`, inputData);
    return data;
});

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.posts.items = [];
            state.posts.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded';
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = 'error';
        },
        [fetchRemovePosts.pending]: (state, action) => {
            state.posts.items = state.posts.items.filter(obj => obj._id != action.meta.arg);
        },
    }
});

export const postsReducer = postsSlice.reducer;