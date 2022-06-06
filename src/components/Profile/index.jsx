import React from 'react'
import { useMorphKeys, presets } from 'react-morph'

import './Profile.css'

import ProfileGaming from './ProfileGaming'
import ProfileBlock from './ProfileBlock'
import ProfileCorporate from './ProfileCorporate'

const Profile = ({theme}) => {
  // const [ theme ] = useTheme()
  const morphs = useMorphKeys(['container', 'image', 'name', 'birth', 'about', 'contact', 'skills', 'interests', 'education', 'experience', 'gallery'], {
    keepFrom: false,
    spring: {
      ...presets.wobbly,
      damping: 20,
      restDisplacementThreshold: 0.0005
    }
  })

  return (
    <div>
      { theme === 'corporate' && <ProfileCorporate morphs={morphs} /> }
      { theme === 'blockchain' && <ProfileBlock morphs={morphs} /> }
      { theme === 'gaming' && <ProfileGaming morphs={morphs} /> }
    </div>
  )
}

export default Profile