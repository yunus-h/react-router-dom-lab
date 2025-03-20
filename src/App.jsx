import { useState } from "react";
import {Route, Routes} from "react-router";

import NavBar from "./components/NavBar/NavBar.jsx";
import MailboxList from "./components/MailboxList/MailboxList.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";

const initialState = [];

const App = () => {
  
  const [mailboxes, setMailboxes] = useState (initialState)

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;

    setMailboxes ([...mailboxes, newMailbox])
  }



  return (
    <>
        <NavBar />
        <Routes>
          <Route path = '/' element = {<main><h1>Post Office</h1></main>}/>

          <Route path = '/mailboxes' element = {<MailboxList mailboxes = {mailboxes} />} />

          <Route path = '/new-mailbox' element = {<MailboxForm addBox = {addBox} />} />

          <Route 
          path = '/mailboxes/:boxId'
          element = {<MailboxDetails mailboxes={mailboxes} />}
        />

          <Route path= '*' element = {<h2>What you seek is not here!</h2>} /> 
 
        </Routes>
        
    </>

  )
 


}

export default App;
