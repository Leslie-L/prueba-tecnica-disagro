export default function PersonalDataForm({info,setInfo}){
    return(
        <div className="my-10 p-3 border-2 rounded-md shadow-md">
            <form className="w-[300px] p-3 flex flex-col text-black gap-2">
              <label htmlFor="name">Nombre:</label>
              <input
                className="border-2 border-gray-300 rounded-full p-2"
                type="text"
                id="name"
                name="name"
                onChange={(e)=>{setInfo({...info, name:e.target.value})}}
                placeholder="Introduzca su nombre"
                required
              />
              <label htmlFor="lastname">Apellido:</label>
              <input
                className="border-2 border-gray-300 rounded-full p-2"
                type="text"
                id="lastname"
                name="lastname"
                onChange={(e)=>{setInfo({...info, lastname:e.target.value})}}
                placeholder="Introduzca su apellido"
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                className="border-2 border-gray-300 rounded-full p-2"
                type="email"
                id="email"
                name="email"
                onChange={(e)=>{setInfo({...info, email:e.target.value})}}
                placeholder="Introduzca su email"
                required
              />
              <label htmlFor="date">Fecha y hora:</label>
              <input
                className="border-2 border-gray-300 rounded-full p-2"
                type="datetime-local"
                id="date"
                name="date"
                onChange={(e)=>{setInfo({...info, date:e.target.value})}}
                placeholder="Seleccione fecha y hora que asistirá"
                required
              />
            </form>
          </div>
    )
}