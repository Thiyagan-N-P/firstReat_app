import React, { useState } from "react";

//import "./styles.css";

function Search() {

  const list = [
    "Lion",
    "Tiger",
    "Fox",
    "Elephant"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
   const filterLi= list.filter((list1)=>(
            list1.toUpperCase().indexOf(event.target.value.toUpperCase())!==-1
   ))
    setFilterList(filterLi)
    console.log(filterLi)
  };
  return (
    <div className="app">
        <p>Animals</p>
       <div>
           Search : <input type="text" onChange={handleSearch}/>
        </div>

        <div>
        {filterList.map((item,index)=>(
        <p key={index}>{item}</p>
        ))}
        </div>
    </div>
  );
}

export default Search;