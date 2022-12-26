import React from 'react';
import { NavLink } from 'react-router-dom;


function Home() {
  return (
    <>
   
    <div className='bg-slate-200 bg-cover'>
    <section className='bg-blue-720 background-color-500'>
      <p> Full Stack Web Developer</p>

    </section>
    </div>
    <div>
      <h1> Main Section</h1>
      <p>The main text lorem ipsum</p>
     </div>
     <NavLink to="/about">
            <div >
              <p >
                Pick A Mood
              </p>
            </div>
          </NavLink>


    


 
</>
  )
}

export default Home