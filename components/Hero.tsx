import Wrapper from "./Wrapper";

const Hero = () => {
  return (
    <Wrapper
      as="section"
      role="region"
      aria-label="Hero"
      className="flex items-center justify-center pt-35 lg:items-start lg:justify-start"
    >
      <h1 className="font-josefin-sans max-w-[327px] border border-white p-6 text-[2.5rem] leading-[100%] font-light tracking-normal text-white uppercase md:max-w-[608px] md:text-7xl lg:max-w-[650px]">
        Immersive experiences that deliver
      </h1>
    </Wrapper>
  );
};
export default Hero;
