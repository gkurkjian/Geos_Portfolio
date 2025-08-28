import About from '../components/About';
import Skills from '../components/skills';
import Projects from '../components/projects'
import Experiences from '../components/experiences'
import Contact from '../components/Contact';


export default function Home() {
  return (
    <>
      <h1>Welcome to My Portfolio</h1>
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </>
  );
}
