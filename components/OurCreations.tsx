import Image from "next/image";

import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

const OUR_CREATIONS_PROJECTS = [
  {
    id: 1,
    mobileImage: "/mobile/image-deep-earth.jpg",
    desktopImage: "/desktop/image-deep-earth.jpg",
    name: "Deep earth",
    mobileWidth: "80px",
    desktopWidth: "106px",
  },
  {
    id: 2,
    mobileImage: "/mobile/image-night-arcade.jpg",
    desktopImage: "/desktop/image-night-arcade.jpg",
    name: "Night arcade",
    mobileWidth: "170px",
    desktopWidth: "170px",
  },
  {
    id: 3,
    mobileImage: "/mobile/image-soccer-team.jpg",
    desktopImage: "/desktop/image-soccer-team.jpg",
    name: "Soccer team VR",
    mobileWidth: "170px",
    desktopWidth: "170px",
  },
  {
    id: 4,
    mobileImage: "/mobile/image-grid.jpg",
    desktopImage: "/desktop/image-grid.jpg",
    name: "The grid",
    mobileWidth: "80px",
    desktopWidth: "106px",
  },
  {
    id: 5,
    mobileImage: "/mobile/image-from-above.jpg",
    desktopImage: "/desktop/image-from-above.jpg",
    name: "From up above VR",
    mobileWidth: "170px",
    desktopWidth: "170px",
  },
  {
    id: 6,
    mobileImage: "/mobile/image-pocket-borealis.jpg",
    desktopImage: "/desktop/image-pocket-borealis.jpg",
    name: "Pocket borealis",
    mobileWidth: "170px",
    desktopWidth: "170px",
  },
  {
    id: 7,
    mobileImage: "/mobile/image-curiosity.jpg",
    desktopImage: "/desktop/image-curiosity.jpg",
    name: "The curiosity",
    mobileWidth: "170px",
    desktopWidth: "170px",
  },
  {
    id: 8,
    mobileImage: "/mobile/image-fisheye.jpg",
    desktopImage: "/desktop/image-fisheye.jpg",
    name: "Make it fisheye",
    mobileWidth: "170px",
    desktopWidth: "170px",
  },
];

const OurCreations = () => {
  return (
    <Wrapper
      as="section"
      aria-label="Our Creations"
      className="flex flex-col items-center justify-center gap-12 pb-24 md:gap-8 md:pb-21.75 lg:justify-between lg:gap-20 lg:pb-28"
    >
      <div className="flex w-full items-center justify-center text-center lg:justify-between lg:px-20 lg:text-left">
        <h2 className="font-josefin-sans text-[2rem] leading-[100%] font-light tracking-normal text-black uppercase md:text-5xl">
          Our creations See
        </h2>
        <Button
          type="button"
          variant={"outline"}
          size={"lg"}
          className="font-alata hidden cursor-pointer rounded-none text-sm leading-[100%] tracking-[5px] text-black uppercase transition-all duration-500 ease-in-out hover:bg-black hover:text-white lg:flex"
        >
          See all
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
        {OUR_CREATIONS_PROJECTS.map((project) => (
          <div key={project.id} className="group relative cursor-pointer">
            <picture>
              <source media="(min-width: 1024px)" srcSet={project.desktopImage} />
              <Image
                src={project.mobileImage}
                alt={project.name}
                width={327}
                height={120}
                className="md:h-[120px] md:w-[608px] lg:h-[450px] lg:w-[256px]"
              />
            </picture>
            <div className="pointer-events-none absolute inset-0 bg-[#D8D8D8] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div>
            <h3
              className="font-josefin-sans absolute bottom-6 left-6 z-50 w-(--mw) text-2xl leading-[100%] font-light tracking-normal text-white uppercase group-hover:text-black md:left-8 lg:bottom-8 lg:w-(--dw) lg:text-[2rem]"
              style={{
                ["--mw" as any]: project.mobileWidth,
                ["--dw" as any]: project.desktopWidth,
              }}
            >
              {project.name}
            </h3>
          </div>
        ))}
        <Button
          type="button"
          variant={"outline"}
          size={"lg"}
          className="font-alata cursor-pointer rounded-none text-sm leading-[100%] tracking-[5px] text-black uppercase transition-all duration-500 ease-in-out hover:bg-black hover:text-white lg:hidden"
        >
          See all
        </Button>
      </div>
    </Wrapper>
  );
};
export default OurCreations;
