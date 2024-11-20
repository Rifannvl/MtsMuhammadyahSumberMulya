import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BaseLayout from "./layout/BaseLayout";
import Profile from "./ui/ProfileSekolah";
import AcademicProgram from "./ui/ProgramAkademik";
import SchoolCalendar from "./ui/KalenderSekolah";
import BeritaPengumuman from "./ui/BeritaPengumuman";

export default function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes future={{ v7_startTransition: true }}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/program" element={<AcademicProgram />} />
          <Route path="/kalender" element={<SchoolCalendar />} />
          <Route path="/pengumuman" element={<BeritaPengumuman />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}
