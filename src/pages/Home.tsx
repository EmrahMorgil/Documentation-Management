import React from 'react'
import { RootState } from '../redux/store';
import { useDispatch,useSelector } from 'react-redux';
import UsersList from '../components/UsersList';
import { Link } from 'react-router-dom';
import { user } from '../types/Type';

const Home = () => {

  return (
    <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
        <Link to="/userpanel"><button className='btn btn-success'>User</button> </Link>
        <Link to="/projectpanel"><button className='btn btn-success'>Project</button> </Link>
    </div>
  )
}

export default Home