import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router';
import LogoDark from '/Logo/LogoDark.png';
import LogoLight from '/Logo/LogoLight.png';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header logo={LogoLight} />
      <Outlet />
      <Footer logo={LogoDark} />
    </div>
  );
}

export default App;
