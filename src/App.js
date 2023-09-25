import NavbarHeader from './components/Navbar';
import ProgBarComp from './components/ProgressBar';
import DisplayStats from './components/Stats';

export default function App() {
  return (
    <div>
      <NavbarHeader/>
      <DisplayStats/>
      <ProgBarComp/>
    </div>
  );
}
