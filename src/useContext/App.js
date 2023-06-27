import React, { createContext } from 'react'
import App1 from './App1';

//created context
const Firstname = createContext();
const Lastname = createContext();

function App() {

  return (
    <>
    <Firstname.Provider value={'Vish'}>
        <Lastname.Provider value={'Kush'}>
            <App1 />
        </Lastname.Provider>
    </Firstname.Provider>

    

    </>
  )
}

export default App;
export { Firstname, Lastname };