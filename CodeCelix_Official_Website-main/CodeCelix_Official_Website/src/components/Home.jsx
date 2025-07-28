import AboutSection from './AboutSection.jsx';
import ContactFormSection from './ContactFormSection.jsx';
import HeroSection from './HeroSection.jsx';
import Portfolio from './Portfolio.jsx';
import Services from './Services.jsx';
import TeamSection from './TeamSection.jsx';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <Portfolio />
      <TeamSection />
      <ContactFormSection />
    </>
  );
}
