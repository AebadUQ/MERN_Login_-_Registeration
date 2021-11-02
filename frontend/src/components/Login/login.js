import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
function Login({setLoginUser}) {

    const history=useHistory();
    const [user,setUser]=useState({
        email:"",
        password:"",
    })
    const handleChange=e =>{
        const {name,value} = e.target;
      //  console.log(name);
        setUser({
            ...user,
            [name]:value
        })
    }
    const login=()=>{
        axios.post("http://localhost:9008/login",user)
        .then(res=>{alert(res.data.message)
            //yeh hum login k andr apna user ka samaan dey rhy
            setLoginUser(res.data.user)
       //     console.log(res.data.user.email)
        history.push('/');
        }
        )
    }

    return (
        <div>
            Login
  
                <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password}  placeholder="password" onChange={handleChange}></input>
                <button onClick={login}>Login</button>
                <p>or</p>
                <button onClick={()=>history.push('./registration')}>Register</button>
        
        </div>
    )
   
    }
export default Login

