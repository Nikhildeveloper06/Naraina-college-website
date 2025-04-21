import { Toaster } from "@/components/ui/sonner"; // Ensure correct import
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Apply from "./pages/Apply";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import NotFound from "./pages/NotFound";
import Courses from "./pages/course"; // Ensure correct filename case
import Contact from "./pages/contact"; // Ensure correct filename case
import CampusTour from "./pages/campus"; // Ensure correct filename case
import Signup from "./pages/Signup";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campus" element={<CampusTour />} />
          <Route path="/signup" element={<Signup />} />
         


          {/* Ensure NotFound is last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
