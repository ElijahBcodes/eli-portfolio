import React from 'react';
import { NavLink } from 'react-router-dom';
import Pic from "../../assets/portrait.png"

function Home() {
  return (
    <> 
    <div className='bg-slate-200 bg-cover'>
  
  
      <h1 className="font-serif"> Elijah Barreto</h1>
      <h2>Full Stack Web Developer</h2>
      <img className='portrait' alt='portrait' src={Pic} />
      <p>The main text lorem ipsum</p>
      </div>
      <NavLink to="/about">
            <div >
              <p >
                Learn more about me.
              </p>
              
            </div>
          </NavLink>


    


 
</>
  )
}

export default Home