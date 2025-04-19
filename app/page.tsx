// pages/index.tsx
import HeroSection from '@/components/Hero';
import NavBar from '@/components/Header';
import AboutSection from '@/components/About';
import ServicesSection from '@/components/Services';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
     
      <main>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection/>
      <Footer />
      </main>    
    </div>
  );
}