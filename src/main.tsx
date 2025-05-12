import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import React, { lazy, Suspense } from "react";
import Layout from "./pages/Layout.tsx";
import NotFound from "./pages/NotFound.tsx";
import { default as DashBoardLayout } from "./pages/Dashboard/Layout.tsx";
import { default as DashBoardHome } from "./pages/Dashboard/Home.tsx";
import Overview from "./pages/Dashboard/Overview.tsx";
import Setting from "./pages/Dashboard/Setting.tsx";
import UserProfile from "./pages/Dashboard/UserProfile.tsx";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />

          <Route path="dashboard" element={<DashBoardLayout />}>
            <Route index element={<DashBoardHome />}></Route>
            <Route path="overview" element={<Overview />}></Route>
            <Route path="setting" element={<Setting />}></Route>
            <Route path="user/:id" element={<UserProfile />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
