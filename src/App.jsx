import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ExamSections from "./components/HeroSection";
import RecentlyUpdatedQuestions from "./components/RecentQus";
import InnovationCards from "./components/Inovation";
import StudentSection from "./components/StudentCard";

import Footer from "./components/Footer";
import Service from "./components/Service";
import GoogleAd from "./components/googleAD/googlead";
import GoogleAuth from "./Cards/UserCard";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./config/firebase";

function App() {
  // console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);

  // const [user, setUser] = useState(null);
  // const [role, setRole] = useState(null); // To store the user's role
  // const [message, setMessage] = useState("");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);

  //       const userRef = doc(db, "users", currentUser.uid);
  //       const userSnap = await getDoc(userRef);

  //       if (userSnap.exists()) {
  //         const data = userSnap.data();
  //         setRole(data.role); // Store the role (admin or student)
  //       } else {
  //         setMessage("User data not found.");
  //       }
  //     } else {
  //       setUser(null);
  //       setRole(null);
  //     }
  //   }); 

  //   // Cleanup the listener on unmount
  //   return () => unsubscribe();
  // }, []);

  // console.log(role)

  // Navigate based on the role of the user
  // useEffect(() => {
  //   if (role) {
  //     if (role === "admin") {
  //       navigate("/admin-dashboard");
  //     } else if (role === "student") {
  //       navigate("/student-home");
  //     }
  //   }
  // }, [role, navigate]);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
