import ServiceDetails from '../components/Service/ServiceDetails'
import PageHeader from '../components/Shared/MotionCountUp/PageHeader/PageHeader'

const Service_Details = () => {
  return (
      <div>
          <PageHeader title={"Service Details"} subTitle={'Service Details'} />
          <ServiceDetails />
    </div>
  )
}

export default Service_Details