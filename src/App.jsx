import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './componant/Navigation/Navigation'
import ContactHeader from './componant/ContactHeader/ContactHeader'
import ContactForm from './componant/ContactForm/ContactForm'



function App() {
 

  return (
    <>
   <Navigation />
  <main className='main_container'>
  <ContactHeader />
  <ContactForm />
  </main>
   </>
  );
}

export default App
