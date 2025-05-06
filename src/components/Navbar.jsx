import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes, FaHeadset } from "react-icons/fa";
import logo from "../../src/assets/WhatsApp Image 2025-05-03 at 19.54.14_ab485f9b.jpg";
import { RiAdminFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Banking & Insurance"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExamsOpen, setMobileExamsOpen] = useState(false);

  const [option, setoption] = useState(false);

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown on route change
  const location = useLocation();
  useEffect(() => {
    setoption(false);
    setMobileMenuOpen(false);
  }, [location]);

  console.log(location);

  const examData = {
    "Banking & Insurance": [
      {
        name: "IBPS RRB PO",
        logo: "https://cdn.guidely.in/images/courses/161492190544.png",
      },
      {
        name: "SBI Apprentice",
        logo: "https://cdn.guidely.in/images/courses/169365435860.png",
      },
      {
        name: "J & K Bank",
        logo: "https://cdn.guidely.in/images/courses/161492275822.png",
      },
      {
        name: "ECGC PO",
        logo: "https://cdn.guidely.in/images/courses/161492359817.png",
      },
      {
        name: "UCO Bank",
        logo: "https://cdn.guidely.in/images/courses/173701775873.png",
      },
      {
        name: "EPFO",
        logo: "https://cdn.guidely.in/images/courses/1595329618.png",
      },
      {
        name: "IBPS RRB Clerk",
        logo: "https://cdn.guidely.in/images/courses/161492194513.png",
      },
      {
        name: "SBI PO",
        logo: "https://cdn.guidely.in/images/courses/161492185581.png",
      },
      {
        name: "Saraswat Bank BDO",
        logo: "https://cdn.guidely.in/images/courses/161613942667.png",
      },
      {
        name: "RBI Office Attendant",
        logo: "https://cdn.guidely.in/images/courses/161492365233.png",
      },
      {
        name: "IBPS PO",
        logo: "https://cdn.guidely.in/images/courses/161492201778.png",
      },
      {
        name: "Descriptive Paper",
        logo: "https://cdn.guidely.in/images/courses/163773953873.png",
      },
      {
        name: "SBI Clerk",
        logo: "https://cdn.guidely.in/images/courses/1614923918100.png",
      },
      {
        name: "IBPS Clerk",
        logo: "https://cdn.guidely.in/images/courses/161492190544.png",
      },
      {
        name: "SIDBI AM",
        logo: "https://cdn.guidely.in/images/courses/164682657811.png",
      },
      {
        name: "Saraswat Bank Junior",
        logo: "https://cdn.guidely.in/images/courses/161494030927.png",
      },
      {
        name: "LIC AAO",
        logo: "https://cdn.guidely.in/images/courses/162620226920.png",
      },
      //   {
      //     name: "Karnataka Bank",
      //     logo: "../../src/assets/logos/karnataka_bank.png",
      //   },
    ],
    SSC: ["SSC CGL", "SSC CHSL", "SSC MTS"],
    "Regulatory bodies": ["RBI Grade B", "SEBI Grade A"],
    Railway: ["RRB NTPC", "RRB JE"],
  };

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleMobileExams = () => setMobileExamsOpen((prev) => !prev);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // If currentUser is not null, user is logged in
    });
    return () => unsubscribe(); // Clean up the listener
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => setMessage("❌ Sign-Out Error: " + error.message));
  };

  return (
    <nav className="relative z-50 bg-gradient-to-r from-[#f7f7f7] to-[#f5f7ff] shadow">
      <div className="flex justify-between items-center px-4 py-4 md:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-15">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-12 w-14 scale-170" />
          </div>

          {/* Desktop Nav */}
          {option && (
            <ul className="hidden md:flex gap-6 font-medium text-gray-800 text-[0.94rem] cursor-pointer">
              <li className="relative group cursor-pointer">
                <div className="flex items-center gap-1">
                  Exams <IoMdArrowDropdown />
                </div>

                {/* Mega Menu for Desktop */}
                <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg border-t-2 border-violet-700 rounded-lg w-[1000px] min-h-[300px] z-50 transition-all duration-300">
                  {/* Sidebar */}
                  <div className="w-64 p-4 border-r">
                    {Object.keys(examData).map((item) => (
                      <div
                        key={item}
                        onMouseEnter={() => setSelectedCategory(item)}
                        className={`px-4 py-3 mb-2 ${
                          selectedCategory === item
                            ? "bg-pink-100"
                            : "bg-pink-50"
                        } hover:bg-pink-100 text-sm rounded cursor-pointer flex justify-between items-center`}
                      >
                        {item} <IoMdArrowDropdown />
                      </div>
                    ))}
                  </div>

                  {/* Exam Cards */}
                  <div className="flex-1 grid grid-cols-3 gap-4 p-4 overflow-y-auto max-h-[400px]">
                    {examData[selectedCategory]?.map((exam, index) => (
                      <div
                        key={index}
                        className="bg-white h-min rounded px-4 py-3 shadow-sm hover:shadow-md hover:bg-green-50 text-sm font-medium text-gray-800 cursor-pointer flex items-center gap-2"
                      >
                        {typeof exam !== "string" && exam.logo && (
                          <img
                            src={exam.logo}
                            alt={`${exam.name} logo`}
                            className="h-6 w-6 object-contain"
                          />
                        )}
                        <span>
                          {typeof exam === "string" ? exam : exam.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="relative group cursor-pointer">
                <div className="flex items-center gap-1">
                  Mock Test <IoMdArrowDropdown />
                </div>
                {/* Dropdown on hover */}
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg border-t-green-100 rounded-lg w-40 z-50">
                  {[
                    "Mock Test 1",
                    "Mock Test 2",
                    "Mock Test 3",
                    "Mock Test 4",
                  ].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-green-100 text-sm hover:text-violet-950 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>

              <li className="relative group cursor-pointer">
                <div className="flex items-center gap-1">
                  Mock Test <IoMdArrowDropdown />
                </div>
                {/* Dropdown on hover */}
                <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg border-t-green-100 rounded-lg w-40 z-50">
                  {[
                    " Guidely Books 2025",
                    " Topic Tests",
                    "Descriptive Paper",
                    "eBooks",
                    "Books Hard Copy",
                    "Sectional Tests",
                    " Free Pdfs",
                    "Practice Quiz",
                    "CA Smart Quiz",
                    "Optimum CA",
                  ].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 hover:bg-green-100 text-sm hover:text-violet-950 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              <li>NEET & JEE</li>
              <li>Materials</li>
              <li>Courses</li>
            </ul>
          )}
        </div>

        {user ? (
          <div className="text-center flex gap-3 items-center group relative">
            <img
              src={user.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full border-4 border-indigo-500"
            />
            <div>
              <h2 className="text-sm font-semibold text-gray-800">
                {user.displayName}
              </h2>
            </div>

            {/* Hidden Sign Out button, shown on hover */}
            <button
              onClick={handleSignOut}
              className="absolute top-full mt-2 left-0 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow px-4 py-1 transition-opacity opacity-0 group-hover:opacity-100"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            {" "}
            <div className="flex items-center gap-3">
              <FaHeadset className="text-lg text-gray-700 hidden md:block" />
              <button
                className="hidden md:block border border-blue-500 text-blue-600 font-medium px-4 py-1.5 rounded hover:bg-blue-50"
                onClick={() => setoption(!option)}
              >
                Login
              </button>
              <button className="hidden md:flex bg-blue-600 text-white font-medium px-5 py-1.5 rounded hover:bg-blue-700 items-center gap-1">
                Sign Up <span className="text-lg">→</span>
              </button>

              {/* Hamburger for Mobile */}
              <button onClick={toggleMobileMenu} className="md:hidden text-xl">
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </>
        )}
        {/* Right: Headset & Buttons */}
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-6">
          <ul className="flex flex-col gap-3 text-gray-800 font-medium">
            <li>
              <button
                onClick={toggleMobileExams}
                className="flex items-center justify-between w-full py-2"
              >
                Exams <IoMdArrowDropdown />
              </button>
              {mobileExamsOpen && (
                <div className="pl-4 pt-2">
                  {Object.keys(examData).map((category) => (
                    <div key={category} className="mb-3">
                      <h4 className="font-semibold text-sm">{category}</h4>
                      <ul className="pl-2 mt-1 space-y-1 text-sm text-gray-600">
                        {examData[category].map((exam, index) => (
                          <li key={index} className="flex items-center gap-2">
                            {typeof exam !== "string" && exam.logo && (
                              <img
                                src={exam.logo}
                                alt={exam.name}
                                className="h-5 w-5"
                              />
                            )}
                            <span>
                              {typeof exam === "string" ? exam : exam.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li>Mock Test</li>
            <li>Engage</li>
            <li>Materials</li>
            <li>Courses</li>
            <li>Pricing</li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <button
              className="border border-blue-500 text-blue-600 font-medium px-4 py-1.5 rounded hover:bg-blue-50"
              onClick={() => setoption(!option)}
            >
              Login
            </button>
            <button className="bg-blue-600 text-white font-medium px-5 py-1.5 rounded hover:bg-blue-700">
              Sign Up →
            </button>
          </div>
        </div>
      )}

      {option && (
        <div className="w-72 p-4 bg-white shadow-xl rounded-2xl absolute right-6 flex flex-col items-center space-y-4">
          <p className="text-lg font-semibold text-gray-700">Join as a</p>

          <div className="flex gap-4 w-full justify-between">
            <div className="flex flex-col items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-1 transition-all duration-200 w-1/2 cursor-pointer">
              <Link to="/main/student/pages/login">
                <RiAdminFill size={"2rem"} />
                <p className="mt-1 text-sm font-medium">Admin</p>
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-1 transition-all duration-200 w-1/2 cursor-pointer">
              <Link to="/main/student/pages/login">
                <PiStudentFill size={"2rem"} />
                <p className="mt-1 text-sm font-medium">Student</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
