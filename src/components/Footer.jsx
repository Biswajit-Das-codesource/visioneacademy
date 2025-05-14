import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
        <div>
          <h4 className="font-semibold text-lg mb-4">Mock Tests</h4>
          <ul className="space-y-2">
            <li>LIC AAO Mock Test</li>
            <li>Railway Test Series</li>
            <li>RRB NTPC Mock Test</li>
            <li>RRB JE Mock Test</li>
            <li>RRB Level 1 Mock Test</li>
            <li>ESIC Mock Test</li>
            <li>SSC CGL Mock Test</li>
            <li>SSC CHSL Mock Test</li>
            <li>SSC CPO Mock Test</li>
            <li>SSC MTS Mock Test</li>
            <li>SSC GD Mock Test</li>
            <li>Topic Wise Test</li>
            <li>Sectional Test</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Online Coaching</h4>
          <ul className="space-y-2">
            <li>SBI Clerk / PO</li>
            <li>GA Hustle Batch</li>
            <li>Avengers Quants Batch</li>
            <li>Reasoning Batch</li>
            <li>English Batch</li>
            <li>Descriptive Course</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Important Exams</h4>
          <ul className="space-y-2">
            <li>IBPS Clerk</li>
            <li>IBPS PO</li>
            <li>IBPS RRB</li>
            <li>SBI PO</li>
            <li>SBI Clerk</li>
            <li>RBI Assistant</li>
            <li>SSC CGL</li>
            <li>SSC CHSL</li>
            <li>SSC GD</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Current Affairs & Quiz</h4>
          <ul className="space-y-2">
            <li>Daily Current Affairs</li>
            <li>Weekly Current Affairs</li>
            <li>Monthly Current Affairs</li>
            <li>Monthly CA Quiz</li>
            <li>CA One Liner</li>
            <li>General Awareness Quiz</li>
            <li>Static GK</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2">
            <li>All in One Subscription</li>
            <li>Mock Tests Subscription</li>
            <li>Blog</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Payment FAQs</li>
            <li>Contact Us</li>
            <li>DMCA.com Protection</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-8 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div>
            <h5 className="text-black font-semibold mb-2">About Visione Academy</h5>
            <p className="text-gray-700">
              VisioneAcademy is one of India’s leading bank exam preparation platforms. Our mission is to provide the best online learning platform for all government job aspirants.
            </p>
          </div>

          <div className="text-black">
            <h5 className="text-black font-semibold mb-2">Get in Touch</h5>
            <p>//location</p>
            <p>Email: </p>
            <p>Phone: +91-8144758671 (Mon-Sat, 10AM to 6PM)</p>
            <p>WhatsApp: 8144758671 (Text Only)</p>
          </div>

          <div>
            <h5 className="text-black font-semibold mb-2">Useful Links</h5>
            <ul className="space-y-2 text-black">
              <li>Live Test</li>
              <li>Scholarship Test</li>
              <li>Test Series</li>
              <li>PDF Course</li>
              <li>eBooks</li>
              <li>Free PDFs</li>
              <li>Combo Packages</li>
              <li>Affiliate Program</li>
            </ul>
          </div>

        </div>

        <div className="text-center mt-8 text-gray-900 text-xs">
          © {new Date().getFullYear()} VisioneAcademy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
