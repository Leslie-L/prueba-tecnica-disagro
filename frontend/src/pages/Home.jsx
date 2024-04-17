import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Nabar";
import TitleSections from "../components/TitleSections";
import DiscountSection from "../components/DiscountSection";
import PersonalDataForm from "../components/PersonalDataForm";
import Searcher from "../components/Searcher";
import ButtonComfirm from "../components/ButtonComfirm";
import ListItem from "../components/ListItem";
const productos = [
    {
        id:"p001",
        name:"Producto 1",
        price:100,
        type:'p'
    },
    {
        id:"p002",
        name:"Producto 2",
        price:200,
        type:'p'
    },
    {
        id:"p003",
        name:"Producto 3",
        price:103,
        type:'p'
    },
    {
      id:"p004",
      name:"Producto 4",
      price:10,
      type:'p'
  },
]
const servicios = [
    {
        id:"s001",
        name:"Servicio 1",
        price:800,
        type:'s'
    },
    {
        id:"s002",
        name:"Servicio 2",
        price:900,
        type:'s'
    },
    {
        id:"s003",
        name:"Servicio 3",
        price:200,
        type:'s'
    },
]
function Home() {
    const [prodAndServ, setProdAndServ] = useState([...productos,...servicios])
    const [display, setDisplay] = useState([...prodAndServ])
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [discountProduct,setdiscountProduct]=useState(0)
    const [discountServices,setdiscountServices]=useState(0)
    const [totalServices, setTotalServices]=useState(0)
    const [info, setInfo]=useState({
        name:"",
        lastname:"",
        email:"",
        date:"",
        cart:[],
    })

    const handlerDisplay=(e)=>{
        const word = e.target.value;
        const res = prodAndServ.filter(item=>{
            const name = item.name;
            return name.includes(word)
        })
        setDisplay(res)
    }

    const handleCheckboxChange = (id) => {
        
        const item = prodAndServ.find(item=>item.id===id)
        if (selectedCheckboxes.includes(id)) {
          setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== id));
          if(item.type==='p')
          setdiscountProduct(discountProduct-1)
          if(item.type==='s'){
            setdiscountServices(discountServices-1)
            setTotalServices(totalServices-item.price)
          }
        } else {
          if(item.type==='p')
          setdiscountProduct(discountProduct+1)
          if(item.type==='s'){
            setdiscountServices(discountServices+1)
            setTotalServices(totalServices+item.price)
          }
          setSelectedCheckboxes([...selectedCheckboxes, id]);
        }
        
          
    };

    const handlerSubmit =()=>{
        
        if(info.name!="" && info.lastname!="" && info.email!="" && info.date!="" && selectedCheckboxes.length 
        !=0){
          setInfo({...info,cart:[...selectedCheckboxes]})
          console.log(info)
          console.log(selectedCheckboxes)
        }
    }
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="flex-shrink flex-grow py-10 flex flex-col md:flex-row">
        <section className="w-full   md:w-1/2 flex flex-col justify-center items-center">
          <TitleSections number={1} title={'Ingrese su información'}/>
          <PersonalDataForm info={info} setInfo={setInfo}/>
        </section>
        <section className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <TitleSections number={2} title={'Seleccione sus servicios y productos de su interés'}/>
          
          <div className="h-[490px] w-[300px] md:w-[400px] rounded-lg shadow-md flex flex-col">
            <div className="h-20 mb-2 bg-black flex flex-col justify-center items-center rounded-tl-md rounded-tr-md gap-y-2">
              <label className="text-white " htmlFor="name">
                Buscar Servicios y Productos:
              </label>
              <Searcher handlerDisplay={handlerDisplay}/>
            </div>
            <div className="px-2 flex-shrink flex-grow flex flex-col gap-2">
              <p className="font-bold text-center">
                Servicios y/o productos seleccionados
              </p>
              {
                display.map(item=>{
                    const checked = selectedCheckboxes.includes(item.id)
                    return(
                        <ListItem  key={item.id} check={checked} item={item} handleCheckboxChange={handleCheckboxChange}/>
                    )
                })
              }
              
            </div>

            <div className="flex rounded-bl-md rounded-br-md bg-black">
              <DiscountSection text={'Descuento obetenido en servicios'} discount={totalServices >=1500 && discountServices>=2?5 : discountServices>=2? 3: 0}/>
              <DiscountSection text={'Descuento obetenido en productos'} discount={discountProduct>=5?5: discountProduct>=3? 3 :0}/>
            </div>
          </div>
          <ButtonComfirm handlerSubmit={handlerSubmit}/>
        </section>
      </main>
      <Footer/>
    </>
  );
}
export default Home;
