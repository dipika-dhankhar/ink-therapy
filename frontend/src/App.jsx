import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import InkTherapy from './pages/InkTherapy.jsx';
import Ghostwriting from './pages/Ghostwriting.jsx';
import WritingForThinking from './pages/WritingForThinking.jsx';
import Essay from './pages/Essay.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ink-therapy" element={<InkTherapy />} />
        <Route path="ghostwriting" element={<Ghostwriting />} />
        <Route path="writing-for-thinking" element={<WritingForThinking />} />
        <Route path="writing-for-thinking/:slug" element={<Essay />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
