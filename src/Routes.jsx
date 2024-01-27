import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Bubblechart = React.lazy(() => import("pages/Bubblechart"));
const WorldhexagonmapOne = React.lazy(() => import("pages/WorldhexagonmapOne"));
const Worldhexagonmap = React.lazy(() => import("pages/Worldhexagonmap"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Worldhexagonmap />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/worldhexagonmapone" element={<WorldhexagonmapOne />} />
          <Route path="/bubblechart" element={<Bubblechart />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
