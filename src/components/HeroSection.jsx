import React from 'react';
import { motion } from 'framer-motion';

// Define each card's background color in the data
const data = {
  popular: [
    { icon: 'https://guidely.in/assets/icons/pdf-home-icon.png', label: 'PDF Course', badge: '2025', color: 'bg-orange-100' },
    { icon: 'https://guidely.in/assets/icons/mock-home-icon.png', label: 'Mock Tests', color: 'bg-pink-100' },
    { icon: 'https://guidely.in/assets/icons/freePdf-home-icon.png', label: 'GOAT', badge: 'New', color: 'bg-orange-200' },
    { icon: 'https://guidely.in/assets/icons/freePdf-home-icon.png', label: 'Super Plan', color: 'bg-violet-200' },
  ],
  free: [
    { icon: 'https://guidely.in/assets/icons/magazine.png', label: 'Speed Test', badge: 'New', color: 'bg-red-200' },
    { icon: 'https://guidely.in/assets/icons/magazine.png', label: 'Practice', color: 'bg-red-50' },
    { icon: 'https://guidely.in/assets/icons/ga-rrb.png', label: 'Current', color: 'bg-green-200' },
    { icon: 'https://guidely.in/assets/icons/freePdf-home-icon.png', label: 'Free PDF', color: 'bg-orange-200' },
  ],
  plans: [
    { icon: 'https://guidely.in/assets/icons/pdfcourse-home-icon.png', label: 'Super Plan', badge: 'Recommended', color: 'bg-green-100' },
    { icon: 'https://guidely.in/assets/icons/pdf-home-icon.png', label: 'NEET', color: 'bg-gray-300' },
    { icon: 'https://guidely.in/assets/icons/pdfcourse-home-icon.png', label: 'PDF Course', color: 'bg-green-300' },
    { icon: 'https://guidely.in/assets/icons/combo-home-icon.png', label: 'All Combo', color: 'bg-pink-300' },
  ],
  exams: [
    { icon: 'https://cdn.guidely.in/images/courses/161492190544.png', label: 'IBPS RRB PO', color: 'bg-white' },
    { icon: 'https://cdn.guidely.in/images/courses/161492190544.png', label: 'IBPS RRB Clerk', color: 'bg-white' },
    { icon: 'https://cdn.guidely.in/images/courses/1614923918100.png', label: 'SBI Clerk', color: 'bg-white' },
    { icon: 'https://cdn.guidely.in/images/courses/1614923918100.png', label: 'SBI PO', color: 'bg-white' },
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
        {viewMore && <a href="#" className="text-purple-600">View More</a>}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {items.map((it, i) => <Card key={i} item={it} />)}
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
      <h1 className="text-2xl font-bold">Create your <br/> own profile</h1>
      <p className="mt-2">
      Join today and unlock<br/> your performance dashboard
      </p>
      <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold z-200">
        Join Now
      </button>
    </div>
    <div className="text-6xl font-extrabold opacity-20 absolute right-20">
      EXAM<br />MANIA
    </div>
  </motion.div>
);

export default function ExamSections() {
  return (
    <motion.div
      className="h-screen grid grid-rows-[auto_auto_auto] p-6 bg-gray-50 "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top row: three sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Section title="Popular Products" items={data.popular} />
        <Section title="Free Materials" items={data.free} />
        <Section title="Plans" items={data.plans} />
      </div>

      {/* Middle row: Upcoming Exams and Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="bg-white rounded-2xl shadow-lg m-4">
          <Section title="Upcoming Exams" items={data.exams} viewMore />
        </div>
        <Banner />
      </div>

      {/* Bottom row placeholder for Popular Packages title */}
      <div>
        <h2 className="text-xl font-semibold">Popular Packages</h2>
      </div>
    </motion.div>
  );
}
