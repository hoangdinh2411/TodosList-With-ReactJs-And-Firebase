import './App.css';
//components
import Header from './containers/Header'
import Home from './containers/Home'
import Form from './containers/Form'
import LoginForm from './containers/LoginForm'
import SignUpForm from './containers/SignUpForm'

//react
import { useState, useEffect } from 'react'
//firebase 
import { auth, onAuthStateChanged } from './utils/firebase'
import { UserContext } from './API/Context'

//react router 
import { Link, Routes, Route } from 'react-router-dom'
function App() {
  const [user, setUser] = useState(null)
  const [pages, setPage] = useState('home')

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      const currentUser = auth.currentUser
      if (user !== null) {
        setUser(currentUser)
      }
    })

  }, [])

  return (

    <div className="" id="main">

      <UserContext.Provider value={user}>

        <div className="navbar">

          <Header user={user} setUser={setUser} setPage={setPage} />
        </div>
        <div className="content">
          {
            (user !== null &&
              <Routes>
                <Route path="/todos" element={<Form />} ></Route>
              </Routes>   

            )
            ||
            <Routes>

              <Route path="/" element={<Home pages={pages} setUser={setUser} />} />

              <Route path="/signin" element={<LoginForm pages={pages} setUser={setUser} />} />

              <Route path="/signup" element={<SignUpForm pages={pages} setUser={setUser} />} />
            </Routes>
          }
        </div>



      </UserContext.Provider>

    </div >
  );
}

export default App;