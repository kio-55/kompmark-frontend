import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/auth";
import { certificatesReducer } from "./slices/certificates/certificates";
import { postsReducer } from "./slices/post/post";
import { jobsReducer } from "./slices/jobs/job";

const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
        certificates: certificatesReducer,
        jobs: jobsReducer,
    }
});

export default store;