import { useState } from "react";

const Footer = () => {
  

  const [tit, setTit] = useState("New Body");
  return (
    <>
      <h2 key={"FirstUq"}>{tit}</h2>
      <button
        key={"Footer2"}
        id="Change"
        onClick={() => {
          setTit("newBody");
        }}
      >
        Button
      </button>
    </>
  );
};

export default Footer;
