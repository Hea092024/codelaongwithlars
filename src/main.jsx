import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./view/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>error</p>,
    children: [{index: true, element: <div>index</div>},{ path: "about", element: <AboutPage /> }],
  },
  {
    path: "lars",
    element: <div>lars</div>,
  },
  { path: "*", element: <div>404 not found</div> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
