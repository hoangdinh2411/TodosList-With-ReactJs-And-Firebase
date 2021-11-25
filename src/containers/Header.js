import UserDetails from '../components/Header/UserDetails'
import Button from '../components/Button/Button'
import {signOutHandler} from '../utils/firebase'
import {doc, db,  auth, deleteUser , deleteDoc  } from '../utils/firebase'

export default function Header({ user ,setUser,setPage}) {

    const currentUser = auth.currentUser
    const handleSignIn= () =>{
        setPage('sign in')
    }   
    const handleSignUp= () =>{
        setPage('sign upp')

    }

    const handleSignOut = () => { 
        signOutHandler() 
        setUser(null)
    }

    const handleDeleteAcc =() =>{
        deleteUser(currentUser)
        .then(()=>{
            setUser(null)
            setPage('home')
            deleteDoc(doc(db, 'users',currentUser.uid))
        })

        .catch((err)=>{
            alert(err.message)
        })
    }
    return (

            <div className="navbar_actionBtn">
                {
                    (user !== null &&
                    <>
                        <UserDetails user={user} />
                        <Button title='Sign Out' onHandlerClick={handleSignOut} />
                        <Button title={'Delete Account'} onHandlerClick={handleDeleteAcc} />

                    </>)
                    ||
                    <>
                        <Button title={'Sign In'}  onHandlerClick={handleSignIn}/>
                        <Button title={'Sign Up'} onHandlerClick={handleSignUp} />
                    </>
                }



            </div>
    )
}