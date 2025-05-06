import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaArrowAltCircleRight } from "react-icons/fa";
import InfiniteScrollCarousel from "./carousel";
import GoogleAd from "./googleAD/googlead";
import RecentlyUpdatedQuestions from "./RecentQus";
import InnovationCards from "./Inovation";
import StudentSection from "./StudentCard";
import Service from "./Service";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
// Define each card's background color in the data
const data = {
  popular: [
    {
      icon: "https://guidely.in/assets/icons/pdf-home-icon.png",
      label: "PDF Course",
      badge: "2025",
      color: "bg-orange-100",
    },
    {
      icon: "https://guidely.in/assets/icons/mock-home-icon.png",
      label: "Mock Tests",
      color: "bg-pink-100",
    },
    {
      icon: "https://guidely.in/assets/icons/freePdf-home-icon.png",
      label: "GOAT",
      badge: "New",
      color: "bg-orange-200",
    },
    {
      icon: "https://guidely.in/assets/icons/freePdf-home-icon.png",
      label: "Super Plan",
      color: "bg-violet-200",
    },
  ],
  free: [
    {
      icon: "https://guidely.in/assets/icons/magazine.png",
      label: "Speed Test",
      badge: "New",
      color: "bg-red-200",
    },
    {
      icon: "https://guidely.in/assets/icons/magazine.png",
      label: "Practice",
      color: "bg-red-50",
    },
    {
      icon: "https://guidely.in/assets/icons/ga-rrb.png",
      label: "Current",
      color: "bg-green-200",
    },
    {
      icon: "https://guidely.in/assets/icons/freePdf-home-icon.png",
      label: "Free PDF",
      color: "bg-orange-200",
    },
  ],
  plans: [
    {
      icon: "https://guidely.in/assets/icons/pdfcourse-home-icon.png",
      label: "Super Plan",
      badge: "Recommended",
      color: "bg-green-100",
    },
    {
      icon: "https://guidely.in/assets/icons/pdf-home-icon.png",
      label: "NEET",
      color: "bg-gray-300",
    },
    {
      icon: "https://guidely.in/assets/icons/pdfcourse-home-icon.png",
      label: "PDF Course",
      color: "bg-green-300",
    },
    {
      icon: "https://guidely.in/assets/icons/combo-home-icon.png",
      label: "All Combo",
      color: "bg-pink-300",
    },
  ],
  exams: [
    {
      icon: "https://cdn.guidely.in/images/courses/161492190544.png",
      label: "IBPS RRB PO",
      color: "bg-white",
    },
    {
      icon: "https://cdn.guidely.in/images/courses/161492190544.png",
      label: "IBPS RRB Clerk",
      color: "bg-white",
    },
    {
      icon: "https://cdn.guidely.in/images/courses/1614923918100.png",
      label: "SBI Clerk",
      color: "bg-white",
    },
    {
      icon: "https://cdn.guidely.in/images/courses/1614923918100.png",
      label: "SBI PO",
      color: "bg-white",
    },
  ],
};

// Motion variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 3,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const Card = ({ item }) => (
  <motion.div
    className="rounded-2xl p-2 flex flex-col items-center relative"
    variants={cardVariants}
  >
    {item.badge && (
      <span className="absolute -top-2 text-xs font-semibold bg-yellow-300 rounded-full px-1">
        {item.badge}
      </span>
    )}
    <img
      src={item.icon}
      className={`${item.color} p-3 rounded-2xl text-4xl scale-105`}
      alt={item.label}
    />
    <div className="mt-2 text-xs font-medium text-center">{item.label}</div>
  </motion.div>
);

const Section = ({ title, items, viewMore }) => (
  <motion.div variants={containerVariants} initial="hidden" animate="visible">
    <div className="rounded-2xl p-3 shadow-lg shadow-gray-400/50 hover:shadow-lg hover:shadow-blue-200/50 cursor-pointer ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {viewMore && (
          <a href="#" className="text-purple-600">
            View More
          </a>
        )}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {items.map((it, i) => (
          <Card key={i} item={it} />
        ))}
      </div>
    </div>
  </motion.div>
);

const Banner = () => (
  <motion.div
    className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl p-6 flex items-center justify-between h-full shadow-lg"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9 }}
  >
    <div>
      <h1 className="text-2xl font-bold">
        Create your <br /> own profile
      </h1>
      <p className="mt-2">
        Join today and unlock
        <br /> your performance dashboard
      </p>
      <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold z-200">
        Join Now
      </button>
    </div>
    <div className="text-6xl font-extrabold opacity-20 absolute right-20">
      EXAM
      <br />
      MANIA
    </div>
  </motion.div>
);

const bgVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
const AnimatedBlob = ({ className, style }) => (
  <motion.div
    className={`absolute rounded-full filter blur-3xl opacity-40 ${className}`}
    animate={{
      x: [0, 100, 0],
      y: [0, -100, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={style}
  />
);

export default function ExamSections() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // To store the user's role
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setRole(data.role); // Store the role (admin or student)
        } else {
          setMessage("User data not found.");
        }
      } else {
        setUser(null);
        setRole(null);
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  console.log(role);

  return (
    <>
      <div className="relative h-min w-full bg-gray-50 overflow-hidden">
        <div className="text-center mt-12 px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            One Destination for{" "}
            <span className="font-bold">Complete Exam Preparation</span>
          </h1>

          <div className="text-gray-600 mt-2 text-lg flex flex-wrap justify-center items-center gap-4 cursor-pointer">
            <span className="text-gray-600">Learn</span>
            <span className="text-green-600">
              <FaArrowAltCircleRight />
            </span>
            <span className="text-gray-600">Practice</span>
            <span className="text-green-600">
              <FaArrowAltCircleRight />
            </span>
            <span className="text-gray-600">Improve</span>
            <span className="text-green-600">
              <FaArrowAltCircleRight />
            </span>
            <span className="text-gray-600">Succeed</span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <button className="bg-green-500 text-white px-7 py-3 rounded-md hover:bg-green-600 font-medium cursor-pointer">
              Get Started For Free
            </button>
            <button className="bg-transparent text-black border-2 border-black px-6 py-3 rounded-md font-medium cursor-pointer">
              Checkout our courses
            </button>
            {role === "admin" ? (
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium cursor-pointer">
              <Link to="/admin-dashboard">
                Admin Dashboard
                </Link>
              </button>
             
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Animated colorful blobs */}
        <AnimatedBlob
          className="w-80 h-80 bg-pink-300"
          style={{ top: "-5%", left: "-10%" }}
        />
        <AnimatedBlob
          className="w-96 h-96 bg-purple-300"
          style={{ bottom: "-10%", right: "-10%" }}
        />
        <AnimatedBlob
          className="w-72 h-72 bg-yellow-200"
          style={{ top: "30%", left: "40%" }}
        />

        {/* Content Area */}
        <div className="relative z-10 p-6 grid grid-rows-[auto_auto_auto] mt-10">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Section title="Popular Products" items={data.popular} />
            <Section title="Free Materials" items={data.free} />
            <Section title="Plans" items={data.plans} />
          </div>

          {/* Middle row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full mt-4">
            <div className="bg-white rounded-2xl shadow-lg p-2">
              <Section title="Upcoming Exams" items={data.exams} viewMore />
            </div>
            <Banner />
          </div>

          {/* Bottom row */}
        </div>
        <InfiniteScrollCarousel />
      </div>

      <RecentlyUpdatedQuestions />
      <InnovationCards />
      <StudentSection />
      <Service />
      <Footer />
      {/* <GoogleAd slot="3539806634" /> */}
    </>
  );
}
