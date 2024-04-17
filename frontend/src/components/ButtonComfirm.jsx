export default function ButtonComfirm({handlerSubmit}){
    return(
        <button  onClick={handlerSubmit} className="bg-blue-500 flex rounded-md my-4 text-white p-2 font-bold">
            Comfirmar Asistencia 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
            </svg>
          </button>
    )
}