import { swiggyData } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./shimmerUI";
import filter from "./filter";
import { Link } from "react-router-dom";
let x = 0;
async function getRestaurant(setRestaurant, setAllRestaurant) {
  console.log("TWICE");
  try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183013&lng=73.0878267&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    let newData = await jsonData?.data?.cards[2]?.data?.data?.cards;
    setRestaurant(newData);
    setAllRestaurant(newData);
  } catch (err) {
    console.log(err);
    return <p>Error 404</p>;
  }
}

const Body = () => {
  let [allRestaurant, setAllRestaurant] = useState([]);
  let [filteredRestaurants, setFilteredRestaurant] = useState([]);
  let [filterData, setFilterData] = useState("xxx");
  let [hasError, setHasError] = useState(false);
  let [menu, setMenu] = useState(null);
  useEffect(() => {
    console.log("once");
    let arr = getRestaurant(setFilteredRestaurant, setAllRestaurant);
  }, []);

  return (
    <>
      {console.log("render", typeof allRestaurant)}
      <input
        type="text"
        value={filterData}
        onChange={(e) => {
          let data = e.target.value;
          setFilterData(data);
        }}
      ></input>
      <button
        onClick={(e) => {
          let filteredData = filter(filterData, allRestaurant);
          setFilteredRestaurant(filteredData);
        }}
      >
        Search
      </button>
      {
        (x = () => {
          console.log(10);
        })
      }
      {x()}

      <div id="restaurantCards">
        {filteredRestaurants?.length === 0 ? (
          <ShimmerUI />
        ) : filteredRestaurants.length === 0 ? (
          <h1>No such restaurant available</h1>
        ) : (
          filteredRestaurants.map((rs) => {
            console.log("map");
            return (
              <Link to={"/" + rs.data.id}>
                <button onClick={() => {}}>
                  <RestaurantCard {...rs.data} key={rs.data.id} />
                </button>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
