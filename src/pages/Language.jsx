import LetterList from "../components/LetterList"
import SubList from "../components/SubList";
import RuleCard from "../components/RuleCard"
import { useOutletContext } from "react-router-dom"

// Main body of page
export default function Language() {
    const [currentLanguage, currentLetter, handleLetterChange, subArray, currentSub, handleSubChange, ruleSet, langHeaderFont, langHeaderClassName] = useOutletContext();

    const langHeaderText = currentLanguage.toUpperCase()

    // Sets states based on if a letter is in focus, and if that letter has subcategories
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

                {/* Displays subcategory instructions */}
                { subsExist && currentSub == null ?     <h2 className="text-center text-lg p-3 font-bold">Choose a letter group to see its rules.</h2> : <></>}

                {/* Displays subcategory buttons if there are any */}
                {
                    subsExist === true ?
                    <SubList
                    currentLanguage={currentLanguage}
                    currentLetter={currentLetter}
                    ruleSet={ruleSet}
                    subArray={subArray}
                    handleSubChange={handleSubChange}
                /> : <></>
                }
                {/* Displays RuleCard if there are subcategories AND one is in focus */}
                {
                    subsExist == true && currentSub !== null ? <RuleCard
                    currentLetter={currentLetter}
                    ruleSet={ruleSet}
                    currentSub={currentSub}
                    subArray={subArray}
                /> : <></>
                }
            </div>
            {/* Displays RuleCard immediately if no subcategories exist */}
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
            {/* Initial welcome/instructions */}
            {currentLetter === null ? <h2 className="text-center text-lg p-3 font-bold">Choose a letter to see its rules.</h2> : <></>}

        </>


    )
}