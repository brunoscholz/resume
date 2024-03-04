import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillHome } from 'react-icons/ai'
import { EducationData, ExperienceData, AboutData, SkillData } from '../../data'

import {
  AboutSection,
  Container,
  Heading,
  GameCard,
  AboutInfo,
  ContactIcons,
  Avatar,
  Name,
  Birthday
} from '../../theme/theme'
import Projects from '../Projects/Projects'

import './Chart.css'

const ProfileGaming = ({ morphs, ...props }) => {

  const createBar = (item) => {
    const value = Math.round((item.value / 100) * 9)

    return (
      <>
        <div className={`top${item.current ? ' using' : ''}`}></div>
        <div className={`block${value > 7 ? (value === 8 ? ' using' : ' skill') : '' }`}></div>
        <div className={`block${value > 6 ? (value === 7 ? ' using' : ' skill') : '' }`}></div>
        <div className={`block${value > 5 ? (value === 6 ? ' using' : ' skill') : '' }`}></div>
        <div className={`block${value > 4 ? (value === 5 ? ' using' : ' skill') : '' }`}></div>
        <div className={`block${value > 3 ? (value === 4 ? ' using' : ' skill') : '' }`}></div>
        <div className={`block${value > 2 ? (value === 3 ? ' using' : ' skill') : '' }`}></div>
        <div className={`block${value > 1 ? (value === 2 ? ' using' : ' skill') : '' }`}></div>
        <div className={`block${value > 0 ? (value === 1 ? ' using' : ' skill') : '' }`}></div>
      </>
    )
  }

  const pad = (text) => {
    var content =  `|&nbsp;&nbsp;${text}&nbsp;&nbsp;|`
    if (text.length > 4) content = `|&nbsp;${text}&nbsp;|`

    var num = text.length === 3 ? text.length + 4 : (text.length > 3 ? text.length + 2 : 6)
    var line = '-'.repeat(num)

    return (
      <>
        <span>+{`${line}`}+</span>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
        <span>+{`${line}`}+</span>
      </>
    )
  }

  const listSkills = () => {
    const filteredSkills = SkillData.filter(k => k.profiles.indexOf('gaming') >= 0)
    const render = []
    const data =[{"name":"test1"},{"name":"test2"}];
    const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

    console.log(listItems)
    for (let i = 0; i < filteredSkills.length; i+=2) {
      const item1 = filteredSkills[i]
      const item2 = filteredSkills[i+1]

      render.push (

        <div className='col-lg-4 col-md-4 col'>
          <div className='chart'>
            <div className='bar-1'>
              { createBar(item1) }
            </div>
            <div className='bar-1'>
              { createBar(item2) }
            </div>
          </div>
          <div className='chart-x'>
            <div className='ascii'>
              { pad(item1.trait) }
            </div>
            <div className='ascii'>
              { pad(item2.trait) }
            </div>
          </div>
        </div>
      )
    }
    return render
  }

  return (
    <AboutSection className='section gaming' {...props}>
      <Container>
        <Heading className='mb-4 dashed-border--bottom'>
          <div className='col-md-6 col no-stretch'>
            <AboutInfo>
              <Avatar border={true} className='col-md-3 col'>
                <span className='badge'>+</span>
                <img src='assets/headshot.png' title='me' alt='me' />
                <Birthday>
                  <span>born</span>
                  <p>March 2, 1983</p>
                </Birthday>
              </Avatar>
              <Name className='col-md-9 col ps-md-4'>
                <p>Bruno</p>
                <p>Ribeiro</p>
                <p>Scholz</p>
              </Name>
            </AboutInfo>
          </div>

          <div className='col-md-6 col'>
            <GameCard color={'primary'} borders={[true, true, true, false]}>
              <span className='badge primary'>
                + <em>Find me</em>
              </span>
              <span className='badge gray badge--bottom-left'>+</span>

              <ContactIcons>
                <a href='mailto:brunoscholz@yahoo.de'>
                  <AiFillMail color='#d0ff01' size={50} />
                  <span className='ps-3'>brunoscholz@yahoo.de</span>
                </a>
                <a href='https://twitter.com/brunoskolz'>
                  <AiFillTwitterCircle color='#d0ff01' size={50} />
                  <span className='ps-3'>@brunoskolz</span>
                </a>
                <a href='https://github.com/brunoscholz'>
                  <AiFillGithub color='#d0ff01' size={50} />
                  <span className='ps-3'>/brunoscholz</span>
                </a>
                <a href='https://linkedin.com/in/brunoscholz'>
                  <AiFillLinkedin color='#d0ff01' size={50} />
                  <span className='ps-3'>/in/brunoscholz</span>
                </a>
                <a href='/'>
                  <AiFillHome color='#d0ff01' size={50} />
                  <span className='ps-3'>Pelotas / RS - Brazil</span>
                </a>
              </ContactIcons>
            </GameCard>
          </div>
        </Heading>

        <div className='row d-flex g-0 mb-4'>
          <div className='col-md-12 col'>
            <GameCard color={'secondary'} border={true}>
              <span className='badge'>
                + <em>About Me</em>
              </span>
              <article dangerouslySetInnerHTML={{ __html: AboutData }}></article>
            </GameCard>
          </div>
        </div>

        <div className='row flex g-0 mb-4'>
          <div className='col-md-12 col'>
            <GameCard color={'terciary'} border={true} className='about-skills h-100'>
              <span className='badge'>
                + <em>Skills</em>
              </span>
              <article className='d-flex flex-wrap'>
                { listSkills() }

                <div className='col-lg-12 col-md-12'>
                  <div className='chart-subtitles'>
                    <div className='legend'>
                      <span>skill</span>
                      <div className='block skill'></div>
                    </div>
                    <div className='legend'>
                      <span>goal</span>
                      <div className='top using'></div>
                    </div>
                    <div className='legend'>
                      <span>currently using / studying</span>
                      <div className='block using'></div>
                    </div>
                  </div>
                </div>
              </article>
            </GameCard>
          </div>
        </div>

        <div className='row flex g-0'>
          <div className='col-md-12 col'>
            <div className='about-interests'></div>
          </div>
        </div>

        <div className='row flex g-0'>
          <div className='col-md-12 col mb-4'>
            <GameCard color={'primary'} border={true} className='about-gallery h-100'>
              <span className='badge'>
                + <em>Recent Projects</em>
              </span>
              <article className='content'>
                <Projects />
              </article>
            </GameCard>
          </div>
        </div>

        <div className='row flex g-0'>
          <div className='col-lg-6 col-md-6 col pe-md-2-5 mb-4'>
            <GameCard color={'color5'} border={true} className='about-experience h-100'>
              <span className='badge'>
                + <em>Employment</em>
              </span>
              <article className='content'>
                {ExperienceData.map((item, idx) => {
                  return (
                    <div className='d-flex flex-column item-list' key={idx}>
                      <span className='title'>{item.company}</span>
                      <span>
                        <b className='position'>{item.title}</b> - <em className='skills'>{item.skills.join(', ')}</em>
                      </span>
                      <span className='dates'>{item.date}</span>
                      <span className='ps-4 description' dangerouslySetInnerHTML={{ __html: item.description }}></span>
                    </div>
                  )
                })}
              </article>
            </GameCard>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 ps-md-2-5 mb-4'>
            <GameCard color={'color4'} border={true} className='about-education h-100'>
              <span className='badge'>
                + <em>Education</em>
              </span>
              <article className='content'>
                {EducationData.map((item, idx) => {
                  return (
                    <div className='d-flex flex-column item-list' key={idx}>
                      <span className='title'>{item.university}</span>
                      <span>
                        <b className='position'>{item.major}</b> - <em className='skills'>{item.skills.join(', ')}</em>
                      </span>
                      <span className='dates'>{item.date}</span>
                      <span className='description' dangerouslySetInnerHTML={{ __html: item.description }}></span>
                    </div>
                  )
                })}
              </article>
            </GameCard>
          </div>
        </div>
        <div className='row g-0'>
          <div className='col-md-12 dashed-border--top p-4'>
            <div className='about-footer'>
              based on <a href='https://www.linkedin.com/in/thiago-manfrin-casagrande/'>Thiago Casagrange</a> design
            </div>
          </div>
        </div>
      </Container>
    </AboutSection>
  )
}

export default ProfileGaming
