import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
function Register() {
    const history=useHistory();
    const [user,setUser]=useState({
       // stdid:"",
        name:"",
        email:"",
        password:"",
        cpassword:"",

    })
    const handleChange=e =>{
        const {name,value} = e.target;
       // console.log(name);
        setUser({
            ...user,
            [name]:value
        })
    }
    const register=()=>{
        //const {stdid,name,email,password} = user;
        const {name,email,password,cpassword} = user;
        if(name && email && password &&(password === cpassword)){
           
                //yahn "user" ka object pass akrein ghy post krty hue
        axios.post('http://localhost:9008/register',user)
        .then(res=>{alert(res.data.message)
        history.push('/login')}
        )
        }
        else{
            alert("not posted.. invalid input")
        }

    }
    return (
        <div>
            Register
          
        {/* <input type="number" name="stdid" value={user.stdid} placeholder="student id" onChange={handleChange}></input> */}
            <input type="text" name="name" value={user.name} placeholder="name" onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="password" onChange={handleChange}></input>
                <input type="password" name="cpassword" value={user.cpassword} placeholder="confirm password" onChange={handleChange}></input>
                <button onClick={register}>Register</button>
                <p>or</p>
                <button onClick={()=>history.push('./login')}>Login</button>
               
      
        </div>
    )
}

export default Register;