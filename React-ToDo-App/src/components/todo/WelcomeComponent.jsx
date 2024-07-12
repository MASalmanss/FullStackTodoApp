import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { retrieveHelloWorld } from './api/HelloWordApiService';

export function WelcomeComponent() {
  const { username } = useParams();

  const [message , setMessge] = useState();

  function callHelloWorldBean(){
    console.log(message);
    retrieveHelloWorld()
    .then((response)=> succesfullResponse(response))
    .catch((err) => err)
  }

  function succesfullResponse(response){
    setMessge(response)
  }

  return (
    <div className='Welcome'>
      Welcome, to go your todos <Link to="/todos">click</Link>
      <div>
        <button className='btn btn-succes'>Helloword</button>
      </div>
    </div>
  );
}
