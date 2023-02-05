import RestaurantCard from "./RestaurantCard";

const ShimmerUI = () => {
  console.log("reached");
  let arr = new Array(10).fill(1);
  let x = 0;
  return arr.map(() => {
    console.log("mapped");
    {
      x++;
    }
    return (
      <div
        key={x}
        style={{
          border: "2px solid black",
          margin: "10px",
          padding: "10px",
          width: "250px",
          height: "350px",
          backgroundColor: "#f9f9f9",
        }}
      ></div>
    );
  });
};

export default ShimmerUI;
