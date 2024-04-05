import React, { useCallback, useEffect, useState } from 'react'
import { Routes, Route, useBeforeUnload } from 'react-router-dom'

import './Profile.css'

import ProfileGaming from './ProfileGaming'
import ProfileBlock from './ProfileBlock'
import ProfileCorporate from './ProfileCorporate'
import { getData } from '../../data'
import Spinner from '../Spinner'

const Profile = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useBeforeUnload(
    useCallback(() => {
      setLoading(true)
    }, [setLoading])
  )

  useEffect(() => {
    getData().then(data => {
      setData(data)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    })
  }, [])

  /*const renderProfile = () => {
    return (
      <>
        {theme === 'corporate' && <ProfileCorporate data={data} />}
        {theme === 'blockchain' && <ProfileBlock data={data} />}
        {theme === 'gaming' && <ProfileGaming data={data} />}
      </>
    )
  }*/

  return (
    <>
      {!loading ? (
        <Routes>
          <Route exact path='/' element={<ProfileCorporate data={data} />} />
          <Route exact path='/blockchain' element={<ProfileBlock data={data} />} />
          <Route exact path='/gaming' element={<ProfileGaming data={data} />} />
        </Routes>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Profile
