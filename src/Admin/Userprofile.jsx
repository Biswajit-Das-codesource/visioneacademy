import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import moment from "moment";

const COLORS = ["#00ff7f", "#D34444"]; // Correct, Incorrect

const UserProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", id));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          setMessage("User not found");
        }
      } catch (error) {
        setMessage("Error fetching user: " + error.message);
      }
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (message) return <p className="text-center text-red-400">{message}</p>;

  return (
    <div className="bg-black h-screen">
      <div className="p-6 mx-auto bg-black text-white shadow max-w-7xl w-full">
        <h1 className="text-2xl font-semibold mb-4 mt-3">
          {userData.name}'s Profile
        </h1>
        <p>
          <strong>Name:</strong> {userData.name.toUpperCase()}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Joined:</strong>{" "}
          {moment(userData.createdAt?.seconds * 1000).format(
            "MMMM Do YYYY, h:mm A"
          )}
        </p>

        <div className="mt-20">
          <h2 className="text-xl font-semibold mb-4">All Quiz Attempts</h2>
          {userData.quizResults?.length > 0 ? (
            userData.quizResults.map((quiz, index) => {
              const [score, total] = quiz.score.split("/").map(Number);
              const incorrect = total - score; // Calculate incorrect answers
              const breakdown = [
                { name: "Correct", value: score },
                { name: "Incorrect", value: incorrect },
              ];

              return (
                <div
                  key={index}
                  className="p-4 mb-8 border border-gray-700 rounded-md shadow-sm bg-gray-900"
                >
                  <p>
                    <strong>Exam:</strong> {quiz.exam}
                  </p>
                  <p>
                    <strong>Score:</strong> {quiz.score}
                  </p>
                  <p>
                    <strong>Total Questions:</strong> {quiz.total}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {moment(quiz.date).format("MMMM Do YYYY, h:mm A")}
                  </p>

                  <div className="mt-4 flex justify-center">
                    <PieChart width={300} height={300} className="sm:w-[400px] sm:h-[300px]">
                      <Pie
                        data={breakdown}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label
                      >
                        {breakdown.map((entry, i) => (
                          <Cell
                            key={`cell-${i}`}
                            fill={COLORS[i % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f3437",
                          color: "#ffe",
                          border: "1px solid #4b55cd",
                        }}
                        itemStyle={{ color: "#fff" }}
                      />
                      <Legend />
                    </PieChart>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No quiz data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
