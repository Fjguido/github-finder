import React from 'react'

function Home() {
  return (
    <div>
        <h1 className="text-6xl">Wassup</h1>
        {process.env.TOKEN}
       
    </div>
  )
}


export default Home