import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillHome } from 'react-icons/ai'
import { BiCake } from 'react-icons/bi'
import { EDItems, XPItems } from '../../data'

import { Container, ContactEmail, Contact, H1, H2, Col, NormalText, List, XPCompany, XPDates, XPSkills, XPTitle } from '../../theme/theme'

const ProfileCorporate = ({ morphs, ...props }) => {
  return (
    <section className='section about-section corporate' {...props} {...morphs.container}>
      <Container>
        <div className='row g-0 m-2'>
          <div className='col-lg-6' style={{display: 'flex'}}>
            <div className='about-text' style={{display: 'flex', alignItems: 'end', paddingBottom: '1rem'}}>
              <div className='row about-icons' {...morphs.contact}>
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
                <a href='/' {...morphs.birth}>
                  <BiCake color='#e91d63' size={30} />
                  <p className='ps-2'>March 2, 1983</p>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 text-end'>
            <div className="about-info">
              <div className='about-avatar'>
                <img src='assets/photo.jpeg' width='234' height='312' title='me' alt='me' {...morphs.image} />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <H1 className="about-name" {...morphs.name}>
              <div><p>Bruno</p></div>
              <div><p>Ribeiro</p></div>
              <div><p>Scholz</p></div>
            </H1>
          </div>
        </div>

        <div {...morphs.skills}></div>
        <div {...morphs.interests}></div>
        <div {...morphs.gallery}></div>

        <div className='row g-0 m-2'>
          <H2>GOALS AND SKILLS</H2>
          <Col>
            <NormalText {...morphs.about}>
              <span>
                My goal is always to create value by generating intelligent solutions that fulfill the client's needs. I
                like challenging situations that force me to use multiple skills and critical thinking. Bitcoin
                enthusiast.
              </span>
              <br />
              <span>Advanced English (native Portuguese), reading as a routine, weekend cook!</span>
            </NormalText>
          </Col>
        </div>

        <div className='row g-0 m-2'>
          <H2>EXPERIENCE</H2>
          <Col {...morphs.experience}>
            {XPItems.map((item, idx) => {
              return (
                <List key={idx}>
                  <XPCompany>{item.company}</XPCompany>
                  <span><XPTitle>{item.title}</XPTitle><XPSkills> - {item.skills.join(', ')}</XPSkills></span>
                  <XPDates>{item.date}</XPDates>
                  <NormalText className='ps-4' dangerouslySetInnerHTML={{ __html: item.description }}></NormalText>
                </List>
              )
            })}
          </Col>
        </div>

        <div className='row g-0 m-2'>
          <H2>EDUCATION</H2>
          <Col {...morphs.education}>
            {EDItems.map((item, idx) => {
              return (
                <List key={idx}>
                  <XPCompany>{item.university}</XPCompany>
                  <span><XPTitle>{item.major}</XPTitle><XPSkills> - {item.skills.join(', ')}</XPSkills></span>
                  <XPDates>{item.date}</XPDates>
                  <NormalText dangerouslySetInnerHTML={{ __html: item.description }}></NormalText>
                </List>
              )
            })}
          </Col>
        </div>
      </Container>
      <div className='row footer'>
        based on Google Drive resume template
      </div>
    </section>
  )
}

export default ProfileCorporate
