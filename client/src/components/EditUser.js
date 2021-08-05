import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getEditUserDetails,PutEditUserDetail } from '../service/Proservice';

function EditUser() {

   const {id} =useParams()
   useEffect(() => {
       effectEditUserDetails()
   }, [])

    const [user, setuser] = useState({
        name:"",
        username:"",
        email:"",
        phone:""
    })
    
   const effectEditUserDetails=async()=>{
    const data= await getEditUserDetails(id)
    setuser({...user,name:data.name,username:data.username,email:data.email,phone:data.phone})
 }


 const EditUserDetail=async()=>{
     await PutEditUserDetail(id,user)
 }

    let name;
    let value;
    const InputData=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setuser({...user,[name]:value})
      
    }
    return (
        <>
         <div style={{marginLeft:"25%",marginRight:"25%",marginTop:"2%"}}>

        <form >
            <div>
            <h1>Edit User</h1>
            </div>
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
  <button type="submit" class="btn btn-primary" onClick={()=> EditUserDetail()}>Edit User</button>
 
  </div>
</form>
</div>   
</>
    )
}

export default EditUser
