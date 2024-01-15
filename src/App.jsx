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

let headerOne;
let headerTwo;
let headerThree;
let ruleSet;
let langHeaderFont;
let langHeaderClassName;
switch (currentLanguage) {
    case 'french':
        headerOne = 'frenchOne';
        headerTwo = 'frenchItTwo';
        headerThree = 'frenchThree';
        ruleSet = frenchRules;
        langHeaderFont = 'frHeader';
        langHeaderClassName = 'langHeader p-3 text-center bg-gradient-to-r from-blue-700 via-zinc-100 to-red-600';
        break;
    case 'german':
        headerOne = 'germanOne';
        headerTwo = 'germanTwo';
        headerThree = 'germanThree';     
        ruleSet = germanRules;
        langHeaderFont = 'grHeader';
        langHeaderClassName = 'langHeader p-3 text-center bg-gradient-to-r from-zinc-950 via-red-500 to-yellow-400';
        break;
    case 'italian':
        headerOne = 'italianOne';
        headerTwo = 'frenchItTwo';
        headerThree = 'italianThree';
        ruleSet = italianRules;
        langHeaderFont = 'itHeader';
        langHeaderClassName = 'langHeader p-3 text-center bg-gradient-to-r from-green-700 via-zinc-100 to-red-600';
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
        context={[currentLanguage, currentLetter, handleLetterChange, subArray, currentSub, handleSubChange, ruleSet, langHeaderFont, langHeaderClassName]}
      />
      <Footer />
      </div>
    </div>
  )
}