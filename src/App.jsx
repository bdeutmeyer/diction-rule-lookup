import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('')
  const [currentLetter, setCurrentLetter] = useState('');
  const [currentSub, setCurrentSub] = useState('');

  // Empty array for letter sublist population
  let subArray = []

  // Sets language using params on page load (no click event needed)
  useEffect(() => {
    const endPoint = window.location.pathname;
    const paramsLanguage = endPoint.substring(1)

    if (paramsLanguage) {
      setCurrentLanguage(paramsLanguage);
    }
  }, []);

  //Click event handler for letter list
  const handleLetterChange = (event) => {
    setCurrentLetter(event.target.value);
    subArray = []
  }

  const handleSubChange = (event) => {
    setCurrentSub(event.target.value)
}
console.log(currentSub)
  
  return (
    <>
      <Header />
      <Navigation
        setCurrentLanguage={setCurrentLanguage}
      />
      <Outlet 
        context={[currentLanguage, currentLetter, handleLetterChange, subArray, currentSub, handleSubChange]}
      />
      <Footer />
    </>
  )
}