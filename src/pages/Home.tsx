import React from 'react'
import { Link } from 'react-router-dom';


const Home: React.FC = () => {

  return (
    <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
        <Link to="/userpanel"><button className='btn btn-success'>User</button> </Link>
        <Link to="/projectpanel"><button className='btn btn-success'>Project</button> </Link>
    </div>
  )
}

export default Home