import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

