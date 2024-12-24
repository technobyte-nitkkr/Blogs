import React from 'react'
import EditProfile from '../../components/EditProfile/EditProfile'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/index'
function Profile() {
  return (
    <div>
      <Navbar></Navbar>
      <EditProfile/>
      <Footer/>
    </div>
  )
}

export default Profile
