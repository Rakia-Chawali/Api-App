import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { BsCheckLg} from "react-icons/bs";
function UserData() {
    let {id} = useParams();
    const [data, setData]= useState();
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) =>setData(response.data))
        .catch((error)=>console.log(error));
      
    
     
      
    }, []);
    
  return (
    <div className="data">
      {data?.map((post, index) => (
        <div key={index} className="post">
          <h2 className="post-title">
            <BsCheckLg color="#0C747D" />
            {post.title}
          </h2>
          <p className="parag">{post.body}</p>
        </div>
      ))}
    </div>
  );
 
}

      
   


export default UserData;