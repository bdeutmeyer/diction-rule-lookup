import LetterList from "../components/LetterList"
import RuleCard from "../components/RuleCard"
import { useOutletContext } from "react-router-dom"

export default function German() {
    const [currentLanguage, currentLetter, handleLetterChange] = useOutletContext();
    
    return (
        <>
            <h2>Hello German</h2>
            <LetterList handleLetterChange={handleLetterChange} />
            <RuleCard
            currentLanguage={currentLanguage}
            currentLetter={currentLetter}
            />
        </>
    )
}