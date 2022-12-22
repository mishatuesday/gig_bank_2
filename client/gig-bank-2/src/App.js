import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavHeader from './NavHeader'
import LoginStatus from './LoginStatus'
import Calendar from './Calendar'
import ContactList from './ContactList';
import AddGig from './AddGig'
import AddClient from './AddClient'

function App() {
  const [client, setClient] = useState({})
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
      <Route path="/to-do" element={<ContactList />} />
      <Route path="/add-gig" element={<AddGig client={client} setClient={setClient} />} />
      <Route path="/add-client" element={<AddClient setClient={setClient} className={"content-panel"} />} />
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
