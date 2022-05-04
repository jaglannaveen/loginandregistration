import React from 'react'

const Home = ({logout}) => {

  return (
    <div className='homepage'>
      <h1>Hello Homepage</h1>
    <div className="buttonn" onClick={() => logout({})} >
   Logout
  </div>
  </div>
  )
}

export  default Home;