import './App.css';
import UserCard from './UserCard.tsx';
import Projects from './Projects.tsx';
import About from './About.tsx';
import Footer from './Footer.tsx'
function App() {
  return (
    <div className="mx-auto md:max-w-4/5 lg:max-w-3/5 lg:p-4">
      <UserCard />
      <About />
      <Projects />
      <Footer/>

    </div>
  );
}

export default App;
