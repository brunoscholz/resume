import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillHome } from 'react-icons/ai'
import { EDItems, XPItems } from '../../data'

const ProfileGaming = ({ morphs, ...props }) => {
  return (
    <section className='section about-section gray-bg gaming' id='about' {...props} {...morphs.container}>
      <div className='container'>
        <div className='row flex-row-reverse dashed-border--bottom g-0 mb-4'>
          <div className='col-lg-6'>
            <div className='about-text game-card primary dashed-border'>
              <span className="badge primary">+ <em>Find me</em></span>
              <span className="badge gray badge--bottom-left">+</span>

              <div className='row about-icons' {...morphs.contact}>
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
              </div>

            </div>
          </div>
          <div className='col-lg-6 border--bottom'>
            <div className="about-info">
              <div className='about-avatar'>
                <span className="badge">+</span>
                <img src='assets/headshot.png' className='dashed-border' title='me' alt='me' {...morphs.image} />
                <div className='about-birthday' {...morphs.birth}>
                  <span>born</span>
                  <p>March 2, 1983</p>
                </div>
              </div>
              <div className="about-name" {...morphs.name}>
                <div><p>Bruno</p></div>
                <div><p>Ribeiro</p></div>
                <div><p>Scholz</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className='row flex g-0 mb-4'>
          <div className='col-lg-12'>
            <div className="about-description game-card secondary dashed-border" {...morphs.about}>
              <span className="badge">+ <em>About Me</em></span>
              <article>
                My <em>goal</em> is always to create value by generating intelligent <em>solutions</em> that fulfill the client's needs.
                I like <em>challenging</em> situations that force me to use multiple skills and critical thinking. <b className='terciary'>Bitcoin</b> enthusiast.
                <br />Advanced English (native Portuguese), reading as a routine, weekend cook!
              </article>
            </div>
          </div>
        </div>

        <div className='row flex g-0 mb-4'>
          <div className='col-lg-8 pe-4'>
            <div className="about-skills game-card terciary dashed-border h-100" {...morphs.skills}>
              <span className="badge">+ <em>Skills</em></span>
              <article>
                <pre>
                  <code>
                    for <em>skill</em> in me:<br />
                    &nbsp;&nbsp;print (<em>skill</em>.name + <em>skill</em>.level)
                  </code>
                </pre>
                <pre style={{fontSize: '1.2vw'}}>
                  <code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>^</em><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>^</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>*</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>^</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>^</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>^</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>*</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>*</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>*</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<em>^</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>+</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>+</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>+</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className='primary'>|</em><br/>
+------+&nbsp;&nbsp;+-------+&nbsp;&nbsp;+-------+&nbsp;&nbsp;+--------+&nbsp;&nbsp;+----------+&nbsp;&nbsp;+---------+<br/>
|&nbsp;&nbsp;C#&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;PHP&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;react&nbsp;|&nbsp;&nbsp;|&nbsp;drupal&nbsp;|&nbsp;&nbsp;|&nbsp;solidity&nbsp;|&nbsp;&nbsp;|&nbsp;angular&nbsp;|<br/>
+------+&nbsp;&nbsp;+-------+&nbsp;&nbsp;+-------+&nbsp;&nbsp;+--------+&nbsp;&nbsp;+----------+&nbsp;&nbsp;+---------+<br/>
<br/>
^&nbsp;overall&nbsp;improving<br/>
<em className='primary'>*</em>&nbsp;currently&nbsp;using&nbsp;in&nbsp;a&nbsp;project<br/>
<em className='primary'>+</em>&nbsp;currently&nbsp;studying<br/>
                  </code>
                </pre>
              </article>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className="about-interests game-card terciary dashed-border h-100" {...morphs.interests}>
              <span className="badge">+ <em>Interests</em></span>
              <article>
                I <em>design and develop</em> services for customers of all sizes, specializing in creating stylish,
                modern websites, web services and online stores. My passion is to design digital user experiences
                through the bold interface and meaningful interactions.
              </article>
            </div>
          </div>
        </div>

        <div className='row flex g-0 mb-4'>
          <div className='col-lg-12'>
            <div className='about-gallery' {...morphs.gallery}>

            </div>
          </div>
        </div>

        <div className='row flex g-0 mb-4'>
          <div className='col-lg-6 pe-2-5'>
            <div className="about-education game-card color-4 dashed-border h-100" {...morphs.education}>
              <span className="badge">+ <em>Education</em></span>
              <div className='content'>
                {EDItems.map((item, idx) => {
                  return (
                    <article className='d-flex flex-column item-list' key={idx}>
                      <span className='title'>{item.university}</span>
                      <span><b className='position'>{item.major}</b> - <em className='skills'>{item.skills.join(', ')}</em></span>
                      <span className='dates'>{item.date}</span>
                      <span className='description' dangerouslySetInnerHTML={{ __html: item.description }}></span>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
          <div className='col-lg-6 ps-2-5'>
            <div className="about-experience game-card color-5 dashed-border h-100" {...morphs.experience}>
              <span className="badge">+ <em>Employment</em></span>
              <div className='content'>
                {XPItems.map((item, idx) => {
                  return (
                    <article className='d-flex flex-column item-list' key={idx}>
                      <span className='title'>{item.company}</span>
                      <span><b className='position'>{item.title}</b> - <em className='skills'>{item.skills.join(', ')}</em></span>
                      <span className='dates'>{item.date}</span>
                      <span className='ps-4 description' dangerouslySetInnerHTML={{ __html: item.description }}></span>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProfileGaming
