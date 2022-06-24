import React from 'react'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillHome } from 'react-icons/ai'
import { BiCake } from 'react-icons/bi'
import { EducationData, ExperienceData, AboutData, SkillData, InterestData } from '../../data'

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

const ProfileCorporate = ({ morphs, ...props }) => {
  return (
    <AboutSection className='section corporate' {...props}>
      <Container>
        <Heading className='g-0 m-2'>
          <div className='col-lg-6 col-sm-12 col-xs-12'>
            <Card style={{ display: 'flex', alignItems: 'end', paddingBottom: '1rem' }}>
              <ContactIcons>
                <a href='mailto:brunoscholz@yahoo.de'>
                  <AiFillMail color='#e91d63' size={30} />
                  <ContactEmail className='ps-2'>brunoscholz@yahoo.de</ContactEmail>
                </a>
                <a href='https://twitter.com/brunoskolz'>
                  <AiFillTwitterCircle color='#e91d63' size={30} />
                  <Contact className='ps-2'>@brunoskolz</Contact>
                </a>
                <a href='https://github.com/brunoscholz'>
                  <AiFillGithub color='#e91d63' size={30} />
                  <Contact className='ps-2'>/brunoscholz</Contact>
                </a>
                <a href='https://linkedin.com/in/brunoscholz'>
                  <AiFillLinkedin color='#e91d63' size={30} />
                  <Contact className='ps-2'>/in/brunoscholz</Contact>
                </a>
                <a href='/'>
                  <AiFillHome color='#e91d63' size={30} />
                  <ContactEmail className=' ps-2'>Pelotas / RS - Brazil</ContactEmail>
                </a>
                <a href='/'>
                  <BiCake color='#e91d63' size={30} />
                  <Contact className='ps-2'>March 2, 1983</Contact>
                </a>
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
            <Card>
              <h3>ABOUT ME</h3>
              <article dangerouslySetInnerHTML={{ __html: AboutData }}></article>
            </Card>
          </div>
        </div>

        <div className='row m-2'>
          <div className='col-md-6'>
            <Card>
              <h3>SKILLS</h3>
              <div className='row list pe-2'>
                {SkillData.map((item, idx) => {
                  return (
                    <div className='col-md-12 col-xs-12 p-2' key={idx}>
                      <em>{item.trait}</em>
                      <div className='progress'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{width: `${item.value}%`}}
                          aria-valuenow={item.value}
                          aria-valuemin='0'
                          aria-valuemax='100'
                        >
                        </div>
                        {item.current && (
                          <div className="progress-bar highlight"
                            role="progressbar"
                            style={{width: `10%`}}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >

                          </div>
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
                {InterestData.map((item, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      {item.value > 0 && <div className='col-md-6 col-xs-6'></div>}
                      <div className={`col-md-6 col-xs-6 p-2 ${item.value < 0 ? 'negative' : ''}`}>
                        <em>{item.trait}</em>
                        <div className={`progress ${item.value < 0 ? 'justify-content-end negative' : ''}`}>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            style={{width: `${item.value < 0 ? item.value * -1 : item.value}%`}}
                            aria-valuenow={item.value < 0 ? item.value * -1 : item.value}
                            aria-valuemin='0'
                            aria-valuemax='100'
                            >
                          </div>
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
                <Projects />
              </article>
            </Card>
          </div>
        </div>

        <div className='row g-0 m-2'>
          <div className='col-lg-12 col-xs-12'>
            <Card>
              <h3>EXPERIENCE</h3>
              <article>
                {ExperienceData.map((item, idx) => {
                  return (
                    <List key={idx}>
                      <XPCompany>{item.company}</XPCompany>
                      <span>
                        <XPTitle>{item.title}</XPTitle>
                        <XPSkills> - {item.skills.join(', ')}</XPSkills>
                      </span>
                      <XPDates>{item.date}</XPDates>
                      <NormalText className='ps-4' dangerouslySetInnerHTML={{ __html: item.description }}></NormalText>
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
                {EducationData.map((item, idx) => {
                  return (
                    <List key={idx}>
                      <XPCompany>{item.university}</XPCompany>
                      <span>
                        <XPTitle>{item.major}</XPTitle>
                        <XPSkills> - {item.skills.join(', ')}</XPSkills>
                      </span>
                      <XPDates>{item.date}</XPDates>
                      <NormalText dangerouslySetInnerHTML={{ __html: item.description }}></NormalText>
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
