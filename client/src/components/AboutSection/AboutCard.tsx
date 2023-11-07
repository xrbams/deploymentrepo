import classNames from 'classnames';
import styled from 'styled-components';

const GradientBackground = styled.div.attrs((props) => ({
  className: classNames(
    'absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-zinc-500 to-transparent rounded-lg lg:invisible',
    props.className,
  ),
}))``;

interface AboutCardProps {
  imageFirst: boolean;
  title: string;
  description: string;
  imageUrl: string;
  figure: number;
  figureTitle: string;
}

function AboutCard({ imageFirst = false, title, description, imageUrl, figure, figureTitle }: AboutCardProps) {
  return (
    <div className="flex flex-col lg:flex-row py-10">
      <div
        className={classNames(
          'flex-1 flex relative mb-2 md:mb-6 lg:mb-0',
          imageFirst ? 'lg:order-1 lg:mr-4' : 'lg:order-2 lg:ml-4',
        )}
      >
        <div className="relative">
          <img src={imageUrl} alt={title} className="w-full rounded-lg object-cover max-w-[800px]" />
          <GradientBackground />
        </div>
        <div className="absolute bottom-0 left-0 ml-4 mb-4 md:mb-8 lg:static">
          <h2 className="text-lg md:text-3xl lg:text-4xl text-brand font-extrabold">{figure}+</h2>
          <h4 className="text-base md:text-2xl text-white font-semibold lg:text-normaltext lg:text-base">
            {figureTitle}
          </h4>
        </div>
      </div>
      <div className={classNames('flex-1', !imageFirst ? 'lg:order-1 lg:mr-4' : 'lg:order-2 lg:ml-4')}>
        <h2 className="text-lg font-bold text-brand mb-1 md:text-2xl md:mb-3 lg:text-3xl lg:mb-5">{title}</h2>
        <p className="text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
}

export default AboutCard;
