import React from 'react'
import Navbar from './components/Navbar'
import ExamSections from './components/HeroSection'
import RecentlyUpdatedQuestions from './components/RecentQus'
import InnovationCards from './components/Inovation'
import StudentSection from './components/StudentCard'

import Footer from './components/Footer'
import Faq from './components/FAQ.JSX'

function App() {
  return (
    <div>
      <Navbar/>
      <ExamSections/>
      <RecentlyUpdatedQuestions/>
      <InnovationCards/>
      <StudentSection/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
