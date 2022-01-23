import './App.css'
import Home from './pages/Home'
import { Route, Switch } from 'react-router'
import SubjectTemplate from './components/Subjects/Subjecttemplate'

function App () {
  return (
    <div className='App'>
      <Home />
      <SubjectTemplate/>
    </div>
  )
}

export default App
