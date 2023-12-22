import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import App from "./App";
import About from "./About";
import AboutHistory from "./AboutHistory";
import Hooks from "./Hooks";
import Graphql from "./Graphql";
import RenderItems from "./RenderItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/graphql" element={<Graphql />} />
        <Route path="/renderItems" element={<RenderItems />} />
        <Route path="about" element={<About />}>
          <Route path="AboutHistory" element={<AboutHistory />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
