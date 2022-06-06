import React, { useState } from 'react'

import { useMorphKeys } from 'react-morph'

import PlayerMini from './PlayerMini'
import PlayerFull from './PlayerFull'

const Player = () => {
  const [ isMini, setSize ] = useState(true)
  const morphs = useMorphKeys(['container', 'image', 'title', 'subtitle'])

  const toggleSize = () => {
    setSize(!isMini)
  }

  return (
    <div>
      <button onClick={toggleSize}>Toggle</button>
      { isMini ? <PlayerMini morphs={morphs} /> : <PlayerFull morphs={morphs} /> }
    </div>
  )
}

export default Player
