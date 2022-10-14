import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import MainPage from "./pages/main/MainPage";
import TechnicalPage from "./pages/technical/TechnicalPage";
import CertificatePage from "./pages/certificates/CertificatePage";
import JobsPage from "./pages/jobs/JobsPage";
import NewsPage from "./pages/news/news";
import FullPostPage from "./pages/full-post/FullPostPage";
import ErrorPage from "./pages/error/ErrorPage";

import "./fonts/oswald.css";
import "./fonts/opensans.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPage from "./pages/login/LoginPage";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./web/redux/slices/auth/auth";
import AdminLayout from "./layouts/admin/AdminLayout";
import AdminPostPage from "./pages/admin/posts/AdminPostPage";
import CreatePostPage from "./pages/admin/posts/create/CreatePostPage";
import AdminCertificatesPage from "./pages/admin/certificates/AdminCertificatesPage";
import CertificatesCreatePage from "./pages/admin/certificates/create/CertificatesCreatePage";
import FeedbackPage from "./pages/admin/feedback/Feedback";
import AdminJobPage from "./pages/admin/jobs/AdminJobPage";
import JobsCreatePage from "./pages/admin/jobs/create/JobsCreatePage";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/technical" element={<TechnicalPage />} />
        <Route path="/certificates" element={<CertificatePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<FullPostPage />} />
      </Route>

      <Route
        path="/admin"
        element={<AdminLayout></AdminLayout>}
      >
        <Route path="/admin/posts" element={<AdminPostPage />} />
        <Route path="/admin/posts/create" element={<CreatePostPage />} />
        <Route path="/admin/posts/update/:id" element={<CreatePostPage />} />
        <Route path="/admin/certificates" element={<AdminCertificatesPage />} />
        <Route path="/admin/certificates/create" element={<CertificatesCreatePage />} />
        <Route path="/admin/jobs" element={<AdminJobPage />} />
        <Route path="/admin/jobs/create" element={<JobsCreatePage />} />
        <Route path="/admin/help" element={<FeedbackPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="*" exact={true} element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
