import React, { useEffect, useState } from 'react'
import { AiFillGithub, AiFillHome, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai'

import {
  Heading,
  Card,
  Name,
  Logo,
  AboutInfo,
  Avatar,
  Birthday,
  ContactIcons,
  Container,
  AboutSection
} from '../../theme/theme'
import Projects from '../Projects/Projects'
import ExperienceBlock from '../ExperienceBlock'
import EducationBlock from '../EducationBlock'

const ProfileBlock = ({ data, ...props }) => {
  const [aboutData, setAboutData] = useState([])
  const [interestData, setInterestData] = useState([])
  const [experienceData, setExperienceData] = useState([])
  const [educationData, setEducationData] = useState([])
  const [skillData, setSkillData] = useState([])

  useEffect(() => {
    console.log('handleData', data)
    handleData(data)
  }, [data])

  const handleData = data => {
    setAboutData(data.AboutData)
    setInterestData(data.InterestData)
    setExperienceData(data.ExperienceData)
    setSkillData(data.SkillData)
    setEducationData(data.EducationData)
  }

  return (
    <AboutSection className='section blockchain' {...props}>
      <Container>
        <Heading>
          <div className='col-md-10 col-sm-12 offset-md-1'>
            <div className='row g-0 mb-5'>
              <div className='col-lg-12 col-xs-12'>
                <Logo>Resumè</Logo>
              </div>
            </div>

            <div className='row g-0'>
              <div className='col-md-12 col-xs-12'>
                <Birthday>
                  <span>Created</span>
                  <p>March 2, 1983</p>
                </Birthday>
              </div>
            </div>

            <AboutInfo className='g-0 mb-4'>
              <Avatar className='col-md-12 col-xs-12'>
                <img src='assets/photo.png' className='img-responsive pixelated center-block' alt='me' />
              </Avatar>
            </AboutInfo>

            <div className='row'>
              <Name className='col-md-12 col-xs-12'>
                <p>Bruno</p>
                <p>Ribeiro</p>
                <p>Scholz</p>
              </Name>
              <h4 style={{ marginTop: '-15px' }}>
                <b>One</b> of those <em>Programmer</em> people.
              </h4>
            </div>

            <div className='row mt-5'>
              <div className='col-md-12 col-xs-12'>
                <Card>
                  <h3 style={{ marginBottom: '5px' }}>Find me</h3>
                  <ContactIcons className='row list'>
                    <div className='col-md-4'>
                      <a href='mailto:brunoscholz@yahoo.de'>
                        <AiFillMail color='#fc00b1' size={30} />
                        <span className='ps-3'>brunoscholz@yahoo.de</span>
                      </a>
                    </div>
                    <div className='col-md-4'>
                      <a href='https://twitter.com/brunoskolz'>
                        <AiFillTwitterCircle color='#fc00b1' size={30} />
                        <span className='ps-3'>@brunoskolz</span>
                      </a>
                    </div>
                    <div className='col-md-4'>
                      <a href='https://github.com/brunoscholz'>
                        <AiFillGithub color='#fc00b1' size={30} />
                        <span className='ps-3'>/brunoscholz</span>
                      </a>
                    </div>
                    <div className='col-md-4'>
                      <a href='https://linkedin.com/in/brunoscholz'>
                        <AiFillLinkedin color='#fc00b1' size={30} />
                        <span className='ps-3'>/in/brunoscholz</span>
                      </a>
                    </div>
                    <div className='col-md-4'>
                      <em>
                        <AiFillHome color='#fc00b1' size={30} />
                        <span className='ps-3'>Pelotas / RS - Brazil</span>
                      </em>
                    </div>
                  </ContactIcons>
                </Card>
              </div>
            </div>
          </div>
        </Heading>

        <div className='row'>
          <div className='col-md-10 col-sm-10 offset-sm-1 col-xs-12'>
            <div className='row mt-5'>
              <div className='col-md-12 col-xs-12'>
                <Card>
                  <h3 style={{ marginBottom: '5px' }}>About Me</h3>
                  <article dangerouslySetInnerHTML={{ __html: aboutData }}></article>
                </Card>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-md-6'>
                <Card>
                  <h3 style={{ marginBottom: '5px' }}>Skills</h3>
                  <p style={{ marginTop: '0px' }}>
                    This programmer has <em>{skillData.length} attributes</em>.
                  </p>
                  <div className='row list'>
                    {skillData.filter(k => k.profiles.indexOf('blockchain') >= 0).map((item, idx) => {
                      return (
                        <div className='col-md-12 col-xs-12 p-2' key={idx}>
                          <em>{item.trait}</em>
                          <div className='progress'>
                            <div
                              className='progress-bar'
                              role='progressbar'
                              style={{ width: `${item.value}%` }}
                              aria-valuenow={item.value}
                              aria-valuemin='0'
                              aria-valuemax='100'
                            >
                              {/* {`${item.value}%`} */}
                            </div>
                            {item.current && (
                              <div
                                className='progress-bar highlight'
                                role='progressbar'
                                style={{ width: `10%` }}
                                aria-valuenow='10'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                    {/* <b>top 15%</b> of 642.7k people on linkedin. */}
                    {/* <b>top 15%</b> of 163.6k people on linkedin. */}
                  </div>
                </Card>
              </div>
              <div className='col-md-6'>
                <Card>
                  <h3 style={{ marginBottom: '5px' }}>Interests</h3>
                  <p style={{ marginTop: '0px' }}>Hobbies and the like.</p>
                  <div className='row list interests'>
                    {interestData.map((item, idx) => {
                      return (
                        <React.Fragment key={idx}>
                          {item.value > 0 && <div className='col-md-6 col-xs-6'></div>}
                          <div className={`col-md-6 col-xs-6 p-2 ${item.value < 0 ? 'negative' : ''}`}>
                            <em>{item.trait}</em>
                            <div className={`progress ${item.value < 0 ? 'justify-content-end negative' : ''}`}>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: `${item.value < 0 ? item.value * -1 : item.value}%` }}
                                aria-valuenow={item.value < 0 ? item.value * -1 : item.value}
                                aria-valuemin='0'
                                aria-valuemax='100'
                              >
                                {/* {`${item.value}%`} */}
                              </div>
                            </div>
                          </div>
                          {item.value < 0 && <div className='col-md-6 col-xs-6'></div>}
                        </React.Fragment>
                      )
                    })}
                    {/* <b>top 15%</b> of 642.7k people on linkedin. */}
                    {/* <b>top 15%</b> of 163.6k people on linkedin. */}
                  </div>
                </Card>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-md-12'>
                <Card color={'primary'} border={true} className='about-gallery h-100'>
                  <h3>Recent Projects</h3>
                  <article className='content'>
                    <Projects />
                  </article>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className='mx-3'>
        <div>
          <div className='row mt-5'>
            <div className='col-md-12'>
              <ExperienceBlock data={experienceData} />
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-md-12'>
              <EducationBlock data={educationData} />
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className='row footer'>
          <div className='col-md-12 text-center'>
            based on <a href='https://cryptopunks.app/'>CryptoPunks</a> - NFT Marketplace - design
          </div>
        </div>
      </Container>
    </AboutSection>
  )
}

export default ProfileBlock
