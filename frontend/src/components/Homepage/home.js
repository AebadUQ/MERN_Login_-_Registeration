import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
function Home({setLoginUser}) {
    
    
    const history=useHistory();
    return (
        <div>
            <h1>Homes</h1>
            <button>View parking</button>
            <button>Book parking</button>
            <button>View booking</button>
            <button onClick={()=>history.push("./feedback")}>Feedback</button>
            <button onClick={()=>setLoginUser({})}>Logout</button>
        </div>
    )
}

export default Home
