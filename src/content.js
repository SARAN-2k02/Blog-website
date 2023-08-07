import React, { useState } from "react";
import Bloglist from "./Bloglist";

const Content = (props) => {


  const {data, age} = props;
  const [name, setName] = useState('bedi')
  const handClick = () => {
    console.log("button clicked");
    setName("romeo")
  }
  const data2=data.filter(data => data.author === 'Bedi singh')
  

  return (
    <>
      <div className="content">
        <Bloglist data={data} />
        <Bloglist data={data2} />
        <h2>Blog Page</h2>
        <p> {name } is  {age} years old</p>
        <button onClick={handClick}> click !</button>
      </div>
    </>
  );
};
export default Content;



