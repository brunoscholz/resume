import React, { useEffect, useState } from 'react'

import {
  Container,
  ContactEmail,
  Contact,
  NormalText,
  List,
  XPCompany,
  XPDates,
  XPSkills,
  XPTitle,
  AboutSection,
  Heading,
  Name,
  ContactIcons,
  AboutInfo,
  Avatar,
  Card
} from '../../theme/theme'
import Projects from '../Projects/Projects'
import { renderSocialIcon } from '../../helper'

const ProfileCorporate = ({ data, ...props }) => {
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
    return (
      <a href={item.url} key={idx}>
        {renderSocialIcon(item.icon, '#e91d63', 30)}
        {item.name === 'address' || item.name === 'email' ? (
          <ContactEmail className='ps-2'>{item.value}</ContactEmail>
        ) : (
          <Contact className='ps-2'>{item.value}</Contact>
        )}
      </a>
    )
  }

  return (
    <AboutSection className='section corporate' {...props}>
      <Container>
        <Heading className='g-0 m-2'>
          <div className='col-lg-6 col-sm-12 col-xs-12'>
            <Card style={{ display: 'flex', alignItems: 'end', paddingBottom: '1rem' }}>
              <ContactIcons>
                {socialData.map((item, idx) => {
                  return renderSocialLink(item, idx)
                })}
              </ContactIcons>
            </Card>
          </div>
          <div className='col-lg-6 col-sm-12 col-xs-12'>
            <AboutInfo>
              <Avatar>
                <img src='assets/photo.jpeg' width='234' height='312' title='me' alt='me' />
              </Avatar>
            </AboutInfo>
          </div>
          <Name className='col-lg-12'>
            <p>Bruno</p>
            <p>Ribeiro</p>
            <p>Scholz</p>
          </Name>
        </Heading>

        <div className='row g-0 m-2'>
          <div className='col-lg-12 col-xs-12'>
            <Card color={'text'}>
              <h3>ABOUT ME</h3>
              <article dangerouslySetInnerHTML={{ __html: aboutData }}></article>
            </Card>
          </div>
        </div>

        <div className='row m-2'>
          <div className='col-md-6'>
            <Card>
              <h3>SKILLS</h3>
              <div className='row list pe-2'>
                {skillData
                  .filter(k => k.profiles.indexOf('corporate') >= 0)
                  .map((item, idx) => {
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
                          ></div>
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
              </div>
            </Card>
          </div>
          <div className='col-md-6'>
            <Card>
              <h3>INTERESTS</h3>
              <div className='row list interests ps-2'>
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
                          ></div>
                        </div>
                      </div>
                      {item.value < 0 && <div className='col-md-6 col-xs-6'></div>}
                    </React.Fragment>
                  )
                })}
              </div>
            </Card>
          </div>
        </div>

        <div className='row g-0 m-2'>
          <div className='col-lg-12 col-xs-12'>
            <Card color={'primary'} border={true} className='about-gallery h-100'>
              <h3>Recent Projects</h3>
              <article className='content'>
                <Projects data={projectData} idx={0} />
              </article>
            </Card>
          </div>
        </div>

        <div className='row g-0 m-2'>
          <div className='col-lg-12 col-xs-12'>
            <Card>
              <h3>EXPERIENCE</h3>
              <article>
                {experienceData.map((item, idx) => {
                  return (
                    <List key={idx}>
                      <XPCompany>{item.company}</XPCompany>
                      <span>
                        <XPTitle>{item.title}</XPTitle>
                        <XPSkills> - {item.skills.join(', ')}</XPSkills>
                      </span>
                      <XPDates>{`${item.begin} ${item.separator} ${item.end}`}</XPDates>
                      <ul className='simple-list'>
                        {item.description.map((li, i) => {
                          return (
                            <li key={i}>
                              <NormalText className='ps-4' dangerouslySetInnerHTML={{ __html: li }}></NormalText>
                            </li>
                          )
                        })}
                      </ul>
                    </List>
                  )
                })}
              </article>
            </Card>
          </div>
        </div>

        <div className='row g-0 m-2'>
          <div className='col-lg-12 col-xs-12'>
            <Card>
              <h3>CERTIFICATIONS</h3>
              <article>
                {educationData.filter(x => x.type === 'certification').map((item, idx) => {
                  return (
                    <List key={idx}>
                      <XPCompany>{item.university}</XPCompany>
                      <span>
                        <XPTitle>{item.major}</XPTitle>
                        <XPSkills> - {item.skills.join(', ')}</XPSkills>
                      </span>
                      <XPDates>
                        {item.date} {item.status !== 'certification' ? item.status : ''}
                      </XPDates>
                    </List>
                  )
                })}
              </article>
            </Card>
          </div>
        </div>

        <div className='row g-0 m-2'>
          <div className='col-lg-12 col-xs-12'>
            <Card>
              <h3>EDUCATION</h3>
              <article>
                {educationData.filter(x => x.type === 'education').map((item, idx) => {
                  return (
                    <List key={idx}>
                      <XPCompany>{item.university}</XPCompany>
                      <span>
                        <XPTitle>{item.major}</XPTitle>
                        <XPSkills> - {item.skills.join(', ')}</XPSkills>
                      </span>
                      <XPDates>
                        {item.date} {item.status !== 'certification' ? item.status : ''}
                      </XPDates>
                    </List>
                  )
                })}
              </article>
            </Card>
          </div>
        </div>
      </Container>

      <div className='row footer'>
        <div className='col-md-12 text-center'>based on Google Drive resume template</div>
      </div>
    </AboutSection>
  )
}

export default ProfileCorporate
