import React from 'react'
import './Profile.css'

import ProfileGaming from './ProfileGaming'
import ProfileBlock from './ProfileBlock'
import ProfileCorporate from './ProfileCorporate'

const Profile = ({theme}) => {
  return (
    <>
      { theme === 'corporate' && <ProfileCorporate  /> }
      { theme === 'blockchain' && <ProfileBlock  /> }
      { theme === 'gaming' && <ProfileGaming  /> }
    </>
  )
}

export default Profile