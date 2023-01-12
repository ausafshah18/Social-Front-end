import "./register.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

const Register = () => {

  const [inputs, setInputs] = useState({
    // initail state of "inputs" variable
    username:"",
    email:"",
    password:"",
    name:"",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => { // e is event
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value})) // it will keep previous values but will only change the value being changed by user(like user is writting username so it witll change the value of username simultaneously)
    console.log(inputs)
  };

  const handleClick = async e => { // it is async because we are making an API request
    e.preventDefault() // website will not refresh 

    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
      alert("User has been registered, please login")
    }
    catch(err)
    {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Ausaf Social.</h1>
                <p>Share awesome posts!</p>
                <span>Do you already have an account?</span>
                <Link to="/login">
                  <button>Login</button>
                </Link>
                
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                    <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                    <input type="text" placeholder="Name" name="text" onChange={handleChange}/>

                    {err && err} {/* If there is an error then it displays the error */}
                    <button onClick={handleClick}>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;
