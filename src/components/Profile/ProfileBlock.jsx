// import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const ProfileBlock = ({ morphs, ...props }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg' {...props} {...morphs.container}>
      <div className='section'>
        <div className='photo'>
          <img src='assets/photo.jpg' className='w-full h-full rounded object-cover' alt='me' {...morphs.image} />
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <h4 className='text-1xl m-0 mb-1 text-black leading-none font-medium' {...morphs.title}>
            A Sky Full of Stars
          </h4>
          <p className='text-sm m-0 text-grey-dark float-left' {...morphs.subtitle}>
            Ghost Stories
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileBlock


/*
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
    </a> *}
    <a href='https://github.com/brunoscholz'>
      <AiFillGithub color='orange' size={30} />
    </a>
    <a href='https://linkedin.com/bruno-scholz-b2a55723'>
      <AiFillLinkedin color='orange' size={30} />
    </a>
  </div>
</div>
*/