import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import {AddUserDeatils}  from "../service/Proservice";

function AddUser() {
    const history=useHistory();
    const [user, setuser] = useState({
        name:"",
        username:"",
        email:"",
        phone:""
    })

    let name;
    let value;
    const InputData=(e)=>{
        name=e.target.name;
      value=e.target.value;
        console.log(user.name);     
        setuser({...user,[name]:value})   
    }

    const SendUserDetails=async(e)=>{
        e.preventDefault();
        await AddUserDeatils(user)
        setuser({  name:"",
        username:"",
        email:"",
        phone:""}) 
        history.push("/adduser")
    }
  return (
    <>
    <div style={{marginLeft:"25%",marginRight:"25%",marginTop:"2%"}}>

      <form method="POST">
      <div className="mb-3">
          <label for="name" className="form-label">
             Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter the name"
            value={user.name}
            onChange={InputData}
          />
        </div>
        <div className="mb-3">
          <label for="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Enter the user Name"
            value={user.username}
            onChange={InputData}
          />
        </div>

        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter the Email"
            value={user.email}
            onChange={InputData}
          />
        </div>

        <div className="mb-3">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            placeholder="Enter the Phone Number"
            value={user.phone}
            onChange={InputData}
          />
        </div>
        <div>
        <button type="submit" class="btn btn-primary" onClick={SendUserDetails}>Submit</button>
       
        </div>
      </form>
    </div>
    </>
  );
}

export default AddUser;
