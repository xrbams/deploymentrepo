import { Section } from '~/components/UI';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import styled from 'styled-components';
import classNames from 'classnames';

const CardWrapper = styled.div.attrs((props) => ({
  className: classNames('w-full grid grid-cols-1 gap-4 md:mt-32 md:grid-cols-3', props.className),
}))``;

const ContentWrapper = styled.div.attrs((props) => ({
  className: classNames('w-full flex flex-col justify-center items-center mb-6', props.className),
}))`
  & {
    margin-top: calc(100% / 4);
  }
`;

export default function ContactSection() {
  return (
    <Section id="contact" className="bg-brand/80">
      <div className="max-w-[1440px] mx-auto px-12">
        <div>
          <h6 className="text-lg mb-2 text-white font-medium">Contact Us</h6>
          <h1 className="text-2xl font-semibold text-white">Keep in touch with us</h1>
        </div>
        <CardWrapper>
          <div className="relative flex flex-col justify-center items-center bg-white rounded-sm transition-all first:mt-24 mt-20 md:first:mt-0 md:mt-0">
            <img
              className="absolute w-2/5 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md"
              src="https://pt2-portfolio-tamk.s3.amazonaws.com/petteri_jekunen.jpeg"
              alt="Petteri Jekunen"
            />
            <ContentWrapper>
              <h3 className="w-full text-xl text-brand font-semibold text-center">Petteri Jekunen</h3>
              <h3 className="w-full text-base text-black/70 text-center">Supervising teacher</h3>
              <div className="mt-3">
                <div className="flex ">
                  <MdIcons.MdEmail className="text-xl mr-3 text-brand" />
                  <h3 className="text-sm text-black/70">petteri.jekunen@tuni.fi</h3>
                </div>
                <div className="flex mt-1">
                  <MdIcons.MdContactPhone className="text-xl mr-3 text-brand" />
                  <h3 className="text-sm text-black/70">+358505876777</h3>
                </div>
              </div>
            </ContentWrapper>
          </div>
          <div className="relative flex flex-col justify-center items-center bg-white rounded-sm transition-all first:mt-24 mt-20 md:first:mt-0 md:mt-0">
            <img
              className="absolute w-2/5 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md"
              src="https://pt2-portfolio-tamk.s3.amazonaws.com/petteri_jekunen.jpeg"
              alt="Petteri Jekunen"
            />
            <ContentWrapper>
              <h3 className="w-full text-xl text-brand font-semibold text-center">Petteri Jekunen</h3>
              <h3 className="w-full text-base text-black/70 text-center">Supervising teacher</h3>
              <div className="mt-3">
                <div className="flex ">
                  <MdIcons.MdEmail className="text-xl mr-3 text-brand" />
                  <h3 className="text-sm text-black/70">petteri.jekunen@tuni.fi</h3>
                </div>
                <div className="flex mt-1">
                  <MdIcons.MdContactPhone className="text-xl mr-3 text-brand" />
                  <h3 className="text-sm text-black/70">+358505876777</h3>
                </div>
              </div>
            </ContentWrapper>
          </div>
          <div className="relative flex flex-col justify-center items-center bg-white rounded-sm transition-all first:mt-24 mt-20 md:first:mt-0 md:mt-0">
            <img
              className="absolute w-2/5 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md"
              src="https://pt2-portfolio-tamk.s3.amazonaws.com/petteri_jekunen.jpeg"
              alt="Petteri Jekunen"
            />
            <ContentWrapper>
              <h3 className="w-full text-xl text-brand font-semibold text-center">Petteri Jekunen</h3>
              <h3 className="w-full text-base text-black/70 text-center">Supervising teacher</h3>
              <div className="mt-3">
                <div className="flex ">
                  <MdIcons.MdEmail className="text-xl mr-3 text-brand" />
                  <h3 className="text-sm text-black/70">petteri.jekunen@tuni.fi</h3>
                </div>
                <div className="flex mt-1">
                  <MdIcons.MdContactPhone className="text-xl mr-3 text-brand" />
                  <h3 className="text-sm text-black/70">+358505876777</h3>
                </div>
              </div>
            </ContentWrapper>
          </div>
        </CardWrapper>
      </div>
    </Section>
  );
}
