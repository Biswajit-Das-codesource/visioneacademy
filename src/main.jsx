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
import StudentDashboard from "./Student/StudentPage.jsx";
import MockQuiz from "./Student/MockTest.jsx";
import ExamList from "./Student/TestOption.jsx";
import StudentCurrentAffair from "./Student/CurrentAffair.jsx";
import { AuthProvider } from "./Auth/Authcontext.jsx";
import PrivateRoute from "./Auth/Privateroute.jsx";
import Unauthorized from "./Auth/Unauthorized.jsx";
import Railway_GD_2022 from "./QuestionsSets/Railway_GD_2022.jsx";
import Railway_GD_2023 from "./QuestionsSets/Railway_GD_2023.jsx";
import Sbi_cleark_2023_24 from "./QuestionsSets/Sbi_cleark_2023_24.jsx";
import Sbi_cleark2022 from "./QuestionsSets/Sbi_cleark2022.jsx";
import Sbi2024_25 from "./QuestionsSets/Sbi2024_25.jsx";
import Ssc_cgl_2023 from "./QuestionsSets/Ssc_cgl_2023.jsx";
import Ssc_cgl_2024 from "./QuestionsSets/Ssc_cgl_2024.jsx";
import UserProfile from "./Admin/Userprofile.jsx";

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ExamSections /> },
      { path: "/main/student/pages/login", element: <StudentLogin /> },
    ],
  },
  {
    path: "/admin-dashboard",
    element: (
      <PrivateRoute role="admin">
        <AdminDashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "/admin-dashboard", element: <CreateEntry /> },
      {
        path: "/admin-dashboard/send/currentaffairs",
        element: <CreateEntry />,
      },
      { path: "/admin-dashboard/current/users", element: <AllusersDetails /> },
      { path: "/admin-dashboard/user/:id", element: <UserProfile /> },
    ],
  },
  {
    path: "/student-dashboard",
    element: (
      <PrivateRoute role="student">
        <StudentDashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "/student-dashboard", element: <CreateEntry /> },
      { path: "/student-dashboard/exam-list", element: <ExamList /> },
      {
        path: "/student-dashboard/currentaffairs",
        element: <StudentCurrentAffair />,
      },
      {
        path: "/student-dashboard/railway_GD_2022",
        element: <Railway_GD_2022 />,
      },
      {
        path: "/student-dashboard/railway_GD_2023",
        element: <Railway_GD_2023 />,
      },
      {
        path: "/student-dashboard/Sbi_clerk_2023_24",
        element: <Sbi_cleark_2023_24 />,
      },
      {
        path: "/student-dashboard/Sbi_clerk_2022",
        element: <Sbi_cleark2022 />,
      },
      {
        path: "/student-dashboard/Sbi_clerk_2024-25",
        element: <Sbi2024_25 />,
      },
      {
        path: "/student-dashboard/Ssc_cgl_2023",
        element: <Ssc_cgl_2023 />,
      },
      {
        path: "/student-dashboard/Ssc_cgl_2024",
        element: <Ssc_cgl_2024 />,
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={reactRouter} />
    </AuthProvider>
  </StrictMode>
);
