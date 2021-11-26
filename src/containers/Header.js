import UserDetails from '../components/Header/UserDetails'
import Button from '../components/Button/Button'
import { signOutHandler } from '../utils/firebase'
import { doc, db, auth, deleteUser, deleteDoc } from '../utils/firebase'
import { Link } from 'react-router-dom'
export default function Header({ user, setUser, setPage }) {

    const currentUser = auth.currentUser
    const handleSignIn = () => {
        setPage('sign in')
    }
    const handleSignUp = () => {
        setPage('sign upp')

    }

    const handleSignOut = () => {
        signOutHandler()
        setUser(null)
    }

    const handleDeleteAcc = () => {
        deleteUser(currentUser)
            .then(() => {
                setUser(null)
                setPage('home')
                deleteDoc(doc(db, 'users', currentUser.uid))
            })

            .catch((err) => {
                alert(err.message)
            })
    }
    return (

        <div className="navbar_actionBtn">
            {
                (user !== null &&
                    <>
                        <UserDetails user={user} />
                        <Link to="/">
                            <Button title='Sign Out' onHandlerClick={handleSignOut} />
                        </Link>
                        <Link to="/">
                            <Button title={'Delete Account'} onHandlerClick={handleDeleteAcc} />
                        </Link>


                    </>)
                ||
                <>
                    <Link to="/signin">
                        <Button title={'Sign In'} onHandlerClick={handleSignIn} />
                    </Link>
                    <Link to="/signup">
                        <Button title={'Sign Up'} onHandlerClick={handleSignUp} />
                    </Link>
                </>
            }



        </div>
    )
}
