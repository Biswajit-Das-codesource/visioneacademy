import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser); // If currentUser is not null, user is logged in
      });
      return () => unsubscribe(); // Clean up the listener
    }, []);
  
    console.log(user)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed z-20 inset-y-0 left-0 w-64 bg-black text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8">Hii,{user?.displayName}</h2>
          <ul className="space-y-5">
            <Link to="/student-dashboard/currentaffairs">
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                Current Affairs
              </li>
            </Link>
            <Link to="/student-dashboard/exam-list">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Mock Tests
            </li>
            </Link>
            <Link to="/admin-dashboard/current/users">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
             👨‍🎓 Students Login
            </li>
            </Link>
            <Link to="">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Student Mark List
            </li>
            </Link>
            <Link to="">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Career Graph
            </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden absolute top-4 left-4 z-30 bg-white p-2 rounded shadow"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content */}
      <main className="flex-1  ml-0  overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentDashboard;
