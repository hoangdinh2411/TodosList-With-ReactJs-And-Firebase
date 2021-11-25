import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
export default function Home({ pages ,setUser}) {

    switch (pages) {
        case 'sign in':
            return (
            <LoginForm setUser={setUser}/>
            )
            break;
        case 'sign upp':
            return (
            <SignUpForm />
            )

            break;
        default:
            return (
                <h1>Please login ! </h1>
            )
            break;
    }
}