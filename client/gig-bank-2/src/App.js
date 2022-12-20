import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavHeader from './NavHeader'
import LoginStatus from './LoginStatus'
import Calendar from './Calendar'

function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.email ? true : false)
  
    function toggleLoggedIn() {
        loggedIn ? setLoggedIn(false) : setLoggedIn(true)
    }

  return (
    <BrowserRouter>
    <NavHeader />
    <LoginStatus toggleLoggedIn={toggleLoggedIn} />
    <Routes>
      <Route path="/calendar" element={<Calendar />} />
      {/* <Route path="/concessions" element={<ConcessionsList concessions = {concessions} deleteConcession = {deleteConcession} />} /> */}
      {/* <Route path="/concert/:id" element={<ShowConcert />} /> */}
     {/* <Route path="/newconcert" element={<NewConcertForm getConcerts={getConcerts} />} /> */}
      {/* <Route path="/newconcession" element={<NewConcessionForm onConcessionFormSubmit={onConcessionFormSubmit}/>} /> */}
      {/* <Route path="signup" element={<NewUserSignup />} /> */}
      {/* <Route path='/concession/:id/EditForm' element={<EditConcessionForm onEditConcession={onEditConcession}/>}/> */}
      {/* <Route path='/newband' element={<NewBandForm onBandFormSubmit={onBandFormSubmit} />}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
