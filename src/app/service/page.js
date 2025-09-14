"use client";

import ServiceCard from "../components/LatestService/ServiceCard";
import PricePlane from "../components/PricePlane/PricePlane";
import PageHeader from "../components/Shared/MotionCountUp/PageHeader/PageHeader";


export default function Service() {
  return (
    <section className=" text-white">
      <PageHeader title={"My Service"} subTitle={"Service"} />
      <ServiceCard />
      <PricePlane />
    </section>
  );
}
