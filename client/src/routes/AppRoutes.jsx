import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      {/* 404 page outside of layout (optional) */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
