const InnovationCards = () => {
    return (
      <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#0f172a] mb-12">
          We have innovated at every instance, creating a disruption.
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Wide Card */}
          <div className="col-span-2 bg-gray-50 rounded-xl shadow-md p-10 mr-6 relative">
            <div className="text-sm text-gray-500 font-medium mb-2">Visione Academy</div>
            <h3 className="text-[1rem] md:text-3xl font-bold leading-snug text-[#0f172a]">
              <span className="text-blue-600">Prepare Smarter from Anywhere - </span> practice daily quizzes, and earn badges for every milestone. Boost your prep for exams like JEE, NEET, SSC, and more — all in one place!
            </h3>
            <p className="text-sm text-gray-500 mt-6">
              Ready for the Next Exam
            </p>
            <div className="mt-6 flex gap-4 flex-wrap">
             
              <button className="text-blue-600 text-sm font-medium hover:underline">
                Know More
              </button>
            </div>
            <div className="absolute top-4 right-4 text-gray-400 text-xl">🌐</div>
          </div>
  
          {/* Right Slim Card */}
          <div className="bg-green-50 rounded-xl shadow-md  relative flex flex-col justify-between w-xs p-4">
            <div>
              <div className="text-sm text-gray-500 font-medium mb-2">Turbo UPI</div>
              <h3 className="text-base font-semibold text-[#0f172a] leading-relaxed">
                <span className="text-blue-600">Get 5X Faster Enrollment —</span>,  Join courses instantly with a smoother checkout experience and 10% higher success rates.no delays — just quick learning access!
              </h3>
            </div>
            <div>
              <p className="text-sm text-gray-500 mt-4">
                Get India&apos;s fastest one-step UPI payment solution for businesses
              </p>
              <div className="mt-6 flex gap-4 flex-wrap">
                <button className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-blue-700 transition flex items-center gap-1">
                  Enroll Now →
                </button>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  Know More
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  };
  
  export default InnovationCards;
  