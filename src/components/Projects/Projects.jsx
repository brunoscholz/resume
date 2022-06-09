import Carousel from 'better-react-carousel'
import { AiFillGithub } from 'react-icons/ai'
import styled, { css } from 'styled-components'
import { MyProjects } from '../../data'

const Projects = () => {
  return (
    <Carousel cols={2} rows={1} gap={25} loop scrollSnap={true}>
      {MyProjects.map((item, idx) => {
        return (
          <Carousel.Item key={idx}>
            <Wrapper>
              <Item href={item.link || '/'} target='_blank' rel='noreferrer'>
                <Image style={{ backgroundImage: `url(assets/projects/${item.image})` }}>
                  <div className='techs'>
                    {item.github && item.github !== '' && (
                      <a href={item.github} target='_blank' rel='noreferrer' alt='github' title='See it on Github' className='tech'>
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

const Wrapper = styled.div`
  width: 100%;
  color: ${props => props.theme.colors.text};
  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`
const Item = styled.div`
  width: 100%;
`
const Image = styled.div`
  position: relative;
  margin-bottom: 15px;
  background-size: cover;
  min-height: 300px;
  border-radius: 5px;

  .techs {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;

    left: auto;
    top: auto;
    right: 0;
    bottom: 0;

    background-color: #00000033;
    padding: 7px;
    border-radius: 0 0 5px 5px;

    .tech {
      border-radius: 5px;
      padding: 3px 5px;
      margin: 0 3px;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.body};
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-size: 140%;
  }

  .description {
    margin: 0.75rem;
    border-bottom: 1px none rgba(34, 34, 34, 0.08);
    text-align: center;
    min-height: 50px;
    font-size: 14px;
  }

  .techs {
    display: flex;
    margin-bottom: 15px;

    .tech {
      border-radius: 5px;
      padding: 3px 5px;
      margin: 0 3px;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.body};
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`
const dashedBorders = css`
  border: dashed 2px #000;
  border-image-source: url('/assets/border-gray-5.png');
  border-image-slice: 2;
  border-image-repeat: round;
`

const normalBorders = css`
  border: 2px solid ${props => props.theme.colors.primary};
`
const Button = styled.a`
  ${props => props.theme.name === 'gaming' ? dashedBorders : normalBorders}

  color: ${props => props.theme.colors.primary};
  padding: 0.375rem 1.5rem;
  font-family: ${props => props.theme.typography.fonts[2]};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.body} !important;
  }
`
