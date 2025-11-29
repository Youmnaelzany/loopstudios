import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import MobileMenu from "./MobileMenu";

export const NAV_LINKS = ["About", "Careers", "Events", "Products", "Support"];

const Header = () => {
  return (
    <Wrapper
      as="header"
      aria-label="Navigation Menu"
      className="flex items-center justify-between pt-10 md:pt-16"
    >
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Loopstudios Logo"
          width={144}
          height={24}
          className="md:h-[32px] md:w-[192px]"
        />
      </Link>
      <nav className="hidden lg:flex">
        <ul className="flex items-center justify-between gap-8">
          {NAV_LINKS.map((link: string) => (
            <li key={link}>
              <Link
                href="/"
                className="font-alata text-[0.9375rem] leading-[165%] font-normal tracking-normal text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu />
    </Wrapper>
  );
};
export default Header;
