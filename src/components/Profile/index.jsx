import React from 'react'
import { useMorphKeys, presets } from 'react-morph'
import { linear } from '@popmotion/easing'

import './Profile.css'

import ProfileGaming from './ProfileGaming'
import ProfileBlock from './ProfileBlock'
import ProfileCorporate from './ProfileCorporate'

const Profile = ({theme}) => {
  // const [ theme ] = useTheme()
  const morphs = useMorphKeys(['container', 'image', 'name', 'birth', 'about', 'contact', 'skills', 'interests', 'education', 'experience', 'gallery'], {
    keepFrom: false,
    type: 'morph',
    spring: {
      ...presets.noWobble,
      restDisplacementThreshold: 0.0005
    },
    easing: linear
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