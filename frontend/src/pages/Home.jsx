import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Nabar";
import TitleSections from "../components/TitleSections";
import DiscountSection from "../components/DiscountSection";
import PersonalDataForm from "../components/PersonalDataForm";
import Searcher from "../components/Searcher";
import ButtonComfirm from "../components/ButtonComfirm";
import ListItem from "../components/ListItem";


function Home() {
    const [prodAndServ, setProdAndServ] = useState([])
    const [display, setDisplay] = useState([])
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [discountProduct,setdiscountProduct]=useState(0)
    const [discountServices,setdiscountServices]=useState(0)
    const [totalServices, setTotalServices]=useState(0)
    const [modal, setModal]=useState(false)
    const [info, setInfo]=useState({
        name:"",
        lastName:"",
        email:"",
        date:"",
        cart:[],
    })
    useEffect(()=>{
      const callApi=async()=>{
        const res = await fetch('https://prueba-tecnica-disagro.vercel.app/api/v1/products-and-services');
        const data = await res.json()
        setProdAndServ(data)
        setDisplay(data)
      }
      callApi();
    },[])
    const handlerDisplay=(e)=>{
        const word = e.target.value;
        const res = prodAndServ.filter(item=>{
            const name = item.name;
            return name.includes(word)
        })
        setDisplay(res)
    }
    console.log(selectedCheckboxes)
    const handleCheckboxChange = (id) => {
        console.log(id)
        const item = prodAndServ.find(item=>item._id===id)
        console.log(item)
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

    const handlerSubmit = async()=>{
        
        if(info.name!="" && info.lastName!="" && info.email!="" && info.date!="" && selectedCheckboxes.length 
        !=0){
          console.log(selectedCheckboxes)
          setInfo({...info,cart:[...selectedCheckboxes]})
          const url = 'https://prueba-tecnica-disagro.vercel.app/api/v1/assistance'
          console.log(JSON.stringify(info))
          const response = await fetch(url, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
             body: JSON.stringify(info), 
          });
          if(response.ok){
            console.log(info)
            console.log(selectedCheckboxes)
            setInfo( {
                name:"",
                lastName:"",
                email:"",
                date:"",
                cart:[],
            })
            setSelectedCheckboxes([])
            setdiscountProduct(0)
            setdiscountServices(0)
            setTotalServices(0)
            handlerModal()
          }
          
        }
    }
    const handlerModal = async()=>{
        setModal(true)
        setTimeout(()=>{
          setModal(false)
        },2000)
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
                    const checked = selectedCheckboxes.includes(item._id)
                    return(
                        <ListItem  key={item._id} check={checked} item={item} handleCheckboxChange={handleCheckboxChange}/>
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
      {
        modal &&
        <div className="fixed top-5 left-1/2 w-32 h-10 rounded-md bg-orange-400 text-black grid place-content-center">
          <p className="font-bold text-center text-lg"> ✔️ Enviado</p>
        </div>
      }
    </>
  );
}
export default Home;
