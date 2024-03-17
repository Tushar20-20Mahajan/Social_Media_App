import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/profileSide.jsx';

const Home = () => {
  return (
    <div className='Home'>
     < ProfileSide />
        <div className='post'>Post</div>
        <div className='rightSide'>RightSide</div>

    </div>
  )
}

export default Home