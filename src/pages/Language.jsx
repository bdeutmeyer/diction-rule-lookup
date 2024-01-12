import LetterList from "../components/LetterList"
import SubList from "../components/SubList";
import RuleCard from "../components/RuleCard"
import { useOutletContext } from "react-router-dom"

export default function Language() {
    const [currentLanguage, currentLetter, handleLetterChange, subArray, currentSub, handleSubChange, ruleSet] = useOutletContext();

    const languageHeader = currentLanguage.toUpperCase()

    let subsExist;
    if (currentLetter) {
        let currentLetterIndex = ruleSet.find((index) => index.primary == currentLetter)

        if (currentLetterIndex && currentLetterIndex.sub === null) {
            subsExist = false;
        } else {
            subsExist = true;
        }
    }



    return (
        <>
            <div>
                <h3 className='text-lg'>{languageHeader}</h3>
            </div>
            <div>
                <LetterList handleLetterChange={handleLetterChange} />
                {subsExist === true ? <SubList
                    currentLanguage={currentLanguage}
                    currentLetter={currentLetter}
                    ruleSet={ruleSet}
                    subArray={subArray}
                    handleSubChange={handleSubChange}
                /> :
                    <></>
                }
            </div>
            {currentLetter ?
                <div >
                    <RuleCard
                        currentLetter={currentLetter}
                        ruleSet={ruleSet}
                        currentSub={currentSub}
                        subArray={subArray}
                    />
                </div> :
                <></>
            }

        </>


    )
}