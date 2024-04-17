import {auth} from './credentials'
import { signOut } from 'firebase/auth'

async function logOut() {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}
export default logOut