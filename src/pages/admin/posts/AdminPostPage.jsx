import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, fetchRemovePosts } from "../../../web/redux/slices/post/post";
import ShortPost from "./components/short-post/ShortPost";

import "./styles/styles.css";

const AdminPostPage = () => {
    const dispatch = useDispatch();
    const news = useSelector((store) => store.posts.posts.items);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

  return (
    <div className="admin-posts">
      <div className="container">
        <div className="admin-posts__inner">
            <h1 className="admin-post__title">Страница работы с новостями</h1>
            <Link className="admin-post__button" to="/admin/posts/create">Создать</Link>
            <div className="admin-post__list">
                {
                    news?.map((post) => (
                        <ShortPost post={post}/>
                    ))
                }
            </div>    
        </div>
      </div>
    </div>
  );
};

export default AdminPostPage;
