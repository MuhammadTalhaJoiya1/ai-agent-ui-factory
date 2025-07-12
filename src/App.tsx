import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import PromptBuilder from "./pages/PromptBuilder";
import BrandStyle from "./pages/BrandStyle";
import ContentGenerator from "./pages/ContentGenerator";
import SEOOptimizer from "./pages/SEOOptimizer";
import ImageVideo from "./pages/ImageVideo";
import Voiceover from "./pages/Voiceover";
import History from "./pages/History";
import TeamCollaboration from "./pages/TeamCollaboration";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/prompt-builder" element={<ProtectedRoute><PromptBuilder /></ProtectedRoute>} />
            <Route path="/brand-style" element={<ProtectedRoute><BrandStyle /></ProtectedRoute>} />
            <Route path="/content-generator" element={<ProtectedRoute><ContentGenerator /></ProtectedRoute>} />
            <Route path="/seo-optimizer" element={<ProtectedRoute><SEOOptimizer /></ProtectedRoute>} />
            <Route path="/image-video" element={<ProtectedRoute><ImageVideo /></ProtectedRoute>} />
            <Route path="/voiceover" element={<ProtectedRoute><Voiceover /></ProtectedRoute>} />
            <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
            <Route path="/team-collaboration" element={<ProtectedRoute><TeamCollaboration /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
