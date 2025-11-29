import Image from "next/image"
import { Button } from "./ui/button"
import Wrapper from "./Wrapper"

const OUR_CREATIONS_PROJECTS=[
    {
        id:1,
        mobileImage: "/mobile/image-deep-earth.jpg",
        desktopImage:"/desktop/image-deep-earth.jpg",
        name: "Deep earth"
    },
    {
        id:2,
        mobileImage: "/mobile/image-night-arcade.jpg",
        desktopImage:"/desktop/image-night-arcade.jpg",
        name: "Night arcade"
    },
    {
        id:3,
        mobileImage: "/mobile/image-soccer-team.jpg",
        desktopImage:"/desktop/image-soccer-team.jpg",
        name: "Soccer team VR"
    },
    {
        id:4,
        mobileImage: "/mobile/image-grid.jpg",
        desktopImage:"/desktop/image-grid.jpg",
        name: "The grid"
    },
    {
        id:5,
        mobileImage: "/mobile/image-from-above.jpg",
        desktopImage:"/desktop/image-from-above.jpg",
        name: "From up above VR"
    },
    {
        id:6,
        mobileImage: "/mobile/image-pocket-borealis.jpg",
        desktopImage:"/desktop/image-pocket-borealis.jpg",
        name: "Pocket borealis"
    },
    {
        id:7,
        mobileImage: "/mobile/image-curiosity.jpg",
        desktopImage:"/desktop/image-curiosity.jpg",
        name: "The curiosity"
    },
    {
        id:8,
        mobileImage: "/mobile/image-fisheye.jpg",
        desktopImage:"/desktop/image-fisheye.jpg",
        name: "Make it fisheye"
    },
]

const OurCreations = () => {
  return (
    <Wrapper as="section" aria-label="Our Creations" className="gap-12 md:gap-8 lg:gap-20 pb-24 md:pb-21.75 lg:pb-28 flex items-center justify-center lg:justify-between flex-col">
        <div className="flex items-center justify-between w-full">
            <h2 className="font-josefin-sans text-[2rem] leading-[100%] font-light tracking-normal text-black uppercase md:text-5xl ">Our creations See</h2>
            <Button type="button" variant={"outline"} size={"lg"} className="hidden lg:flex uppercase rounded-none font-alata text-black leading-[100%] tracking-[5px] text-sm hover:text-white hover:bg-black duration-500 ease-in-out transition-all">See all</Button>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-4">
            {OUR_CREATIONS_PROJECTS.map(project=>(
                <div key={project.id} className="relative">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={project.desktopImage} />
                        <Image src={project.mobileImage} alt={project.name} width={327} height={120} className="md:w-[608px] md:h-[120px] lg:w-[256px] lg:h-[450px]"/>
                    </picture>
                    <h3 className="font-josefin-sans text-2xl lg:text-[2rem] leading-[100%] font-light tracking-normal text-white uppercase  absolute bottom-6 left-6 md:left-8 lg:bottom-8 max-w-[150px] ">{project.name}</h3>
                </div>
            ))}
        </div>
    </Wrapper>
  )
}
export default OurCreations