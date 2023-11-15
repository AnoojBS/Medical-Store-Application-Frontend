import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";


function Login() {
    var [username, setUsername] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function attemptLogin() {
        axios.post('http://127.0.0.1:8000/loginapi1/',{
            username:username,
            password:password
        }).then(response=>{
            setErrorMessage('')
            var user = {
                username:username,
                token:response.data.token
            }
            dispatch(setUser(user));
            navigate("/crud/meds")
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '))
            }else if(error.response.data.message){
                setErrorMessage(error.response.data.message)
            }else{
                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }
    return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2 ">
                    <h1 style={{ marginTop: "100px" }}>Login</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text"
                        className="form-control"
                        value={username}
                        onInput={(event)=>setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password"
                        className="form-control"
                        value={password}
                        onInput={(event)=>setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={attemptLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center">
            <p>New User <a href="/auth/register">Register here....</a></p>
        </div>
    </div>
    )
}

export default Login;