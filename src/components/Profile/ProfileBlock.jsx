import React, { useEffect, useState } from 'react'

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
import { renderSocialIcon } from '../../helper'

const ProfileBlock = ({ data, ...props }) => {
  const [aboutData, setAboutData] = useState([])
  const [interestData, setInterestData] = useState([])
  const [socialData, setSocialData] = useState([])
  const [experienceData, setExperienceData] = useState([])
  const [educationData, setEducationData] = useState([])
  const [skillData, setSkillData] = useState([])
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    handleData(data)
  }, [data])

  const handleData = data => {
    setAboutData(data.AboutData)
    setInterestData(data.InterestData)
    setSocialData(data.SocialData)
    setExperienceData(data.ExperienceData)
    setSkillData(data.SkillData)
    setEducationData(data.EducationData)
    setProjectData(data.ProjectData)
  }

  const renderSocialLink = (item, idx) => {
    if (idx > 4) return null
    return (
      <div className='col-md-4' key={idx}>
        <a href={item.url}>
          {renderSocialIcon(item.icon, '#fc00b1', 30)}
          <span className='ps-3'>{item.value}</span>
        </a>
      </div>
    )
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
                    {socialData.map((item, idx) => {
                      return renderSocialLink(item, idx)
                    })}
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
                    <Projects data={projectData} idx={1} />
                  </article>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className='block-tables mx-3'>
        <div className='wrapper'>
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
