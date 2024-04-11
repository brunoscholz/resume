import { useEffect, useState } from 'react'
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
import { renderSocialIcon } from '../../helper'
import Testimonials from '../Testimonials/Testimonials'

const ProfileGaming = ({ data, ...props }) => {
  const [aboutData, setAboutData] = useState([])
  // const [interestData, setInterestData] = useState([])
  const [socialData, setSocialData] = useState([])
  const [experienceData, setExperienceData] = useState([])
  const [educationData, setEducationData] = useState([])
  const [skillData, setSkillData] = useState([])
  const [projectData, setProjectData] = useState([])
  const [reviewData, setReviewData] = useState([])

  useEffect(() => {
    handleData(data)
  }, [data])

  const handleData = data => {
    setAboutData(data.AboutData)
    // setInterestData(data.InterestData)
    setSocialData(data.SocialData)
    setExperienceData(data.ExperienceData)
    setSkillData(data.SkillData)
    setEducationData(data.EducationData)
    setProjectData(data.ProjectData)
    setReviewData(data.Testimonials)
  }

  const createBar = item => {
    const value = Math.round((item.value / 100) * 9)

    return (
      <>
        <div className={`top${item.current ? ' using' : ''}`}></div>
        <div className={`block${value > 7 ? (value === 8 ? ' using' : ' skill') : ''}`}></div>
        <div className={`block${value > 6 ? (value === 7 ? ' using' : ' skill') : ''}`}></div>
        <div className={`block${value > 5 ? (value === 6 ? ' using' : ' skill') : ''}`}></div>
        <div className={`block${value > 4 ? (value === 5 ? ' using' : ' skill') : ''}`}></div>
        <div className={`block${value > 3 ? (value === 4 ? ' using' : ' skill') : ''}`}></div>
        <div className={`block${value > 2 ? (value === 3 ? ' using' : ' skill') : ''}`}></div>
        <div className={`block${value > 1 ? (value === 2 ? ' using' : ' skill') : ''}`}></div>
        <div className={`block${value > 0 ? (value === 1 ? ' using' : ' skill') : ''}`}></div>
      </>
    )
  }

  const pad = text => {
    var content = `|&nbsp;&nbsp;${text}&nbsp;&nbsp;|`
    if (text.length > 4) content = `|&nbsp;${text}&nbsp;|`

    var num = text.length === 3 ? text.length + 4 : text.length > 3 ? text.length + 2 : 6
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
    const filteredSkills = skillData.filter(k => k.profiles.indexOf('gaming') >= 0)
    const render = []
    // const data =[{"name":"test1"},{"name":"test2"}];
    // const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

    for (let i = 0; i < filteredSkills.length; i += 2) {
      const item1 = filteredSkills[i]
      const item2 = filteredSkills[i + 1]

      render.push(
        <div className='col-lg-4 col-md-4 col' key={`skill-${i}`}>
          <div className='chart'>
            <div className='bar-1'>{createBar(item1)}</div>
            <div className='bar-1'>{createBar(item2)}</div>
          </div>
          <div className='chart-x'>
            <div className='ascii'>{pad(item1.trait)}</div>
            <div className='ascii'>{pad(item2.trait)}</div>
          </div>
        </div>
      )
    }
    return render
  }

  const renderSocialLink = (item, idx) => {
    if (idx > 4) return null
    return (
      <a href={item.url} key={idx}>
        {renderSocialIcon(item.icon, '#d0ff01', 50)}
        <span className='ps-3'>{item.value}</span>
      </a>
    )
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
                {socialData.map((item, idx) => {
                  return renderSocialLink(item, idx)
                })}
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
              <article dangerouslySetInnerHTML={{ __html: aboutData }}></article>
              {/* <article>
                I learned coding by myself back in 1999, still in high school, with a copy I found online of the classic QBasic <a href="https://en.wikipedia.org/wiki/Gorillas_(video_game)">Gorillas</a>.
                Then I learned C and made a tetris for my first semester 'computer science' class in the electronics engineering course (2003). By that moment I knew I was going to be a programmer and I wanted to work with games.

                Got my first programming job in 2004 (php & mysql) and left for higher pay at Banco do Brasil which, in retrospect, damaged my

                I learned coding by myself back in 1999, still in high school, and got my first programming job in 2004 (php & mysql). I left that job for Banco do Brasil,
                where I worked for 8 years and had great experiences traveling and living in different places in Brazil. I've never stopped coding and learning by
                playing with my own projects and studying new languages.<br/><br/>

                I did leave the bank to open my own game company with some college friends and we did participate in a few fairs and online game development challenges
                until we were invited by our former teachers to join them in a new project in corporate training. Unfortunately, the partnership ended after 2 years due
                to management differences. I went on to learn how to be an entrepreneur and together with my wife, we opened a bakery that lasted 2 years until
                she had the opportunity to manage her father's store and I had the chance to return to the tech market.<br/><br/>

                Since my re-entry in January 2021, I can say it was an awesome ride so far! I could participate in several projects (angular, react, js), and use the
                full extent of my knowledge, including an advergame! I've been part of different teams, held technical meetings with clients and also was the only person
                in one of the projects: the only developer in direct contact with the client. But most important, I learned a lot!
              </article> */}
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
                {listSkills()}
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
                + <em>Testimonials</em>
              </span>
              <article className='content'>
                <Testimonials data={reviewData} idx={0} />
              </article>
            </GameCard>
          </div>
        </div>

        <div className='row flex g-0'>
          <div className='col-md-12 col mb-4'>
            <GameCard color={'primary'} border={true} className='about-gallery h-100'>
              <span className='badge'>
                + <em>Recent Projects</em>
              </span>
              <article className='content'>
                <Projects data={projectData} idx={2} />
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
                {experienceData.map((item, idx) => {
                  return (
                    <div className='d-flex flex-column item-list' key={idx}>
                      <span className='title'>{item.company}</span>
                      <span>
                        <b className='position'>{item.title}</b> - <em className='skills'>{item.skills.join(', ')}</em>
                      </span>
                      <span className='dates'>{`${item.begin} ${item.separator} ${item.end}`}</span>
                      <ul className='simple-list gaming'>
                        {item.description.map((li, i) => {
                          return (
                            <li key={`list-item-${i}`}>
                              <span className='ps-4 description' dangerouslySetInnerHTML={{ __html: li }}></span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </article>
            </GameCard>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12 ps-md-2-5 mb-4'>
            <GameCard color={'color4'} border={true} className='about-education mb-4'>
              <span className='badge'>
                + <em>Certifications</em>
              </span>
              <article className='content'>
                {educationData.filter(x => x.type === 'certification').map((item, idx) => {
                  return (
                    <div className='d-flex flex-column item-list' key={idx}>
                      <span className='title'>{item.university}</span>
                      <span>
                        <b className='position'>{item.major}</b> - <em className='skills'>{item.skills.join(', ')}</em>
                      </span>
                      <span className='dates'>
                        {item.date} {item.status !== 'certification' ? item.status : ''}
                      </span>
                    </div>
                  )
                })}
              </article>
            </GameCard>
            <GameCard color={'color4'} border={true} className='about-education'>
              <span className='badge'>
                + <em>Education</em>
              </span>
              <article className='content'>
                {educationData.filter(x => x.type === 'education').map((item, idx) => {
                  return (
                    <div className='d-flex flex-column item-list' key={idx}>
                      <span className='title'>{item.university}</span>
                      <span>
                        <b className='position'>{item.major}</b> - <em className='skills'>{item.skills.join(', ')}</em>
                      </span>
                      <span className='dates'>
                        {item.date} {item.status !== 'certification' ? item.status : ''}
                      </span>
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
