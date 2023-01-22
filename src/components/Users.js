import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserCards from './UserCards';
import "../css/style.css";
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions';
import { useSelector } from 'react-redux';
function Users() {
  const dispatch = useDispatch();
    const users = useSelector((store) => store.appReducer.users);
  //const[users, setUsers]= useState();
  const[error, setError]= useState();
  useEffect( ()=>{
     
     dispatch(getUsers());
 }, []);
  return (
    <div id="users" >
      {users?.map( (user, index) => (
        <UserCards  key={index} {...user}/>
      ))}
   </div>
  );
} 
  

export default Users;