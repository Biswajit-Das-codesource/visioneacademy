import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ExamSections from "./components/HeroSection.jsx";
import Footer from "./components/Footer.jsx";
import StudentLogin from "./Cards/UserCard.jsx";
import CreateEntry from "./Admin/SendCurrentAffair.jsx";
import AdminDashboard from "./Admin/AdminPage.jsx";
import AllusersDetails from "./Admin/AllusersDetails.jsx";

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<ExamSections/>
      },
      {
        path:"/main/student/pages/login",
        element:<StudentLogin/>
      }
    ],
    
  },
  {
    path:"/admin-dashboard",
    element:<AdminDashboard/>,
    children:[
      {
        path:"/admin-dashboard",
        element:<CreateEntry/>
      },
      {
        path:"/admin-dashboard/send/currentaffairs",
        element:<CreateEntry/>
      },
      {
        path:"/admin-dashboard/current/users",
        element:<AllusersDetails/>
      }
    ]
  }
 
]);

createRoot(document.getElementById("root")).render(
 
    <StrictMode>
      <RouterProvider router={reactRouter} />
    </StrictMode>
  
);
