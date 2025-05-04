export default function StudentSection() {
  return (
    <div className="bg-slate-900 text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        <span className="text-blue-500">VisioneAcademy</span> is built
        <br />
        <span className="text-green-400">
          &lt;for learners by educators&gt;
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="p-4">
          <h3 className="font-semibold text-lg">📘 All-In-One Platform</h3>
          <p className="text-gray-300 mt-2">
            Prepare for RBI, SSC, and Railway exams in one place with video
            classes, notes, and mock tests.
          </p>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">📚 Smart Study Tools</h3>
          <p className="text-gray-300 mt-2">
            Access updated syllabus, topic-wise quizzes, and instant performance
            analysis.
          </p>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">🔔 Exam Alerts</h3>
          <p className="text-gray-300 mt-2">
            Get instant new exam updates,results.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-semibold mb-2">
          PDF Course For All Bank PO and Clerk Exams 2025
        </h4>
        <button className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-blue-700 transition flex items-center gap-1 mt-4">
          Know More →
        </button>
      </div>
    </div>
  );
}
