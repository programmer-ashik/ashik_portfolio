import BannerSection from "./components/Banner/BannerSection";
import EducationExperience from "./components/Educations/EducationExperience";
import Experience from "./components/Experience/Experience";
import GetInTouch from "./components/GetInTouch/GetinTouch";
import LatestService from "./components/LatestService/LatestService";
import Portfolio from "./components/Portfolio/Portfolio";
import ServiceSection from "./components/Service/ServiceSection";
import MySkillSection from "./components/Skill/MySkillSection";
import SkillSection from "./components/Skill/SkillSection";
import SupportCom from "./components/SupportCom/SupportCOm";

export default function Home() {
  return (
    <div className="px-4 md:px-12 lg:16">
      <BannerSection />
      <ServiceSection />
      <Experience />
      <SkillSection />
      <LatestService />
      <EducationExperience />
      <SupportCom />
      <Portfolio />
      <MySkillSection />
      <GetInTouch />
    </div>
  );
}
