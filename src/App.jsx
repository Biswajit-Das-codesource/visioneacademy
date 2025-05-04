import React from 'react'
import Navbar from './components/Navbar'
import ExamSections from './components/HeroSection'
import RecentlyUpdatedQuestions from './components/RecentQus'
import InnovationCards from './components/Inovation'
import StudentSection from './components/StudentCard'

import Footer from './components/Footer'
import Service from './components/Service'

function App() {
  return (
    <div>
      <Navbar/>
      <ExamSections/>
      <RecentlyUpdatedQuestions/>
      <InnovationCards/>
      <StudentSection/>
     <Service/>
      <Footer/>
    </div>
  )
}

export default App
