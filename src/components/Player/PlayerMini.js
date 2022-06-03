import { Link } from 'react-router-dom'

const PlayerMini = ({ morphs, ...props }) => {
  return (
    <Link to='/full' className='no-underline'>
      <div
        className='bg-white max-w-xs mx-auto shadow-lg rounded-lg cursor-pointer block mb-5'
        {...props}
        {...morphs.container}
      >
        <div className='flex'>
          <div className='w-1/5'>
            <img
              className='w-full h-full rounded object-cover'
              src='sky-square.jpg'
              alt='Album Pic'
              width='80'
              {...morphs.image}
            />
          </div>
          <div className='w-full py-2 px-3'>
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
        </div>
      </div>
    </Link>
  )
}

export default PlayerMini
