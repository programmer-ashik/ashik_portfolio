import Logo from "./Logo";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavbarMenu from "./NavbarMenu";
import Social from "./Social";

const Navbar = () => {
  return (
    <div className="font-sans font-bold px-4 sm:px-6 lg:px-12">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="hidden sm:flex">
          <NavbarMenu />
        </div>

        <div className=" hidden xl:flex justify-end items-center">
          <Social />
          <MenuButton />
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
