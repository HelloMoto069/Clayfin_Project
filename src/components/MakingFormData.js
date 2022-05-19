import React, { useEffect, useState } from 'react'


export default function GetingData() {

    const [data,setData] = useState([]);
    const [showOrhide,setShowHidw] = useState(0);
    useEffect(()=>{
            getTheData();
    },[])

    const getTheData = async()=>{
        let d = await fetch("https://reqres.in/api/users?page=2");
        let res = await d.json();
        setData(res.data)
    }
    const handelChange=(id)=>
    {
            console.log(id)
            return setShowHidw(id)
    }
  return (
    <div>
        {data.map((x)=>
        {
            return(
                <div key={x.id} className={"mainDiv"}>
                    <div id="wrapper">
                    <p>{x.id}</p>
                    <p>{x.first_name}</p>
                    <button onClick={()=>{handelChange(x.id)}}>{showOrhide===x.id?"Hide":"Show"}</button>
                    {showOrhide===x.id?<div key={x.id}>
                    <p>{x.last_name}</p>
                    <p>{x.email}</p>
                    <img src={x.avatar} alt=""/>
                    </div>:"ClickToSeeDetails"}
                 
                  </div>
                </div>
                
                 
            )
        })}
    </div>
  )
}