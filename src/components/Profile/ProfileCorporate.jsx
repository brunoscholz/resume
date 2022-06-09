import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillHome } from 'react-icons/ai'
import { BiCake } from 'react-icons/bi'
import { EDItems, XPItems } from '../../data'

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

        <div></div>
        <div></div>

        <div className='row g-0 m-2'>
          <div className='col-lg-12 col-xs-12'>
            <Card>
              <h3>GOALS AND SKILLS</h3>
              <article>
                My <em>goal</em> is always to create value by generating intelligent <em>solutions</em> that fulfill the
                client's needs. I like <em>challenging</em> situations that force me to use multiple skills and critical
                thinking. <b>Bitcoin</b> enthusiast.
                <br />
                Advanced English (native Portuguese), reading as a routine, weekend cook!
              </article>
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
                {XPItems.map((item, idx) => {
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
                {EDItems.map((item, idx) => {
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
