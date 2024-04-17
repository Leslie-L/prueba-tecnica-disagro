import { useNavigate } from 'react-router-dom';
import logOut from './../firebase/logOut'

export default function Navbar() {
    const navigation = useNavigate()
    const handlerCloseSession=async()=>{
        await logOut();
        navigation('/');
    }
    return(
        <nav className="w-full h-16 p-3 bg-gray-700  text-white flex justify-between items-center">

        <div className="flex flex-col">
            <h1 className="font-bold text-lg">Disagro</h1>
            <p>Feria de promociones - 2024</p>
          </div>
          <button onClick={handlerCloseSession} className='bg-red-500 p-2 flex rounded-md'>
            Cerrar Sesión
          </button>
        </nav>

    )
}