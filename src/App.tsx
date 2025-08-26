import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Actualites from "./components/Actualites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,        // default route ("/")
        element: <Home />,
      },
      {
        path: "about",      // "/about"
        element: <Actualites />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
