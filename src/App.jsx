import React from 'react'
import Navbar from './components/Navbar'
import ExamSections from './components/HeroSection'
import RecentlyUpdatedQuestions from './components/RecentQus'
import InnovationCards from './components/Inovation'
import StudentSection from './components/StudentCard'
import Faq from './components/FAQ.JSX'
import Footer from './components/Footer'

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
