import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {
  let navigate =useNavigate()


  const [user,setUser] = useState({
    name:"",
    username:"",
    email:"",
  });
  const{name,username,email} =user;

   const onInputChanges=(e)=>{
    setUser({ ...user,[e.target.name]: e.target.value});

   };
   const  onSubmit =async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
    navigate("/")
   };

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-6 offset-ms-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor="name" className='form-label'>
              Name
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your name'
            name='name'
            value = {name}
            onChange={(e) => onInputChanges(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="Username" className='form-label'>
              UserName
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your Username'
            name='username'
            value = {username}
            onChange={(e) => onInputChanges(e)}
              
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="Email" className='form-label'>
            Email
            </label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your Email'
            name='email'
            value = {email}
            onChange={(e) => onInputChanges(e)}
              
            />
          </div>
          <button type="submit" className='btn btn-outline-primary'>Subit</button>
          <Link to="/" className='btn btn-outline-danger mx-2'>cancel</Link>
          </form>


        </div>
      </div>

    </div>
  );
}

export default AddUser;