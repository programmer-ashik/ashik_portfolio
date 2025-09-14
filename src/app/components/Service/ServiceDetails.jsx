import Image from "next/image";
import ServiceList from "./ServiceList";

const ServiceDetails = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 px-4">
      {/* Left Content */}
      <div className="lg:col-span-8 space-y-6">
       <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
  <Image
    src="/images/services/service-detials-thumnail-wrap.png"
    alt="thumbnail-img"
    fill
    className="object-cover"
    priority
  />
</div>

        <h2 className="text-3xl font-semibold text-white">Elevated Designs Personalized the best Experiences</h2>
        <p className="text-gray-400">
          Web designing in a powerful way of just not an only professions, however, in a
          passion for our Company. We have to a tendency to believe the idea that smart
          looking of any website is on visitors. Web designing in a powerful way of just
          not an only profession.
        </p>

        <h3 className="text-2xl font-semibold text-white">My Experts Areas where I gained skill</h3>
        <p className="text-gray-400">
          Web designing in a powerful way of just not an only professions, however, in a
          passion for our Company. We have to a tendency to believe the idea that smart
          looking of any website is on visitors. Web designing in a powerful way of just
          not an only profession.
        </p>
        <p className="text-gray-400">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
          viverra. Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis
          fermentum ullamcorper viverra laoreet Aliquam eros.
        </p>

        <h3 className="text-2xl font-semibold text-white">My Experts Areas where I gained skill</h3>
        <p className="text-gray-400">
          Web designing in a powerful way of just not an only professions, however, in a
          passion for our Company. We have to a tendency to believe the idea that smart
          looking of any website is on visitors. Web designing in a powerful way of just
          not an only profession.
        </p>
        <p className="text-gray-400">
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere
          viverra. Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis
          fermentum ullamcorper viverra laoreet Aliquam eros.
        </p>
        <p className="text-gray-400">
          viverra laoreet matti ullamcorper posuere viverra. Aliquam eros justo, posuere
          lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
          Aliquam eros.
        </p>
      </div>

      {/* Right Sidebar */}
      <ServiceList />
    </div>
  );
};

export default ServiceDetails;
