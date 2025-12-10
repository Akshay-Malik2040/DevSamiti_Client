import React from 'react'
import ProfileEdit from './ProfileEdit'
import { useSelector } from 'react-redux'


const Profile = () => {
  const user=useSelector(store=>store.user);
  // console.log(user)
  return user && (
    <div>
      <ProfileEdit user={user}/>
    </div>
  )
}

export default Profile