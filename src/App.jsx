import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BaseLayout from "./layout/BaseLayout";
import Profile from "./ui/ProfileSekolah";

export default function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}
