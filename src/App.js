import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import Course from './pages/Subjects/Course/Course'
import Subject from './pages/Subjects/Subject/Subject'
import Lecture from './pages/Subjects/Lecture/Lecture'
import SubjectChapter from './components/SubjectChapter/SubjectChapter'

function App () {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/course' element={<Course />} />
          <Route path='/subject/:cls/:sub' element={<Subject />} />
          <Route path='/subjectchapter/:cls/:sub/:chap' element={<SubjectChapter  />} />
          <Route path='/lecture/:cls/:sub/:exam/:chap' element={<Lecture />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
