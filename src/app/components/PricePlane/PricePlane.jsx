import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import PriceCard from "./PriceCard";
const plans = [
  {
    title: "Starter",
    price: "5.00",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "24/7 Customer Support",
    ],
  },
  {
    title: "Basic",
    price: "230.00",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "Marketing Platform",
      "24/7 Customer Support",
      "Life time support",
    ],
    isActive: true,
  },
  {
    title: "Premium",
    price: "45.00",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "24/7 Customer Support",
    ],
  },
];
const PricePlane = () => {
  return (
      <div id="pricing" className=" py-8 md:py-20 ">
          <SectionHeader
              title={'My Price plan'}
              subTitle={'Enhancing Collaboration'}
              subtitle1={'between Remote'}
          />
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>
    </div>
  )
}

export default PricePlane