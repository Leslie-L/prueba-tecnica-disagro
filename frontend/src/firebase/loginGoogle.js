import { auth } from "./credentials";
import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";
async function loginWithGoogle() {
    try {
        const provider  =  new GoogleAuthProvider();
        const result  = await signInWithRedirect(auth,provider);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
export default loginWithGoogle