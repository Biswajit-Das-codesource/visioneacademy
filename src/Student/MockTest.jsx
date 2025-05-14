import { useState } from "react";
import { db, auth } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const allExams = {
  exam1: {
    title: "General Knowledge",
    questions: [
      {
        id: "q1",
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "Delhi",
      },
      {
        id: "q2",
        question: "What is the largest planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter",
      },
    ],
  },
  exam2: {
    title: "History Basics",
    questions: [
      {
        id: "q1",
        question: "Who wrote the Indian national anthem?",
        options: [
          "Rabindranath Tagore",
          "Mahatma Gandhi",
          "Subhas Bose",
          "Jawaharlal Nehru",
        ],
        answer: "Rabindranath Tagore",
      },
      {
        id: "q2",
        question: "In which year did India gain independence?",
        options: ["1945", "1947", "1950", "1952"],
        answer: "1947",
      },
    ],
  },
};

const MockQuiz = () => {
  const location = useLocation();

  console.log(location.pathname);

  const [selectedExam, setSelectedExam] = useState("exam1");
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = allExams[selectedExam].questions;

  const handleChange = (questionId, selectedOption) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let totalScore = 0;

    questions.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        totalScore += 1;
      }
    });

    setScore(totalScore);

    // Store score in Firestore under user -> mockScores[examId]
    try {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const examResult = {
          score: totalScore,
          total: questions.length,
          date: new Date(),
        };
        await updateDoc(userRef, {
          [`mockScores.${selectedExam}`]: examResult,
        });
        console.log("Score updated for exam:", selectedExam);
      }
    } catch (err) {
      console.error("Failed to update score:", err.message);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Mock Quiz</h1>

      {/* Exam Selector */}
      <div className="mb-6">
        <label className="font-medium">Select Exam:</label>
        <select
          value={selectedExam}
          onChange={(e) => {
            setSelectedExam(e.target.value);
            setScore(null);
            setUserAnswers({});
          }}
          className="ml-2 p-2 border rounded"
        >
          {Object.entries(allExams).map(([examId, examData]) => (
            <option key={examId} value={examId}>
              {examData.title}
            </option>
          ))}
        </select>
      </div>

      {/* Questions */}
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div key={q.id} className="mb-6">
            <p className="font-semibold mb-2">{q.question}</p>
            {q.options.map((option, i) => (
              <label key={i} className="block mb-1">
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  checked={userAnswers[q.id] === option}
                  onChange={() => handleChange(q.id, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Score */}
      {score !== null && (
        <div className="mt-6 text-lg font-semibold text-green-700">
          Your Score: {score} / {questions.length}
        </div>
      )}
    </div>
  );
};

export default MockQuiz;
