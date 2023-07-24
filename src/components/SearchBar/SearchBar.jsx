import {useState,useEffect} from "react";
import axios from "axios";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}){
    const[ helpSearch, setHelpSearch ] = useState([])
    const [renderHelp, setRenderHelp ] = useState([])
    const[ bar, setBar ] = useState("")
    const[ noVer, setNoVer ] = useState(true)
    function handleChange(event){
        setBar(event.target.value)
        filtrar(event.target.value)
        if(!event.target.value)return setNoVer(false)
        setNoVer(true)
    }
    useEffect(()=>{
        async function axiosData(){
            const resApi = await axios(`http://localhost:3001/products`)
            if(resApi.data){
                setHelpSearch(resApi.data)
            }
        }
        axiosData()
    },[])

    const takeValueSearch = (event)=>{
        setBar(event.target.id)
        setNoVer(false)
        onSearch(event.target.id)
        setBar('')
    }
    const takeValueNoSearch = (event)=>{
        setBar(event.target.id)
        filtrar(event.target.id)
    }

    const filtrar = (termino) => {
        const ayu = helpSearch?.filter((ele)=>{
            if(ele.nombreproducto.toString().toLowerCase().includes(termino.toLowerCase())){
                return ele.nombreproducto
            }
        })
        return setRenderHelp(ayu)
    }
    return(
        <div>
            <div className={style.inputSearch}>
                <input className={style.barra} type="text" value={bar} onChange={handleChange}/>
                <button className={style.onSearch} onClick={()=>{onSearch(bar);setBar('')}} type="search">BUSCAR</button>
            </div>
            
            {renderHelp?.map((ele)=>{
                return(
                    <div className={noVer?style.contSearch:null}>
                        <div>
                           {noVer?<div onClick={takeValueSearch} id={ele.name} className={style.clickSearch}>{ele.name}</div>:null} 
                        </div>
                        <div>
                           {noVer?<div onClick={takeValueNoSearch} id={ele.name} className={style.clickNoSearch}>🡬</div>:null} 
                        </div>
                    </div>
                )
            }).splice(0,10)}
        </div>
    )
}