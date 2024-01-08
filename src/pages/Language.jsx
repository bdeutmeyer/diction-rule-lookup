import LetterList from "../components/LetterList"
import SubList from "../components/SubList";
import RuleCard from "../components/RuleCard"
import { useOutletContext } from "react-router-dom"

export default function Language() {
    const [currentLanguage, currentLetter, handleLetterChange, subArray, currentSub, handleSubChange] = useOutletContext();
    const languageHeader = currentLanguage.toUpperCase()
    return (
        <>
            <h3>{languageHeader}</h3>
            <LetterList handleLetterChange={handleLetterChange} />
            <SubList
                currentLanguage={currentLanguage}
                currentLetter={currentLetter}
                subArray={subArray}
                handleSubChange={handleSubChange}
            />
            <RuleCard
                currentSub={currentSub}
            />
        </>
    )
}