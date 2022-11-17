import { BsPatchCheckFill } from 'react-icons/bs'
import './Experience.scss'
import Skill from './Skill'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience'>
        <div className='experience__client'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <Skill title='HTML' experience='Experienced'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
            <Skill title='CSS' experience='Intermediate'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
            <Skill title='JAVASCRIPT' experience='Intermediate'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
            <Skill title='SASS' experience='Experienced'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
            <Skill title='REACT' experience='Intermediate'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
            <Skill title='REDUX' experience='Intermediate'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <Skill title='NODE JS' experience='Intermediate'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
            <Skill title='EXPRESS JS' experience='Intermediate'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
            <Skill title='MYSQL' experience='Beginner'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
            <Skill title='MONGODB' experience='beginner'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>
            <Skill title='WEB APIs' experience='Intermediate'>
              <BsPatchCheckFill className='experience__details-icon' />
            </Skill>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
