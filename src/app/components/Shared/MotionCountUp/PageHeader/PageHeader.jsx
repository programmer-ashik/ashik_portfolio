"use client";
import { PiGreaterThan } from "react-icons/pi";

const PageHeader = ({title, subTitle}) => {


  return (
      <div className="py-20 sm:py-24 lg:py-28"
      style={{backgroundImage: "url('../images/breadcrumb/breadcum-bg.png')"}}>
          <h1 className=" text-5xl font-bold text-center font-sans">{title}</h1>
          <div className=" flex justify-center items-center gap-2 py-4 font-primery font-semibold">
          <p className="hover:text-[#fb1359] cursor-pointer text-xl ">Home</p> <PiGreaterThan /> <p className=" text-[#fb1359] cursor-pointer text-xl">{subTitle}</p>
          </div> 
    </div>
  )
}

export default PageHeader