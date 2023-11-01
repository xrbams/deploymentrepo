import { Section } from '~/components/UI';
import AboutCard from './AboutCard';

interface AboutInfo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  figure: number;
  figureTitle: string;
}

const AboutInfoList: AboutInfo[] = [
  {
    id: 0,
    title: 'Familiarize student with Finnish working culture',
    description:
      'At Summer Practical Training program, students will have a chance to have a full-time business working hours with assigned projects. Student will be able to have lunch time, daily meetings, assigned tutors, etc.',
    imageUrl:
      'https://www.workinfinland.com/dam/jcr:ac8c7483-0ae8-4d30-b663-e394ef1a4086/BusinessFinland_Tiimityo_asiantuntija_313_Mikko%20T%C3%B6rm%C3%A4nen_Keksi.jpg',
    figure: 300,
    figureTitle: 'Cooperate companies',
  },
  {
    id: 1,
    title: 'Assist students in acquiring fresh skills and gaining experience',
    description:
      'At Summer Practical Training program, students who are unlucky to find a summer internship will be able to acquire and practice new skills obtaining from projects, working team and guidance from tutors.',
    imageUrl: 'https://www.helsinkitimes.fi/images/2023/04/tamk.jpg',
    figure: 20,
    figureTitle: 'Years on ICT fields',
  },
  {
    id: 2,
    title: 'Students get hands-on practices on real-life projects',
    description:
      'At Summer Practical Training program, students will be offered tons of projects that solves real-life cases, whose results will be utilize for schools, cooperated companies, etc.',
    imageUrl:
      'https://www.workinfinland.com/dam/jcr:ac8c7483-0ae8-4d30-b663-e394ef1a4086/BusinessFinland_Tiimityo_asiantuntija_313_Mikko%20T%C3%B6rm%C3%A4nen_Keksi.jpg',
    figure: 100,
    figureTitle: 'Projects of different fields',
  },
];

function AboutSection() {
  return (
    <Section id="about">
      {/* content */}
      <div className="max-w-[1440px] mx-auto px-12">
        <div>
          <h6 className="text-lg mb-2 text-brand font-medium">About Us</h6>
          <h1 className="text-2xl font-semibold">What We Offer</h1>
        </div>
        <div>
          {AboutInfoList.map((info, index) => {
            let imageFirst = false;
            if (index % 2 === 0) {
              imageFirst = true;
            } else {
              imageFirst = false;
            }
            return (
              <AboutCard
                key={info.id}
                imageFirst={imageFirst}
                title={info.title}
                description={info.description}
                imageUrl={info.imageUrl}
                figure={info.figure}
                figureTitle={info.figureTitle}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
