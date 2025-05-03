import React from 'react'
import Part1 from './components/part1'
import Part2 from './components/part2'
import Part3 from './components/part3'
import Contact from './components/contact'
import './App.css'

import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={
            <>
              <Part2/>
              <Part3/>
            </>
          }></Route>
          <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
