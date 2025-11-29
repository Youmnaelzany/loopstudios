import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaPinterest, FaSquareFacebook, FaTwitter } from "react-icons/fa6";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { NAV_LINKS } from "./Header";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper
      as="footer"
      aria-label=""
      className="flex flex-col items-center justify-center gap-10 bg-black py-14 md:flex-row md:justify-between md:gap-11 md:py-11"
    >
      {/* Logo & Navigation Links */}
      <div className="flex flex-col items-center justify-center gap-10 md:items-start md:justify-between md:gap-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Loopstudios Logo"
            width={144}
            height={24}
            className="md:h-[32px] md:w-[192px]"
          />
        </Link>
        {/* Navigation Links */}
        <nav className="">
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            {NAV_LINKS.map((link: string) => (
              <li key={link}>
                <Link
                  href="/"
                  className="font-alata text-[0.9375rem] leading-[165%] font-normal tracking-normal text-white decoration-2 underline-offset-8 hover:underline hover:decoration-[#6e32be]"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Social Media Links & Copyright */}
      <div className="flex flex-col items-center justify-center gap-6 md:items-end md:justify-end">
        {/* Social Media Links */}

        <ul className="flex items-center gap-4">
          <li className="">
            <Tooltip>
              <TooltipTrigger>
                <Link href="/" className="hover:opacity-70">
                  <FaSquareFacebook className="size-7 text-white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Facebook</p>
              </TooltipContent>
            </Tooltip>
          </li>
          <li className="">
            <Tooltip>
              <TooltipTrigger>
                <Link href="/" className="hover:opacity-70">
                  <FaTwitter className="size-7 text-white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
          </li>
          <li className="">
            <Tooltip>
              <TooltipTrigger>
                <Link href="/" className="hover:opacity-70">
                  <FaPinterest className="size-7 text-white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pinterest</p>
              </TooltipContent>
            </Tooltip>
          </li>
          <li className="">
            <Tooltip>
              <TooltipTrigger>
                <Link href="/" className="hover:opacity-70">
                  <FaInstagram className="size-7 text-white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>
          </li>
        </ul>

        {/* Copyright */}
        <h4 className="font-alata text-[0.9375rem] leading-[165%] font-normal tracking-normal text-white/50">
          © 2025 Loopstudios. All rights reserved.
        </h4>
      </div>
    </Wrapper>
  );
};
export default Footer;
