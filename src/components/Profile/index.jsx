import React, { useEffect, useState } from 'react'
import './Profile.css'

import ProfileGaming from './ProfileGaming'
import ProfileBlock from './ProfileBlock'
import ProfileCorporate from './ProfileCorporate'
import { getData } from '../../data'

const Profile = ({ theme }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData().then(data => {
      setData(data)
      setLoading(false)
    })
  }, [])

  const renderProfile = () => {
    return (
      <>
        {theme === 'corporate' && <ProfileCorporate data={data} />}
        {theme === 'blockchain' && <ProfileBlock data={data} />}
        {theme === 'gaming' && <ProfileGaming data={data} />}
      </>
    )
  }

  return <>{!loading ? renderProfile() : <div></div>}</>
}

export default Profile
