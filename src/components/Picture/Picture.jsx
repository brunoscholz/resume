import charicature from '../headshot.png'
import photo from '../headshot.png'

import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Picture = ({theme, morph}) => {
  return (
    <div className='section'>
      <div className='bio'>
        <p className='no-margin small-text'>Hello</p>
        <p className='no-margin name-text'>
          I'm <span className='highlight-text'>Tim Ruscica</span>
        </p>
        <p className='no-margin small-text'>
          youtuber <span className='highlight-text'>and</span> software engineer
        </p>
        <div className='icons'>
          <a href='https://twitter.com/brunoskolz'>
            <AiFillTwitterCircle color='orange' size={30} />
          </a>
          {/* <a href='https://youtube.com/techwithtim'>
            <AiFillYoutube color='orange' size={30} />
          </a> */}
          <a href='https://github.com/brunoscholz'>
            <AiFillGithub color='orange' size={30} />
          </a>
          <a href='https://linkedin.com/bruno-scholz-b2a55723'>
            <AiFillLinkedin color='orange' size={30} />
          </a>
        </div>
      </div>
      <div className='photo'>
        <img src={charicature} {...morph} className={`profile-image ${theme}`} alt='me' />
      </div>
    </div>
  )
}

export default Picture