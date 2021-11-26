export default function UserDetails({user}) {
    return (
        <div className="home">
            <h1>Hello, <span>{user.email}</span></h1>
        </div>
    )
}