const RecentlyUpdatedQuestions = () => {
    const data = [
      {
        title: "Quantitative Aptitude",
        items: [
          "Arithmetic Questions",
          "Algebra Questions",
          "Geometry Questions",
        ],
        startNumber: 1,
      },
      {
        title: "Reasoning Aptitude",
        items: [
          "Verbal Reasoning Questions",
          "Non Verbal Reasoning Questions",
          "Logical Reasoning Questions",
        ],
        startNumber: 4,
      },
      {
        title: "English Language",
        items: [
          "Grammar Knowledge Questions",
          "Verbal Ability Questions",
          "Vocabulary Questions",
        ],
        startNumber: 7,
      },
      {
        title: "Knowledge Bank",
        items: [
          "Grammar Knowledge Questions",
          "Verbal Ability Questions",
          "Vocabulary Questions",
        ],
        startNumber: 10,
      },
      {
        title: "Current Affairs",
        items: [
          "Grammar Knowledge Questions",
          "Verbal Ability Questions",
          "Vocabulary Questions",
        ],
        startNumber: 13,
      },
      {
        title: "Miscellaneous Quizes",
        items: [
          "Grammar Knowledge Questions",
          "Verbal Ability Questions",
          "Vocabulary Questions",
        ],
        startNumber: 16,
      },
    ];
  
    return (
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
          Recently Updated Questions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((section, idx) => (
            <div
              key={idx}
              className="bg-green-100 rounded-xl shadow-sm  p-4 hover:shadow-md transition" data-aos="fade-up"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4 relative">
                <span className="bg-yellow-400 rounded-full px-4 py-1 text-sm font-medium text-gray-800">
                  {section.title}
                </span>
              </h3>
              <ul className="space-y-3 mb-4">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-sm font-semibold w-6 h-6 flex items-center justify-center rounded-full border border-gray-500 text-gray-900">
                      {section.startNumber + index}
                    </span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="text-sm font-medium text-black flex items-center gap-1 group">
                <span className="group-hover:underline">VIEW ALL QUESTIONS</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RecentlyUpdatedQuestions;
  