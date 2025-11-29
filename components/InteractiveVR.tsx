import Image from "next/image"
import Wrapper from "./Wrapper"

const InteractiveVR = () => {
  return (
    <Wrapper as="section" aria-label="Interactive VR" className="py-24 lg:py-40 flex  flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between  lg:items-end">
          <picture>
            <source media="(min-width: 768px)" srcSet="/desktop/image-interactive.jpg" />
            <Image src="/mobile/image-interactive.jpg" alt="Loopstudios Interactive VR" width={654} height={448} className="md:w-[608px] md:h-[284px] lg:w-[731px] lg:h-[500px]  "/>
        </picture>
        <div className="flex flex-col items-center text-center gap-4 md:gap-6 bg-white justify-center w-[327px] md:w-[608px] lg:w-[541px] lg:items-end lg:justify-end lg:text-left  lg:h-[317px] lg:relative lg:right-40 lg:-bottom-1">
            <h2 className="font-josefin-sans text-[2rem] leading-[100%] font-light tracking-normal text-black uppercase md:text-5xl lg:w-[445px]">The leader in interactive VR</h2>
            <p className="font-alata text-[0.9375rem] leading-[165%] font-normal tracking-normal text-black/50 lg:w-[445px]">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      
    </Wrapper>
  )
}
export default InteractiveVR