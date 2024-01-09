
import LetterList from "../components/LetterList"
import SubList from "../components/SubList";
import RuleCard from "../components/RuleCard"
import { useOutletContext } from "react-router-dom"

export default function Language() {
    const [currentLanguage, currentLetter, handleLetterChange, subArray, currentSub, handleSubChange, ruleSet] = useOutletContext();

    const languageHeader = currentLanguage.toUpperCase()



    return (
        <>
            <div>
                <h3 className='text-lg'>{languageHeader}</h3>
            </div>
            <div>
                <LetterList handleLetterChange={handleLetterChange} />
                <SubList
                    currentLanguage={currentLanguage}
                    currentLetter={currentLetter}
                    ruleSet={ruleSet}
                    subArray={subArray}
                    handleSubChange={handleSubChange}
                />
            </div>
            <div >
                <RuleCard
                    currentSub={currentSub}
                    subArray={subArray}
                />
            </div>
        </>


    )
}