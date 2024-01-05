import LetterList from "../components/LetterList"
import RuleCard from "../components/RuleCard"
import { useOutletContext } from "react-router-dom"

export default function French() {
    const [currentLetter, handleLetterChange] = useOutletContext();
    
    return (
        <>
            <h2>French</h2>
            <LetterList handleLetterChange={handleLetterChange} />
            <RuleCard currentLetter={currentLetter}/>
        </>
    )
}