import EducationExperience from '../components/Educations/EducationExperience'
import Experience from '../components/Experience/Experience'
import GetInTouch from '../components/GetInTouch/GetinTouch'
import PricePlane from '../components/PricePlane/PricePlane'
import ServiceSection from '../components/Service/ServiceSection'
import PageHeader from '../components/Shared/MotionCountUp/PageHeader/PageHeader'
import SkillSection from '../components/Skill/SkillSection'

const About = () => {
  return (
    <div>
      <PageHeader title={"About Me"} subTitle={"About Me"} />
      <div className='custom-container-padding'>
        <ServiceSection />
      <SkillSection />
      <Experience />
      <EducationExperience />
        <PricePlane />
        <GetInTouch />
    </div>
      
    </div>
  )
}

export default About