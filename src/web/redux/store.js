import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/auth";
import { certificatesReducer } from "./slices/certificates/certificates";
import { postsReducer } from "./slices/post/post";

const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer,
        certificates: certificatesReducer,
    }
});

export default store;