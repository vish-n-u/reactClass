
import { CDN_IMG_LINK } from "./config";



const RestaurantCard = ({
    name,
    avgRating,
    cloudinaryImageId,
    deliveryTime,
    cuisines,
    id
  }) => {
    console.log("name:",name,"avgrating")
    
   
    return (
      
      <div  key={'Rbody1'+id} className="restaurant" >
        <img key={'Rbody2'+id}
          id="cardImg"
          src={CDN_IMG_LINK
             +
            cloudinaryImageId
          }
          alt="restaurntImg"
        ></img>
  {console.log("restaurantCard")}
        <h2  key={'Rbody3'+id} id="name" >{name}</h2>
        <h4  key={'Rbody4'+id} id="cuisines"  className="containContent">
          {cuisines?.join(",")}
        </h4>
        <div key={'Rbody5'+id} className="restrauntDetails" >
          <h3  key={'Rbody6'+id} id="ratings">{avgRating}</h3>
          <h3 key={'Rbody7'+id} id="timing" >{deliveryTime + "min"}</h3>
        </div>
      </div>
    );
  };

  export default RestaurantCard