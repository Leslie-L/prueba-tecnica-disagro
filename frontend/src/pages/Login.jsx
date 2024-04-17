import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebase/credentials'
import loginWithGoogle from './../firebase/loginGoogle'


function Login() {
    const navigation = useNavigate()
    onAuthStateChanged(auth,user=>{
        if(user){
          navigation('/home')
        }
      })
    return(
        <main className="w-full h-screen bg-gray-800 grid place-content-center">
            <h1 className="text-white text-2xl font-bold text-center">Disagro</h1>
            <h2 className="text-white text-xl font-bold text-center ">Feria de promociones - 2024</h2>
            <h3 className="text-white text-lg font-bold my-4 text-center">Iniciar Sesión</h3>
            <section className="bg-white text-black h-52 w-[250px] grid  place-content-center">
                <button 
                    className='p-2 bg-slate-300 texg-black font-bold rounded-md hover:bg-blue-500 flex'
                    onClick={loginWithGoogle}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20.855 10.361a.197.197 0 0 0-.194-.161H12.2a.2.2 0 0 0-.2.2v3.2c0 .11.09.2.2.2h4.886A5.398 5.398 0 0 1 6.6 12A5.4 5.4 0 0 1 12 6.6a5.37 5.37 0 0 1 3.44 1.245a.205.205 0 0 0 .276-.01l2.266-2.267a.197.197 0 0 0-.007-.286A8.953 8.953 0 0 0 12 3a9 9 0 1 0 9 9c0-.547-.051-1.113-.145-1.639" />
                    </svg>
                    Inicia Sesión con Google
                </button>
            </section>
        </main>
    )
}
export default Login