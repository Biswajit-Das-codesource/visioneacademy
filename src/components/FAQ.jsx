export default function Faq() {
    return (
      <>
        <div className="h-min p-5 bg-gray-100 py-16 px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Visione Academy?
          </h2>
          <p className="text-gray-600 mb-12">
            At Guidely, Our motto is to guide our Students towards achieving their
            dreams.
          </p>
  
          <div className="grid md:grid-cols-3 gap-10">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://guidely.in/assets/images/home/quality-material.svg"
                className="w-16 h-16 mb-4"
              />
              <h3 className="font-semibold text-lg">
                High Quality Study Material
                <br />
                Curated by Experts
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                All the mock tests, free PDFs, eBooks & Video courses content
                available on our website is curated by Experts & Toppers.
              </p>
            </div>
  
            {/* Item 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://guidely.in/assets/images/home/mentor.svg"
                alt="Mentorship Icon"
                className="w-16 h-16 mb-4"
              />
              <h3 className="font-semibold text-lg">
                Career Guidance & Mentorship
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Our Faculty Members are not just your Teachers, They will be your
                Mentors guiding you through this competitive exams preparation
                journey to achieve Success.
              </p>
            </div>
  
            {/* Item 4 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://guidely.in/assets/images/home/exp-faculty.svg"
                alt="Faculty Icon"
                className="w-16 h-16 mb-4"
              />
              <h3 className="font-semibold text-lg">
                Highly Experienced Faculty
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                All our Faculty members are High Experienced. They have helped
                thousands of students crack various Banking & Government Exams
                over the years.
              </p>
            </div>
          </div>
        </div>
  
        <div className="bg-green-400 w-full text-center py-10">
          <h3 className="text-2xl font-bold text-white">
            Start your Preparation Today
          </h3>
          <p className="md:text-sm text-sm text-black mt-2">
            Take your first step towards Success. Start preparing & practicing
            with Guidely to beat your competition.
          </p>
  
          <button className="text-black bg-yellow-500 py-3 px-4 rounded-2xl mt-3 text-sm font-medium hover:underline">
            Signup Now 
          </button>
        </div>
      </>
    );
  }