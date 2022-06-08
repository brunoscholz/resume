import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillHome } from 'react-icons/ai'
import { EDItems, XPItems } from '../../data'

import { AboutSection, Container, Heading, GameCard, AboutInfo, ContactIcons, Avatar, Name, Birthday } from '../../theme/theme'

import './Chart.css'

const ProfileGaming = ({ morphs, ...props }) => {
  return (
    <AboutSection className='section gaming' {...props} {...morphs.container}>
      <Container>
        <Heading className='mb-4 dashed-border--bottom'>

          <div className='col-md-6 col no-stretch'>
            <AboutInfo>
              <Avatar border={true} className='col-md-3 col'>
                <span className='badge'>+</span>
                <img src='assets/headshot.png' title='me' alt='me' {...morphs.image} />
                <Birthday {...morphs.birth}>
                  <span>born</span>
                  <p>March 2, 1983</p>
                </Birthday>
              </Avatar>
              <Name className='col-md-9 col ps-md-4' {...morphs.name}>
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

              <ContactIcons {...morphs.contact}>
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
            <GameCard color={'secondary'} border={true} {...morphs.about}>
              <span className='badge'>
                + <em>About Me</em>
              </span>
              <article>
                My <em>goal</em> is always to create value by generating intelligent <em>solutions</em> that fulfill the
                client's needs. I like <em>challenging</em> situations that force me to use multiple skills and critical
                thinking. <b className='terciary'>Bitcoin</b> enthusiast.
                <br />
                Advanced English (native Portuguese), reading as a routine, weekend cook!
              </article>
            </GameCard>
          </div>
        </div>

        <div className='row flex g-0 mb-4'>
          <div className='col-md-12 col'>
            <GameCard color={'terciary'} border={true} className='about-skills h-100' {...morphs.skills}>
              <span className='badge'>
                + <em>Skills</em>
              </span>
              <article className='d-flex flex-wrap'>
                <div className='col-lg-4 col-md-4 col'>
                  <div className='chart'>
                    <div className='bar-1'>
                      <div className='top'></div>
                      <div className='block'></div>
                      <div className='block'></div>
                      <div className='block'></div>
                      <div className='block'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                    </div>
                    <div className='bar-1'>
                      <div className='top'></div>
                      <div className='block'></div>
                      <div className='block'></div>
                      <div className='block using'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                    </div>
                  </div>
                  <div className='chart-x'>
                    <div className='ascii'>
                      <span>+------+</span>
                      <span>|&nbsp;&nbsp;C#&nbsp;&nbsp;|</span>
                      <span>+------+</span>
                    </div>
                    <div className='ascii'>
                      <span>+-------+</span>
                      <span>|&nbsp;&nbsp;PHP&nbsp;&nbsp;|</span>
                      <span>+-------+</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col'>
                  <div className='chart'>
                    <div className='bar-1'>
                      <div className='top using'></div>
                      <div className='block'></div>
                      <div className='block using'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                    </div>
                    <div className='bar-1'>
                      <div className='top using'></div>
                      <div className='block'></div>
                      <div className='block'></div>
                      <div className='block using'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                    </div>
                  </div>
                  <div className='chart-x'>
                    <div className='ascii'>
                      <span>+-------+</span>
                      <span>|&nbsp;react&nbsp;|</span>
                      <span>+-------+</span>
                    </div>
                    <div className='ascii'>
                      <span>+--------+</span>
                      <span>|&nbsp;drupal&nbsp;|</span>
                      <span>+--------+</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col'>
                  <div className='chart'>
                    <div className='bar-1'>
                      <div className='top using'></div>
                      <div className='block'></div>
                      <div className='block'></div>
                      <div className='block'></div>
                      <div className='block using'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                    </div>
                    <div className='bar-1'>
                      <div className='top'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                      <div className='block skill'></div>
                    </div>
                  </div>
                  <div className='chart-x'>
                    <div className='ascii'>
                      <span>+----------+</span>
                      <span>|&nbsp;solidity&nbsp;|</span>
                      <span>+----------+</span>
                    </div>
                    <div className='ascii'>
                      <span>+---------+</span>
                      <span>|&nbsp;angular&nbsp;|</span>
                      <span>+---------+</span>
                    </div>
                  </div>
                </div>

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
            <div className='about-gallery' {...morphs.gallery}></div>
          </div>
          <div className='col-md-12 col'>
            <div className='about-interests' {...morphs.interests}></div>
          </div>
        </div>

        <div className='row flex g-0'>

          <div className='col-lg-6 col-md-6 col pe-md-2-5 mb-4'>
            <GameCard color={'color4'} border={true} className='about-education h-100' {...morphs.education}>
              <span className='badge'>
                + <em>Education</em>
              </span>
              <article className='content'>
                {EDItems.map((item, idx) => {
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

          <div className='col-lg-6 col-md-6 col-sm-12 ps-md-2-5 mb-4'>
            <GameCard color={'color5'} border={true} className='about-experience h-100' {...morphs.experience}>
              <span className='badge'>
                + <em>Employment</em>
              </span>
              <article className='content'>
                {XPItems.map((item, idx) => {
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
