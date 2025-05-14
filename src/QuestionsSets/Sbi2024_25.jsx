import React from "react";
import { useState } from "react";
import data2021 from "../Jsondata/SBI Clerk Mains 2024-25.json";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { getAuth } from "firebase/auth";

function Sbi2024_25() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [successCount, setSuccessCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const questions = data2021.questions;
  const totalQuestions = data2021.questions.length;
  const answeredCount = Object.keys(selectedOptions).length;
  const skippedCount = totalQuestions - answeredCount;

  const optionLabels = ["A", "B", "C", "D", "E"];

  const handleOptionClick = (questionIndex, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    if (skippedCount > 0) {
      setShowDialog(true);
    } else {
      performSubmission();
    }
  };

  const performSubmission = async () => {
    let correctCount = 0;

    questions.forEach((question, questionIndex) => {
      const selected = selectedOptions[questionIndex];
      const isCorrect = selected && selected === question.answer;
      if (isCorrect) {
        correctCount += 1;
      }
    });

    setSuccessCount(correctCount);
    setShowResult(true);
    setShowDialog(false);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          quizResults: arrayUnion({
            exam: "Sbi_clerk 2024-25",
            score: `${correctCount}/${questions.length}`,
            total: questions.length,
            skipQuestions: skippedCount,
            date: new Date().toISOString(),
          }),
        });
        console.log("Result saved to Firestore.");
      } catch (error) {
        console.error("Error saving quiz result:", error);
      }
    }
  };

  const handleRetake = () => {
    setSelectedOptions({});
    setSuccessCount(0);
    setShowResult(false);
    setShowDialog(false);
  };

  const handleDialogConfirm = () => {
    performSubmission();
  };

  const handleDialogCancel = () => {
    setShowDialog(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        SBI Clerk Mains 2024-25 Quiz
      </h1>
      <div className=" rounded-lg  p-6 w-full max-w-4xl">
        {!showResult ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Total Questions: {totalQuestions}
              </h2>
              <div className="flex space-x-4">
                <span className="text-lg font-medium text-green-600">
                  Answered: {answeredCount}
                </span>
                <span className="text-lg font-medium text-yellow-600">
                  Skipped: {skippedCount}
                </span>
              </div>
            </div>
            {data2021.questions.map((question, questionIndex) => {
              const isSkipped = !selectedOptions[questionIndex];
              return (
                <div
                  key={question.id}
                  className={`mb-6 p-4 rounded-lg ${
                    isSkipped
                      ? "border-2 border-gray-200"
                      : "border border-gray-300"
                  }`}
                >
                  <p className="text-lg font-medium mb-2">
                    Q{questionIndex + 1}: {question.question}
                  </p>
                  <p className="text-md text-gray-600 mb-3">
                    {question.native_question}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                    {question.options.map((option, optIndex) => (
                      <button
                        key={optIndex}
                        onClick={() => handleOptionClick(questionIndex, option)}
                        className={`cursor-pointer p-4 rounded-lg border text-left transition-colors duration-200 flex items-center space-x-3 ${
                          selectedOptions[questionIndex] === option
                            ? "bg-blue-500 border-blue-500 text-white"
                            : "bg-gray-50 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-800">
                          {optionLabels[optIndex]}
                        </span>
                        <span>{option}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={answeredCount === 0}
            >
              Submit Answers
            </button>
            {showDialog && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Confirm Submission
                  </h3>
                  <p className="text-gray-600 mb-6">
                    You have skipped {skippedCount} question
                    {skippedCount > 1 ? "s" : ""}. Please review them before
                    submitting, or confirm to submit now.
                  </p>
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={handleDialogCancel}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDialogConfirm}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Confirm Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Quiz Results
            </h2>
            <div className="mb-6">
              <p className="text-lg mb-2">
                Correct Answers:{" "}
                <span className="text-green-600 font-semibold">
                  {successCount}
                </span>
              </p>
              <p className="text-lg mb-6">
                Incorrect Answers:{" "}
                <span className="text-red-600 font-semibold">
                  {totalQuestions - successCount}
                </span>
              </p>
            </div>
            <div className="mb-8">
              {data2021.questions.map((question, questionIndex) => {
                const answer = selectedOptions[questionIndex];
                const isCorrect = answer === question.answer;
                return (
                  <div
                    key={question.id}
                    className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm"
                  >
                    <p className="font-medium text-gray-800">
                      Q{questionIndex + 1}: {question.question}
                    </p>
                    <p className="text-md text-gray-600 mb-2">
                      {question.native_question}
                    </p>
                    <p
                      className={`mt-2 ${
                        answer
                          ? isCorrect
                            ? "text-green-600"
                            : "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      Your Answer: {answer || "Not Answered"}{" "}
                      {answer &&
                        (isCorrect
                          ? "(Correct)"
                          : `(Incorrect, Correct: ${question.answer})`)}
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleRetake}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sbi2024_25;
