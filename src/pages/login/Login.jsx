import "./login.scss"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";

const Login = () => {

    const [inputs, setInputs] = useState({
        // initail state of "inputs" variable
        username:"",
        password:"",
        });
    
      const [err, setErr] = useState(null);

      const navigate = useNavigate()
    
      const handleChange = (e) => { // e is event
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value})) // it will keep previous values but will only change the value being changed by user(like user is writting username so it witll change the value of username simultaneously)
        console.log(inputs)
        };

    const {login} = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            await login(inputs)
            navigate("/") // redirects to home page
        }
        catch(err){
            setErr(err.response.data)
        }
    }

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello world.</h1>
                <p>Share awesome posts!</p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
                
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} />

                    {err && err}
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
