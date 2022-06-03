import { useState } from 'react'
import './Toggle.css'
/**
 * Three state Toggle
 *
 *
 */
const Toggle = ({onChange}) => {
  const [themeValue, themeInputProps] = useRadioButtons('choice_theme', onChange)

  return (
    <div className='wrapper'>
      <input id='corporate' value='corporate' checked={themeValue === 'corporate'} {...themeInputProps} />
      <label htmlFor='corporate' id='corporate-lbl'>
        Corporate
      </label>

      <input id='blockchain' value='blockchain' checked={themeValue === 'blockchain'} {...themeInputProps} />
      <label htmlFor='blockchain' id='blockchain-lbl'>
        Blockchain
      </label>

      <input id='gaming' value='gaming' checked={themeValue === 'gaming'} {...themeInputProps} />
      <label htmlFor='gaming' id='gaming-lbl'>
        Gaming
      </label>

      <div className={`toggle start-${themeValue}`}></div>
    </div>
  )
}

export default Toggle

function useRadioButtons(name, callback) {
  const [value, setState] = useState('corporate')

  const handleChange = e => {
    let val = e.target.value
    callback(val)
    setState(val)
  }

  const inputProps = {
    name,
    type: 'radio',
    onChange: handleChange
  }

  return [value, inputProps]
}
