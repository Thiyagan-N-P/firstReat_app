import logo from './logo.svg';
import './App.css';
import Functionprops from './Functionprops'; 
import { useState } from 'react';
import Search from './Search'

function App() {
  let data="React";
  const [name1,setName]=useState("Ponthyagan")
  const getData = (para1,para2)=>{
   console.log(para1,para2)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {name1}

        <p>
          My name is Thiyagan.
        </p>
        <button onClick={()=>setName("Thiyagan")}>Click</button>
        <Functionprops  obj={data} name= "Thiyagan" get={getData}/>
        <Search/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
