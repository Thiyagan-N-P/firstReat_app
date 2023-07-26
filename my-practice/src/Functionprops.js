import React from "react";
const Functionprops=(props)=>{
   // console.log(props)
    const getDatas=()=>{
        props.get("jayanthan","Dhurai raj")
    }
return(
    <div>
        <p>Hello {props.name} {props.obj}</p>
        <button type="submit" onClick={()=>getDatas()}>Click</button>
    </div>
)
};
export default Functionprops;