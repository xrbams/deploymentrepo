import styled from 'styled-components';
import * as BsIcons from 'react-icons/bs';
import classNames from 'classnames';
import { Link } from 'react-scroll';

const IntroBackGround = styled.div.attrs((props) => ({
  className: classNames('h-full', props.className),
}))`
  position: relative;
  padding-top: 100vh;
  background: url('https://www.opiskelijantampere.fi/uploaded/section_images/sok/tampereen_opiskelumahdollisuudet/opiskelijan-tampere-opiskelumahdollisuudet-tamk.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;

  @media (max-width: 390px) {
    background-position: center;
  }
`;

const GradientBackground = styled.div.attrs((props) => ({
  className: classNames(
    'absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-zinc-800 to-transparent',
    props.className,
  ),
}))``;

const ScrollDownBtn = styled.div.attrs((props) => ({
  className: classNames(
    'absolute w-full flex justify-center bottom-4 p-2 hover:cursor-pointer text-white text-3xl animate-bounce',
    props.className,
  ),
}))``;

function IntroSection() {
  return (
    <section id="intro" className="relative h-screen md:min-h-[950px] lg:min-h-[800px]">
      {/* background */}
      <IntroBackGround className="relative">
        {/* gradient layer */}
        <GradientBackground />
        {/* content */}
        <div className="max-w-[1440px] absolute top-1/2 lg:-translate-y-1/2 left-0 right-0 mx-auto pl-6 md:pl-12">
          <div className=" w-2/3 md:w-full lg:w-3/4 text-white ">
            <h1 className="md:text-7xl lg:text-8xl font-semibold mb-8 lg:mb-5">Practical Training Program</h1>
            <p className="xss:text-base xs:text-lg md:text-2xl text-[#bebebe] font-light md:w-2/3">
              Welcome to one of the best trainee program for the best starter-kit to real-life experience in ICT field.
            </p>
            <button
              type="button"
              className="px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-4  bg-transparent border-2 border-solid border-white  rounded-lg text-lg md:text-xl lg:text-2xl font-semibold mt-12 hover:bg-brand hover:text-white transition-colors hover:border-transparent"
            >
              Join us !
            </button>
          </div>
        </div>
        <ScrollDownBtn className="">
          <Link offset={-80} to="about">
            <BsIcons.BsChevronDoubleDown className="md:text-4xl lg:text-5xl" />
          </Link>
        </ScrollDownBtn>
      </IntroBackGround>
    </section>
  );
}

export default IntroSection;
