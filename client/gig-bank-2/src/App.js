import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavHeader from './NavHeader'
import LoginStatus from './LoginStatus'
import Calendar from './Calendar'
import ContactList from './ContactList';
import AddGig from './AddGig'
import AddClient from './AddClient'
import ShowGig from './ShowGig'
import Splash from './Splash'
import ClientList from './ClientList'
import HeadComponent from './HeadComponent'
import EditGig from './EditGig'

function App() {
  const [client, setClient] = useState({})
  const [loggedIn, setLoggedIn] = useState(localStorage.email ? true : false)
  const [contacts, setContacts] = useState([])
  
    function toggleLoggedIn() {
        loggedIn ? setLoggedIn(false) : setLoggedIn(true)
    }


  return (
    <BrowserRouter>
      <HeadComponent className="blurf" toggleLoggedIn={toggleLoggedIn}/>
    <Routes>
      <Route exact path="/" element={<Splash />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/to-do" element={<ContactList contacts={contacts} setContacts={setContacts} />} />
      <Route path="/add-gig" element={<AddGig client={client} setClient={setClient} />} />
      <Route path="/add-client" element={<AddClient setClient={setClient} className={"content-panel"} standAlone={true} />} />
      <Route path="/gig/:id" element={<ShowGig contacts={contacts} setContacts={setContacts} />} />
      <Route path="/edit-gig/:id" element={<EditGig />} />
      <Route path="/clients" element={<ClientList setClient={setClient} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
