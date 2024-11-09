import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BaseLayout from "./layout/BaseLayout";

export default function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}
