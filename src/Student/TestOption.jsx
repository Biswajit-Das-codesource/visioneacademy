import React, { useState } from "react";
import { BookOpen, Landmark, Search } from "lucide-react";
import { Link } from "react-router-dom";

const exams = [
  {
    name: "railway GD 2022",
    questions: 50,
    level: "Medium",
    route: "/student-dashboard/railway_GD_2022",
  },
  {
    name: "railway GD 2023",
    questions: 50,
    level: "Hard",
    route: "/student-dashboard/railway_GD_2023",
  },
  {
    name: "SBI Clerk 23-24",
    questions: 82,
    level: "Easy",
    route: "/student-dashboard/Sbi_clerk_2023_24",
  },
  {
    name: "Sbi clerk 2022",
    questions: 50,
    level: "Medium",
    route: "/student-dashboard/Sbi_clerk_2022",
  },
  {
    name: "Sbi clerk 2024-25",
    questions: 70,
    level: "Hard",
    route: "/student-dashboard/Sbi_clerk_2024-25",
  },
  {
    name: "Ssc_cgl_2023",
    questions: 50,
    level: "Medium",
    route: "/student-dashboard/Ssc_cgl_2023",
  },
  {
    name: "Ssc_cgl_2024",
    questions: 50,
    level: "Hard",
    route: "/student-dashboard/Ssc_cgl_2024",
  }
];

const getBadgeColor = (level) => {
  switch (level.toLowerCase()) {
    case "hard":
      return "bg-red-100 text-red-700";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "easy":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const ExamList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExams = exams.filter((exam) =>
    exam.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      {/* Logo Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <div className="flex items-center space-x-2">
          <Landmark size={28} className="text-blue-700" />
          <h1 className="text-2xl font-bold text-blue-700 text-center">
            VisioneAcademy
          </h1>
        </div>
      </div>

      {/* Search Field */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search exams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">
        📚 Available Exams
      </h2>

      {filteredExams.length === 0 ? (
        <p className="text-center text-gray-500">No exams found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
          {filteredExams.map((exam, index) => (
            <>
            <Link to={exam.route}>
              <div
                key={index}
                className="p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white"
              >
                <div className="flex items-center mb-3">
                  <BookOpen className="text-blue-600 mr-2" size={20} />
                  <h3 className="text-lg font-semibold text-blue-800">
                    {exam.name.toUpperCase()}
                  </h3>
                </div>
                <p className="text-gray-700 mb-2">
                  📝 Total Questions:{" "}
                  <span className="font-semibold">{exam.questions}</span>
                </p>
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getBadgeColor(
                    exam.level
                  )}`}
                >
                  🎯 {exam.level}
                </span>
              </div>
              </Link>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExamList;
