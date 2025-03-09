import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
} from "./pages";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col">
      <Router>
        <header className="p-4 text-white">
          <a href="#/" className="text-2xl font-bold">GSAP Animations</a>
        </header>
        <main className="flex-1 p-4 text-white">
          <Routes>
            <Route path="/gsapto" element={<GsapTo />} />
            <Route path="/gsapfrom" element={<GsapFrom />} />
            <Route path="/gsapfromto" element={<GsapFromTo />} />
            <Route path="/gsaptimeline" element={<GsapTimeline />} />
            <Route path="/gsapstagger" element={<GsapStagger />} />
            <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
            <Route path="/gsaptext" element={<GsapText />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
