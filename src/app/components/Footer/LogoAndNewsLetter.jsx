import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import Logo from "../Navbar/Logo";

const LogoAndNewsLetter = () => {
  return (
    <div>
      <div className="mb-6 w-[150px]">
        {" "}
        {/* Set a fixed width */}
        <Link href="/" className=" text-3xl">
          <Logo />
        </Link>
      </div>

      <p className="text-lg mb-6">
        <span className="text-primary font-semibold">Get Ready</span> To Create
        Great
      </p>
      <form className="relative">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full py-3 pl-4 pr-12 rounded-md text-white border-b-2 border-b-gray-500 outline-none"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FaEnvelope />
        </span>
      </form>
    </div>
  );
};

export default LogoAndNewsLetter;
