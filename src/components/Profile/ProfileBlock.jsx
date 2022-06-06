import { AiFillGithub, AiFillHome, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai'

const ProfileBlock = ({ morphs, ...props }) => {
  return (
    <section className='section about-section blockchain' id='about' {...props} {...morphs.container}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10 col-xs-10 offset-md-1'>
            <div className='row mb-5'>
              <div className='col-lg-12 col-xs-12'>
                <em className='logo'>
                  <img src='assets/resume.png' width='300' alt='' />
                </em>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12 col-xs-12'>
                <ol className='breadcrumb' {...morphs.birth}>
                  <li>
                    <em>Created</em>
                  </li>
                  <li className='active'>Mar 02, 1983</li>
                </ol>
              </div>
            </div>
            <div
              className='row about-info'
              style={{ marginLeft: '0px', marginRight: '0px', backgroundColor: '#638596' }}
            >
              <div className='col-md-12 col-xs-12 about-avatar'>
                <img
                  src='assets/photo.png'
                  style={{ maxHeight: '312px', maxWidth: '312px', marginTop: '50px' }}
                  className='img-responsive pixelated center-block'
                  alt='me'
                  {...morphs.image}
                />
              </div>
            </div>

            <div className='row detail-row'>
              <div className='col-md-12 col-xs-12' style={{ marginTop: '20px' }}>
                <h1 style={{ marginTop: '0px', marginBottom: '5px' }} className='about-name' {...morphs.name}>
                  <div>
                    <p>Bruno</p>
                  </div>
                  <div>
                    <p>Ribeiro</p>
                  </div>
                  <div>
                    <p>Scholz</p>
                  </div>
                </h1>
                <h4 style={{ marginTop: '-15px' }}>
                  <b>One</b> of those <em>Programmer</em> people.
                </h4>
              </div>
            </div>

            <div className='row detail-row'>
              <div className='col-md-12 col-xs-12'>
                <div className='about-description' {...morphs.about}>
                  <article>
                    My <em>goal</em> is always to create value by generating intelligent <em>solutions</em> that fulfill the
                    client's needs. I like <em>challenging</em> situations that force me to use multiple skills and critical
                    thinking. <b className='terciary'>Bitcoin</b> enthusiast.
                    <br />
                    Advanced English (native Portuguese), reading as a routine, weekend cook!
                  </article>
                </div>
              </div>
            </div>

            <div className='row detail-row'>
              <div className='col-md-12'>
                <h3 style={{ marginBottom: '5px' }}>Find me</h3>
                <div className='row list' {...morphs.contact}>
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
                </div>
              </div>
            </div>

            <div className='row detail-row'>
              <div className='col-md-12'>
                <h3 style={{ marginBottom: '5px' }}>Skills</h3>
                <p style={{ marginTop: '0px' }}>
                  This programmer has <a href='/cryptopunks/search?query=3+Attributes'>6 attributes</a>.
                </p>
                <div className='row list' {...morphs.skills}>
                  <div className='col-md-4'>
                    <em>C#</em>
                    <br />
                    N/A.
                  </div>
                  <div className='col-md-4'>
                    <em>PHP</em>
                    <br />
                    N/A.
                  </div>
                  <div className='col-md-4'>
                    <em>React</em>
                    <br />
                    <b>top 15%</b> of 642.7k people on linkedin.
                  </div>
                  <div className='col-md-4'>
                    <em>Drupal</em>
                    <br />
                    N/A.
                  </div>
                  <div className='col-md-4'>
                    <em>Solidity</em>
                    <br />
                    N/A.
                  </div>
                  <div className='col-md-4'>
                    <em>Angular</em>
                    <br />
                    <b>top 15%</b> of 163.6k people on linkedin.
                  </div>
                </div>
              </div>
            </div>

            <div className='row detail-row'>
              <div className='col-md-12'>
                <h3>
                  Market Status <i className='fa fa-spinner fa-pulse fa-fw'></i>
                </h3>
                <div className='table-responsive' {...morphs.experience}>
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
              </div>
            </div>

            <div className='row detail-row'>
              <div className='col-md-12'>
                <div id='education-history'>
                  <h3>Education History</h3>
                  <div className='table-responsive' {...morphs.education}>
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row about-icons' {...morphs.interests}></div>
        <div className='about-gallery' {...morphs.gallery}></div>

        <div className='row footer'>
          <div className='col-md-12 text-center'>
            based on <a href='https://cryptopunks.app/'>CryptoPunks</a> - NFT Marketplace - design
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileBlock
