import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  const [currentLetter, setCurrentLetter] = useState('A');
  const handleLetterChange = (event) => {
    setCurrentLetter(event.target.value)
  }

  return (
    <>
      <Header />
      <Navigation />
      <Outlet 
        context={[currentLetter, handleLetterChange]}
      />
      <Footer />
    </>
  )
}