import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}