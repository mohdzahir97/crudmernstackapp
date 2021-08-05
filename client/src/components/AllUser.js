import React, { useEffect, useState } from "react";
import { Link,NavLink, useHistory } from "react-router-dom";
import {Proservice,serviceDeleteUser} from "../service/Proservice";
function AllUser() {

  const history=useHistory()
  const [biodata, setbiodata] = useState([]);
  useEffect(() => {
    GetAllData();
  }, []);

  

  const GetAllData = async () => {
    const result = await Proservice();
    setbiodata(result)
    history.push("/alluser")


  };

  const DeleteUser=async(id)=>{
    console.log("101")
    const result=await serviceDeleteUser(id)
    GetAllData()
 
  }
  return (
    <div>
      <table className="table" style={{width:"50%",marginLeft:"20%",marginRight:"25%",marginTop:"2%"}}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">email</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {biodata.map((val) => {
            return (
              <tr>
                <td>{val._id}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>
                <NavLink to={`/edituser/${val._id}`}>
                  <button  class="btn btn-primary">Eidt</button>
                </NavLink>
                </td>
                <td><button  class="btn btn-primary" onClick={()=> DeleteUser(val._id)}>Delete</button></td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllUser;
