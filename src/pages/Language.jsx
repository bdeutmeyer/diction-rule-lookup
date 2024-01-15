import LetterList from "../components/LetterList"
import SubList from "../components/SubList";
import RuleCard from "../components/RuleCard"
import { useOutletContext } from "react-router-dom"

export default function Language() {
    const [currentLanguage, currentLetter, handleLetterChange, subArray, currentSub, handleSubChange, ruleSet, langHeaderFont, langHeaderClassName] = useOutletContext();

    const langHeaderText = currentLanguage.toUpperCase()

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
                <h3 id={langHeaderFont} className={langHeaderClassName}>{langHeaderText}</h3>
            </div>
            <div>
                <LetterList handleLetterChange={handleLetterChange} />
                {
                    subsExist === true ? <SubList
                    currentLanguage={currentLanguage}
                    currentLetter={currentLetter}
                    ruleSet={ruleSet}
                    subArray={subArray}
                    handleSubChange={handleSubChange}
                /> :
                    <></>
                }
                {
                    subsExist == true && currentSub !== null ? <RuleCard
                    currentLetter={currentLetter}
                    ruleSet={ruleSet}
                    currentSub={currentSub}
                    subArray={subArray}
                /> : <></>
                }
            </div>
            {currentLetter && subsExist === false && currentSub === null ?
                <div >
                    <RuleCard
                        currentLetter={currentLetter}
                        ruleSet={ruleSet}
                        currentSub={currentSub}
                        subArray={subArray}
                    />
                </div> : <></>
            }

        </>


    )
}