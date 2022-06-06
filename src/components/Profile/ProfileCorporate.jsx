import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillHome } from 'react-icons/ai'
import { BiCake } from 'react-icons/bi'

import styled from "styled-components"
import { EDItems, XPItems } from '../../data'

const ProfileCorporate = ({ morphs, ...props }) => {
  return (
    <section className='section about-section corporate' id='about' {...props} {...morphs.container}>
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
                <img src='assets/photo.jpg' title='me' alt='me' {...morphs.image} />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="about-name" {...morphs.name}>
              <H1>Bruno Ribeiro Scholz</H1>
            </div>
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
    </section>
  )
}

export default ProfileCorporate

// const Page = styled.div`
//   position: relative;
//   min-height: 100vh;
//   width: 100vw;
//   display: grid;
//   place-items: center;
//   transition: 0.5s;
//   background: ${props => {
//     switch (props.theme) {
//       case 'corporate':
//         return '#eee'
//       case 'gaming':
//         return '#303030'
//       default:
//         return '#9b9b9b'
//     }
//   }};
// `

const Contact = styled.p`
  padding-top: 6pt;
  color: #999999;
  font-size: 9pt;
  padding-bottom: 0pt;
  font-family: 'Roboto Condensed';
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
`

// const ContactPhone = styled(Contact)`
//   color: #e91d63;
// `

const ContactEmail = styled(Contact)`
  color: #e91d63;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const ListItem = styled.span`
  padding-top: 2pt;
  color: #999999;
  font-size: 9pt;
  padding-bottom: 0pt;
  font-family: 'Roboto Condensed';
  line-height: 1.2;
  text-align: left;
`

const XPCompany = styled(ListItem)`
  color: #e91d63;
  font-weight: 700;
  font-size: 14px;
  font-family: "Source Code Pro";
`

const XPTitle = styled(ListItem)`
  font-weight: 800;
  font-size: 16px;
`

const XPDates = styled.span`
  margin: 0.5rem 0;
  font-size: 11px;
  font-family: "Source Code Pro";
  color: #666666;
  font-weight: 400;
`

const XPSkills = styled(ListItem)`
  color: #2e4440;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 14px;
  font-family: "Source Code Pro";
  font-style: italic;
`

const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
`

const Col = styled.div`

`

// const Heading = styled.div`
//   max-width: 960px;
//   margin: 0 auto;
// `

const H1 = styled.h1`
  margin-left: -0.8pt;
  padding-top: 12pt;
  padding-bottom: 0pt;
  line-height: 1;
  orphans: 2;
  widows: 2;
  text-align: left;

  padding-top: 16pt;
  color: #424242;
  font-size: 24pt;
  padding-bottom: 0pt;
  font-family: 'Oswald';
  line-height: 1;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left;
`

const H2 = styled.h2`
  margin-left: -0.8pt;
  padding-top: 16pt;
  line-height: 1.2;
  font-family: 'Oswald';
  text-align: left;
  font-size: 18pt;
  color: #424242;
`

// const P = styled.p``

const NormalText = styled.p`
  font-size: 9pt;
  font-family: 'Source Code Pro';
  color: #666666;
  font-weight: 400;
`