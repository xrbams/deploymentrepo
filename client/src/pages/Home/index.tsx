import { useEffect } from 'react';

import AboutSection from '~/components/AboutSection';
import Header from '~/components/Header';
import IntroSection from '~/components/IntroSection';
import FieldSection from '~/components/FieldSection';
import LatestProjectsSection from '~/components/LatestProjectsSection';
import ContactSection from '~/components/ContactSection';

function Home() {
  return (
    <div>
      <Header />
      {/* content */}
      {/* Intro section */}
      <IntroSection />
      {/* About section */}
      <AboutSection />
      {/* Field section */}
      <FieldSection />
      {/* Latest projects section */}
      <LatestProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Home;
