import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useMorphKeys } from 'react-morph'

import PlayerMini from './PlayerMini'
import PlayerFull from './PlayerFull'

const Player = () => {
  const morphs = useMorphKeys(['container', 'image', 'title', 'subtitle'])

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' render={() => <PlayerMini morphs={morphs} /> } />
          <Route path='/full' render={() => <PlayerFull morphs={morphs} /> } />
        </Routes>
      </div>
    </Router>
  )
}

export default Player
