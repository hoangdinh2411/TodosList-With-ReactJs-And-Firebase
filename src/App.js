import './App.css';
//components
import Header from './containers/Header'
import Home from './containers/Home'
import Form from './containers/Form'

//react
import { useState, useEffect } from 'react'
//firebase 
import {  auth, onAuthStateChanged  } from './utils/firebase'
import { UserContext } from './API/Context'
function App() {
  const [user, setUser] = useState(null)
  const [pages, setPage] = useState('home')
 
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      const currentUser = auth.currentUser
      if(user !== null){
        setUser(currentUser)
      }
    })

  }, [])

  return (
    <div className="" id="main">
        <UserContext.Provider value ={user}>

          <div className="navbar">

            <Header user={user} setUser={setUser} setPage={setPage}/>
          </div>
          <div className="content">
            {
              (user !== null &&
                <Form />)
              ||
              <Home pages={pages} setUser={setUser} />
            }
          </div>
        </UserContext.Provider>

    </div>
  );
}

export default App;
