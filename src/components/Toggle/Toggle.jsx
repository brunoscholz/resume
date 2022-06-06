// import { useState } from 'react'
import './Toggle.css'

/**
 * Three state Toggle
 *
 *
 */
const Toggle = ({theme, onChange}) => {
  const [ inputProps ] = useRadioButtons('choose_theme', onChange)

  return (
    <div className='wrapper'>
      <input id='corporate' value='corporate' checked={theme === 'corporate'} {...inputProps} />
      <label htmlFor='corporate' id='corporate-lbl'>
        Corporate
      </label>

      <input id='blockchain' value='blockchain' checked={theme === 'blockchain'} {...inputProps} />
      <label htmlFor='blockchain' id='blockchain-lbl'>
        Blockchain
      </label>

      <input id='gaming' value='gaming' checked={theme === 'gaming'} {...inputProps} />
      <label htmlFor='gaming' id='gaming-lbl'>
        Gaming
      </label>

      <div className={`toggle start-${theme}`}></div>
    </div>
  )
}

export default Toggle

function useRadioButtons(name, callback) {
  // const [value, setState] = useState('corporate')

  const handleChange = e => {
    // setState(e.target.value)
    callback(e.target.value)
  }

  const inputProps = {
    name,
    type: 'radio',
    onChange: handleChange
  }

  return [inputProps]
}
