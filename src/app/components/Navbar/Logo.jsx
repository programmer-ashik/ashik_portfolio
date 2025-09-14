import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-start items-start">
      <div className="w-20 h-16 relative flex justify-center items-center">
        <p className=" text-2xl tracking-widest">
          As<span className="text-red-500">h</span>ik
        </p>
      </div>
    </div>
  );
};

export default Logo;
