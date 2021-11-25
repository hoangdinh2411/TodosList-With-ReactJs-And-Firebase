import {useContext} from 'react'
import { UserContext } from '../../API/Context'
export default function UserDetails() {
    const currentUser = useContext(UserContext)
    return (
        <div className="home">
            <h1>Hello, <span>{currentUser.displayName}</span></h1>
        </div>
    )
}