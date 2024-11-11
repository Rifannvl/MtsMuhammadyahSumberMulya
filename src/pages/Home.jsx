import NewsAndAnnouncements from "../ui/BeritaPengumuman";
import Faq from "../ui/Faq";
import HeroSection from "../ui/HeroSection";
import SchoolCalendar from "../ui/KalenderSekolah";
import Profile from "../ui/ProfileSekolah";
import AcademicProgram from "../ui/ProgramAkademik";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Profile />
      <AcademicProgram />
      <SchoolCalendar />
      <NewsAndAnnouncements />
      <Faq />
    </div>
  );
}
