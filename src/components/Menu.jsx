import { CDN_IMG_LINK } from "./config"
import { useState,useEffect } from "react"
import ShimmerUI from "./shimmerUI"
const reactRouter = require("react-router-dom")
const useParams = reactRouter.useParams

async function getData(data,setMenu){
    const fetchData = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.2183013&lng=73.0878267&menuId="+data)
    const jsonData = await fetchData.json()
    setMenu(jsonData)
    // return jsonData
}
const MenuCard =(menu)=>{
    console.log(menu.data.menu.items.name)
    return(
<>
         
         <div>
         <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+menu?.data?.cloudinaryImageId} alt="restaurantImg"></img>
         {/* {console.log("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183013&lng=73.0878267&menuId="+menu.cloudinaryImageId)} */}
         <span>{menu?.data?.name}</span>
         </div>
         <div>
             <ol>
             { Object.values(menu?.data?.menu?.items).map((item)=>{
                 return <li>{item.name} </li>
             })}
             </ol>
         </div>
         
         <h1>Menu Card </h1>
         </>
    )
     
}

const Menu = ()=>{
    const [menu,setMenu] = useState([])
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        getData(id,setMenu)
    
    },[])
    // console.log(data)
    console.log(menu)
    {return menu.length==0?  ShimmerUI():
    MenuCard(menu)}
       
        

}

export default Menu