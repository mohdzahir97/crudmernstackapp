
export const Proservice=async() =>{
   let result;
   try {
      const res=await fetch("/alluser",{
         method:"GET",
         headers:{
            "Content-Type":"application/json"
         }
      })
     result=await res.json();
      
   } catch (error) {
      console.log(error);
   }
   return result;
}
export const AddUserDeatils=async(user)=>{
   const {name,username,email,phone}=user;
   try {
      const res=await fetch("/adduser",{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify(
            {name,username,email,phone}
         )
      })
      const result=await  res.json();
      
   } catch (error) {
      console.log(error);
   }
}

export const getEditUserDetails=async(id)=>{
   let result;
   try {
      const res=await fetch(`/edituser/${id}`,{
         method:"GET", 
         headers:{"Content-Type":"application/json"}
      })
      result = await  res.json();
      
   } catch (error) {
      console.log(error);
   }   return result;
}

export const PutEditUserDetail=async(id,user)=>{
   try {
      const res=await fetch(`/edit/${id}`,{
         method:"PUT",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({user})
      })  
      const result=await  res.json(); 
   } catch (error) {
      console.log(error);
   }
   
}
export const serviceDeleteUser=async(id)=>{
   try {
      const res=await fetch(`/delete/${id}`,{
         method:"DELETE",
         headers:{
            "Content-Type":"application/json"
         }
      })
      const result=await res.json();
      console.log(res.status)

      
   } catch (error) {
      console.log(error);
   }

}


/*
export const AddUserDeatils=async(id)=>{
   return await axios.post(`${url}/adduser${id}`)
}
export const Proservice=async() =>{
   return await axios.get(url)
}
export const getEditUserDetails=async(id)=>{
   return await axios.get(`${url}/${id}`)
}
export const PutEditUserDetail=async(id,user)=>{
   console.log(user+"12345");
   return await axios.put(`${url}/${id}`,user)
}
export const serviceDeleteUser=async(id)=>{
   await axios.delete(`${url}/${id}`)

}*/