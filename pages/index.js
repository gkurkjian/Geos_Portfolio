// pages/index.js
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import Experiences from '../components/experiences';
import Projects from '../components/projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';


export default function IndexPage() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experiences /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
