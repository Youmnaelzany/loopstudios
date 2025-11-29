import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAV_LINKS } from "./Header";

const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-7 text-white" />
        </SheetTrigger>
        <SheetContent className="bg-black px-7 py-12">
          <SheetHeader>
            <SheetTitle>
              {" "}
              <SheetClose asChild>
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="Loopstudios Logo"
                    width={144}
                    height={24}
                    className="md:h-[32px] md:w-[192px]"
                  />
                </Link>
              </SheetClose>
            </SheetTitle>
            <SheetDescription>
              <nav className="scroll-py-12 py-12">
                <ul className="flex flex-col gap-6">
                  {NAV_LINKS.map((link: string) => (
                    <li key={link}>
                      <SheetClose asChild>
                        <Link
                          href="/"
                          className="font-josefin-sans text-2xl leading-[100%] font-normal tracking-normal text-white"
                        >
                          {link}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;
