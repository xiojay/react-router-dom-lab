import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailbox) => {
    setMailboxes([...mailboxes, {...newMailbox, _id: mailboxes.length + 1}])
  }
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<main><h2>Post Office</h2></main>}/>
      <Route path='/mailboxes' element={
        <MailboxList mailboxes={mailboxes}/>
      }/>
      <Route path='/new-mailbox' element={
        <MailboxForm addBox={addBox}/>
      }/>
      <Route path='/mailboxes/:mailboxId' element={
        <MailboxDetails mailboxes={mailboxes}/>
      }/>
      
     </Routes>
    </>
 

 )
};



export default App;