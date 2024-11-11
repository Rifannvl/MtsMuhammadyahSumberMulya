import NewsAndAnnouncements from "../ui/BeritaPengumuman";
import Faq from "../ui/Faq";
import HeroSection from "../ui/HeroSection";
import SchoolCalendar from "../ui/KalenderSekolah";
import AcademicProgram from "../ui/ProgramAkademik";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AcademicProgram />
      <SchoolCalendar />
      <NewsAndAnnouncements />
      <Faq />
    </div>
  );
}
