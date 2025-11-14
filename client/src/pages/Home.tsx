import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import NewsSection from '@/components/NewsSection';
import EnrollmentCTA from '@/components/EnrollmentCTA';
import AffiliatedSchools from '@/components/AffiliatedSchools';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <CoursesSection />
      <NewsSection />
      <EnrollmentCTA />
      <AffiliatedSchools />
      <PartnersSection />
      <Footer />
    </div>
  );
}
