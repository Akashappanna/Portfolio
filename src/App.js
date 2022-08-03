import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WorkExp from './pages/WorkExp'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<WorkExp />} />
      </Routes>
    </div>
  )
}

export default App
