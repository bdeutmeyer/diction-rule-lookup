import LetterList from "../components/LetterList"
import SubList from "../components/SubList";
import RuleCard from "../components/RuleCard"
import { useOutletContext } from "react-router-dom"

export default function French() {
    const [currentLanguage, currentLetter, handleLetterChange, subArray, currentSub, handleSubChange] = useOutletContext();

    return (
        <>
            <h2>French</h2>
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