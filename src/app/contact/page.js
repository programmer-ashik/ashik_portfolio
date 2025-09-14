import ContactCard from '../components/Contact/ContactCard'
import GetInTouch from '../components/GetInTouch/GetinTouch'
import PageHeader from '../components/Shared/MotionCountUp/PageHeader/PageHeader'

const Contact = () => {
  return (
    <div>
      <PageHeader title={'Contact Me'} subTitle={"Contact"} />
      <ContactCard />
      <GetInTouch />
    </div>
  )
}

export default Contact