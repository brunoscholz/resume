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

const ProfileBlock = ({ morphs, ...props }) => {
  return (
    <AboutSection className='section blockchain' {...props} {...morphs.container}>
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
                <Birthday {...morphs.birth}>
                  <span>Created</span>
                  <p>March 2, 1983</p>
                </Birthday>
              </div>
            </div>

            <AboutInfo className='g-0 mb-4'>
              <Avatar className='col-md-12 col-xs-12'>
                <img
                  src='assets/photo.png'
                  className='img-responsive pixelated center-block'
                  alt='me'
                  {...morphs.image}
                />
              </Avatar>
            </AboutInfo>

            <div className='row'>
              <Name className='col-md-12 col-xs-12' {...morphs.name}>
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
                  <ContactIcons className='row list' {...morphs.contact}>
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
                <Card {...morphs.about}>
                  <h3 style={{ marginBottom: '5px' }}>Goals</h3>
                  <article>
                    My <em>goal</em> is always to create value by generating intelligent <em>solutions</em> that fulfill
                    the client's needs. I like <em>challenging</em> situations that force me to use multiple skills and
                    critical thinking. <b className='terciary'>Bitcoin</b> enthusiast.
                    <br />
                    Advanced English (native Portuguese), reading as a routine, weekend cook!
                  </article>
                </Card>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-md-12'>
                <Card {...morphs.skills}>
                  <h3 style={{ marginBottom: '5px' }}>Skills</h3>
                  <p style={{ marginTop: '0px' }}>
                    This programmer has <a href='/cryptopunks/search?query=3+Attributes'>6 attributes</a>.
                  </p>
                  <div className='row list'>
                    <div className='col-md-4 col-xs-6'>
                      <em>C#</em>
                      <br />
                      N/A.
                    </div>
                    <div className='col-md-4 col-xs-6'>
                      <em>PHP</em>
                      <br />
                      N/A.
                    </div>
                    <div className='col-md-4 col-xs-6'>
                      <em>React</em>
                      <br />
                      <b>top 15%</b> of 642.7k people on linkedin.
                    </div>
                    <div className='col-md-4 col-xs-6'>
                      <em>Drupal</em>
                      <br />
                      N/A.
                    </div>
                    <div className='col-md-4 col-xs-6'>
                      <em>Solidity</em>
                      <br />
                      N/A.
                    </div>
                    <div className='col-md-4 col-xs-6'>
                      <em>Angular</em>
                      <br />
                      <b>top 15%</b> of 163.6k people on linkedin.
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-md-12'>
                <Card color={'primary'} border={true} className='about-gallery h-100' {...morphs.gallery}>
                  <h3>Recent Projects</h3>
                  <article className='content'>
                    <Projects />
                  </article>
                </Card>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-md-12'>
                <Card {...morphs.experience}>
                  <h3>
                    Market Status <i className='fa fa-spinner fa-pulse fa-fw'></i>
                  </h3>
                  <div className='table-responsive'>
                    <table className='table'>
                      <tbody>
                        <tr>
                          <th>Status</th>
                          <th>As</th>
                          <th>At</th>
                          <th>Skills</th>
                          <th>Txn</th>
                        </tr>
                        <tr className='punk-history-row-sold'>
                          <td>Working</td>
                          <td>Frontend Engineer</td>
                          <td>Wunderman Thompsom Tech</td>
                          <td>Angular, React, Drupal</td>
                          <td></td>
                        </tr>
                        <tr className='punk-history-row-claim'>
                          <td>Hired</td>
                          <td></td>
                          <td>Wunderman Thompsom Tech</td>
                          <td></td>
                          <td>
                            <em>January 2021</em>
                          </td>
                        </tr>
                        <tr className='punk-history-row-offer'>
                          <td>Left</td>
                          <td></td>
                          <td>Oction</td>
                          <td></td>
                          <td>
                            <em>August 2016</em>
                          </td>
                        </tr>
                        <tr className='punk-history-row-sold'>
                          <td>Work</td>
                          <td>Developer</td>
                          <td>Oction</td>
                          <td>Unity3D(C#), Angular, Python, PHP, Mysql</td>
                          <td></td>
                        </tr>
                        <tr className='punk-history-row-claim'>
                          <td>Founded</td>
                          <td></td>
                          <td>Oction</td>
                          <td></td>
                          <td>
                            <em>February 2014</em>
                          </td>
                        </tr>
                        <tr className='punk-history-row-offer'>
                          <td>Left</td>
                          <td></td>
                          <td>Banco do Brasil</td>
                          <td></td>
                          <td>
                            <em>February 2014</em>
                          </td>
                        </tr>
                        <tr className='punk-history-row-sold'>
                          <td>Work</td>
                          <td></td>
                          <td>Banco do Brasil</td>
                          <td>PHP, MySql, VBA</td>
                          <td></td>
                        </tr>
                        <tr className='punk-history-row-claim'>
                          <td>Hired</td>
                          <td></td>
                          <td>Banco do Brasil</td>
                          <td></td>
                          <td>
                            <em>May 2006</em>
                          </td>
                        </tr>
                        <tr className='punk-history-row-offer'>
                          <td>Left</td>
                          <td></td>
                          <td>Abbra</td>
                          <td></td>
                          <td>
                            <em>May 2006</em>
                          </td>
                        </tr>
                        <tr className='punk-history-row-sold'>
                          <td>Work</td>
                          <td>Developer</td>
                          <td>Abbra</td>
                          <td>PHP, MySql, Javascript</td>
                          <td></td>
                        </tr>
                        <tr className='punk-history-row-claim'>
                          <td>Hired</td>
                          <td></td>
                          <td>Abbra</td>
                          <td></td>
                          <td>
                            <em>April 2004</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-md-12'>
                <Card {...morphs.education}>
                  <h3>Education History</h3>
                  <div className='table-responsive'>
                    <table className='table'>
                      <tbody>
                        <tr>
                          <th>University</th>
                          <th>Course</th>
                          <th>Skills</th>
                          <th>status</th>
                          <th>Txn</th>
                        </tr>
                        <tr className='punk-history-row-claim'>
                          <td>UNIVERSIDADE POSITIVO</td>
                          <td>Digital Games</td>
                          <td>Unity3D, 3DSMax, C#, Javascript</td>
                          <td>incomplete</td>
                          <td>
                            <em>2013 - 2015</em>
                          </td>
                        </tr>
                        <tr className='punk-history-row-sold'>
                          <td>UNIVERSIDADE FEDERAL DO AMAZONAS</td>
                          <td>Computer Science</td>
                          <td>Haskell, Python</td>
                          <td>incomplete</td>
                          <td>
                            <em>2011 - 2013</em>
                          </td>
                        </tr>
                        <tr className='punk-history-row-claim'>
                          <td>UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ</td>
                          <td>Electrical Engineering</td>
                          <td>C, C++</td>
                          <td>incomplete</td>
                          <td>
                            <em>2003 - 2006</em>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className='row about-icons' {...morphs.interests}></div>

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
