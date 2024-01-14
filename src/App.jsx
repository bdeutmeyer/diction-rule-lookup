import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import frenchRules from './data/frenchRules'
import germanRules from './data/germanRules'
import italianRules from './data/italianRules'
import './App.css'

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('')
  const [currentLetter, setCurrentLetter] = useState('');
  const [currentSub, setCurrentSub] = useState(null);

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
    setCurrentSub(null)
  }

  const handleSubChange = (event) => {
    setCurrentSub(event.target.value)
}

let ruleSet;
let langHeaderFont;
let headerOne;
let headerTwo;
let headerThree;
switch (currentLanguage) {
    case 'french':
        ruleSet = frenchRules;
        langHeaderFont = 'frHeader';
        headerOne = 'frenchOne';
        headerTwo = 'frenchItTwo';
        headerThree = 'frenchThree';
        break;
    case 'german':
        ruleSet = germanRules;
        langHeaderFont = 'grHeader';
        headerOne = 'germanOne';
        headerTwo = 'germanTwo';
        headerThree = 'germanThree';
        break;
    case 'italian':
        ruleSet = italianRules;
        langHeaderFont = 'itHeader';
        headerOne = 'italianOne';
        headerTwo = 'frenchItTwo';
        headerThree = 'italianThree';
        break;
}

  return (
    <div className='bg-cover content'>
      <div className='bg-gray-200/50 content'>
      <Header 
        className="content-center"
        headerOne={headerOne}
        headerTwo={headerTwo}
        headerThree={headerThree}
        />
      <Navbar
        setCurrentLanguage={setCurrentLanguage}
      />
      <Outlet 
        context={[currentLanguage, currentLetter, handleLetterChange, subArray, currentSub, handleSubChange, ruleSet, langHeaderFont]}
      />
      <Footer />
      </div>
    </div>
  )
}