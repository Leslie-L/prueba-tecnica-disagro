import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Nabar";
const productos = [
    {
        id:"p001",
        name:"Producto 1",
        price:"100.00",
        type:'p'
    },
    {
        id:"p002",
        name:"Producto 2",
        price:"200.00",
        type:'p'
    },
    {
        id:"p003",
        name:"Producto 3",
        price:"103.00",
        type:'p'
    },
]
const servicios = [
    {
        id:"s001",
        name:"Servicio 1",
        price:"100.00",
        type:'s'
    },
    {
        id:"s002",
        name:"Servicio 2",
        price:"200.00",
        type:'s'
    },
    {
        id:"s003",
        name:"Servicio 3",
        price:"103.00",
        type:'s'
    },
]
function Home() {
    const [prodAndServ, setProdAndServ] = useState([...productos,...servicios])
    const [display, setDisplay] = useState([...prodAndServ])
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const [info, setInfo]=useState({
        name:"",
        lastname:"",
        email:"",
        date:"",
        pordAndService:[],
        discount:[]
    })

    const handlerDisplay=(e)=>{
        const word = e.target.value;
        const res = prodAndServ.filter(item=>{
            const name = item.name;
            return name.includes(word)
        })
        setDisplay(res)
    }

  // Manejar el cambio de estado de un checkbox
    const handleCheckboxChange = (id) => {
        if (selectedCheckboxes.includes(id)) {
        setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== id));
        } else {
        setSelectedCheckboxes([...selectedCheckboxes, id]);
        }
    };
    console.log(info)
    const handlerSubmit =()=>{
        

    }
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="py-10 flex flex-col md:flex-row">
        <section className="w-full  md:w-1/2 flex flex-col justify-center items-center">
          <p className="flex font-bold">
            <span className="h-8 w-8 rounded-full bg-green-500 grid place-content-center mx-2 text-white">
              1
            </span>
            Ingrese su información
          </p>
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
        </section>
        <section className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <p className="flex font-bold">
            <span className="h-8 w-8 rounded-full bg-green-500 grid place-content-center mx-2 text-white">
              2
            </span>
            Seleccione sus servicios y productos de su interés
          </p>
          <div className="h-[490px] w-[300px] rounded-lg shadow-md flex flex-col">
            <div className="h-20 mb-2 bg-black flex flex-col justify-center items-center rounded-tl-md rounded-tr-md gap-y-2">
              <label className="text-white" htmlFor="name">
                Buscar Servicios y Productos:
              </label>
              <div className=" h-7 mx-2 flex items-center">
                <input
                  onChange={handlerDisplay}
                  className="h-8 rounded-tl-md rounded-bl-md"
                  type="text"
                />
                <button className="h-8 rounded-tr-md rounded-br-md bg-white px-2">
                  🔍
                </button>
              </div>
            </div>
            <div className="px-2 flex-shrink flex-grow flex flex-col gap-2">
              <p className="font-bold text-center">
                Servicios y/o productos seleccionados
              </p>
              {
                display.map(item=>{
                    return(<div key={item.id} className="flex border-b-2 justify-between">
                        <div>
                        <input type="checkbox" onChange={() => handleCheckboxChange(item.id)} id={item.id} value={item.price}/>
                        <label htmlFor={item.id}>{item.name}</label>
                        </div>
                        <span>Q.{item.price}</span>
                    </div>
                    )
                })
              }
              
            </div>

            <div className="flex rounded-bl-md rounded-br-md bg-black">
              <div className="h-20 w-1/2  flex flex-col text-white">
                <p className="text-sm bold text-center">Descuento obetenido en servicios</p>
                <p className="text-center text-green-500">0%</p>
              </div>
              <div className="h-20 w-1/2 flex flex-col text-white">
                <p className="text-sm bold text-center">Descuento obetenido en productos</p>
                <p className="text-center text-green-500">0%</p>
              </div>
              
            </div>
          </div>
          <button type="submit" onClick={handlerSubmit} className="bg-blue-500 flex rounded-md my-4 text-white p-2 font-bold">
            Comfirmar Asistencia 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
            </svg>
          </button>
        </section>
      </main>
      <Footer/>
    </>
  );
}
export default Home;
