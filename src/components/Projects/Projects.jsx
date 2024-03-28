import { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import { AiFillGithub } from 'react-icons/ai'
import { Wrapper, Item, Image, Details, Button } from '../../theme/theme'

const Projects = (props) => {
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    if (props.data) {
      const _data = props.data.sort((a,b) => {
        return a.order[props.idx] - b.order[props.idx]
      })
      setProjectData(_data)
    }
  }, [props])

  return (
    <Carousel cols={2} rows={1} gap={25} loop scrollSnap={true}>
      {projectData.map((item, idx) => {
        return (
          <Carousel.Item key={idx}>
            <Wrapper>
              <Item href={item.link || '/'} target='_blank' rel='noreferrer'>
                <Image style={{ backgroundImage: `url(assets/projects/${item.image})` }}>
                  <div className='techs'>
                    {item.github && item.github !== '' && (
                      <a
                        href={item.github}
                        target='_blank'
                        rel='noreferrer'
                        alt='github'
                        title='See it on Github'
                        className='tech'
                      >
                        <AiFillGithub size={20} />
                      </a>
                    )}
                    {item.tech.map((t, i) => (
                      <div className='tech' key={i} title={t}>
                        {t}
                      </div>
                    ))}
                  </div>
                </Image>
                <Details>
                  <div className='name'>
                    <b>{item.name}</b>
                  </div>
                  <div className='description'>{item.description}</div>
                </Details>
              </Item>

              {item.link !== '' && (
                <div className='project-button-wrapper'>
                  <Button href={item.link} target='_blank' rel='noreferrer' className='btn w-button'>
                    Go
                  </Button>
                </div>
              )}
            </Wrapper>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default Projects
