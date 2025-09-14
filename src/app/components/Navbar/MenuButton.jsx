import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

const MenuButton = () => {
  return (
    <div className=" flex sm:hidden relative overflow-hidden rounded-full p-3 text-xl items-center justify-center mx-2 group cursor-pointer border-2 border-[#fb1359]">
      {/* Pop-up expanding background on hover */}
      <span className="absolute inset-0 bg-[#fb1359] rounded-full scale-100 group-hover:scale-0 transition-transform duration-500 ease-out z-0" />

      <span className="absolute inset-0 bg-transparent rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0" />

      {/* Show this icon normally */}
      <span className="relative z-10 block group-hover:hidden text-white font-extrabold">
        <CiMenuFries />
      </span>

      {/* Show this icon on hover */}
      <span className="relative z-10 hidden group-hover:block text-white group-hover:text-[#fb1359] font-extrabold">
        <CiMenuBurger />
      </span>
    </div>
  );
};

export default MenuButton;
